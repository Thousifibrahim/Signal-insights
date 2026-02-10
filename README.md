<div align="center">

![Traffic Tracking System](https://img.shields.io/badge/Traffic-Tracking%20System-blue?style=for-the-badge&logo=car&logoColor=white)

[![Python](https://img.shields.io/badge/Python-3.12+-blue?style=flat-square&logo=python&logoColor=white)](https://python.org)
[![FastAPI](https://img.shields.io/badge/FastAPI-0.111+-green?style=flat-square&logo=fastapi&logoColor=white)](https://fastapi.tiangolo.com)
[![React](https://img.shields.io/badge/React-18.2+-blue?style=flat-square&logo=react&logoColor=white)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript&logoColor=white)](https://typescriptlang.org)
[![YOLO](https://img.shields.io/badge/YOLO-v8-orange?style=flat-square&logo=pytorch&logoColor=white)](https://ultralytics.com)

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=flat-square)](https://github.com/thousif-ibrahim/Traffic-Tracking-System/graphs/commit-activity)

</div>

# Signal Insights System

## Table of Contents

- [🎯 Overview](#-overview)
- [✨ Features](#-features)
- [🛠️ Tech Stack](#️-tech-stack)
- [⚙️ Installation](#️-installation)
- [🚀 Usage](#-usage)
- [📖 API Documentation](#api-documentation)
- [📁 Project Structure](#-project-structure)
- [🤝 Contributing](#-contributing)
- [📄 License](#-license)
- [📧 Contact](#-contact)

#
## 🎯 Overview

An advanced **AI-powered Traffic Tracking System** that analyzes images and videos to detect vehicles, count traffic, and extract license plate information using state-of-the-art computer vision models.



### Key Capabilities
- **Vehicle Detection**: Identifies cars, trucks, buses, motorcycles, and other vehicles
- **Traffic Counting**: Provides accurate vehicle counts and classification
- **License Plate Recognition**: Extracts and reads license plate text using OCR
- **Video Analysis**: Processes video files with frame-by-frame tracking
- **Image Processing**: Instant analysis of traffic images
- **Web Interface**: Modern, responsive React-based dashboard
#
## ✨ Features

### Multi-Format Support
- **Images**: JPG, JPEG, PNG, BMP, TIFF, JFIF, WebP, GIF
- **Videos**: MP4, AVI, MOV, MKV, WebM, FLV, WMV
- **Max File Size**: 100MB per upload

### AI-Powered Analysis
- **YOLO v8**: State-of-the-art object detection
- **RapidOCR**: Fast and accurate text recognition
- **ByteTrack**: Advanced multi-object tracking
- **Supervision**: Computer vision utilities

### Modern UI/UX
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Drag & Drop**: Intuitive file upload interface
- **Real-time Processing**: Live progress indicators
- **Dark Theme**: Professional and eye-friendly design

### Developer Features
- **RESTful API**: FastAPI with automatic documentation
- **Type Safety**: Full TypeScript support
- **Error Handling**: Comprehensive error management
- **Logging**: Detailed processing logs
- **CORS Support**: Cross-origin resource sharing
#
## 🛠️ Tech Stack

### Backend
![Python](https://img.shields.io/badge/Python-FFD43B?style=for-the-badge&logo=python&logoColor=blue)
![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)
![OpenCV](https://img.shields.io/badge/opencv-%23white.svg?style=for-the-badge&logo=opencv&logoColor=white)

- **Framework**: FastAPI 0.111+
- **Computer Vision**: OpenCV, Ultralytics YOLO v8
- **OCR Engine**: RapidOCR with ONNX Runtime
- **Object Tracking**: Supervision, ByteTrack
- **Image Processing**: NumPy, PIL

### Frontend
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)

- **Framework**: React 18.2+ with TypeScript
- **Build Tool**: Vite
- **UI Library**: Lucide React Icons
- **File Upload**: React Dropzone
- **HTTP Client**: Axios
- **Styling**: CSS3 with modern features
#
## ⚙️ Installation

### Prerequisites
- **Python**: 3.12 or higher
- **Node.js**: 16.0 or higher
- **npm**: 8.0 or higher

### Clone Repository
```bash
git clone [https://github.com/thousif-ibrahim/Traffic-Tracking-System.git](https://github.com/thousif-ibrahim/Traffic-Tracking-System.git)
cd Traffic-Tracking-System

```

### Backend Setup

```bash
# Navigate to backend directory
cd traffic-tracking-system/backend

# Create virtual environment
python -m venv venv

# Activate virtual environment
# On Windows:
venv\Scripts\activate
# On macOS/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Start the backend server
python app.py

```

The backend will be available at `http://localhost:5000`

### Frontend Setup

```bash
# Navigate to frontend directory
cd traffic-tracking-system/frontend

# Install dependencies
npm install

# Start the development server
npm run dev

```

The frontend will be available at `http://localhost:5173`
#
## 🚀 Usage

### Quick Start

1. **Start both servers** (backend on port 5000, frontend on port 5173)
2. **Open your browser** and navigate to `http://localhost:5173`
3. **Upload a file** by dragging and dropping or clicking the upload area
4. **View results** with vehicle counts and license plate information

### API Usage

```python
import requests

# Upload and process an image
files = {'file': open('traffic_image.jpg', 'rb')}
response = requests.post('http://localhost:5000/api/process', files=files)
result = response.json()

print(f"Vehicle Count: {result['vehicleCount']}")
print(f"License Plates: {result['vehicleNumbers']}")

```

### Supported Operations

* **Image Analysis**: Upload `.jpg`, `.png`, or other image formats
* **Video Processing**: Upload `.mp4`, `.avi`, or other video formats
* **Batch Processing**: Process multiple files sequentially
* **Real-time Monitoring**: Monitor processing status and results

## API Documentation

### Endpoints

#### `POST /api/process`

Process an image or video file for vehicle detection and license plate recognition.

**Request:**

* **Content-Type**: `multipart/form-data`
* **Body**: File upload

**Response:**

```json
{
  "vehicleCount": 15,
  "vehicleNumbers": ["ABC123", "XYZ789", "DEF456"]
}

```

#### `GET /api/test`

Test endpoint to verify API functionality.

#### `GET /health`

Health check endpoint.

#### `GET /docs`

Interactive API documentation (Swagger UI).

### Error Handling

* **400 Bad Request**: Invalid file format or missing file
* **500 Internal Server Error**: Processing failure
* **503 Service Unavailable**: AI models not loaded

## 📁 Project Structure

```
Traffic-Tracking-System/
├── 📂 traffic-tracking-system/
│   ├── 📂 backend/
│   │   ├── 📂 api/
│   │   │   ├── __init__.py
│   │   │   └── routes.py          # API endpoints
│   │   ├── 📂 models/
│   │   │   ├── __init__.py
│   │   │   └── detector.py        # YOLO & OCR models
│   │   ├── 📂 utils/
│   │   │   ├── __init__.py
│   │   │   └── file_handler.py    # File processing utilities
│   │   ├── app.py                 # FastAPI application
│   │   ├── config.py              # Configuration settings
│   │   ├── requirements.txt       # Python dependencies
│   │   └── start.bat              # Windows startup script
│   └── 📂 frontend/
│       ├── 📂 src/
│       │   ├── 📂 components/
│       │   │   ├── FileUpload/    # File upload component
│       │   │   ├── DeveloperPopup/ # Developer credits
│       │   │   └── Footer/        # Footer component
│       │   ├── 📂 types/
│       │   │   └── common.ts      # TypeScript types
│       │   ├── App.tsx            # Main application
│       │   └── main.tsx           # Entry point
│       ├── package.json           # Node.js dependencies
│       └── vite.config.ts         # Vite configuration
├── 📂 static/uploads/             # Uploaded files storage
├── README.md                      # Project documentation
├── LICENSE                        # MIT License
└── .gitignore                     # Git ignore rules

```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Commit your changes**: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

* Follow **PEP 8** for Python code
* Use **ESLint** and **Prettier** for TypeScript/React
* Add **tests** for new features
* Update **documentation** as needed

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](https://www.google.com/search?q=LICENSE) file for details.

```
MIT License

Copyright (c) 2025 Thousif Ibrahim

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

```

## 📧 Contact

### Developer

**Thousif Ibrahim**

* 💬 **Discord**: thousif-ibrahim
* 📧 **Email**: contact.thousif+github@gmail.com
* 🐙 **GitHub**: [@thousif-dev](https://github.com/Thousifibrahim)

### Project Links

* **Repository**: [GitHub](https://github.com/smdspace-dev/Signal-insights.git)
* **Issues**: [Bug Reports & Feature Requests](https://github.com/smdspace-dev/Signal-insights.git/issues)
* **Discussions**: [Community Discussions](https://github.com/smdspace-dev/Signal-insights.git/discussions)

---

<div align="center">

```

Open to Opportuinities
```

</div>
