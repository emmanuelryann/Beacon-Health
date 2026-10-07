import '../styles/Testimonials.css'

const testimonials = [
  {
    quote:
      'The surgical team restored my vision completely after years of battling cataracts. The care and attention to detail from the doctors and nurses were truly world-class.',
    name: 'Adaobi Okari',
    role: 'Cataract Surgery Patient',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
    rating: 5,
  },
  {
    quote:
      'Having LASIK at Beacon Health was one of the best decisions I have made. No more glasses, clear 20/20 vision, and the procedure took only a few minutes with zero discomfort.',
    name: 'Tunde Adeleke',
    role: 'LASIK Patient',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
    rating: 5,
  },
  {
    quote:
      'Their pediatric ophthalmology department handled my daughter’s strabismus with exceptional gentleness and expertise. We are forever grateful to Dr. Eze and the clinic.',
    name: 'Fatima Bello',
    role: 'Parent of Pediatric Patient',
    avatar:
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80',
    rating: 5,
  },
]

const Testimonials = () => {
  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials__container container">
        <div className="testimonials__header">
          <p className="section-subtitle">Testimonials</p>
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-description">
            Read inspiring stories from individuals whose vision and quality of life
            have been transformed by our dedicated team of eye specialists.
          </p>
        </div>

        <div className="testimonials__grid">
          {testimonials.map((item, index) => (
            <article className="testimonials__card" key={index}>
              <div className="testimonials__rating" aria-label={`${item.rating} out of 5 stars`}>
                {'★'.repeat(item.rating)}
              </div>
              <p className="testimonials__quote">"{item.quote}"</p>
              <div className="testimonials__author">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="testimonials__avatar"
                  loading="lazy"
                />
                <div className="testimonials__info">
                  <h3 className="testimonials__name">{item.name}</h3>
                  <p className="testimonials__role">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
