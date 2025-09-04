# backend/app.py
import sys
import os
from pathlib import Path
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

# Ensure proper path setup
backend_dir = Path(__file__).resolve().parent
sys.path.insert(0, str(backend_dir))
os.chdir(backend_dir)

try:
    from api.routes import router
    print("✅ Successfully imported routes")
except ImportError as e:
    print(f"❌ Failed to import routes: {e}")
    raise

app = FastAPI(title="Traffic Tracking System")

# Allow your Vercel frontend to call this API
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/health")
def health():
    return {"ok": True, "message": "Traffic Tracking System is running"}

@app.get("/")
def root():
    return {"message": "Traffic Tracking System API", "docs": "/docs"}

app.include_router(router, prefix="/api")

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=5000)
