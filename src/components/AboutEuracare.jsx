import '../styles/AboutEuracare.css'

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

const AboutEuracare = () => {
  return (
    <div className="about-page">
      {/* ================================================
          1. ABOUT EURACARE (HERO BANNER)
          ================================================ */}
      <section className="about-hero">
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
            <h1 className="about-hero__title">About Euracare</h1>
            <p className="about-hero__text">
              Founded in 2017, Euracare is a state-of-the-art multi-specialty hospital
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
                At Euracare, we believe you shouldn’t have to travel abroad to access
                world-class healthcare. We bring international standards of medicine to
                Nigeria, combining advanced technology, globally trained specialists,
                and personalised care under one roof. For patients who expect the very best,
                Euracare offers the expertise, precision, and compassion found in the
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
                At Euracare, we are redefining private healthcare in Nigeria, setting a
                new benchmark where innovation meets empathy, and where every patient
                receives care that is both globally advanced, yet personalized.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================
          3. EURACARE MISSION AND VISION
          ================================================ */}
      <section className="about-mission">
        <div className="about-mission__container container">
          <p className="about-mission__subtitle">EURACARE MISSION AND VISION</p>
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
          4. EURACARE CORE VALUES
          ================================================ */}
      <section className="about-values">
        <div className="about-values__container container">
          <p className="about-values__subtitle">EURACARE CORE VALUES</p>
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
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&q=80"
                alt="Doctor consulting with patient at Euracare Centres of Excellence"
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
    </div>
  )
}

export default AboutEuracare
