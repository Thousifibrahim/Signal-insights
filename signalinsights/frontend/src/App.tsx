import { useState, useEffect } from 'react'
import { Car, Upload, BarChart3, CheckCircle, AlertCircle, Mail, Github } from 'lucide-react'
import FileUpload from './components/FileUpload/FileUpload'
import Footer from './components/Footer/Footer'
import DeveloperPopup from './components/DeveloperPopup/DeveloperPopup'
import type { ProcessedResult } from './types/common'
import './App.css'

function App() {
  const [result, setResult] = useState<ProcessedResult | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showDeveloperPopup, setShowDeveloperPopup] = useState(false);

  // Check if popup should be shown (once per day)
  useEffect(() => {
    const checkPopupDisplay = () => {
      const lastShown = localStorage.getItem('developerPopupLastShown');
      const today = new Date().toDateString();
      
      if (!lastShown || lastShown !== today) {
        // Show popup after a short delay for better UX
        setTimeout(() => {
          setShowDeveloperPopup(true);
        }, 2000);
      }
    };
    
    checkPopupDisplay();
  }, []);

  const handlePopupClose = () => {
    setShowDeveloperPopup(false);
    // Store today's date to prevent showing again today
    localStorage.setItem('developerPopupLastShown', new Date().toDateString());
  };

  const handleProcessingStart = () => {
    setIsProcessing(true);
  };

  const handleProcessed = (processedResult: ProcessedResult) => {
    setResult(processedResult);
    setIsProcessing(false);
  };

  const handleProcessingError = () => {
    setIsProcessing(false);
  };

  const handleContactSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;
    
    // Create mailto link
    const mailtoLink = `mailto:ahilxdesigns@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <div className="app-container">
      {/* Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo-section">
            <Car className="logo-icon" />
            <h1 className="logo-text">Signal Insight</h1>
          </div>
          <nav className="nav-links">
            <a href="#features" className="nav-link">Features</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h2 className="hero-title">A Vehicle Detection & Tracking</h2>
          <p className="hero-subtitle">
            Upload images or videos to detect and count vehicles using state-of-the-art AI technology
          </p>
          <div className="stats-grid">
            <div className="stat-card">
              <BarChart3 className="stat-icon" />
              <div className="stat-number">99%</div>
              <div className="stat-label">Accuracy</div>
            </div>
            <div className="stat-card">
              <Upload className="stat-icon" />
              <div className="stat-number">5sec</div>
              <div className="stat-label">Processing</div>
            </div>
            <div className="stat-card">
              <CheckCircle className="stat-icon" />
              <div className="stat-number">24/7</div>
              <div className="stat-label">Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="main-content">
        <div className="content-container">
          <div className="upload-section">
            <h3 className="section-title">Upload Media for Analysis</h3>
            <p className="section-description">
              Supported formats: Images (JPEG, PNG) and Videos (MP4, AVI, MOV)
            </p>
            <FileUpload 
              onProcessed={handleProcessed}
              onProcessingStart={handleProcessingStart}
              onProcessingError={handleProcessingError}
            />
            
            {isProcessing && (
              <div className="processing-indicator">
                <div className="spinner"></div>
                <p>Analyzing your media...</p>
              </div>
            )}
          </div>

          {result && (
            <div className="results-section">
              <div className="results-header">
                <CheckCircle className="success-icon" />
                <h3>Analysis Complete</h3>
              </div>
              
              <div className="results-summary">
                <div className="summary-card">
                  <div className="summary-number">{result.vehicleCount}</div>
                  <div className="summary-label">Vehicles Detected</div>
                </div>
              </div>

              {result.vehicleNumbers && result.vehicleNumbers.length > 0 && (
                <div className="vehicles-list">
                  <h4>Detected Vehicles</h4>
                  <div className="vehicles-grid">
                    {result.vehicleNumbers.map((number, index) => (
                      <div key={index} className="vehicle-card">
                        <Car className="vehicle-icon" />
                        <div className="vehicle-info">
                          <div className="vehicle-number">Vehicle #{index + 1}</div>
                          <div className="vehicle-id">{number}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="features-container">
          <h3 className="features-title">Why Choose Our System?</h3>
          <div className="features-grid">
            <div className="feature-card">
              <Car className="feature-icon" />
              <h4>Multi-Vehicle Detection</h4>
              <p>Accurately detect and count multiple vehicles in a single frame</p>
            </div>
            <div className="feature-card">
              <BarChart3 className="feature-icon" />
              <h4>Real-time Analysis</h4>
              <p>Fast processing with detailed analytics and reporting</p>
            </div>
            <div className="feature-card">
              <CheckCircle className="feature-icon" />
              <h4>High Accuracy</h4>
              <p>Advanced AI algorithms ensure precise vehicle identification</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-content">
            <div className="about-text">
              <h3 className="about-title">About Signal Insight </h3>
              <p className="about-description">
                Traffic Tracking System is a cutting-edge solution that leverages advanced computer vision 
                and machine learning technologies to provide accurate vehicle detection and counting capabilities.
              </p>
              <p className="about-description">
                Built with modern web technologies including React, FastAPI, and YOLOv8, our system offers 
                real-time processing of images and videos with exceptional accuracy and performance.
              </p>
              <div className="about-features">
                <div className="about-feature">
                  <CheckCircle className="about-feature-icon" />
                  <span>State-of-the-art YOLOv8 model</span>
                </div>
                <div className="about-feature">
                  <CheckCircle className="about-feature-icon" />
                  <span>Real-time processing capabilities</span>
                </div>
                <div className="about-feature">
                  <CheckCircle className="about-feature-icon" />
                  <span>Support for multiple file formats</span>
                </div>
                <div className="about-feature">
                  <CheckCircle className="about-feature-icon" />
                  <span>Responsive web interface</span>
                </div>
              </div>
            </div>
            <div className="about-stats">
              <div className="about-stat">
                <div className="about-stat-number">99%</div>
                <div className="about-stat-label">Detection Accuracy</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">5s</div>
                <div className="about-stat-label">Average Processing</div>
              </div>
              <div className="about-stat">
                <div className="about-stat-number">24/7</div>
                <div className="about-stat-label">System Availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="contact-container">
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-title">Get In Touch</h3>
              <p className="contact-description">
                Have questions about our Traffic Tracking System? We'd love to hear from you. 
                Get in touch and we'll get back to you as soon as possible.
              </p>
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="contact-method-icon">
                    <Mail className="contact-icon" />
                  </div>
                  <div className="contact-method-info">
                    <h4>Email</h4>
                    <a href="mailto:ahilxdesigns@gmail.com">ahilxdesigns@gmail.com</a>
                  </div>
                </div>
           {/* Include */}
              </div>
            </div>
            <div className="contact-form">
              <h4>Send a Message</h4>
              <form className="contact-form-content" onSubmit={handleContactSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input type="text" id="name" name="name" required />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" name="email" required />
                </div>
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input type="text" id="subject" name="subject" required />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message" rows={5} required></textarea>
                </div>
                <button type="submit" className="contact-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      {/* Developer Credit Popup */}
      <DeveloperPopup 
        isOpen={showDeveloperPopup} 
        onClose={handlePopupClose} 
      />
    </div>
  )
}

export default App
