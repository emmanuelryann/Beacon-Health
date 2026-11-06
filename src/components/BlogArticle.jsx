import { useEffect } from 'react'
import '../styles/BlogArticle.css'

const BlogArticle = ({ onNavigate = () => {} }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [])

  return (
    <article className="blog-page">
      {/* ================================================
          HERO BANNER
          ================================================ */}
      <section className="blog-hero">
        <div className="blog-hero__overlay" />
        <div className="blog-hero__watermark" aria-hidden="true">
          <svg viewBox="0 0 1200 400" fill="none" xmlns="http://www.w3.org/2000/svg" className="blog-hero__watermark-svg">
            <path d="M0 260 H420 L455 190 L490 330 L535 70 L585 310 L620 220 L655 260 H1200" stroke="rgba(255, 255, 255, 0.22)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="blog-hero__container container">
          <div className="blog-hero__content">
            <h1 className="blog-hero__title">News & Updates</h1>
          </div>
        </div>
      </section>

      {/* ================================================
          1. ARTICLE CONTENT
          ================================================ */}
      <div className="blog-content">
        <div className="blog-content__container">
          <h1 className="blog-content__main-title">
            Interventional Cardiology – Saving Lives Without Open Surgery
          </h1>

          <p className="blog-content__paragraph blog-content__lead">
            When people think about heart treatment, they often imagine open-heart surgery — long hospital stays, big scars, and lengthy recovery. But medicine has changed dramatically. Today, interventional cardiology allows doctors to treat many heart conditions with minimally invasive procedures, using catheters and imaging guidance. At Beacon Health, this specialty is transforming lives.
          </p>

          <h2 className="blog-content__section-title">
            What Is Interventional Cardiology?
          </h2>

          <p className="blog-content__paragraph">
            Interventional cardiology uses small incisions, usually in the wrist or groin, to insert a catheter into the blood vessels. Guided by real-time imaging, specialists can:
          </p>

          <ul className="blog-content__bullets">
            <li>Open blocked arteries with angioplasty</li>
            <li>Insert stents to keep arteries open</li>
            <li>Repair damaged heart structures</li>
            <li>Remove dangerous plaque build-up</li>
          </ul>

          <p className="blog-content__paragraph">
            These procedures restore blood flow, relieve chest pain, and prevent heart attacks — without the need for open surgery.
          </p>

          <h2 className="blog-content__section-title">
            Benefits for Patients
          </h2>

          <ul className="blog-content__bullets">
            <li><strong>Less invasive:</strong> No large cuts, fewer scars</li>
            <li><strong>Lower risk:</strong> Reduced chances of infection and complications</li>
            <li><strong>Faster recovery:</strong> Many patients return home within 24–48 hours</li>
            <li><strong>Better outcomes:</strong> Procedures are highly precise and effective</li>
          </ul>

          <p className="blog-content__paragraph">
            For patients, this means peace of mind and a faster return to normal life.
          </p>

          <h2 className="blog-content__section-title">
            Interventional Cardiology at Beacon Health
          </h2>

          <p className="blog-content__paragraph">
            Beacon Health offers world-class interventional cardiology right here in Lagos. Our specialists are internationally trained and bring experience from top hospitals abroad. Patients benefit from cutting-edge technology, global expertise, and a multidisciplinary team that ensures every stage of care is coordinated.
          </p>

          <p className="blog-content__paragraph">
            We don't just perform procedures — we also focus on prevention. Our team helps patients manage hypertension, cholesterol, diabetes, and lifestyle risks, ensuring long-term heart health.
          </p>

          <h2 className="blog-content__section-title">
            Real Impact
          </h2>

          <p className="blog-content__paragraph">
            If you have risk factors such as high blood pressure, family history, or recurring chest discomfort, don't wait.
          </p>

          <div className="blog-content__callout">
            <span className="blog-content__callout-hand" aria-hidden="true">👉</span>
            <p className="blog-content__callout-text">
              <a
                href="#appointment"
                className="blog-content__callout-link"
                onClick={(e) => {
                  e.preventDefault()
                  onNavigate('appointment')
                  window.scrollTo({ top: 0, behavior: 'smooth' })
                }}
              >
                Schedule a consultation at Beacon Health.
              </a>{' '}
              With interventional cardiology, life-saving care is closer and safer than ever.
            </p>
          </div>
        </div>
      </div>

      {/* ================================================
          3. MORE NEWS YOU MIGHT LIKE (EMPTY STATE)
          ================================================ */}
      <section className="blog-more">
        <div className="blog-more__container container">
          <h2 className="blog-more__title">More News You Might Like</h2>

          <div className="blog-more__empty">
            <div className="blog-more__empty-icon-wrap" aria-hidden="true">
              <svg
                className="blog-more__empty-icon"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2" />
                <path d="M18 14h-8" />
                <path d="M15 18h-5" />
                <path d="M10 6h8v4h-8V6Z" />
              </svg>
            </div>
            <h3 className="blog-more__empty-title">No news yet</h3>
            <p className="blog-more__empty-desc">
              We are currently preparing more clinical articles, medical breakthroughs, and health tips from our specialist teams. Please check back soon!
            </p>
          </div>
        </div>
      </section>
    </article>
  )
}

export default BlogArticle
