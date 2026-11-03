import { useState, useEffect } from 'react'
import '../styles/WhatToExpect.css'

const supportTabs = [
  {
    id: 'care-team',
    label: 'Our Care Team',
    icon: (
      <svg
        className="wte-tab__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="7" r="3" />
        <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
        <circle cx="19" cy="11" r="2" />
        <path d="M22 19v-1a3 3 0 0 0-2-2.8" />
        <circle cx="5" cy="11" r="2" />
        <path d="M2 19v-1a3 3 0 0 1 2-2.8" />
        <path d="M12 11v4M10 13h4" />
      </svg>
    ),
    title: 'Our Care Team',
    description:
      'We are happy to provide assistance with transportation needs, including helping patients and their families arrange pick-up or drop-off services to and from the hospital. If you have any special requests — such as mobility support, accessibility requirements, or any other personal needs to make your visit more comfortable — please let us know in advance. Our team is committed to ensuring that every patient receives the necessary care, attention, and support from the moment they begin their journey to our hospital.',
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=1000&q=80',
    imageAlt: 'Euracare care team smiling at reception desk',
  },
  {
    id: 'laboratory',
    label: 'Laboratory & Imaging',
    icon: (
      <svg
        className="wte-tab__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M6 18h12M10 14l-4 4M14 14l4 4M9 3h6M12 3v5" />
        <path d="M7 8l-2 9a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3l-2-9H7z" />
      </svg>
    ),
    title: 'Laboratory & Imaging',
    description:
      'We offer onsite advanced diagnostic services, equipped with modern technology and skilled specialists, to provide faster and more accurate results. This ensures that patients receive timely evaluations, enabling doctors to make quicker treatment decisions and improving overall care outcomes.',
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=1000&q=80',
    imageAlt: 'Advanced medical diagnostic imaging workstation and scanner',
  },
  {
    id: 'pharmacy',
    label: 'Pharmacy',
    icon: (
      <svg
        className="wte-tab__icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M3 21h18M5 21V7l7-4 7 4v14M10 11h4M12 9v4" />
      </svg>
    ),
    title: 'Pharmacy',
    description:
      'Our pharmacy is fully stocked with genuine, high-quality medications to ensure patients have easy access to the prescriptions and treatments they need. With a wide range of trusted medicines, professional guidance from qualified pharmacists, and a commitment to safety, we provide reliable support for your health and recovery, all in one convenient location.',
    image:
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=1000&q=80',
    imageAlt: 'Euracare hospital pharmacy with clinical pharmacist',
  },
]

const WhatToExpect = ({ onNavigate = () => {} }) => {
  const [activeTab, setActiveTab] = useState('care-team')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const currentTab = supportTabs.find((tab) => tab.id === activeTab) || supportTabs[0]

  return (
    <div className="wte-page">
      {/* ================================================
          1. HERO BANNER
          ================================================ */}
      <section className="wte-hero">
        <div className="wte-hero__layout">
          <div className="wte-hero__left">
            {/* ECG Pulse Watermark */}
            <div className="wte-hero__watermark" aria-hidden="true">
              <svg
                viewBox="0 0 1000 350"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="wte-hero__watermark-svg"
              >
                <path
                  d="M0 240 H380 L415 170 L450 310 L495 50 L545 290 L580 200 L615 240 H1000"
                  stroke="rgba(255, 255, 255, 0.18)"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="wte-hero__left-content">
              <h1 className="wte-hero__title">
                What to Expect<br />as a Patient
              </h1>
            </div>
          </div>

          <div className="wte-hero__right">
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=1200&q=80"
              alt="Medical team reviewing clinical diagnostic scans at a workstation"
              className="wte-hero__image"
            />
          </div>
        </div>
      </section>

      {/* ================================================
          2. WHY CHOOSE EURACARE?
          ================================================ */}
      <section className="wte-why">
        <div className="wte-why__container container">
          <h2 className="wte-why__title">Why choose Euracare?</h2>
          <p className="wte-why__text">
            At Euracare, we want every patient and visitor to feel supported, informed, and cared for.
            Whether you are coming for a consultation, diagnostic test, or inpatient treatment, our goal is to
            make your experience smooth, safe, and comfortable.
          </p>

          <div className="wte-why__card">
            {/* 1. Personalized Care */}
            <div className="wte-why__col">
              <div className="wte-why__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21h18M5 21V7l7-4 7 4v14M10 11h4M12 9v4" />
                </svg>
              </div>
              <h3 className="wte-why__col-title">Personalized Care</h3>
              <p className="wte-why__col-desc">
                Our doctors and nurses take time to understand your needs, creating a tailored
                care plan for the best possible outcomes.
              </p>
            </div>

            {/* 2. Advanced Technology */}
            <div className="wte-why__col">
              <div className="wte-why__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M4.5 3v5a3.5 3.5 0 0 0 7 0V3M11.5 5.5h-7M8 11.5v3a4.5 4.5 0 0 0 9 0v-2.5M17 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0z" />
                </svg>
              </div>
              <h3 className="wte-why__col-title">Advanced Technology</h3>
              <p className="wte-why__col-desc">
                We combine international expertise with world-class facilities and innovative medical
                solutions.
              </p>
            </div>

            {/* 3. Clear Communication */}
            <div className="wte-why__col">
              <div className="wte-why__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5zM9 11l2 2 4-4" />
                </svg>
              </div>
              <h3 className="wte-why__col-title">Clear Communication</h3>
              <p className="wte-why__col-desc">
                We explain every step of your treatment plan so you feel confident and informed.
              </p>
            </div>

            {/* 4. Compassionate Support */}
            <div className="wte-why__col">
              <div className="wte-why__icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="7" r="3" />
                  <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2" />
                  <circle cx="19" cy="11" r="2" />
                  <path d="M22 19v-1a3 3 0 0 0-2-2.8" />
                  <circle cx="5" cy="11" r="2" />
                  <path d="M2 19v-1a3 3 0 0 1 2-2.8" />
                  <path d="M12 11v4M10 13h4" />
                </svg>
              </div>
              <h3 className="wte-why__col-title">Compassionate Support</h3>
              <p className="wte-why__col-desc">
                Beyond medical care, our team is here to support your overall wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          3. BEFORE YOUR VISIT
          ================================================ */}
      <section className="wte-section wte-before">
        <div className="wte-section__container container">
          <div className="wte-split">
            {/* Left Content */}
            <div className="wte-split__text">
              <h2 className="wte-section__title">Before your visit</h2>

              <div className="wte-cards">
                <div className="wte-card">
                  <h3 className="wte-card__title">Making an Appointment</h3>
                  <p className="wte-card__desc">
                    You can schedule your appointment by submitting an enquiry form on our website, and our team
                    will call you back, or call us on +234 2014664090. We recommend arriving 15 minutes early for
                    first appointments.
                  </p>
                </div>

                <div className="wte-card">
                  <h3 className="wte-card__title">What to Bring</h3>
                  <p className="wte-card__desc">
                    Valid ID, insurance card (if applicable), referral letter, and any prior test results or medical
                    records.
                  </p>
                </div>

                <div className="wte-card">
                  <h3 className="wte-card__title">Insurance &amp; Billing</h3>
                  <p className="wte-card__desc">
                    Euracare partners with leading Health Maintenance Organizations (HMOs) and private insurers.
                    Our billing desk can guide you through pre-authorizations and claims.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Photo */}
            <div className="wte-split__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=1000&q=80"
                alt="Patient smiling while speaking with reception staff"
                className="wte-split__image"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          4. DURING YOUR VISIT (Reversed)
          ================================================ */}
      <section className="wte-section wte-during">
        <div className="wte-section__container container">
          <div className="wte-split wte-split--reversed">
            {/* Left Photo */}
            <div className="wte-split__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=1000&q=80"
                alt="Patient checking in at reception counter"
                className="wte-split__image"
                loading="lazy"
              />
            </div>

            {/* Right Content */}
            <div className="wte-split__text">
              <h2 className="wte-section__title">During Your Visit</h2>

              <div className="wte-cards">
                <div className="wte-card">
                  <h3 className="wte-card__title">Registration &amp; Check-In</h3>
                  <p className="wte-card__desc">
                    Our front desk will assist with registration, update your medical history, and direct you to the
                    right clinic or specialist.
                  </p>
                </div>

                <div className="wte-card">
                  <h3 className="wte-card__title">Visitor Guidelines</h3>
                  <p className="wte-card__desc">
                    For the comfort and safety of all patients, we limit visiting hours and ask that all visitors observe
                    hospital protocols.
                  </p>
                </div>

                <div className="wte-card">
                  <h3 className="wte-card__title">Patient Rights &amp; Responsibilities</h3>
                  <p className="wte-card__desc">
                    You have the right to safe, respectful, and confidential care. We ask that you share accurate
                    health information and follow medical advice for best outcomes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          5. PATIENT LIAISON BANNER
          ================================================ */}
      <section className="wte-liaison">
        <div className="wte-liaison__container container">
          <div className="wte-liaison__card">
            <p className="wte-liaison__text">
              We understand that navigating healthcare can sometimes feel overwhelming, which is why we have a dedicated{' '}
              <strong>Patient Liaison Officer</strong> available to guide you through every step — from registration and insurance processing to answering questions and ensuring you feel supported throughout your care journey.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          6. SUPPORT SERVICES (Interactive Tabs)
          ================================================ */}
      <section className="wte-section wte-support">
        <div className="wte-section__container container">
          {/* Header Row: Title & Tabs */}
          <div className="wte-support__header">
            <h2 className="wte-section__title wte-support__title">Support Services</h2>

            <div className="wte-support__tabs" role="tablist" aria-label="Support services categories">
              {supportTabs.map((tab) => {
                const isActive = activeTab === tab.id
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    className={`wte-support__tab-btn ${isActive ? 'wte-support__tab-btn--active' : ''}`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.icon}
                    <span>{tab.label}</span>
                  </button>
                )
              })}
            </div>
          </div>

          {/* Tab Content Display */}
          <div className="wte-split wte-support__content">
            {/* Left Photo */}
            <div className="wte-split__image-wrap">
              <img
                src={currentTab.image}
                alt={currentTab.imageAlt}
                className="wte-split__image"
                loading="lazy"
              />
            </div>

            {/* Right Details */}
            <div className="wte-split__text wte-support__details">
              <h3 className="wte-support__active-title">{currentTab.title}</h3>
              <p className="wte-support__active-desc">{currentTab.description}</p>
              <a
                href="#appointment"
                className="wte-support__book-link"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('appointment')
                  window.scrollTo({ top: 0, behavior: 'auto' })
                }}
              >
                Book an appointment
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default WhatToExpect
