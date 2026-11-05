import { useState } from 'react'
import '../styles/Hero.css'

const Hero = () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      window.location.href = '#services'
    }
  }

  return (
    <section className="hero" id="home">
      {/* Dark gradient overlay for text readability */}
      <div className="hero__overlay" />

      {/* Brand ECG heartbeat line watermark */}
      <div className="hero__watermark" aria-hidden="true">
        <svg
          viewBox="0 0 1200 400"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="hero__watermark-svg"
        >
          <path
            d="M0 260 H420 L455 190 L490 330 L535 70 L585 310 L620 220 L655 260 H1200"
            stroke="rgba(255, 255, 255, 0.22)"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="hero__content container">
        <div className="hero__text">
          <h1 className="hero__title">
            Redefining Private<br />Healthcare in Nigeria
          </h1>

          <p className="hero__description">
            At Beacon Health, we deliver premium medical care tailored to your needs—led by
            internationally trained specialists, powered by advanced diagnostics, and
            grounded in genuine compassion.
          </p>

          <form className="hero__search-bar" onSubmit={handleSearch}>
            <span className="hero__search-icon" aria-hidden="true">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21 L16.65 16.65" />
              </svg>
            </span>
            <input
              type="text"
              placeholder="How can we help you?"
              className="hero__search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="How can we help you?"
            />
          </form>
        </div>
      </div>
    </section>
  )
}

export default Hero
