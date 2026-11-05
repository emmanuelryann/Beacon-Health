import '../styles/WhyChooseUs.css'

const WhyChooseUs = () => {
  return (
    <section className="welcome" id="about">
      <div className="welcome__container container">
        <div className="welcome__content">
          {/* Left Column: Text Content */}
          <div className="welcome__text">
            <h2 className="welcome__title">
              Welcome to Beacon Health<br />Multispecialty Hospital
            </h2>

            <p className="welcome__paragraph">
              Beacon Health is a leading multispecialty hospital in Lagos, redefining healthcare
              in Nigeria. We bring global medical standards home—offering cutting-edge
              treatments, world-class expertise, state-of-the-art technology, and truly
              personalised care—ensuring every patient receives the attention, comfort, and
              excellence they deserve.
            </p>

            <p className="welcome__paragraph">
              You no longer need to travel abroad to receive the highest standard of care.
              At Beacon Health, we deliver world-class medical expertise, advanced diagnostics,
              and personalised attention—right here in Lagos. Whether it’s a routine check-up
              or a complex procedure, your health is in expert hands, close to home.
            </p>

            <h3 className="welcome__tagline">
              Our Mission is Health, Our Specialty is You!
            </h3>
          </div>

          {/* Right Column: Virtual Tour Video Card with Random Medical Image */}
          <div className="welcome__media">
            <div className="welcome__video-card">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1000&q=80"
                alt="Beacon Health Multi-Specialist Hospital facility"
                className="welcome__video-thumbnail"
                loading="lazy"
              />

              {/* Top video info overlay */}
              <div className="welcome__video-header">
                <div className="welcome__video-avatar">
                  <span className="welcome__avatar-initials">BH</span>
                </div>
                <div className="welcome__video-meta">
                  <p className="welcome__video-title">
                    Take the virtual tour of Beacon Health Multi-Specialist Hosp...
                  </p>
                  <span className="welcome__video-channel">Beacon Health</span>
                </div>
              </div>

              {/* YouTube-style Play Button */}
              <div className="welcome__play-btn" aria-label="Play virtual tour">
                <svg
                  viewBox="0 0 68 48"
                  className="welcome__play-icon"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M66.52 7.74c-.78-2.93-3.09-5.24-6.02-6.02C55.22 0 34 0 34 0S12.78 0 7.5 1.72c-2.93.78-5.24 3.09-6.02 6.02C0 13.02 0 24 0 24s0 10.98 1.48 16.26c.78 2.93 3.09 5.24 6.02 6.02C12.78 48 34 48 34 48s21.22 0 26.5-1.72c2.93-.78 5.24-3.09 6.02-6.02C68 34.98 68 24 68 24s0-10.98-1.48-16.26z"
                    fill="#FF0000"
                  />
                  <path d="M45 24L27 14v20l18-10z" fill="#FFFFFF" />
                </svg>
              </div>

              {/* Bottom controls overlay */}
              <div className="welcome__video-footer">
                <button
                  type="button"
                  className="welcome__video-share-btn"
                  aria-label="Share video link"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="welcome__share-icon"
                  >
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                  </svg>
                </button>

                <div className="welcome__youtube-badge">
                  <span>Watch on</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="#FFFFFF"
                    className="welcome__yt-logo"
                  >
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.5 12 3.5 12 3.5s-7.505 0-9.377.55a3.016 3.016 0 0 0-2.122 2.136C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.55 9.376.55 9.376.55s7.505 0 9.377-.55a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                  <span className="welcome__yt-text">YouTube</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
