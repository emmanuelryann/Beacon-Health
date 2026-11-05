import { useState, useEffect } from 'react'
import '../styles/BookAppointment.css'

const BookAppointment = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    natureOfEnquiry: '',
    message: '',
    contactPreference: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      natureOfEnquiry: '',
      message: '',
      contactPreference: '',
    })
    setSubmitted(false)
  }

  return (
    <div className="enquiry-page">
      {/* ================================================
          1. HERO HEADER BANNER
          ================================================ */}
      <section className="enquiry-hero" id="appointment">
        <div className="enquiry-hero__container container">
          <h1 className="enquiry-hero__title">Enquiry Form</h1>

          <p className="enquiry-hero__text">
            If your query is urgent please contact us via the phone number for the fastest response
          </p>

          <p className="enquiry-hero__text">
            For general enquiries and appointments, please contact the hospital on{' '}
            <a href="tel:+2349063498314" className="enquiry-hero__phone-link">
              <strong>+234 906 349 8314</strong>
            </a>
            . Alternatively fill in the form below and we will contact you asap.
          </p>

          <p className="enquiry-hero__text">Please fill in your details</p>

          <p className="enquiry-hero__text enquiry-hero__text--required">
            *Indicates required fields
          </p>
        </div>
      </section>

      {/* ================================================
          2. FORM BODY SECTION
          ================================================ */}
      <section className="enquiry-body">
        <div className="enquiry-body__container container">
          {submitted ? (
            <div className="enquiry-form__success" role="alert">
              <div className="enquiry-form__success-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="enquiry-form__success-title">Thank you for your enquiry</h2>
              <p className="enquiry-form__success-text">
                Your request has been received. A member of the Beacon Health medical team will contact you shortly via your preferred communication channel.
              </p>
              <button
                type="button"
                className="enquiry-form__reset-btn"
                onClick={handleReset}
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form className="enquiry-form" onSubmit={handleSubmit} noValidate={false}>
              {/* Row 1: First Name & Last Name */}
              <div className="enquiry-form__row-two">
                <div className="enquiry-form__field">
                  <label htmlFor="firstName" className="enquiry-form__label">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="enquiry-form__input"
                    value={formData.firstName}
                    onChange={handleChange}
                    autoComplete="given-name"
                  />
                </div>

                <div className="enquiry-form__field">
                  <label htmlFor="lastName" className="enquiry-form__label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="enquiry-form__input"
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                  />
                </div>
              </div>

              {/* Row 2: Email Address* & Phone Number* */}
              <div className="enquiry-form__row-two">
                <div className="enquiry-form__field">
                  <label htmlFor="email" className="enquiry-form__label">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="enquiry-form__input"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                  />
                </div>

                <div className="enquiry-form__field">
                  <label htmlFor="phone" className="enquiry-form__label">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="enquiry-form__input"
                    value={formData.phone}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>
              </div>

              {/* Row 3: Nature of Enquiry */}
              <div className="enquiry-form__field">
                <label htmlFor="natureOfEnquiry" className="enquiry-form__label">
                  Nature of Enquiry
                </label>
                <div className="enquiry-form__select-wrap">
                  <select
                    id="natureOfEnquiry"
                    name="natureOfEnquiry"
                    className="enquiry-form__select"
                    value={formData.natureOfEnquiry}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="Cardiology">Interventional Cardiology</option>
                    <option value="Radiology">Interventional Radiology</option>
                    <option value="General Consultation">General Doctor Consultation</option>
                    <option value="Surgery">General / Orthopedic Surgery</option>
                    <option value="Gastroenterology">Gastroenterology</option>
                    <option value="Urology">Urology</option>
                    <option value="Health Checkup">Comprehensive Health Screening</option>
                    <option value="Other">Other Specialist Enquiry</option>
                  </select>
                  <div className="enquiry-form__select-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="enquiry-form__chevron-svg"
                    >
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline points="8.5 10.5 12 14 15.5 10.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Row 4: Message */}
              <div className="enquiry-form__field">
                <label htmlFor="message" className="enquiry-form__label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  className="enquiry-form__textarea"
                  value={formData.message}
                  onChange={handleChange}
                />
              </div>

              {/* Row 5: How would you like us to contact you? */}
              <div className="enquiry-form__field">
                <label htmlFor="contactPreference" className="enquiry-form__label">
                  How would you like us to contact you?
                </label>
                <div className="enquiry-form__select-wrap">
                  <select
                    id="contactPreference"
                    name="contactPreference"
                    className="enquiry-form__select"
                    value={formData.contactPreference}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    <option value="Phone Call">Phone Call</option>
                    <option value="Email">Email</option>
                    <option value="WhatsApp">WhatsApp</option>
                  </select>
                  <div className="enquiry-form__select-icon" aria-hidden="true">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="enquiry-form__chevron-svg"
                    >
                      <circle cx="12" cy="12" r="9.5" />
                      <polyline points="8.5 10.5 12 14 15.5 10.5" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Disclaimer */}
              <p className="enquiry-form__disclaimer">
                We won't share your contact information with anyone outside of Beacon Health
              </p>

              {/* Submit Button */}
              <div className="enquiry-form__submit-wrap">
                <button type="submit" className="enquiry-form__submit-btn">
                  Submit
                </button>
              </div>
            </form>
          )}
        </div>
      </section>
    </div>
  )
}

export default BookAppointment
