import '../styles/WhyChooseUs.css'

const features = [
  {
    icon: '👨‍⚕️',
    title: 'Expert Ophthalmologists',
    description:
      'Our team of internationally trained eye care specialists bring decades of combined experience to deliver world-class treatment.',
  },
  {
    icon: '🔬',
    title: 'Advanced Diagnostics',
    description:
      'Equipped with cutting-edge diagnostic technology including OCT, visual field analyzers, and digital retinal imaging.',
  },
  {
    icon: '🏥',
    title: 'Comprehensive Care',
    description:
      'From routine eye exams to complex surgical procedures, we provide a full spectrum of ophthalmic services under one roof.',
  },
  {
    icon: '❤️',
    title: 'Patient-Centered Approach',
    description:
      'We prioritize your comfort and understanding, ensuring personalized care plans tailored to your unique visual needs.',
  },
]

const WhyChooseUs = () => {
  return (
    <section className="why-choose" id="about">
      <div className="why-choose__container container">
        <div className="why-choose__header">
          <p className="section-subtitle">Why Choose Us</p>
          <h2 className="section-title">Delivering Excellence in Eye Care</h2>
          <p className="section-description">
            At Beacon Health, we combine expertise, technology, and compassion to
            provide you with the best possible eye care experience.
          </p>
        </div>

        <div className="why-choose__grid">
          {features.map((feature, index) => (
            <article className="why-choose__card" key={index}>
              <div className="why-choose__icon">{feature.icon}</div>
              <h3 className="why-choose__card-title">{feature.title}</h3>
              <p className="why-choose__card-desc">{feature.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
