import { Github, Mail, FileText, Heart } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-brand">
            <h4>Signal Insight </h4>
            <p>A Vehicle Detection System</p>
          </div>
        </div>

        <div className="footer-center">
          <div className="footer-links">
            <a href="#features" className="footer-link">Features</a>
            <a href="#about" className="footer-link">About</a>
            <a href="#contact" className="footer-link">Contact</a>
            <a href="#privacy" className="footer-link">Privacy</a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-social">
            <a
              href="https://github.com/smdspace-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-icon"
              title="GitHub Repository"
            >
              <Github size={20} />
            </a>
            <a 
              href="mailto:ahilxdesings@gmail.com" 
              className="footer-icon"
              title="Contact Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/smdspace-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-icon"
              title="License"
            >
              <FileText size={20} />
            </a>
            <a 
              href="https://github.com/smdspace-dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="footer-icon sponsor"
              title="Sponsor"
            >
              <Heart size={20} />
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Smdspace-dev. All rights reserved.</p>
        <p>Open source</p>
      </div>
    </footer>
  )
}

export default Footer