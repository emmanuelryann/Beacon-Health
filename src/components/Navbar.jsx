import { useState, useEffect, useCallback } from 'react'
import '../styles/Navbar.css'

const navLinks = [
  { label: 'About Euracare', href: '#about' },
  { label: 'Our Services', href: '#services' },
  { label: 'Find a Doctor', href: '#specialists' },
  { label: 'Patient & Visitor Information', href: '#patient-info', hasDropdown: true },
  { label: 'Book Appointment', href: '#contact' },
  { label: 'Careers', href: '#careers' },
]

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (sidebarOpen) {
      document.body.classList.add('no-scroll')
    } else {
      document.body.classList.remove('no-scroll')
    }
    return () => document.body.classList.remove('no-scroll')
  }, [sidebarOpen])

  const closeSidebar = useCallback(() => setSidebarOpen(false), [])
  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), [])

  return (
    <header className="site-header">
      {/* Top Announcement Bar */}
      <div className="topbar">
        <div className="topbar__container container">
          <p className="topbar__text">
            For enquiries and booking, kindly call{' '}
            <a href="tel:+2349094444413" className="topbar__link">
              +234 909 444 4413
            </a>{' '}
            or send an email to{' '}
            <a href="mailto:info@euracare.com.ng" className="topbar__link">
              info@euracare.com.ng
            </a>
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container container">
          {/* Logo with ECG line */}
          <a href="#home" className="navbar__logo" aria-label="Euracare Home">
            <svg
              className="navbar__logo-svg"
              viewBox="0 0 220 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 30 H20 L25 20 L31 38 L38 8 L46 34 L52 26 L58 30 H218"
                stroke="#12435c"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="64"
                y="24"
                fontFamily="'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                fontSize="22"
                fontWeight="700"
                letterSpacing="1.2"
                fill="#12435c"
              >
                EURACARE
              </text>
            </svg>
          </a>

          {/* Desktop Navigation Links */}
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.label} className="navbar__item">
                <a href={link.href} className="navbar__link">
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <svg
                      className="navbar__chevron"
                      viewBox="0 0 12 12"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M2.5 4.5 L6 8 L9.5 4.5" />
                    </svg>
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Call Us Today Button */}
          <a href="tel:+2349094444413" className="navbar__call-btn">
            <svg
              className="navbar__call-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call us today</span>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            className={`navbar__hamburger ${sidebarOpen ? 'navbar__hamburger--active' : ''}`}
            onClick={toggleSidebar}
            aria-label="Toggle navigation menu"
            aria-expanded={sidebarOpen}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Transparent Overlay for Mobile Drawer */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'sidebar-overlay--visible' : ''}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Mobile Side Navigation Drawer */}
      <aside
        className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}
        aria-hidden={!sidebarOpen}
      >
        <div className="sidebar__header">
          <svg
            className="sidebar__logo-svg"
            viewBox="0 0 220 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 30 H20 L25 20 L31 38 L38 8 L46 34 L52 26 L58 30 H218"
              stroke="#ffffff"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <text
              x="64"
              y="24"
              fontFamily="'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
              fontSize="22"
              fontWeight="700"
              letterSpacing="1.2"
              fill="#ffffff"
            >
              EURACARE
            </text>
          </svg>
        </div>

        <ul className="sidebar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="sidebar__link" onClick={closeSidebar}>
                <span>{link.label}</span>
                {link.hasDropdown && <span className="sidebar__chevron">▾</span>}
              </a>
            </li>
          ))}
        </ul>

        <div className="sidebar__footer">
          <a
            href="tel:+2349094444413"
            className="sidebar__call-btn"
            onClick={closeSidebar}
          >
            <svg
              className="navbar__call-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span>Call us today</span>
          </a>
        </div>
      </aside>
    </header>
  )
}

export default Navbar
