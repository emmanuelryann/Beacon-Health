import '../styles/Footer.css'

const Footer = ({ onNavigate = () => {} }) => {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Col 1: ABOUT BEACON HEALTH */}
        <div className="footer__col">
          <h4 className="footer__col-title">ABOUT BEACON HEALTH</h4>
          <ul className="footer__links">
            <li>
              <a
                href="#about-hero"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('about')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Who we are
              </a>
            </li>
            <li>
              <a
                href="#about-mission"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('about', 'about-mission')
                }}
              >
                Our Vision &amp; mission
              </a>
            </li>
            <li>
              <a
                href="#about-mission"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('about', 'about-mission')
                }}
              >
                Our Mission Statement
              </a>
            </li>
            <li>
              <a
                href="#about-leadership"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('about', 'about-leadership')
                }}
              >
                Our Team
              </a>
            </li>
          </ul>
        </div>

        {/* Col 2: MEDIA */}
        <div className="footer__col">
          <h4 className="footer__col-title">MEDIA</h4>
          <ul className="footer__links">
            <li>
              <a
                href="#news"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('news')
                  window.scrollTo({ top: 0, behavior: 'auto' })
                }}
              >
                Blogs and articles
              </a>
            </li>
            <li>
              <a
                href="#testimonials"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('home', 'testimonials')
                }}
              >
                Patient stories
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Contact & Socials */}
        <div className="footer__col footer__col--contact">
          <div className="footer__contact-info">
            <a href="mailto:customersuccess@beaconhealth.io" className="footer__contact-link">
              customersuccess@beaconhealth.io
            </a>
            <a href="tel:+2349063498314" className="footer__contact-link footer__phone">
              +234 906 349 8314
            </a>
          </div>

          <div className="footer__socials">
            {/* X (Twitter) */}
            <a
              href="https://x.com/beaconhealth_io?s=21&t=fyBWel-H4_jBYFzLL3LCew"
              className="footer__social-btn"
              aria-label="X (Twitter)"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/showcase/beaconhealth/"
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

            {/* Instagram */}
            <a
              href="https://www.instagram.com/beaconhealth.io?igsh=dHhydGYyM2t2MGgx"
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

            {/* Facebook */}
            <a
              href="https://facebook.com/beaconhealth.io/"
              className="footer__social-btn"
              aria-label="Facebook"
              target="_blank"
              rel="noreferrer"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-container container">
          <div className="footer__legal">
            <a
              href="#cookie-settings"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Cookie settings
            </a>
            <span className="footer__legal-dot">•</span>
            <a
              href="#privacy-policy"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Privacy Policy
            </a>
            <span className="footer__legal-dot">•</span>
            <a
              href="#legal"
              onClick={(e) => {
                e.preventDefault()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              Legal
            </a>
          </div>

          <p className="footer__copyright">
            © 2024 MDaaS Global. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
