import { useState, useEffect, useCallback } from 'react'
import '../styles/Navbar.css'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About Us', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Our Specialists', href: '#specialists' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Contact', href: '#contact' },
]

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
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
    <>
      <nav className={`navbar ${scrolled || sidebarOpen ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container container">
          <a href="#home" className="navbar__logo">
            <span className="navbar__logo-icon">👁</span>
            <span className="navbar__logo-text">
              Beacon<span>Health</span>
            </span>
          </a>

          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="navbar__link">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <a href="#contact" className="navbar__cta btn btn-primary">
            Book Appointment
          </a>

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

      {/* Overlay */}
      <div
        className={`sidebar-overlay ${sidebarOpen ? 'sidebar-overlay--visible' : ''}`}
        onClick={closeSidebar}
        aria-hidden="true"
      />

      {/* Side navigation */}
      <aside
        className={`sidebar ${sidebarOpen ? 'sidebar--open' : ''}`}
        aria-hidden={!sidebarOpen}
      >
        <ul className="sidebar__links">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a href={link.href} className="sidebar__link" onClick={closeSidebar}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="sidebar__cta btn btn-primary" onClick={closeSidebar}>
          Book Appointment
        </a>
      </aside>
    </>
  )
}

export default Navbar
