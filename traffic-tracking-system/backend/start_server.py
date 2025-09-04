#!/usr/bin/env python3
"""
Startup script for the Traffic Tracking System backend.
This script ensures proper environment setup and starts the FastAPI server.
"""
import sys
import os
from pathlib import Path

# Add the backend directory to Python path
backend_dir = Path(__file__).resolve().parent
sys.path.insert(0, str(backend_dir))

# Change working directory to backend
os.chdir(backend_dir)

print("🚀 Starting Traffic Tracking System Backend...")
print(f"📁 Working directory: {backend_dir}")
print(f"🐍 Python path: {sys.executable}")

try:
    # Import and run the FastAPI app
    from app import app
    import uvicorn
    
    print("✅ FastAPI app imported successfully")
    print("🌐 Starting server on http://0.0.0.0:5000")
    
    uvicorn.run(
        app, 
        host="0.0.0.0", 
        port=5000,
        reload=True,
        log_level="info"
    )
    
except ImportError as e:
    print(f"❌ Import error: {e}")
    print("💡 Make sure all dependencies are installed:")
    print("   pip install fastapi uvicorn ultralytics opencv-python supervision rapidocr-onnxruntime")
    sys.exit(1)
    
except Exception as e:
    print(f"❌ Startup error: {e}")
    sys.exit(1)
