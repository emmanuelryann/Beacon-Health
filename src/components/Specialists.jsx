import '../styles/Specialists.css'

const doctors = [
  {
    name: 'Dr. Tosin Majekodunmi',
    specialty: 'Advanced Cardiac Imaging, Interventional Cardiology',
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
  },
  {
    name: 'Dr. Hammed Ninalowo',
    specialty: 'Interventional Radiology, Oncology',
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
  },
  {
    name: 'Dr. Owen Woghiren',
    specialty: 'Gastroenterology, General Internal Medicine',
    image:
      'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80',
  },
  {
    name: 'Dr. Abuchi Okaro',
    specialty: 'Bariatric & Weight Loss Surgery, Gastroenterology',
    image:
      'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=400&q=80',
  },
]

const Specialists = () => {
  return (
    <section className="specialists" id="specialists">
      <div className="specialists__container container">
        {/* Header with Title and "See all Doctors" Button */}
        <div className="specialists__header">
          <div className="specialists__header-text">
            <p className="specialists__subtitle">OUR DOCTORS</p>
            <h2 className="specialists__title">You are in Good Hands</h2>
          </div>

          <a href="#contact" className="specialists__see-all-btn">
            <svg
              className="specialists__see-all-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M4.5 3v5a3.5 3.5 0 0 0 7 0V3" />
              <path d="M8 11.5v4.5a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V15" />
              <circle cx="16" cy="15" r="1.5" />
            </svg>
            <span>See all Doctors</span>
          </a>
        </div>

        {/* 4 Doctors Cards Grid */}
        <div className="specialists__grid">
          {doctors.map((doctor, index) => (
            <article className="specialists__card" key={index}>
              <div className="specialists__avatar-wrap">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="specialists__avatar"
                  loading="lazy"
                />
              </div>

              <div className="specialists__card-info">
                <h3 className="specialists__name">{doctor.name}</h3>
                <p className="specialists__specialty">{doctor.specialty}</p>
              </div>

              <a href="#contact" className="specialists__profile-btn">
                View Profile
              </a>
            </article>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="specialists__pagination" aria-hidden="true">
          <span className="specialists__dot specialists__dot--active" />
          <span className="specialists__dot" />
          <span className="specialists__dot" />
        </div>
      </div>

      {/* Subtle bottom divider */}
      <div className="specialists__divider container" />
    </section>
  )
}

export default Specialists
