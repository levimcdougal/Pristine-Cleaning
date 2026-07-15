import { Link } from 'react-router-dom'
import { Home, Building2, Star, Package } from 'lucide-react'
import FadeIn from '../components/FadeIn'
import resImg from '../assets/res.png'
import comImg from '../assets/com.png'
import airImg from '../assets/air.png'
import moveImg from '../assets/move.png'

const services = [
  {
    Icon: Home,
    image: resImg,
    title: 'Deep Cleaning',
    desc: 'A detailed reset for homes that need extra attention. Base pricing starts around $500 and varies with square footage and buildup.',
    includes: [
      'High and low dusting of reachable fixtures and ceiling fans',
      'Blinds, window ledges, trim, switches, door frames, and spot-cleaned walls',
      'Vacuumed and washed baseboards, plus floors vacuumed and mopped',
      'Fixtures, mirrors, glass, sinks, counters, and exterior appliances polished',
      'Cleaning behind movable furniture and appliances when safely accessible',
      'Bathrooms scrubbed and disinfected, including soap scum and buildup',
    ],
  },
  {
    Icon: Building2,
    image: comImg,
    title: 'Maintenance / Monthly Cleaning',
    desc: 'Recurring care that includes the essentials of a deep clean while keeping baseboards dusted rather than washed. Monthly service is usually around $300, depending on square footage and buildup.',
    includes: [
      'Surface, fixture, blind, trim, and windowsill dusting',
      'Kitchen counters, cabinet exteriors, sink, and appliance exteriors',
      'Bathroom toilets, tub or shower, mirrors, counters, and fixtures',
      'Floors vacuumed and mopped throughout',
      'Small trash bins emptied',
      'A schedule tailored to the needs of your home',
    ],
  },
  {
    Icon: Star,
    image: airImg,
    title: 'Vacation Rental & Apartment Turnovers',
    desc: 'Reliable turnover cleaning for vacation rentals and apartments throughout Pittsburgh and select bordering neighborhoods.',
    includes: [
      'Kitchen and bathroom reset between guests or residents',
      'Surfaces, fixtures, mirrors, and glass polished',
      'Floors vacuumed and mopped',
      'Small bins emptied and presentation details checked',
      'Flexible service planned around turnover timing',
      'Clear communication with owners and property managers',
    ],
  },
  {
    Icon: Package,
    image: moveImg,
    title: 'Move In / Move Out',
    desc: 'Move-in and move-out cleans include everything in a deep clean plus empty interior storage and appliances. Base pricing starts around $500 and varies by square footage and buildup.',
    includes: [
      'Inside empty cupboards, pantry shelves, closets, and drawers',
      'Refrigerator and stove/oven interiors cleaned when appropriate',
      'Cabinet exteriors, counters, trim, windowsills, and switches cleaned',
      'Baseboards washed and floors vacuumed and mopped',
      'Bathrooms thoroughly scrubbed and disinfected',
      'Final detail check before the space changes hands',
    ],
  },
]

export default function Services() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <h1>Our Services</h1>
        <p>Specialty cleaning for Pittsburgh homes, vacation rentals, moves, and apartment turnovers.</p>
      </section>

      <section className="section">
        <div className="section-inner">
          <div className="services-full-grid">
            {services.map(({ Icon, image, title, desc, includes }, i) => (
              <FadeIn key={title} delay={i * 100}>
              <div className="service-card-full">
                {image
                  ? <img src={image} alt={title} className="service-card-img" />
                  : <div className="service-icon" style={{ width: 64, height: 64 }}>
                      <Icon size={30} color="var(--green)" strokeWidth={1.75} />
                    </div>
                }
                <h2>{title}</h2>
                <p>{desc}</p>
                <div className="service-includes">
                  <h4>What's Included</h4>
                  <ul>
                    {includes.map(item => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>


<section className="cta-banner">
        <div className="section-inner">
          <h2>Not Sure Which Service You Need?</h2>
          <p>Reach out and we'll help you figure out the best fit for your situation.</p>
          <Link to="/contact" className="btn-primary">Get In Touch</Link>
        </div>
      </section>
    </main>
  )
}
