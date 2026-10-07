import '../styles/Specialists.css'

const specialists = [
  {
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80',
    name: 'Dr. James Okonkwo',
    specialty: 'Cataract & Refractive Surgery',
    qualifications: 'MD, FRCS (Ophth)',
  },
  {
    image:
      'https://images.unsplash.com/photo-1594824476967-48c8b964d31f?w=400&q=80',
    name: 'Dr. Amara Nwosu',
    specialty: 'Glaucoma Specialist',
    qualifications: 'MD, PhD, FRCOphth',
  },
  {
    image:
      'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
    name: 'Dr. Samuel Adeyemi',
    specialty: 'Retina & Vitreous Surgeon',
    qualifications: 'MD, FWACS',
  },
  {
    image:
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
    name: 'Dr. Chioma Eze',
    specialty: 'Pediatric Ophthalmology',
    qualifications: 'MD, MPH, FICS',
  },
]

const Specialists = () => {
  return (
    <section className="specialists" id="specialists">
      <div className="specialists__container container">
        <div className="specialists__header">
          <p className="section-subtitle">Our Specialists</p>
          <h2 className="section-title">Meet Our Expert Team</h2>
          <p className="section-description">
            Our internationally trained ophthalmologists are dedicated to
            providing the highest standard of eye care with expertise across all
            subspecialties.
          </p>
        </div>

        <div className="specialists__grid">
          {specialists.map((doctor, index) => (
            <article className="specialists__card" key={index}>
              <div className="specialists__card-image">
                <img src={doctor.image} alt={doctor.name} loading="lazy" />
              </div>
              <div className="specialists__card-info">
                <h3 className="specialists__card-name">{doctor.name}</h3>
                <p className="specialists__card-specialty">
                  {doctor.specialty}
                </p>
                <p className="specialists__card-quals">
                  {doctor.qualifications}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Specialists
