import { useState, useEffect, useCallback } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Specialists from './components/Specialists'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AboutEuracare from './components/AboutEuracare'
import ServicesPage from './components/ServicesPage'
import BookAppointment from './components/BookAppointment'
import WhatToExpect from './components/WhatToExpect'
import InternationalPatients from './components/InternationalPatients'
import Careers from './components/Careers'

const getPageFromHash = () => {
  if (typeof window === 'undefined') return 'home'
  const hash = window.location.hash.toLowerCase().replace('#', '')
  if (hash === 'about') return 'about'
  if (hash === 'services') return 'services'
  if (hash === 'what-to-expect' || hash === 'whattoexpect') return 'what-to-expect'
  if (hash === 'international-patients' || hash === 'international-patient') return 'international-patients'
  if (hash === 'careers' || hash === 'career') return 'careers'
  if (hash === 'appointment' || hash === 'contact' || hash === 'enquiry') return 'appointment'
  return 'home'
}

function App() {
  const [currentPage, setCurrentPage] = useState(getPageFromHash)

  useEffect(() => {
    const handleHashChange = () => {
      const page = getPageFromHash()
      setCurrentPage(page)
      window.scrollTo({ top: 0, behavior: 'auto' })
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  const handleNavigate = useCallback((page) => {
    setCurrentPage(page)
    const targetHash = page === 'home' ? '#home' : `#${page}`
    if (window.location.hash !== targetHash) {
      window.history.pushState(null, '', targetHash)
    }
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main>
        {currentPage === 'home' && (
          <>
            <Hero />
            <WhyChooseUs />
            <Services />
            <Specialists />
            <Testimonials />
          </>
        )}
        {currentPage === 'about' && <AboutEuracare />}
        {currentPage === 'services' && <ServicesPage />}
        {currentPage === 'what-to-expect' && <WhatToExpect onNavigate={handleNavigate} />}
        {currentPage === 'international-patients' && <InternationalPatients onNavigate={handleNavigate} />}
        {currentPage === 'careers' && <Careers onNavigate={handleNavigate} />}
        {currentPage === 'appointment' && <BookAppointment />}
        <CTA onNavigate={handleNavigate} />
      </main>
      <Footer />
    </>
  )
}

export default App
