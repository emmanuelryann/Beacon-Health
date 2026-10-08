import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Col 1: ABOUT EURACARE */}
        <div className="footer__col">
          <h4 className="footer__col-title">ABOUT EURACARE</h4>
          <ul className="footer__links">
            <li><a href="#about">Who we are</a></li>
            <li><a href="#about">Our Vision &amp; mission</a></li>
            <li><a href="#about">Our Mission Statement</a></li>
            <li><a href="#specialists">Our Team</a></li>
            <li><a href="#about">Accreditations &amp; Awards</a></li>
          </ul>
        </div>

        {/* Col 2: SERVICE LINES */}
        <div className="footer__col">
          <h4 className="footer__col-title">SERVICE LINES</h4>
          <ul className="footer__links">
            <li><a href="#services">Interventional Cardiology</a></li>
            <li><a href="#services">Interventional Radiology</a></li>
            <li><a href="#services">Adult &amp; Pediatric Cardiology</a></li>
            <li><a href="#services">Bariatric &amp; Weight Loss Surgery</a></li>
            <li><a href="#services">General Surgery</a></li>
            <li><a href="#services">Gastroenterology</a></li>
            <li><a href="#services">Orthopedic Surgery</a></li>
          </ul>
        </div>

        {/* Col 3: MEDIA */}
        <div className="footer__col">
          <h4 className="footer__col-title">MEDIA</h4>
          <ul className="footer__links">
            <li><a href="#media">Blogs and articles</a></li>
            <li><a href="#testimonials">Patient stories</a></li>
          </ul>
        </div>

        {/* Col 4: Contact & Socials */}
        <div className="footer__col footer__col--contact">
          <div className="footer__contact-info">
            <p className="footer__address">
              293 Younis Bashorun Street cnr Jide Oki Street, Victoria Island Lagos, Nigeria
            </p>
            <a href="mailto:info@euracare.com.ng" className="footer__contact-link">
              info@euracare.com.ng
            </a>
            <a href="tel:+2349094444413" className="footer__contact-link footer__phone">
              +234 909 444 4413
            </a>
          </div>

          <div className="footer__socials">
            {/* WhatsApp */}
            <a
              href="https://wa.me/2349094444413"
              className="footer__social-btn"
              aria-label="WhatsApp"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              className="footer__social-btn"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              className="footer__social-btn"
              aria-label="Instagram"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              className="footer__social-btn"
              aria-label="LinkedIn"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com"
              className="footer__social-btn"
              aria-label="YouTube"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-container container">
          <div className="footer__legal">
            <a href="#cookie-settings">Cookie settings</a>
            <span className="footer__legal-dot">•</span>
            <a href="#privacy-policy">Privacy Policy</a>
            <span className="footer__legal-dot">•</span>
            <a href="#legal">Legal</a>
          </div>

          <p className="footer__copyright">
            Euracare Nigeria. © Copyright 2025 - Euracare Nigeria
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
