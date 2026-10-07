import '../styles/Services.css'

const services = [
  {
    image:
      'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?w=600&q=80',
    title: 'Cataract Surgery',
    description:
      'Advanced phacoemulsification and premium intraocular lens implantation for clear, restored vision.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
    title: 'LASIK & Refractive Surgery',
    description:
      'State-of-the-art laser vision correction to reduce or eliminate your dependence on glasses and contacts.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=600&q=80',
    title: 'Glaucoma Treatment',
    description:
      'Comprehensive glaucoma management including medical therapy, laser treatment, and microsurgical procedures.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80',
    title: 'Retina & Vitreous Care',
    description:
      'Expert diagnosis and treatment of retinal conditions including macular degeneration, diabetic retinopathy, and retinal detachment.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=600&q=80',
    title: 'Pediatric Ophthalmology',
    description:
      'Specialized eye care for children, including treatment of strabismus, amblyopia, and other pediatric eye conditions.',
  },
  {
    image:
      'https://images.unsplash.com/photo-1587614382346-4ec70e388b28?w=600&q=80',
    title: 'Comprehensive Eye Exams',
    description:
      'Thorough eye evaluations using advanced diagnostic equipment to detect and manage a wide range of eye conditions.',
  },
]

const Services = () => {
  return (
    <section className="services" id="services">
      <div className="services__container container">
        <div className="services__header">
          <p className="section-subtitle">Our Services</p>
          <h2 className="section-title">Comprehensive Eye Care Services</h2>
          <p className="section-description">
            We offer a full range of ophthalmic services to meet all your eye
            care needs, from preventive care to advanced surgical procedures.
          </p>
        </div>

        <div className="services__grid">
          {services.map((service, index) => (
            <article className="services__card" key={index}>
              <div className="services__card-image">
                <img src={service.image} alt={service.title} loading="lazy" />
              </div>
              <div className="services__card-content">
                <h3 className="services__card-title">{service.title}</h3>
                <p className="services__card-desc">{service.description}</p>
                <a href="#contact" className="services__card-link">
                  Learn More <span>→</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services
