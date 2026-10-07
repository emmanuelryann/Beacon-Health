import '../styles/Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top container">
        {/* Col 1: About */}
        <div className="footer__col footer__col--brand">
          <a href="#home" className="footer__logo">
            <span className="footer__logo-icon">👁</span>
            <span className="footer__logo-text">
              Beacon<span>Health</span>
            </span>
          </a>
          <p className="footer__about">
            Beacon Health Eye Centre delivers world-class ophthalmic care and
            surgical solutions. Our internationally trained specialists are
            dedicated to preserving, restoring, and enhancing your vision.
          </p>
          <div className="footer__socials">
            <a href="#home" aria-label="Facebook" className="footer__social-link">f</a>
            <a href="#home" aria-label="Twitter" className="footer__social-link">t</a>
            <a href="#home" aria-label="LinkedIn" className="footer__social-link">in</a>
            <a href="#home" aria-label="Instagram" className="footer__social-link">ig</a>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer__col">
          <h4 className="footer__col-title">Quick Links</h4>
          <ul className="footer__links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Our Clinic</a></li>
            <li><a href="#services">Clinical Services</a></li>
            <li><a href="#specialists">Our Specialists</a></li>
            <li><a href="#testimonials">Patient Stories</a></li>
            <li><a href="#contact">Book Consultation</a></li>
          </ul>
        </div>

        {/* Col 3: Clinical Services */}
        <div className="footer__col">
          <h4 className="footer__col-title">Eye Care Services</h4>
          <ul className="footer__links">
            <li><a href="#services">Cataract Surgery</a></li>
            <li><a href="#services">LASIK & Refractive</a></li>
            <li><a href="#services">Glaucoma Treatment</a></li>
            <li><a href="#services">Retina & Vitreous</a></li>
            <li><a href="#services">Pediatric Ophthalmology</a></li>
            <li><a href="#services">Diagnostic Imaging</a></li>
          </ul>
        </div>

        {/* Col 4: Contact & Hours */}
        <div className="footer__col">
          <h4 className="footer__col-title">Contact & Visit</h4>
          <ul className="footer__contact-list">
            <li>
              <span className="footer__contact-icon">📍</span>
              <span>293 Younis Bashorun St, Victoria Island, Lagos</span>
            </li>
            <li>
              <span className="footer__contact-icon">📞</span>
              <span>+234 909 444 4413</span>
            </li>
            <li>
              <span className="footer__contact-icon">✉️</span>
              <span>info@beaconhealtheye.com</span>
            </li>
            <li>
              <span className="footer__contact-icon">⏰</span>
              <span>Mon - Fri: 8:00 AM - 6:00 PM<br />Sat: 9:00 AM - 3:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="footer__bottom-container container">
          <p className="footer__copyright">
            © {new Date().getFullYear()} Beacon Health Eye Centre. All rights reserved.
          </p>
          <div className="footer__legal">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms of Service</a>
            <span>•</span>
            <a href="#patient-rights">Patient Rights</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
