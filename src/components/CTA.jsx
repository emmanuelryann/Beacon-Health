import { useState } from 'react'
import '../styles/CTA.css'

const CTA = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Cataract Surgery',
    date: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Cataract Surgery',
        date: '',
        message: '',
      })
    }, 4000)
  }

  return (
    <section className="cta-section" id="contact">
      <div className="cta-section__container container">
        <div className="cta-section__layout">
          {/* Left Column: Information */}
          <div className="cta-section__info">
            <p className="section-subtitle">Book Your Visit</p>
            <h2 className="cta-section__title">
              Ready to Experience Better Vision?
            </h2>
            <p className="cta-section__description">
              Schedule your comprehensive consultation with our world-class eye
              care specialists today. We provide customized treatment plans designed
              to protect and enhance your sight.
            </p>

            <div className="cta-section__details">
              <div className="cta-section__detail-item">
                <span className="cta-section__detail-icon">📍</span>
                <div>
                  <h4 className="cta-section__detail-heading">Location</h4>
                  <p className="cta-section__detail-text">
                    293 Younis Bashorun Street, Victoria Island, Lagos, Nigeria
                  </p>
                </div>
              </div>

              <div className="cta-section__detail-item">
                <span className="cta-section__detail-icon">📞</span>
                <div>
                  <h4 className="cta-section__detail-heading">Phone Numbers</h4>
                  <p className="cta-section__detail-text">+234 909 444 4413 / +234 1 277 8700</p>
                </div>
              </div>

              <div className="cta-section__detail-item">
                <span className="cta-section__detail-icon">⏰</span>
                <div>
                  <h4 className="cta-section__detail-heading">Working Hours</h4>
                  <p className="cta-section__detail-text">
                    Monday – Friday: 8:00 AM – 6:00 PM<br />
                    Saturday: 9:00 AM – 3:00 PM<br />
                    Emergency: 24/7 Available
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Appointment Form */}
          <div className="cta-section__form-wrapper">
            <div className="cta-section__form-card">
              <h3 className="cta-section__form-title">Request an Appointment</h3>
              <p className="cta-section__form-subtitle">
                Fill in the details below and our team will get in touch shortly.
              </p>

              {submitted ? (
                <div className="cta-section__success">
                  <span className="cta-section__success-icon">✓</span>
                  <h4>Thank You!</h4>
                  <p>Your appointment request has been received. Our liaison will contact you within 24 hours.</p>
                </div>
              ) : (
                <form className="cta-section__form" onSubmit={handleSubmit}>
                  <div className="cta-section__field-group">
                    <label className="cta-section__label" htmlFor="fullName">Full Name</label>
                    <input
                      id="fullName"
                      className="cta-section__input"
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="cta-section__row">
                    <div className="cta-section__field-group">
                      <label className="cta-section__label" htmlFor="emailAddress">Email Address</label>
                      <input
                        id="emailAddress"
                        className="cta-section__input"
                        type="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="cta-section__field-group">
                      <label className="cta-section__label" htmlFor="phoneNumber">Phone Number</label>
                      <input
                        id="phoneNumber"
                        className="cta-section__input"
                        type="tel"
                        name="phone"
                        required
                        placeholder="+234 ..."
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="cta-section__row">
                    <div className="cta-section__field-group">
                      <label className="cta-section__label" htmlFor="serviceSelection">Select Service</label>
                      <select
                        id="serviceSelection"
                        className="cta-section__select"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                      >
                        <option value="Cataract Surgery">Cataract Surgery</option>
                        <option value="LASIK & Refractive">LASIK & Refractive Surgery</option>
                        <option value="Glaucoma Treatment">Glaucoma Treatment</option>
                        <option value="Retina & Vitreous Care">Retina & Vitreous Care</option>
                        <option value="Pediatric Ophthalmology">Pediatric Ophthalmology</option>
                        <option value="Comprehensive Eye Exam">Comprehensive Eye Exam</option>
                      </select>
                    </div>
                    <div className="cta-section__field-group">
                      <label className="cta-section__label" htmlFor="preferredDate">Preferred Date</label>
                      <input
                        id="preferredDate"
                        className="cta-section__input"
                        type="date"
                        name="date"
                        required
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="cta-section__field-group">
                    <label className="cta-section__label" htmlFor="patientNotes">Notes / Symptoms (Optional)</label>
                    <textarea
                      id="patientNotes"
                      className="cta-section__textarea"
                      name="message"
                      rows="3"
                      placeholder="Describe any symptoms or specific questions..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button type="submit" className="cta-section__submit btn btn-primary">
                    Confirm Appointment Request
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
