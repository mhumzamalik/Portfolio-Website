import React from 'react'
import './footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <a className="footer-email" href="mailto:46humza@gmail.com">
            46humza@gmail.com
          </a>
        </div>

        <div className="footer-center">
          <p>© 2025 Muhammad Hamza | Building Scalable Web Apps | All rights reserved.</p>
        </div>

        <div className="footer-right">
          <a
            className="footer-icon"
            href="https://www.linkedin.com/in/muhammad-hamza-bb3b8b201"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M4.98 3.5C4.98 4.6 4.1 5.5 3 5.5S1 4.6 1 3.5 1.9 1.5 3 1.5s1.98.9 1.98 2zm.02 4.5H1v15h4V8zm7 0h-3.98v15h4V14.6c0-2.5 3.2-2.7 3.2 0V23.5h4V13.7c0-5.7-6.1-5.5-7.2-2.7V8z"/>
            </svg>
          </a>
          <a
            className="footer-icon"
            href="https://twitter.com"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.3 4.3 0 0 0 1.88-2.38 8.58 8.58 0 0 1-2.72 1.04 4.28 4.28 0 0 0-7.29 3.9A12.14 12.14 0 0 1 3.45 4.8a4.28 4.28 0 0 0 1.33 5.72A4.24 4.24 0 0 1 2.8 9.1v.05a4.28 4.28 0 0 0 3.43 4.2 4.3 4.3 0 0 1-1.93.07 4.29 4.29 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.11 12.11 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.37-.01-.55A8.7 8.7 0 0 0 24 5.3a8.52 8.52 0 0 1-2.54.7z"/>
            </svg>
          </a>
          <a
            className="footer-icon"
            href="https://github.com/mhumzamalik"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.68c-2.78.61-3.37-1.34-3.37-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.61.07-.61 1 .07 1.54 1.03 1.54 1.03.88 1.52 2.3 1.08 2.86.83.09-.64.35-1.08.64-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0 1 12 6.83c.85.004 1.71.12 2.51.35 1.9-1.29 2.74-1.02 2.74-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.6 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.93.68 1.88v2.79c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
