import React from 'react';
import { X, Linkedin, MessageCircle } from 'lucide-react';
import './DeveloperPopup.css';

interface DeveloperPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DeveloperPopup: React.FC<DeveloperPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="developer-popup-overlay" onClick={onClose}>
      <div className="developer-popup" onClick={(e) => e.stopPropagation()}>
        <button className="developer-popup-close" onClick={onClose} aria-label="Close">
          <X size={20} color="white" /> {/* Ensure the icon is always white */}
        </button>
        
        <div className="developer-popup-content">
          <div className="developer-popup-header">
            <h2>Signal insignts</h2>
            <div className="developer-popup-badge">
              Developed and Maintained
            </div>
          </div>
          
          <div className="developer-popup-developer">
            <div className="developer-avatar">
              <span>SMD</span>
            </div>
            <h3>Thousif Ibrahim</h3>
            <p>Developer</p>
          </div>
          
          <div className="developer-popup-message">
            {/* <p>Thank you for using this application! 🚗</p> */}
            <p>If you have any queries or recommendations, feel free to connect:</p>
          </div>
          
          <div className="developer-popup-actions">
            <a 
              href="www.linkedin.com/in/thousif-ibrahim-29050421b" 
              target="_blank" 
              rel="noopener noreferrer"
              className="developer-popup-button linkedin"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
            <a 
              href="https://discord.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="developer-popup-button discord"
            >
              <MessageCircle size={18} />
              Chat on Discord
            </a>
          </div>
          
          {/* <div className="developer-popup-footer">
            <p>Thanks for visiting!</p> {/* Slightly rephrased for consistency */}
          {/* </div> */} 
        </div>
      </div>
    </div>
  );
};

export default DeveloperPopup;