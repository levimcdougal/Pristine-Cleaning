import { Link } from 'react-router-dom'
import { Home, Building2, Star, Package } from 'lucide-react'
import cleanImg from '../assets/clean.png'
import FadeIn from '../components/FadeIn'
import heroBg from '../assets/back.png'

const reviews = [
  {
    name: 'Sarah M.',
    type: 'Home Cleaning',
    text: 'Nicole was thorough, dependable, and left our home feeling fresh and comfortable.',
  },
  {
    name: 'Jessica R.',
    type: 'Turnover Cleaning',
    text: 'The space was spotless and ready for our next guests. Communication was clear and easy.',
  },
  {
    name: 'Emily T.',
    type: 'Move-Out Cleaning',
    text: 'Every room received careful attention, and the entire property looked wonderful when the job was finished.',
  },
  {
    name: 'Amanda K.',
    type: 'Recurring Cleaning',
    text: 'Reliable service and consistent results make keeping our home clean so much easier.',
  },
]

const services = [
  {
    Icon: Home,
    title: 'Deep Cleaning',
    desc: 'Detailed top-to-bottom cleaning with extra attention to buildup, trim, baseboards, fixtures, and floors.',
  },
  {
    Icon: Building2,
    title: 'Monthly Cleaning',
    desc: 'Dependable maintenance cleaning to keep your home consistently fresh, polished, and comfortable.',
  },
  {
    Icon: Star,
    title: 'Vacation Rentals',
    desc: 'Reliable, detail-focused turnover cleaning that helps your rental feel ready for every new guest.',
  },
  {
    Icon: Package,
    title: 'Move In / Move Out',
    desc: "Deep clean for a fresh start — whether you're arriving or leaving, we've got it covered.",
  },
]


export default function HomePage() {
  return (
    <main className="page-wrapper">
      {/* Hero */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero-inner">
          <p className="hero-badge">Pittsburgh's local cleaning specialist</p>
          <h1>Refresh Your Space.<br /><span>Enjoy the Difference.</span></h1>
<p>
            Pristine Cleaning by Nicole brings insured, reliable care to homes, vacation rentals, move-ins, move-outs, and apartment turnovers.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="btn-primary">Get In Touch</Link>
            <Link to="/services" className="btn-outline">View Services</Link>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section">
        <div className="section-inner">
          <FadeIn><div className="section-header">
            <p className="section-label">What We Offer</p>
            <h2 className="section-title">Cleaning Services for Every Need</h2>
            <p className="section-subtitle">
              Thoughtful cleaning for Pittsburgh homes, rentals, and fresh starts — tailored to your space and your needs.
            </p>
          </div></FadeIn>
          <FadeIn delay={150}>
          <div className="services-grid">
            {services.map(({ Icon, title, desc }) => (
              <div className="service-card" key={title}>
                <div className="service-icon">
                  <Icon size={26} color="var(--blue)" strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
                <Link to="/services" className="service-link">Learn more →</Link>
              </div>
            ))}
          </div>
          </FadeIn>
        </div>
      </section>

      {/* Why Us */}
      <section className="section section-alt">
        <div className="section-inner">
          <FadeIn><div className="why-split">
            <div className="why-image-wrap">
              <img src={cleanImg} alt="Cleaning" className="why-image" />
            </div>
            <div className="why-content">
              <p className="section-label">Why Choose Us</p>
              <h2 className="section-title">Local Care.<br />Pristine Results.</h2>
              <p className="why-body">
                Pristine Cleaning by Nicole is an owner-operated Pittsburgh business focused on
                vacation rentals, deep cleaning, move-in and move-out service, apartment turnovers,
                and dependable monthly maintenance cleans.
              </p>
              <p className="why-body">
                We are insured, detail-minded, and committed to clear communication. If anything is
                missed, we stand behind our work and will come back to make it right.
              </p>
              <p className="why-body">
                Our professional, room-by-room approach leaves your home fresh, comfortable, and
                ready to enjoy. Every service—from vacation rentals to deep cleans—is tailored to
                the needs of your property. As an insured and reliable local cleaning business, we
                provide dependable care and peace of mind, and if anything is missed, we will return
                to make it right because we stand behind our work.
              </p>
              <Link to="/contact" className="btn-primary why-cta">Get a Free Quote</Link>
            </div>
          </div></FadeIn>
        </div>
      </section>

      {/* Reviews */}
      <section className="section">
        <div className="section-inner">
          <FadeIn><div className="section-header">
            <p className="section-label">Customer Reviews</p>
            <h2 className="section-title">Kind Words From Our Clients</h2>
            <p className="section-subtitle">
              See what local clients have to say about their Pristine Cleaning experience.
            </p>
          </div></FadeIn>
          <FadeIn delay={150}><div className="reviews-grid">
            {reviews.map(r => (
              <div className="review-card" key={r.name}>
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} color="#f59e0b" fill="#f59e0b" strokeWidth={0} />
                  ))}
                </div>
                <p className="review-text">{r.text}</p>
                <div className="review-author">
                  <div className="review-avatar">“</div>
                  <div>
                    <div className="review-name">{r.name}</div>
                    <div className="review-type">{r.type}</div>
                  </div>
                </div>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="section-inner">
          <h2>Ready for a Spotless Space?</h2>
          <p>Serving Pittsburgh and select surrounding neighborhoods by appointment.</p>
          <Link to="/contact" className="btn-primary">Contact Us</Link>
        </div>
      </section>
    </main>
  )
}
