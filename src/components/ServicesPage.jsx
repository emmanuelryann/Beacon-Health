import { useState, useMemo } from 'react'
import interventionalCardiologyImg from '../images/interventional cardiology.jpg'
import interventionalRadiologyImg from '../images/interventional radiology.jpg'
import adultAndPediatricImg from '../images/adult_and_pedriatic_cardiology.jpg'
import bariatricImg from '../images/Bariatic_and_weight_loss_surgery.png'
import generalSurgeryImg from '../images/general surgery.jpg'
import gastroenterologyImg from '../images/gastroentronology.jpg'
import orthopedicSurgeryImg from '../images/orthopedic surgery.jpg'
import radiologyImg from '../images/radiology.jpg'
import urologyImg from '../images/urology.jpg'
import familyGeriatricImg from '../images/family and geriatic medicine.jpg'
import generalMedicineImg from '../images/general medicine.jpg'
import neurologyImg from '../images/neurology and neurosurgery.jpg'
import endocrinologyImg from '../images/endocrinology.jpg'
import nutritionWellnessImg from '../images/nutrition and wellness.jpg'
import breastSurgeryImg from '../images/breast_surgery.jpg'
import dermatologyImg from '../images/dermatology.jpg'
import '../styles/ServicesPage.css'

const allServices = [
  {
    id: 1,
    title: 'Interventional Cardiology',
    description:
      'Our expert cardiologists provide advanced heart care, from diagnostics to complex interventions. Using the latest technology and evidence-based treatments, we help you protect and restore your heart health with precision and compassion.',
    image: interventionalCardiologyImg,
  },
  {
    id: 2,
    title: 'Interventional Radiology',
    description:
      'We provide cutting-edge, image-guided procedures that diagnose and treat conditions with less discomfort and faster recovery. From targeted therapies to vascular interventions, our Interventional Radiology specialists combine technology and expertise to deliver outstanding outcomes.',
    image: interventionalRadiologyImg,
  },
  {
    id: 3,
    title: 'Adult & Pediatric Cardiology',
    description:
      'From newborns to adults, our cardiology specialists offer comprehensive heart care. We diagnose and treat congenital heart defects, rhythm disorders, and complex cardiac conditions, ensuring every patient receives age-appropriate, compassionate care.',
    image: adultAndPediatricImg,
  },
  {
    id: 4,
    title: 'Bariatric & Weight Loss Surgery',
    description:
      'Our Bariatric Surgery program supports patients on their weight-loss journey with tailored surgical and non-surgical options. We focus on long-term health improvements, helping reduce obesity-related risks and enhancing overall well-being.',
    image: bariatricImg,
  },
  {
    id: 5,
    title: 'General Surgery',
    description:
      'Our General Surgery team is skilled in a wide range of procedures, from hernia repairs to complex abdominal surgeries. We prioritize patient safety, careful planning, and post-operative care to promote fast recovery and optimal results.',
    image: generalSurgeryImg,
  },
  {
    id: 6,
    title: 'Gastroenterology',
    description:
      'We provide expert care for digestive health, diagnosing and treating conditions of the stomach, intestines, liver, and pancreas. Our gastroenterologists use advanced endoscopic techniques for accurate diagnosis and effective treatment.',
    image: gastroenterologyImg,
  },
  {
    id: 7,
    title: 'Orthopedic Surgery',
    description:
      'Whether it’s a sports injury, joint pain, or complex surgery, our orthopedic specialists and surgeons deliver solutions to restore movement and quality of life. We focus on minimally invasive techniques to help patients regain mobility, reduce pain, and return to active lifestyles with personalized treatment plans.',
    image: orthopedicSurgeryImg,
  },
  {
    id: 8,
    title: 'Radiology',
    description:
      'With advanced imaging technology, our Radiology department offers precise diagnostic services including MRI, CT scans, mammography, and X-rays. We provide fast, accurate diagnoses to guide effective treatment plans.',
    image: radiologyImg,
  },
  {
    id: 9,
    title: 'Urology',
    description:
      'We offer comprehensive care for urinary tract and reproductive health issues. From kidney stones to prostate conditions, our urologists use advanced diagnostics and tailored treatments for the best possible outcomes.',
    image: urologyImg,
  },
  {
    id: 10,
    title: 'Family & Geriatric Medicine',
    description:
      'We provide ongoing, personalized care for every stage of life. Our physicians manage chronic conditions, preventive health, and complex needs of older adults with a focus on quality of life and independence.',
    image: familyGeriatricImg,
  },
  {
    id: 11,
    title: 'General Medicine',
    description:
      'Our General Medicine department delivers expert diagnosis and management of a broad spectrum of health concerns. We coordinate care across specialties, ensuring patients receive timely, effective, and compassionate treatment.',
    image: generalMedicineImg,
  },
  {
    id: 12,
    title: 'Neurology & Neurosurgery',
    description:
      'Our Neurology and Neurosurgery team diagnoses and treats conditions of the brain, spine, and nervous system. From migraines to complex neurosurgical procedures, we provide integrated, patient-centered care.',
    image: neurologyImg,
  },
  {
    id: 13,
    title: 'Endocrinology & Diabetology',
    description:
      'We manage hormonal and metabolic disorders, including diabetes, thyroid disease, and adrenal conditions. Our specialists work closely with patients to optimize treatment and improve long-term health.',
    image: endocrinologyImg,
  },
  {
    id: 14,
    title: 'Nutrition and Wellness',
    description:
      'Our nutritionists provide personalized dietary plans to support weight management, chronic disease prevention, and overall wellness. We combine scientific expertise with practical advice for sustainable results.',
    image: nutritionWellnessImg,
  },
  {
    id: 15,
    title: 'Breast Surgery',
    description:
      'We offer advanced surgical care for benign and malignant breast conditions. Our approach is compassionate, precise, and tailored to each patient’s needs, with a focus on both health and aesthetics.',
    image: breastSurgeryImg,
  },
  {
    id: 16,
    title: 'Dermatology',
    description:
      'Our dermatologists diagnose and treat skin, hair, and nail conditions, offering both medical and aesthetic dermatology services. We use the latest techniques to promote healthy skin and confidence.',
    image: dermatologyImg,
  },
]

const ServicesPage = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [sortAsc, setSortAsc] = useState(true)

  const filteredServices = useMemo(() => {
    let list = allServices.filter(
      (s) =>
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    list = [...list].sort((a, b) => {
      return sortAsc
        ? a.title.localeCompare(b.title)
        : b.title.localeCompare(a.title)
    })

    return list
  }, [searchQuery, sortAsc])

  return (
    <div className="services-page">
      {/* ================================================
          1. HERO BANNER
          ================================================ */}
      <section className="services-page__hero">
        <div className="services-page__hero-overlay" />

        {/* ECG pulse watermark */}
        <div className="services-page__hero-watermark" aria-hidden="true">
          <svg
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="services-page__hero-watermark-svg"
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

        <div className="services-page__hero-container container">
          <div className="services-page__hero-content">
            <h1 className="services-page__hero-title">Our Services</h1>
            <p className="services-page__hero-text">
              At Beacon Health, we deliver premium medical care tailored to your
              needs—led by internationally trained specialists, powered by advanced
              diagnostics, and grounded in genuine compassion.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          2. SEARCH & SORT BAR + SERVICES GRID
          ================================================ */}
      <section className="services-page__body">
        <div className="services-page__container container">
          {/* Controls Bar: Search Input & Sort Button */}
          <div className="services-page__controls">
            <div className="services-page__search-wrap">
              <span className="services-page__search-icon" aria-hidden="true">
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
                placeholder="Search for a medical specialty"
                className="services-page__search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search for a medical specialty"
              />
            </div>

            <button
              type="button"
              className="services-page__sort-btn"
              onClick={() => setSortAsc((prev) => !prev)}
              aria-label="Sort services"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="services-page__sort-icon"
                aria-hidden="true"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <polyline points="19 12 12 19 5 12" />
              </svg>
              <span>Sort by</span>
            </button>
          </div>

          {/* 4-Column Grid of 16 Services */}
          <div className="services-page__grid">
            {filteredServices.map((service) => (
              <article className="services-page__card" key={service.id}>
                <div className="services-page__card-image-wrap">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="services-page__card-image"
                    loading="lazy"
                  />
                </div>

                <div className="services-page__card-body">
                  <h2 className="services-page__card-title">{service.title}</h2>
                  <p className="services-page__card-desc">
                    {service.description}
                  </p>
                  <a href="#contact" className="services-page__card-btn">
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>

          {filteredServices.length === 0 && (
            <div className="services-page__empty">
              <p>No specialties found matching "{searchQuery}".</p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default ServicesPage
