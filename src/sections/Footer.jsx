import React from 'react'
import { socialImgs } from '../constants'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <p>&copy; 2024 Vishnu. All rights reserved.</p>
        </div>
        
        <div>
          <p>Built with React, Three.js & GSAP</p>
        </div>
        
        <div className="socials">
          {socialImgs.map(({ name, url, imgPath }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="icon"
            >
              <img src={imgPath} alt={name} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
