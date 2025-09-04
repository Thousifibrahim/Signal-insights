"""
Defining API surface the React App aka my frontend will hit :D (this is the 5th time I am doing this)
"""
from fastapi import APIRouter, UploadFile, File, HTTPException
from pydantic import BaseModel
import os
import logging
import traceback

# Setup logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

try:
    from utils.file_handler import save_upload
    from models.detector import TrafficAnalyzer
    logger.info("✅ Successfully imported utilities and models")
except ImportError as e:
    logger.error(f"❌ Failed to import dependencies: {e}")
    raise

router = APIRouter()

# Initialize analyzer with error handling
try:
    analyzer = TrafficAnalyzer()  # load once
    logger.info("✅ TrafficAnalyzer initialized successfully")
except Exception as e:
    logger.error(f"❌ Failed to initialize TrafficAnalyzer: {e}")
    analyzer = None

class ImageResponse(BaseModel):
    counts: dict
    plates: list

class VideoResponse(BaseModel):
    total_counts: dict
    per_class_counts: dict
    plates: list

class ProcessResponse(BaseModel):
    vehicleCount: int
    vehicleNumbers: list

@router.post("/process", response_model=ProcessResponse)
async def process_media(file: UploadFile = File(...)):
    """
    Unified endpoint that processes both images and videos
    """
    try:
        logger.info(f"Processing file: {file.filename}")
        
        # Check if analyzer is available
        if analyzer is None:
            raise HTTPException(
                status_code=503, 
                detail="AI models not loaded. Please check server logs and try again."
            )
        
        # Validate file
        if not file.filename:
            raise HTTPException(status_code=400, detail="No filename provided")
            
        # Determine file type
        file_ext = os.path.splitext(file.filename)[1].lower()
        logger.info(f"File extension: {file_ext}")
        
        if file_ext in ['.jpg', '.jpeg', '.png', '.bmp', '.tiff', '.tif', '.jfif', '.webp', '.gif']:
            # Process as image
            logger.info("Processing as image")
            path = save_upload(file, "image")
            res = analyzer.analyze_image(path)
            
            return ProcessResponse(
                vehicleCount=sum(res.counts.values()),
                vehicleNumbers=[p.text for p in res.plates if p.text]
            )
            
        elif file_ext in ['.mp4', '.avi', '.mov', '.mkv', '.webm', '.flv', '.wmv']:
            # Process as video
            logger.info("Processing as video")
            path = save_upload(file, "video")
            res = analyzer.analyze_video(path)
            
            return ProcessResponse(
                vehicleCount=sum(res.total_counts.values()),
                vehicleNumbers=[p.text for p in res.unique_plates if p.text]
            )
            
        else:
            raise HTTPException(
                status_code=400, 
                detail=f"Unsupported file format: {file_ext}. Supported formats: Images (jpg, jpeg, png, bmp, tiff, tif, jfif, webp, gif), Videos (mp4, avi, mov, mkv, webm, flv, wmv)"
            )
            
    except HTTPException:
        # Re-raise HTTP exceptions
        raise
    except Exception as e:
        logger.error(f"Processing failed: {str(e)}")
        logger.error(f"Traceback: {traceback.format_exc()}")
        raise HTTPException(status_code=500, detail=f"Processing failed: {str(e)}")

# Add a test endpoint
@router.get("/test")
async def test_endpoint():
    """Test endpoint to check if the API is working"""
    return {
        "status": "ok",
        "message": "API is working",
        "analyzer_loaded": analyzer is not None
    }

@router.post("/analyze/image", response_model=ImageResponse)
async def analyze_image(file: UploadFile = File(...)):
    path = save_upload(file, "image")
    res = analyzer.analyze_image(path)
    return {
        "counts": res.counts,
        "plates": [{"text": p.text, "score": p.score, "box": p.box} for p in res.plates],
    }

@router.post("/analyze/video", response_model=VideoResponse)
async def analyze_video(file: UploadFile = File(...)):
    path = save_upload(file, "video")
    res = analyzer.analyze_video(path)
    return {
        "total_counts": res.total_counts,
        "per_class_counts": res.per_class_counts,
        "plates": [{"text": p.text, "score": p.score, "box": p.box} for p in res.unique_plates],
    }
