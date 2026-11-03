import '../styles/CTA.css'

const ctaActions = [
  {
    label: 'Book Appointment',
    href: '#appointment',
    icon: (
      <svg
        className="cta__btn-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Careers at Euracare',
    href: '#careers',
    icon: (
      <svg
        className="cta__btn-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    ),
  },
  {
    label: 'Find a doctor',
    href: '#specialists',
    icon: (
      <svg
        className="cta__btn-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <polyline points="20 6 9 17 4 12" />
      </svg>
    ),
  },
  {
    label: 'Insurance & Payment Info',
    href: '#insurance',
    icon: (
      <svg
        className="cta__btn-icon"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <line x1="2" y1="10" x2="22" y2="10" />
      </svg>
    ),
  },
]

const CTA = ({ onNavigate }) => {
  return (
    <section className="cta" id="cta">
      <div className="cta__container container">
        {/* Top Row: EURACARE Logo + Enquiries Phone */}
        <div className="cta__top">
          <div className="cta__logo" aria-label="Euracare">
            <svg
              className="cta__logo-svg"
              viewBox="0 0 220 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 30 H20 L25 20 L31 38 L38 8 L46 34 L52 26 L58 30 H218"
                stroke="#12435c"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <text
                x="64"
                y="24"
                fontFamily="'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
                fontSize="22"
                fontWeight="700"
                letterSpacing="1.2"
                fill="#12435c"
              >
                EURACARE
              </text>
            </svg>
          </div>

          <div className="cta__enquiry">
            <span className="cta__enquiry-label">Enquiries &amp; Appointments: </span>
            <a href="tel:+2349094444413" className="cta__enquiry-phone">
              +234 909 444 4413
            </a>
          </div>
        </div>

        {/* Bottom Row: 4 Pill Action Buttons */}
        <div className="cta__actions">
          {ctaActions.map((action, index) => (
            <a
              key={index}
              href={action.href}
              className="cta__btn"
              onClick={(e) => {
                if (action.label === 'Book Appointment' && onNavigate) {
                  e.preventDefault()
                  onNavigate('appointment')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }
              }}
            >
              {action.icon}
              <span>{action.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CTA
