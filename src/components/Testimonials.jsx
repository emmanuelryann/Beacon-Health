import { useRef, useState, useEffect } from 'react'
import '../styles/Testimonials.css'

const testimonials = [
  {
    image:
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
    title: '“Prompt Intervention and Compassionate Heart Care”',
    author: '— Mr. Chuka Nwokedi (Interventional Cardiology)',
  },
  {
    image:
      'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
    title: '“Pain-Free Mobility and Reclaimed Independence”',
    author: '— Dr. Joy Ekenedilichukwu (Orthopedics & Joint Care)',
  },
  {
    image:
      'https://images.unsplash.com/photo-1584982751601-97dcc096659c?w=800&q=80',
    title: '“Comprehensive Diagnosis and Life-Changing Guidance”',
    author: '— Mr. Michael Alabi (Internal Medicine)',
  },
  {
    image:
      'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=800&q=80',
    title: '“Restored Vision and Exceptional Precision”',
    author: '— Mrs. Folake Adeleke (Ophthalmology)',
  },
  {
    image:
      'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
    title: '“World-Class Imaging and Swift, Accurate Results”',
    author: '— Chief Emeka Okonkwo (Diagnostic Imaging)',
  },
]

const Testimonials = () => {
  const trackRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const checkScroll = () => {
    if (!trackRef.current) return
    const { scrollLeft, scrollWidth, clientWidth } = trackRef.current
    setCanScrollLeft(scrollLeft > 10)
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10)
  }

  useEffect(() => {
    const el = trackRef.current
    if (el) {
      checkScroll()
      el.addEventListener('scroll', checkScroll)
      window.addEventListener('resize', checkScroll)
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
  }, [])

  const handleScroll = (direction) => {
    if (!trackRef.current) return
    const scrollAmount = trackRef.current.clientWidth * 0.7
    trackRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container container">
        {/* Header with Title, Description, and Horizontal Scroll Buttons */}
        <div className="testimonials__header">
          <div className="testimonials__header-text">
            <h2 className="testimonials__title">Hear from our Patients</h2>
            <p className="testimonials__description">
              We're proud to be the first choice for individuals and families who
              demand the highest standard of care. These are their words, their
              journeys, and their reasons for choosing Beacon Health.
            </p>
          </div>

          <div className="testimonials__nav">
            <button
              type="button"
              className={`testimonials__nav-btn ${
                canScrollLeft ? 'testimonials__nav-btn--active' : 'testimonials__nav-btn--disabled'
              }`}
              onClick={() => handleScroll('left')}
              aria-label="Scroll testimonials left"
              disabled={!canScrollLeft}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="testimonials__nav-icon"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <button
              type="button"
              className={`testimonials__nav-btn ${
                canScrollRight ? 'testimonials__nav-btn--active' : 'testimonials__nav-btn--disabled'
              }`}
              onClick={() => handleScroll('right')}
              aria-label="Scroll testimonials right"
              disabled={!canScrollRight}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="testimonials__nav-icon"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="testimonials__track" ref={trackRef}>
          {testimonials.map((item, index) => (
            <article className="testimonials__card" key={index}>
              {/* Card Image Area with 'Watch Video' button */}
              <div className="testimonials__card-media">
                <img
                  src={item.image}
                  alt={item.author}
                  className="testimonials__card-img"
                  loading="lazy"
                />
                <div className="testimonials__card-overlay" />
                <div className="testimonials__play-pill">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="testimonials__play-icon"
                    aria-hidden="true"
                  >
                    <polygon points="5 3 19 12 5 21 5 3" />
                  </svg>
                  <span>Watch Video</span>
                </div>
              </div>

              {/* Card Body with Quote & Author */}
              <div className="testimonials__card-body">
                <h3 className="testimonials__card-title">{item.title}</h3>
                <p className="testimonials__card-author">{item.author}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
