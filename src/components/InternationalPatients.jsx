import { useEffect } from 'react'
import internationalPatientsServicesImg from '../images/international_patient_services.svg'
import '../styles/InternationalPatients.css'

const whyPillars = [
  {
    id: 'specialist-care',
    title: 'Specialist Care',
    description:
      'Access to highly trained consultants across cardiology, surgery, internal medicine, oncology, orthopedics, and more.',
    icon: (
      <svg
        className="ip-why__icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 3L3 10v10a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V10L12 3z" />
        <path d="M12 9v6" />
        <path d="M9 12h6" />
      </svg>
    ),
  },
  {
    id: 'advanced-technology',
    title: 'Advanced Technology',
    description:
      'State-of-the-art imaging, minimally invasive procedures, and modern operating theaters.',
    icon: (
      <svg
        className="ip-why__icon-svg"
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
    id: 'shorter-waiting-times',
    title: 'Shorter Waiting Times',
    description:
      'Quick scheduling for consultations, tests, and procedures.',
    icon: (
      <svg
        className="ip-why__icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="9" />
        <polyline points="12 7 12 12 15 12" />
      </svg>
    ),
  },
  {
    id: 'coordinated-care',
    title: 'Coordinated Care',
    description:
      'Multidisciplinary teams offering comprehensive evaluations and personalized treatment plans.',
    icon: (
      <svg
        className="ip-why__icon-svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="7" r="3" />
        <path d="M6 20v-1a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v1" />
        <circle cx="19" cy="10" r="2.2" />
        <path d="M22 20v-0.8a3.5 3.5 0 0 0-2.5-3.3" />
        <circle cx="5" cy="10" r="2.2" />
        <path d="M2 20v-0.8a3.5 3.5 0 0 1 2.5-3.3" />
        <circle cx="12" cy="18" r="3" fill="#ffffff" />
        <path d="M12 16.5v3M10.5 18h3" />
      </svg>
    ),
  },
]

const servicesList = [
  {
    title: 'Dedicated Coordinator',
    description:
      'A personal liaison for appointments, treatment schedules, and communication with your doctors.',
  },
  {
    title: 'Medical Records Review',
    description:
      'Send your reports in advance for assessment before you travel.',
  },
  {
    title: 'Visa & Travel Support',
    description:
      'Assistance with medical visa letters, airport transfers, and transport arrangements.',
  },
  {
    title: 'Accommodation',
    description:
      'Assistance with booking partner hotels and serviced apartments near the hospital.',
  },
  {
    title: 'Financial Guidance',
    description:
      'Transparent estimates for procedures, billing assistance, and insurance coordination.',
  },
]

const planningSteps = [
  {
    title: 'Initial Contact',
    description: 'Reach out via phone, email, or online form.',
  },
  {
    title: 'Medical Review',
    description: 'Share your medical history and reports with our specialists',
  },
  {
    title: 'Treatment Plan & Cost Estimate',
    description: 'Receive a clear plan before travel.',
  },
  {
    title: 'Travel & Arrival',
    description: 'Our team helps with logistics from airport pickup to check-in.',
  },
  {
    title: 'During Your Stay',
    description: 'Continuous support from admission through discharge.',
  },
]

const InternationalPatients = ({ onNavigate = () => {} }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <div className="ip-page">
      {/* ================================================
          1. HERO BANNER
          ================================================ */}
      <section className="ip-hero">
        <div className="ip-hero__overlay" />
        <div className="ip-hero__watermark" aria-hidden="true">
          <svg
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ip-hero__watermark-svg"
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

        <div className="ip-hero__container container">
          <div className="ip-hero__content">
            <h1 className="ip-hero__title">
              International Patients
            </h1>
          </div>
        </div>
      </section>

      {/* ================================================
          2. WHY CHOOSE BEACON HEALTH?
          ================================================ */}
      <section className="ip-why">
        <div className="ip-why__container container">
          <h2 className="ip-why__title">Why choose Beacon Health?</h2>
          <p className="ip-why__text">
            At Beacon Health, we want every patient and visitor to feel supported, informed, and cared for.
            Whether you are coming for a consultation, diagnostic test, or inpatient treatment, our goal is to
            make your experience smooth, safe, and comfortable.
          </p>

          <div className="ip-why__card">
            {whyPillars.map((pillar) => (
              <div key={pillar.id} className="ip-why__col">
                <div className="ip-why__icon" aria-hidden="true">
                  {pillar.icon}
                </div>
                <h3 className="ip-why__pillar-title">{pillar.title}</h3>
                <p className="ip-why__pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          3. INTERNATIONAL PATIENT SERVICES
          ================================================ */}
      <section className="ip-services-section">
        <div className="ip-services__container container">
          <div className="ip-services__grid">
            {/* Left Column: Doctor Consultation Image */}
            <div className="ip-services__image-col">
              <div className="ip-services__image-wrap">
                <img
                  src={internationalPatientsServicesImg}
                  alt="Specialist doctor consulting patient at Beacon Health International Patient Services"
                  className="ip-services__image"
                />
              </div>
            </div>

            {/* Right Column: Title + Service Cards */}
            <div className="ip-services__content-col">
              <h2 className="ip-services__title">
                International Patient<br />Services
              </h2>
              <div className="ip-services__list">
                {servicesList.map((service) => (
                  <div key={service.title} className="ip-service-card">
                    <h3 className="ip-service-card__title">{service.title}</h3>
                    <p className="ip-service-card__desc">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          4. PLANNING YOUR VISIT
          ================================================ */}
      <section className="ip-planning-section">
        <div className="ip-planning__container container">
          <div className="ip-planning__grid">
            {/* Left Column: Title + Step Cards */}
            <div className="ip-planning__content-col">
              <h2 className="ip-planning__title">Planning Your Visit</h2>
              <div className="ip-planning__list">
                {planningSteps.map((step) => (
                  <div key={step.title} className="ip-planning-card">
                    <h3 className="ip-planning-card__title">{step.title}</h3>
                    <p className="ip-planning-card__desc">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Medical Care & Recovery Suite Image */}
            <div className="ip-planning__image-col">
              <div className="ip-planning__image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109db05?w=1000&q=80"
                  alt="Passport and travel documents for planning a medical visit"
                  className="ip-planning__image"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          5. STATEMENT / INTRO QUOTE CARD
          ================================================ */}
      <section className="ip-statement">
        <div className="ip-statement__container container">
          <div className="ip-statement__card">
            <p className="ip-statement__text">
              We understand that traveling for healthcare can be stressful. Our international patient team ensures a seamless experience, so you and your loved ones feel at home while receiving world-class care.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InternationalPatients
