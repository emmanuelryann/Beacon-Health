import { useState, useEffect } from 'react'
import '../styles/Careers.css'

const categories = [
  { id: 'all', label: 'ALL' },
  { id: 'clinical', label: 'Clinical' },
  { id: 'administrative', label: 'Administrative' },
]

const culturePillars = [
  {
    title: 'Clinical Excellence',
    description:
      'Work alongside leading consultants and medical experts in an environment dedicated to delivering world-class patient outcomes.',
    icon: (
      <svg
        className="careers-pillar__icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
  },
  {
    title: 'Cutting-Edge Technology',
    description:
      'Practice with modern diagnostic imaging, catheterization laboratories, and advanced minimally invasive surgical suites.',
    icon: (
      <svg
        className="careers-pillar__icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M4.5 3v5a4.5 4.5 0 0 0 9 0V3" />
        <path d="M3 3h3" />
        <path d="M12 3h3" />
        <path d="M9 12.5v3.5a4 4 0 0 0 4 4h1" />
        <circle cx="18" cy="20" r="3" />
      </svg>
    ),
  },
  {
    title: 'Continuous Growth',
    description:
      'Access continuous clinical education, specialized mentorship, and clear pathways for career and leadership advancement.',
    icon: (
      <svg
        className="careers-pillar__icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: 'Collaborative Culture',
    description:
      'Be part of a compassionate, multidisciplinary team committed to mutual respect, integrity, and patient-centered teamwork.',
    icon: (
      <svg
        className="careers-pillar__icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
]

const Careers = ({ onNavigate = () => {} }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="careers-page">
      {/* ================================================
          1. HERO BANNER
          ================================================ */}
      <section className="careers-hero">
        <div className="careers-hero__overlay" />

        {/* ECG pulse line watermark */}
        <div className="careers-hero__watermark" aria-hidden="true">
          <svg
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="careers-hero__watermark-svg"
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

        <div className="careers-hero__container container">
          <div className="careers-hero__content">
            <h1 className="careers-hero__title">Careers</h1>
          </div>
        </div>
      </section>

      {/* ================================================
          2. AVAILABLE POSITIONS & EMPTY STATE
          ================================================ */}
      <section className="careers-body">
        <div className="careers-body__container container">
          {/* Header Row: Title & Filter Pills */}
          <div className="careers-header">
            <div className="careers-header__left">
              <h2 className="careers-header__title">Available Positions</h2>
              <p className="careers-header__count">Showing 0 active positions</p>
            </div>

            <div className="careers-header__filters" role="tablist" aria-label="Job categories">
              {categories.map((cat) => {
                const isActive = selectedCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`careers-filter-btn ${isActive ? 'careers-filter-btn--active' : ''}`}
                    onClick={() => setSelectedCategory(cat.id)}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Empty State Card */}
          <div className="careers-empty">
            <div className="careers-empty__card">
              <div className="careers-empty__icon-badge" aria-hidden="true">
                <svg
                  className="careers-empty__icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>

              <h3 className="careers-empty__title">No available position</h3>

              <p className="careers-empty__desc">
                There are currently no active job openings at Beacon Health. However, we are always
                looking for talented, compassionate, and driven healthcare professionals to join our team.
              </p>

              <div className="careers-empty__notice">
                <p className="careers-empty__notice-text">
                  We welcome speculative applications. If you would like to be considered for future opportunities in clinical practice, nursing, diagnostics, or administration, please submit your CV to our talent acquisition team.
                </p>
                <a
                  href="mailto:customersuccess@beaconhealth.io?subject=Speculative%20Application%20-%20Beacon%20Health"
                  className="careers-empty__action-btn"
                >
                  <svg
                    className="careers-empty__btn-icon"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                  <span>Submit Your CV (customersuccess@beaconhealth.io)</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          3. WHY WORK AT BEACON HEALTH?
          ================================================ */}
      <section className="careers-values">
        <div className="careers-values__container container">
          <div className="careers-values__header">
            <h2 className="careers-values__title">Why Build Your Career at Beacon Health?</h2>
            <p className="careers-values__subtitle">
              Join a multidisciplinary community that combines cutting-edge clinical infrastructure with a shared commitment to improving lives across Nigeria and West Africa.
            </p>
          </div>

          <div className="careers-values__grid">
            {culturePillars.map((pillar) => (
              <div key={pillar.title} className="careers-pillar-card">
                <div className="careers-pillar__icon" aria-hidden="true">
                  {pillar.icon}
                </div>
                <h3 className="careers-pillar__title">{pillar.title}</h3>
                <p className="careers-pillar__desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Careers
