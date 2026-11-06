import { useState, useEffect, useCallback } from 'react'
import beaconHealthLogo from '../images/Beaconhealth-_sjCoVqD.svg'
import beaconHealthLogoWhite from '../images/Beaconhealth-white.svg'
import '../styles/Navbar.css'

const navLinks = [
  { id: 'about', label: 'About Beacon Health', href: '#about' },
  { id: 'services', label: 'Our Services', href: '#services' },
  {
    id: 'patient-info',
    label: 'Patient & Visitor Information',
    href: '#patient-info',
    hasDropdown: true,
    dropdownItems: [
      { label: 'News & Updates', href: '#news' },
      { label: 'What To Expect', href: '#what-to-expect' },
      { label: 'International Patient', href: '#international-patients' },
    ],
  },
  { id: 'appointment', label: 'Book Appointment', href: '#appointment' },
]

const Navbar = ({ currentPage = 'home', onNavigate = () => {} }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [patientDropdownOpen, setPatientDropdownOpen] = useState(false)
  const [dropdownClosed, setDropdownClosed] = useState(false)
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

  const closeSidebar = useCallback(() => {
    setSidebarOpen(false)
    setPatientDropdownOpen(false)
  }, [])
  const toggleSidebar = useCallback(() => setSidebarOpen((prev) => !prev), [])

  const handleLinkClick = (e, link) => {
    if (link.id === 'patient-info') {
      e.preventDefault()
      setPatientDropdownOpen((prev) => !prev)
      return
    }

    if (link.id === 'about') {
      e.preventDefault()
      onNavigate('about')
      closeSidebar()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (link.id === 'services') {
      e.preventDefault()
      onNavigate('services')
      closeSidebar()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (link.id === 'appointment' || link.id === 'contact') {
      e.preventDefault()
      onNavigate('appointment')
      closeSidebar()
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (currentPage !== 'home') {
      e.preventDefault()
      onNavigate('home')
      closeSidebar()
      setTimeout(() => {
        const el = document.querySelector(link.href)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 50)
      return
    }

    closeSidebar()
  }

  const handleLogoClick = (e) => {
    e.preventDefault()
    onNavigate('home')
    closeSidebar()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header className="site-header">
      {/* Top Announcement Bar */}
      <div className="topbar">
        <div className="topbar__container container">
          <p className="topbar__text">
            For enquiries and booking, kindly call{' '}
            <a href="tel:+2349063498314" className="topbar__link">
              +234 906 349 8314
            </a>{' '}
            or send an email to{' '}
            <a href="mailto:customersuccess@beaconhealth.io" className="topbar__link">
              customersuccess@beaconhealth.io
            </a>
          </p>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar__container container">
          {/* Logo */}
          <a
            href="#home"
            className="navbar__logo"
            aria-label="Beacon Health Home"
            onClick={handleLogoClick}
          >
            <img
              src={beaconHealthLogo}
              alt="Beacon Health"
              className="navbar__logo-img"
            />
          </a>

          {/* Desktop Navigation Links */}
          <ul className="navbar__links">
            {navLinks.map((link) => {
              const isActive =
                (link.id === 'about' && currentPage === 'about') ||
                (link.id === 'services' && currentPage === 'services') ||
                (link.id === 'patient-info' && (currentPage === 'what-to-expect' || currentPage === 'international-patients' || currentPage === 'news')) ||
                ((link.id === 'appointment' || link.id === 'contact') && currentPage === 'appointment')
              return (
                <li
                  key={link.label}
                  className={`navbar__item ${link.hasDropdown ? 'navbar__item--has-dropdown' : ''}`}
                  onMouseEnter={() => {
                    if (link.hasDropdown) setDropdownClosed(false)
                  }}
                >
                  <a
                    href={link.href}
                    className={`navbar__link ${isActive ? 'navbar__link--active' : ''}`}
                    onClick={(e) => handleLinkClick(e, link)}
                    aria-haspopup={link.hasDropdown ? 'true' : undefined}
                    aria-expanded={link.hasDropdown ? 'false' : undefined}
                  >
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

                  {link.hasDropdown && link.dropdownItems && (
                    <div
                      className={`navbar__dropdown ${dropdownClosed ? 'navbar__dropdown--closed' : ''}`}
                      role="menu"
                    >
                      <ul className="navbar__dropdown-list">
                        {link.dropdownItems.map((item) => (
                          <li key={item.label} className="navbar__dropdown-item">
                            <a
                              href={item.href}
                              className="navbar__dropdown-link"
                              onClick={(e) => {
                                setDropdownClosed(true)
                                setPatientDropdownOpen(false)
                                if (item.label === 'News & Updates') {
                                  e.preventDefault()
                                  onNavigate('news')
                                  window.scrollTo({ top: 0, behavior: 'auto' })
                                  return
                                }
                                if (item.label === 'What To Expect') {
                                  e.preventDefault()
                                  onNavigate('what-to-expect')
                                  window.scrollTo({ top: 0, behavior: 'auto' })
                                  return
                                }
                                if (item.label === 'International Patient') {
                                  e.preventDefault()
                                  onNavigate('international-patients')
                                  window.scrollTo({ top: 0, behavior: 'auto' })
                                  return
                                }
                                if (currentPage !== 'home') {
                                  e.preventDefault()
                                  onNavigate('home')
                                  setTimeout(() => {
                                    const el = document.querySelector(item.href)
                                    if (el) el.scrollIntoView({ behavior: 'smooth' })
                                  }, 50)
                                }
                              }}
                            >
                              {item.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              )
            })}
          </ul>

          {/* Call Us Today Button -> Enquiry Form Page */}
          <a
            href="#appointment"
            className="navbar__call-btn"
            onClick={(e) => {
              e.preventDefault()
              onNavigate('appointment')
              window.scrollTo({ top: 0, behavior: 'auto' })
            }}
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
          <a
            href="#home"
            className="sidebar__logo-link"
            aria-label="Beacon Health Home"
            onClick={handleLogoClick}
          >
            <img
              src={beaconHealthLogoWhite}
              alt="Beacon Health"
              className="sidebar__logo-img"
            />
          </a>
        </div>

        <ul className="sidebar__links">
          <li>
            <a
              href="#home"
              className={`sidebar__link ${currentPage === 'home' ? 'sidebar__link--active' : ''}`}
              onClick={(e) => {
                e.preventDefault()
                onNavigate('home')
                closeSidebar()
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              <span>Home</span>
            </a>
          </li>
          {navLinks.map((link) => {
            const isActive =
              (link.id === 'about' && currentPage === 'about') ||
              (link.id === 'services' && currentPage === 'services') ||
              (link.id === 'patient-info' && (currentPage === 'what-to-expect' || currentPage === 'international-patients' || currentPage === 'news')) ||
              ((link.id === 'appointment' || link.id === 'contact') && currentPage === 'appointment')
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className={`sidebar__link ${isActive ? 'sidebar__link--active' : ''}`}
                  onClick={(e) => handleLinkClick(e, link)}
                >
                  <span>{link.label}</span>
                  {link.hasDropdown && (
                    <span className="sidebar__chevron">
                      {patientDropdownOpen ? '▴' : '▾'}
                    </span>
                  )}
                </a>

                {link.hasDropdown && patientDropdownOpen && link.dropdownItems && (
                  <ul className="sidebar__sublinks">
                    {link.dropdownItems.map((item) => (
                      <li key={item.label}>
                        <a
                          href={item.href}
                          className="sidebar__sublink"
                          onClick={(e) => {
                            closeSidebar()
                            if (item.label === 'News & Updates') {
                              e.preventDefault()
                              onNavigate('news')
                              window.scrollTo({ top: 0, behavior: 'auto' })
                              return
                            }
                            if (item.label === 'What To Expect') {
                              e.preventDefault()
                              onNavigate('what-to-expect')
                              window.scrollTo({ top: 0, behavior: 'auto' })
                              return
                            }
                            if (item.label === 'International Patient') {
                              e.preventDefault()
                              onNavigate('international-patients')
                              window.scrollTo({ top: 0, behavior: 'auto' })
                              return
                            }
                            if (currentPage !== 'home') {
                              e.preventDefault()
                              onNavigate('home')
                              setTimeout(() => {
                                const el = document.querySelector(item.href)
                                if (el) el.scrollIntoView({ behavior: 'smooth' })
                              }, 50)
                            }
                          }}
                        >
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            )
          })}
        </ul>

        <div className="sidebar__footer">
          <a
            href="#appointment"
            className="sidebar__call-btn"
            onClick={(e) => {
              e.preventDefault()
              closeSidebar()
              onNavigate('appointment')
              window.scrollTo({ top: 0, behavior: 'auto' })
            }}
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
