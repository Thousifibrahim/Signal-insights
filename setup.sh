#!/bin/bash

# Traffic Tracking System - Setup Script
# This script sets up the development environment for both backend and frontend

echo "🚗 Traffic Tracking System - Development Setup"
echo "=============================================="

# Check Python version
echo "📋 Checking Python version..."
python_version=$(python --version 2>&1)
if [[ $python_version == *"Python 3."* ]]; then
    echo "✅ Python found: $python_version"
else
    echo "❌ Python 3.x is required but not found"
    exit 1
fi

# Check Node.js version
echo "📋 Checking Node.js version..."
node_version=$(node --version 2>&1)
if [[ $node_version == *"v"* ]]; then
    echo "✅ Node.js found: $node_version"
else
    echo "❌ Node.js is required but not found"
    exit 1
fi

echo ""
echo "🔧 Setting up Backend..."
echo "========================"

# Navigate to backend directory
cd traffic-tracking-system/backend

# Create virtual environment if it doesn't exist
if [ ! -d "venv" ]; then
    echo "📦 Creating Python virtual environment..."
    python -m venv venv
    echo "✅ Virtual environment created"
else
    echo "✅ Virtual environment already exists"
fi

# Activate virtual environment
echo "🔄 Activating virtual environment..."
source venv/bin/activate

# Install Python dependencies
echo "📦 Installing Python dependencies..."
pip install -r requirements.txt
echo "✅ Backend dependencies installed"

echo ""
echo "🎨 Setting up Frontend..."
echo "========================="

# Navigate to frontend directory
cd ../frontend

# Install Node.js dependencies
echo "📦 Installing Node.js dependencies..."
npm install
echo "✅ Frontend dependencies installed"

echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "To start the development servers:"
echo ""
echo "🐍 Backend:"
echo "   cd traffic-tracking-system/backend"
echo "   source venv/bin/activate  # On Windows: venv\\Scripts\\activate"
echo "   python app.py"
echo ""
echo "⚛️  Frontend:"
echo "   cd traffic-tracking-system/frontend"
echo "   npm run dev"
echo ""
echo "🌐 URLs:"
echo "   Backend:  http://localhost:5000"
echo "   Frontend: http://localhost:5173"
echo "   API Docs: http://localhost:5000/docs"
echo ""
echo "📚 For more information, see README.md"
echo ""
echo "Happy coding! 🚀"
