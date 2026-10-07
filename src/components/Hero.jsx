import '../styles/Hero.css'

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero__overlay" />
      <div className="hero__content container">
        <div className="hero__text">
          <p className="hero__subtitle">Welcome to Beacon Health Eye Centre</p>
          <h1 className="hero__title">
            World-Class Eye Care,{' '}
            <span>Right Where You Are</span>
          </h1>
          <p className="hero__description">
            Experience exceptional ophthalmic care from internationally trained
            specialists. Our state-of-the-art facility provides comprehensive
            eye care services, so you never have to look further for the best in
            vision health.
          </p>
          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">
              Book an Appointment
            </a>
            <a href="#services" className="btn btn-secondary">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
