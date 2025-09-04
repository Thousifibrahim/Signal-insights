# Contributing to Traffic Tracking System 🤝

First off, thank you for considering contributing to Signal insights System! It's people like you that make this project great.

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How Can I Contribute?](#how-can-i-contribute)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Submitting Changes](#submitting-changes)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

## Code of Conduct

This project and everyone participating in it is governed by our Code of Conduct. By participating, you are expected to uphold this code.

## Getting Started

### Prerequisites

- Python 3.12+
- Node.js 16.0+
- Git
- Basic knowledge of React/TypeScript and Python/FastAPI

### Development Setup

1. **Fork the repository**
   ```bash
   git clone 
   cd Traffic-Tracking-System
   ```

2. **Set up the backend**
   ```bash
   cd traffic-tracking-system/backend
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   pip install -r requirements.txt
   ```

3. **Set up the frontend**
   ```bash
   cd traffic-tracking-system/frontend
   npm install
   ```

4. **Start development servers**
   ```bash
   # Backend (in one terminal)
   cd traffic-tracking-system/backend
   python app.py

   # Frontend (in another terminal)
   cd traffic-tracking-system/frontend
   npm run dev
   ```

## How Can I Contribute?

### 🐛 Reporting Bugs

Before creating bug reports, please check the existing issues to avoid duplicates.

**When submitting a bug report, include:**
- A clear and descriptive title
- Exact steps to reproduce the problem
- Expected vs actual behavior
- Screenshots if applicable
- Environment details (OS, Python version, Node.js version)
- Error messages and logs

### 💡 Suggesting Features

Feature suggestions are welcome! Please:
- Use a clear and descriptive title
- Provide a detailed description of the proposed feature
- Explain why this feature would be useful
- Consider implementation challenges

### 🔧 Code Contributions

#### Backend (Python/FastAPI)
- **AI/ML improvements**: Better YOLO models, OCR accuracy, tracking algorithms
- **API enhancements**: New endpoints, better error handling, performance optimization
- **File handling**: Support for new formats, compression, batch processing
- **Documentation**: API docs, code comments, type hints

#### Frontend (React/TypeScript)
- **UI/UX improvements**: Better design, responsiveness, accessibility
- **New features**: File management, result visualization, settings panels
- **Performance**: Code splitting, lazy loading, optimization
- **Mobile support**: Better mobile experience, PWA features

## Development Standards

### Python Code Style
- Follow **PEP 8** guidelines
- Use **type hints** for all functions
- Add **docstrings** for modules, classes, and functions
- Maximum line length: **88 characters** (Black formatter)

```python
def process_image(image_path: Path, confidence: float = 0.5) -> DetectionResult:
    """
    Process an image for vehicle detection.
    
    Args:
        image_path: Path to the image file
        confidence: Detection confidence threshold (0.0-1.0)
        
    Returns:
        DetectionResult containing vehicle counts and plates
        
    Raises:
        FileNotFoundError: If image file doesn't exist
        ValueError: If confidence is not between 0.0 and 1.0
    """
    # Implementation here
```

### TypeScript/React Code Style
- Use **TypeScript** for all new components
- Follow **React Hooks** patterns
- Use **functional components** over class components
- Implement **proper error boundaries**

```typescript
interface ProcessResultProps {
  result: ProcessedResult;
  onReset: () => void;
}

const ProcessResult: React.FC<ProcessResultProps> = ({ result, onReset }) => {
  // Component implementation
};
```

### Commit Message Convention

Use the **Conventional Commits** specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation changes
- `style`: Code style changes (formatting, missing semicolons, etc.)
- `refactor`: Code refactoring
- `test`: Adding or modifying tests
- `chore`: Maintenance tasks

**Examples:**
```
feat(api): add batch processing endpoint
fix(ui): resolve mobile upload button styling
docs(readme): update installation instructions
refactor(detector): improve YOLO model loading
```

## Submitting Changes

### Pull Request Process

1. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes**
   - Write tests for new functionality
   - Update documentation if needed
   - Ensure code follows style guidelines

3. **Test your changes**
   ```bash
   # Backend tests
   cd traffic-tracking-system/backend
   python -m pytest

   # Frontend tests
   cd traffic-tracking-system/frontend
   npm test
   ```

4. **Commit your changes**
   ```bash
   git add .
   git commit -m "feat: add amazing feature"
   ```

5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```

6. **Create a Pull Request**
   - Use a clear title and description
   - Reference any related issues
   - Include screenshots for UI changes
   - Ensure all checks pass

### Pull Request Checklist

- [ ] Code follows the project's style guidelines
- [ ] Tests have been added/updated for new functionality
- [ ] Documentation has been updated if necessary
- [ ] All existing tests pass
- [ ] The PR has a clear title and description
- [ ] Screenshots included for UI changes
- [ ] Related issues are referenced

## Testing

### Backend Testing
```bash
cd traffic-tracking-system/backend
python -m pytest tests/ -v
python -m pytest tests/ --cov=. --cov-report=html
```

### Frontend Testing
```bash
cd traffic-tracking-system/frontend
npm test
npm run test:coverage
```

### Integration Testing
Test the full system with real files:
1. Start both servers
2. Upload various file formats
3. Verify processing results
4. Check error handling

## Documentation

### API Documentation
- Update OpenAPI/Swagger docs for new endpoints
- Include request/response examples
- Document error codes and messages

### Code Documentation
- Add docstrings to all functions
- Include type hints
- Comment complex algorithms
- Update README for new features

## Community and Support

### Getting Help
- 🐙 **GitHub Issues**: For bug reports and feature requests

### Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors graph

## License

By contributing, you agree that your contributions will be licensed under the MIT License.

---

**Thank you for contributing to Traffic Tracking System! 🚗✨**
