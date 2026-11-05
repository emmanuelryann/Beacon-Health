import { useState, useMemo, useEffect } from 'react'
import '../styles/Locations.css'

const locationsData = [
  {
    id: 'victoria-island',
    name: 'Euracare Multi-Specialist Hospital',
    type: 'Multi-Specialist Hospital',
    city: 'Lagos',
    address: '293 Younis Bashorun Street cnr Jide Oki Street, Victoria Island, Lagos',
    phone: '+234 909 444 4413',
    hours: '24/7 Emergency & Inpatient • 8:00 AM – 5:00 PM Consultations',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    featured: true,
  },
  {
    id: 'amuwo-odofin',
    name: 'Beaconhealth Diagnostics Amuwo Odofin',
    type: 'Beaconhealth Clinic',
    city: 'Lagos',
    address: '3B Durbar Road, Amuwo Odofin, Festac, Lagos',
    phone: '07013772582',
    hours: 'Today 8:00 AM • Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?w=800&q=80',
  },
  {
    id: 'abuja',
    name: 'Beaconhealth Diagnostics Abuja',
    type: 'Beaconhealth Clinic',
    city: 'Abuja',
    address: '6, 35 Road, 3rd Avenue, Gwarinpa, Abuja',
    phone: '08084712868',
    hours: 'Today 8:00 AM • Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=800&q=80',
  },
  {
    id: 'bodija',
    name: 'Beaconhealth Diagnostics Bodija',
    type: 'Beaconhealth Clinic',
    city: 'Ibadan',
    address: 'Suite 8&9 Al-Barakah Plaza, New Bodija Estate, Bodija Health Hub, Favos Junction, Bodija, Ibadan',
    phone: '09168692256',
    hours: 'Today 8:00 AM • Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=800&q=80',
  },
  {
    id: 'akobo',
    name: 'Beaconhealth Diagnostics Akobo',
    type: 'Beaconhealth Clinic',
    city: 'Ibadan',
    address: 'Port Front Building, Road 3, House 4, Tokyo Street, Opposite Weeldrop Petrol Station, Akobo, Ibadan',
    phone: '08139911261',
    hours: 'Today 8:00 AM • Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80',
  },
  {
    id: 'kaduna',
    name: 'Beaconhealth Diagnostics Kaduna',
    type: 'Beaconhealth Clinic',
    city: 'Kaduna',
    address: 'No 12b Constitution Road, Behind Stadium, Kaduna',
    phone: '09038028182',
    hours: 'Today 8:00 AM • Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=800&q=80',
  },
  {
    id: 'enugu',
    name: 'Beaconhealth Diagnostics Enugu',
    type: 'Beaconhealth Clinic',
    city: 'Enugu',
    address: '28 Moore House Street, Emily Restaurant, Ogui, Enugu',
    phone: '09160853430',
    hours: 'Today 8:00 AM • Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1586773860418-d37222d8fce3?w=800&q=80',
  },
  {
    id: 'kano',
    name: 'Beaconhealth Diagnostics Kano',
    type: 'Beaconhealth Clinic',
    city: 'Kano',
    address: '144 Murtala Muhammed Way, Behind GT Bank, Kano',
    phone: '09033016678',
    hours: 'Today 8:00 AM • Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1512678080530-7760d81faba6?w=800&q=80',
  },
  {
    id: 'jos',
    name: 'Beaconhealth Diagnostics Jos',
    type: 'Beaconhealth Clinic',
    city: 'Jos',
    address: '3a Utonkon Road, Hwolshe, Jos South LGA, Jos',
    phone: '08050307891',
    hours: 'Today 8:00 AM • Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=800&q=80',
  },
  {
    id: 'owerri',
    name: 'Beaconhealth Diagnostics Owerri',
    type: 'Beaconhealth Clinic',
    city: 'Owerri',
    address: "14 Musa Yar'adua Drive, By World Bank, Beside Everyday Supermarket, Owerri",
    phone: '08060231158',
    hours: 'Today 8:00 AM • Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&q=80',
  },
  {
    id: 'calabar',
    name: 'Beaconhealth Diagnostics Calabar',
    type: 'Beaconhealth Clinic',
    city: 'Calabar',
    address: 'Plot 55, Etta Agbo Road, Calabar',
    phone: '08031875240',
    hours: 'Today 8:00 AM • Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=800&q=80',
  },
  {
    id: 'lokoja',
    name: 'Beaconhealth Diagnostics Lokoja',
    type: 'Beaconhealth Clinic',
    city: 'Lokoja',
    address: "001 Toby's Plaza, Adankolo Junction, Lokoja, Kogi State",
    phone: '07070125417',
    hours: 'Today 8:00 AM • Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?w=800&q=80',
  },
  {
    id: 'ilorin',
    name: 'Beaconhealth Diagnostics Ilorin',
    type: 'Beaconhealth Clinic',
    city: 'Ilorin',
    address: '64, Ibrahim Taiwo Road, Taiwo Isale, Ilorin, Kwara State',
    phone: '08090654552',
    hours: 'Today 8:00 AM • Open until 5:00 PM',
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=800&q=80',
  },
]

const citiesList = [
  'ALL',
  'Lagos',
  'Abuja',
  'Ibadan',
  'Kano',
  'Kaduna',
  'Enugu',
  'Owerri',
  'Jos',
  'Calabar',
  'Lokoja',
  'Ilorin',
]

const Locations = ({ onNavigate = () => {} }) => {
  const [selectedCity, setSelectedCity] = useState('ALL')
  const [searchQuery, setSearchQuery] = useState('')

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  const filteredLocations = useMemo(() => {
    return locationsData.filter((loc) => {
      const matchesCity = selectedCity === 'ALL' || loc.city.toLowerCase() === selectedCity.toLowerCase()
      const matchesSearch =
        loc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.address.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.city.toLowerCase().includes(searchQuery.toLowerCase())
      return matchesCity && matchesSearch
    })
  }, [selectedCity, searchQuery])

  return (
    <div className="locations-page">
      {/* ================================================
          1. HERO BANNER
          ================================================ */}
      <section className="locations-hero">
        <div className="locations-hero__overlay" />

        {/* ECG pulse watermark */}
        <div className="locations-hero__watermark" aria-hidden="true">
          <svg
            viewBox="0 0 1200 400"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="locations-hero__watermark-svg"
          >
            <path
              d="M0 260 H420 L455 190 L490 330 L535 70 L585 310 L620 220 L655 260 H1200"
              stroke="rgba(255, 255, 255, 0.22)"
              strokeWidth="3.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className="locations-hero__container container">
          <div className="locations-hero__content">
            <h1 className="locations-hero__title">Our Locations</h1>
            <p className="locations-hero__subtitle">
              World-class diagnostic clinics and specialist hospital facilities across Nigeria.
              Find your nearest center for reliable, timely, and compassionate care.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          2. FILTER & SEARCH CONTROLS
          ================================================ */}
      <section className="locations-controls-section">
        <div className="locations-controls__container container">
          <div className="locations-controls__row">
            {/* Search Input */}
            <div className="locations-search-wrap">
              <span className="locations-search-icon" aria-hidden="true">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="7" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </span>
              <input
                type="text"
                className="locations-search-input"
                placeholder="Search by city, clinic name, or street..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                aria-label="Search locations"
              />
              {searchQuery && (
                <button
                  type="button"
                  className="locations-search-clear"
                  onClick={() => setSearchQuery('')}
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* Counter */}
            <p className="locations-count">
              Showing <strong>{filteredLocations.length}</strong> of {locationsData.length} locations
            </p>
          </div>

          {/* City Filter Pills */}
          <div className="locations-filter-pills" role="tablist" aria-label="Filter locations by city">
            {citiesList.map((city) => {
              const isActive = selectedCity === city
              return (
                <button
                  key={city}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`locations-pill-btn ${isActive ? 'locations-pill-btn--active' : ''}`}
                  onClick={() => setSelectedCity(city)}
                >
                  {city}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ================================================
          3. LOCATIONS GRID
          ================================================ */}
      <section className="locations-grid-section">
        <div className="locations-grid__container container">
          {filteredLocations.length === 0 ? (
            <div className="locations-empty">
              <h3 className="locations-empty__title">No locations found</h3>
              <p className="locations-empty__desc">
                No clinics matched your search query. Try choosing another city or clearing your search.
              </p>
              <button
                type="button"
                className="locations-empty__reset-btn"
                onClick={() => {
                  setSelectedCity('ALL')
                  setSearchQuery('')
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="locations-grid">
              {filteredLocations.map((loc) => (
                <article key={loc.id} className="location-card">
                  {/* Photo with Badge */}
                  <div className="location-card__image-wrap">
                    <img
                      src={loc.image}
                      alt={loc.name}
                      className="location-card__image"
                      loading="lazy"
                    />
                    <div className="location-card__badge-row">
                      <span className="location-card__type-badge">
                        {loc.type}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="location-card__body">
                    {/* Status with green pulse indicator */}
                    <div className="location-card__status">
                      <span className="location-card__status-dot" aria-hidden="true" />
                      <span className="location-card__status-text">{loc.hours}</span>
                    </div>

                    <h2 className="location-card__title">{loc.name}</h2>

                    <div className="location-card__details">
                      {/* Address */}
                      <div className="location-card__detail-row">
                        <svg
                          className="location-card__detail-icon"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                          <circle cx="12" cy="10" r="3" />
                        </svg>
                        <p className="location-card__address">{loc.address}</p>
                      </div>

                      {/* Phone */}
                      <div className="location-card__detail-row">
                        <svg
                          className="location-card__detail-icon"
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
                        <a href={`tel:${loc.phone}`} className="location-card__phone-link">
                          {loc.phone}
                        </a>
                      </div>
                    </div>

                    {/* Book Appointment Action */}
                    <div className="location-card__footer">
                      <button
                        type="button"
                        className="location-card__action-btn"
                        onClick={() => {
                          onNavigate('appointment')
                          window.scrollTo({ top: 0, behavior: 'auto' })
                        }}
                      >
                        Book Appointment
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default Locations
