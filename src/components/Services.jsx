import adultAndPediatricImg from '../images/adult_and_pedriatic_cardiology.jpg'
import radiologyImg from '../images/radiology.jpg'
import '../styles/Services.css'

const services = [
  {
    title: 'Adult & Pediatric Cardiology',
    description:
      'From newborns to adults, our cardiology specialists offer comprehensive heart care. We diagnose and treat congenital heart defects, rhythm disorders, and complex cardiac conditions, ensuring every patient receives age-appropriate, compassionate care.',
    image: adultAndPediatricImg,
    link: '#contact',
  },
  {
    title: 'Radiology',
    description:
      'State-of-the-art diagnostic imaging utilizing cutting-edge MRI, CT scanners, and digital radiography for accurate, rapid clinical insights and patient-centered diagnostic precision.',
    image: radiologyImg,
    link: '#contact',
  },
]

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__container container">
        <div className="services__layout">
          {/* Left Column: Heading & Description */}
          <div className="services__info">
            <p className="services__subtitle">OUR SERVICES</p>
            <h2 className="services__title">Excellence in Every Specialty</h2>
            <p className="services__description">
              At Beacon Health, we offer a full spectrum of medical services designed
              for individuals who expect nothing less than excellence. From advanced
              diagnostics to minimally invasive procedures and complex surgeries,
              every service is delivered by specialists with global training and deep
              local insight. Whether you need preventive care or a second opinion on a
              serious condition, our multidisciplinary teams work collaboratively to
              deliver clear answers, rapid access, and the highest level of medical
              precision.
            </p>

            <a href="#contact" className="services__view-all-btn">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="services__search-icon"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="M21 21 L16.65 16.65" />
              </svg>
              <span>
                View all <strong>Services</strong>
              </span>
            </a>
          </div>

          {/* Right Column: Two Services Cards Beside Each Other */}
          <div className="services__grid">
            {services.map((service, index) => (
              <article className="services__card" key={index}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="services__card-bg"
                  loading="lazy"
                />
                <div className="services__card-overlay" />

                <div className="services__card-body">
                  <h3 className="services__card-title">{service.title}</h3>
                  <p className="services__card-desc">{service.description}</p>
                  <a href={service.link} className="services__card-btn">
                    Learn More
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
