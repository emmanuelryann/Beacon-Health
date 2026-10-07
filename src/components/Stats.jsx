import '../styles/Stats.css'

const stats = [
  { number: '25+', label: 'Years of Experience' },
  { number: '50,000+', label: 'Happy Patients' },
  { number: '15+', label: 'Expert Specialists' },
  { number: '30,000+', label: 'Successful Surgeries' },
]

const Stats = () => {
  return (
    <section className="stats">
      <div className="stats__overlay" />
      <div className="stats__container container">
        {stats.map((stat, index) => (
          <div className="stats__item" key={index}>
            <span className="stats__number">{stat.number}</span>
            <span className="stats__label">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Stats
