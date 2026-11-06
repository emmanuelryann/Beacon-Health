import { useState } from 'react'
import centresOfExcellenceImg from '../images/centres_of_excellence.png'
import innovationTechImg from '../images/innovation_and_technology.jpg'
import '../styles/AboutBeaconHealth.css'

const missionCards = [
  'To offer corporate companies and insurers efficient healthcare solutions for their employees and customers.',
  'To provide world-class medical services to patients without the stress and expense of international travel.',
  'To make available to physicians a technologically advanced and optimized work platform.',
]

const coreValues = [
  {
    title: 'Accountability',
    description: 'We act with integrity and take responsibility in everything we do.',
  },
  {
    title: 'Respect',
    description:
      'We value diversity and honor every individual’s culture, background, and perspective.',
  },
  {
    title: 'Empathy',
    description:
      'Every patient matters. We listen, understand, and put their needs first.',
  },
  {
    title: 'Excellence',
    description:
      'We provide world class care, driven by innovation and a commitment to delivering exceptional outcomes.',
  },
  {
    title: 'Commitment',
    description:
      'We are dedicated to bringing international standards of healthcare to every patient locally.',
  },
]

const centresOfExcellence = [
  'Interventional Cardiology',
  'Interventional Radiology',
  'Adult & Pediatric Cardiology',
  'Bariatric & Weight Loss Surgery',
  'General Surgery',
  'Gastroenterology',
  'Orthopedic Surgery',
  'Comprehensive Health Assessments',
]

const leadershipTeam = [
  {
    name: 'Dr Tosin Majekodunmi',
    role: 'Managing Director & Medical Director & Chief of Cardiology',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&q=80',
  },
  {
    name: 'Ijeoma Okoro',
    role: 'HR Manager',
    image:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&q=80',
  },
  {
    name: 'Olukemi Fasuan',
    role: 'Financial Controller',
    image:
      'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=600&q=80',
  },
  {
    name: 'Sylvester Shih',
    role: 'Chief Operating Officer',
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80',
  },
  {
    name: 'Kelvin Ajieh',
    role: 'Marketing and Communications Manager',
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80',
  },
  {
    name: 'Godwin Ikehi',
    role: 'Laboratory Manager',
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=600&q=80',
  },
  {
    name: 'Abimbola Aransiola',
    role: 'Pharmacy Manager',
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964d31f?w=600&q=80',
  },
  {
    name: 'Ebunoluwa sanni',
    role: 'Nursing Manager',
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80',
  },
  {
    name: 'Ijeoma Ezimoha',
    role: 'Patient Services Manager',
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=600&q=80',
  },
  {
    name: 'Bassey Ekpe',
    role: 'IT Manager',
    image:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80',
  },
]

const innovationCategories = [
  {
    title: 'Interventional Radiology & Vascular',
    items: [
      'First scrotal varicocele embolization',
      'First celiac & hypogastric plexus block (for cancer/pancreatitis pain)',
      'First central venous obstruction (SVC syndrome) stenting',
      'First direct translumbar IVC dialysis catheter placement',
      'First below-knee arterial recanalization',
      'First endovascular iliac artery endograft',
      'First transarterial chemoembolization (TACE) and microwave ablation for liver cancer',
    ],
  },
  {
    title: 'Structural Heart & Interventional Cardiology',
    items: [
      'First stenting of aortic coarctation in Nigeria',
      'First ASD device closure in Nigeria’s youngest patient (9 years)',
      'First PFO (hole-in-the-heart) device closure',
      'First Transcatheter Aortic Valve Implantation (TAVI)',
      'First device closure of ruptured sinus of Valsalva aneurysm',
    ],
  },
  {
    title: 'Urology (with IR collaboration)',
    items: [
      'First prostate artery embolization (PAE) for benign prostatic hyperplasia',
      'Minimally invasive nephrostomy and ureteric stenting',
      'Advanced laser lithotripsy and endourological procedures',
    ],
  },
  {
    title: 'Spine Surgery',
    items: [
      'Minimally invasive spinal decompression and fusion',
      'Percutaneous vertebroplasty and kyphoplasty for vertebral compression fractures',
      'Endoscopic discectomy with rapid mobilization and enhanced recovery',
    ],
  },
]

const AboutBeaconHealth = () => {
  const [openAccordion, setOpenAccordion] = useState(0)

  const toggleAccordion = (index) => {
    setOpenAccordion((prev) => (prev === index ? -1 : index))
  }

  return (
    <div className="about-page">
      {/* ================================================
          1. ABOUT BEACON HEALTH (HERO BANNER)
          ================================================ */}
      <section className="about-hero" id="about-hero">
        <div className="about-hero__overlay" />

        {/* ECG pulse watermark */}
        <div className="about-hero__watermark" aria-hidden="true">
          <svg
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="about-hero__watermark-svg"
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

        <div className="about-hero__container container">
          <div className="about-hero__content">
            <h1 className="about-hero__title">About Beacon Health</h1>
            <p className="about-hero__text">
              Founded in 2017, Beacon Health is a state-of-the-art multi-specialty hospital
              located in Victoria Island, Lagos. We combine global medical expertise
              with advanced technology to deliver exceptional care across key specialties.
            </p>
            <p className="about-hero__text">
              A wholly-owned subsidiary of Iwosan Investment Limited, we are redefining
              private healthcare in Nigeria through precision, innovation, and compassion—so
              you no longer need to travel abroad for the very best treatment.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          2. WORLD CLASS HEALTHCARE, RIGHT HERE AT HOME
          ================================================ */}
      <section className="about-intro">
        <div className="about-intro__container container">
          <div className="about-intro__grid">
            <div className="about-intro__image-wrap">
              <img
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900&q=80"
                alt="Medical specialist consulting with patient in modern diagnostic suite"
                className="about-intro__image"
                loading="lazy"
              />
            </div>

            <div className="about-intro__text-wrap">
              <h2 className="about-intro__title">
                World Class Healthcare,<br />Right Here at Home.
              </h2>
              <p className="about-intro__paragraph">
                At Beacon Health, we believe you shouldn’t have to travel abroad to access
                world-class healthcare. We bring international standards of medicine to
                Nigeria, combining advanced technology, globally trained specialists,
                and personalised care under one roof. For patients who expect the very best,
                Beacon Health offers the expertise, precision, and compassion found in the
                world’s leading medical centers, delivered with the comfort and convenience
                of being close to home.
              </p>
              <p className="about-intro__paragraph">
                Our commitment goes beyond clinical excellence. From the moment you
                arrive, our dedicated patient liaisons, cutting-edge facilities, and
                multidisciplinary teams ensure that your journey is smooth, discreet,
                and tailored to your unique needs.
              </p>
              <p className="about-intro__paragraph">
                At Beacon Health, we are redefining private healthcare in Nigeria, setting a
                new benchmark where innovation meets empathy, and where every patient
                receives care that is both globally advanced, yet personalized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          3. BEACON HEALTH MISSION AND VISION
          ================================================ */}
      <section className="about-mission" id="about-mission">
        <div className="about-mission__container container">
          <p className="about-mission__subtitle">BEACON HEALTH MISSION AND VISION</p>
          <h2 className="about-mission__title">
            To deliver world-class, patient-focused care using advanced medical
            technology, evidence-based protocols, and a compassionate approach.
          </h2>

          <div className="about-mission__cards">
            {missionCards.map((text, index) => (
              <div className="about-mission__card" key={index}>
                <p className="about-mission__card-text">{text}</p>
                <div className="about-mission__card-bar" />
              </div>
            ))}
          </div>

          <div className="about-mission__vision">
            <blockquote className="about-mission__quote">
              “ To become the private healthcare provider of choice by delivering
              patient-centric and result-driven specialist services.”
            </blockquote>
          </div>
        </div>
      </section>

      {/* ================================================
          4. BEACON HEALTH CORE VALUES
          ================================================ */}
      <section className="about-values">
        <div className="about-values__container container">
          <p className="about-values__subtitle">BEACON HEALTH CORE VALUES</p>
          <h2 className="about-values__title">
            Our guiding principles for delivering world-class healthcare.
          </h2>

          <div className="about-values__grid">
            {coreValues.map((value, index) => (
              <div className="about-values__item" key={index}>
                <div className="about-values__header">
                  <div className="about-values__icon">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="about-values__svg"
                      aria-hidden="true"
                    >
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <h3 className="about-values__name">{value.title}</h3>
                </div>
                <p className="about-values__desc">{value.description}</p>
                <div className="about-values__divider" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          5. QUALITY & SAFETY
          ================================================ */}
      <section className="about-safety">
        <div className="about-safety__container container">
          <p className="about-safety__subtitle">QUALITY &amp; SAFETY</p>
          <h2 className="about-safety__title">
            We follow global safety protocols and rigorous infection control
            measures. Every procedure is supported by a dedicated safety
            team—because your health deserves complete confidence.
          </h2>
        </div>
      </section>

      {/* ================================================
          6. CENTRES OF EXCELLENCE
          ================================================ */}
      <section className="about-centres">
        <div className="about-centres__container container">
          <div className="about-centres__grid">
            <div className="about-centres__image-wrap">
              <img
                src={centresOfExcellenceImg}
                alt="Doctor consulting with patient at Beacon Health Centres of Excellence"
                className="about-centres__image"
                loading="lazy"
              />
            </div>

            <div className="about-centres__text-wrap">
              <h2 className="about-centres__title">Centres of Excellence</h2>
              <p className="about-centres__lead">Specialist care across:</p>

              <ul className="about-centres__list">
                {centresOfExcellence.map((item, index) => (
                  <li key={index} className="about-centres__item">
                    <span className="about-centres__bullet">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          7. OUR LEADERSHIP EXPERTISE
          Matches screenshot:
          - Subtitle: OUR LEADERSHIP EXPERTISE
          - Title: A diverse team driven by expertise, compassion, and commitment.
          - 4-column cards with rounded rectangle portraits, bold name, and role below
          ================================================ */}
      <section className="about-leadership" id="about-leadership">
        <div className="about-leadership__container container">
          <div className="about-leadership__header">
            <p className="about-leadership__subtitle">OUR LEADERSHIP EXPERTISE</p>
            <h2 className="about-leadership__title">
              A diverse team driven by expertise, compassion, and commitment.
            </h2>
          </div>

          <div className="about-leadership__grid">
            {leadershipTeam.map((leader, index) => (
              <article className="about-leadership__card" key={index}>
                <div className="about-leadership__photo-wrap">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="about-leadership__photo"
                    loading="lazy"
                  />
                </div>
                <div className="about-leadership__meta">
                  <h3 className="about-leadership__name">{leader.name}</h3>
                  <p className="about-leadership__role">{leader.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          8. INNOVATION & TECHNOLOGY
          Matches screenshot:
          - 2-column layout on white background
          - Left: tall rounded image with radiologist viewing CT/MRI monitor
          - Right: "Innovation & Technology" title, paragraph, and interactive accordion
          ================================================ */}
      <section className="about-innovation">
        <div className="about-innovation__container container">
          <div className="about-innovation__layout">
            {/* Left Column: Image */}
            <div className="about-innovation__media-wrap">
              <img
                src={innovationTechImg}
                alt="Radiologist examining high-resolution scan on medical diagnostic monitor"
                className="about-innovation__media-img"
                loading="lazy"
              />
            </div>

            {/* Right Column: Title, Intro & Accordion */}
            <div className="about-innovation__content">
              <h2 className="about-innovation__title">Innovation &amp; Technology</h2>

              <p className="about-innovation__intro">
                From high-resolution MRI and CT scanners to minimally invasive surgical
                systems, we use cutting-edge technology to ensure faster diagnoses, safer
                treatments, and better results. We have led innovation in the healthcare
                sector in Nigeria delivering notable firsts:
              </p>

              {/* Accordion list */}
              <div className="about-innovation__accordion">
                {innovationCategories.map((category, index) => {
                  const isOpen = openAccordion === index
                  return (
                    <div
                      className={`about-innovation__accordion-item ${
                        isOpen ? 'about-innovation__accordion-item--open' : ''
                      }`}
                      key={index}
                    >
                      <button
                        type="button"
                        className="about-innovation__accordion-header"
                        onClick={() => toggleAccordion(index)}
                        aria-expanded={isOpen}
                      >
                        <span className="about-innovation__accordion-title">
                          {category.title}
                        </span>
                        <span className="about-innovation__accordion-chevron">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className={`about-innovation__chevron-svg ${
                              isOpen ? 'about-innovation__chevron-svg--open' : ''
                            }`}
                            aria-hidden="true"
                          >
                            <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
                            <polyline points="8 14 12 10 16 14" />
                          </svg>
                        </span>
                      </button>

                      {isOpen && (
                        <div className="about-innovation__accordion-body">
                          <ul className="about-innovation__bullets">
                            {category.items.map((item, itemIdx) => (
                              <li key={itemIdx} className="about-innovation__bullet-item">
                                <span className="about-innovation__bullet-dot">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default AboutBeaconHealth
