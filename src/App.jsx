import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import Services from './components/Services'
import Specialists from './components/Specialists'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import AboutEuracare from './components/AboutEuracare'

function App() {
  const [currentPage, setCurrentPage] = useState('home')

  return (
    <>
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main>
        {currentPage === 'home' ? (
          <>
            <Hero />
            <WhyChooseUs />
            <Services />
            <Specialists />
            <Testimonials />
          </>
        ) : (
          <AboutEuracare />
        )}
        <CTA />
      </main>
      <Footer />
    </>
  )
}

export default App
