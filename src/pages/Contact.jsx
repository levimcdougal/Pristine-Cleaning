import { useState } from 'react'
import { Phone, MessageSquare, Mail, CalendarCheck, Sparkles, ThumbsUp, ChevronDown } from 'lucide-react'
import FadeIn from '../components/FadeIn'

const contactMethods = [
  {
    Icon: Phone,
    label: 'Call Us',
    value: '412-572-1944',
    desc: 'Give us a call anytime during business hours. We love hearing from you.',
    btnLabel: 'Call Now',
    href: 'tel:+14125721944',
  },
  {
    Icon: MessageSquare,
    label: 'Text Us',
    value: '412-572-1944',
    desc: "Prefer to text? Send us a message and we'll get back to you quickly.",
    btnLabel: 'Send a Text',
    href: 'sms:+14125721944',
  },
  {
    Icon: Mail,
    label: 'Email Us',
    value: 'pcleaning86@gmail.com',
    desc: 'Drop us an email for quotes, questions, or scheduling.',
    btnLabel: 'Send Email',
    href: 'mailto:pcleaning86@gmail.com',
  },
]

const steps = [
  {
    Icon: Phone,
    step: '01',
    title: 'Reach Out',
    desc: "Call, text, or email us to tell us about your space and what you need. We'll get back to you promptly.",
  },
  {
    Icon: CalendarCheck,
    step: '02',
    title: 'Schedule Your Clean',
    desc: "We'll find a date and time that works for you. No complicated booking — just a quick conversation.",
  },
  {
    Icon: Sparkles,
    step: '03',
    title: 'We Show Up & Clean',
    desc: "Our team arrives on time, fully equipped, and gets to work. You don't have to lift a finger.",
  },
  {
    Icon: ThumbsUp,
    step: '04',
    title: 'Enjoy Your Space',
    desc: "Walk into a spotless home or business and enjoy the results. We're not done until you're happy.",
  },
]

const faqs = [
  {
    q: 'How do I get a quote?',
    a: "Simply call, text, or email us with details about your space — square footage, number of rooms, and the type of clean you need. We'll give you a fair, transparent quote with no hidden fees.",
  },
  {
    q: 'Do I need to be home during the cleaning?',
    a: "Not at all. Many of our clients provide access and go about their day. We're fully insured and trustworthy, so you can have peace of mind whether you're home or not.",
  },
  {
    q: 'What cleaning products do you use?',
    a: 'Contact Nicole before your appointment if you have sensitivities, special surfaces, pets, or product preferences so the service can be planned appropriately.',
  },
  {
    q: 'How far in advance should I book?',
    a: 'Service is by appointment. Contact us as early as possible with your preferred dates and we will confirm current availability.',
  },
  {
    q: 'Do you offer recurring cleaning services?',
    a: 'Yes. Monthly maintenance cleaning is available and usually costs around $300, depending on square footage and buildup.',
  },
  {
    q: "What if I'm not satisfied with the clean?",
    a: "We guarantee our work. If something is missed, please communicate with us and we'll come back to clean it.",
  },
]

function FaqItem({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className={`faq-item${open ? ' open' : ''}`}>
      <button className="faq-question" onClick={() => setOpen(o => !o)}>
        <span>{q}</span>
        <ChevronDown size={18} strokeWidth={2} className="faq-chevron" />
      </button>
      {open && <p className="faq-answer">{a}</p>}
    </div>
  )
}

export default function Contact() {
  return (
    <main className="page-wrapper">
      <section className="page-hero">
        <h1>Get In Touch</h1>
        <p>We'd love to hear from you. Reach out by phone, text, or email — whatever works best for you.</p>
      </section>

      {/* Contact Cards */}
      <section className="section">
        <div className="section-inner">
          <div className="contact-intro">
            <h2>Contact Us Directly</h2>
            <p>No forms, no waiting. Pick your preferred way to reach us and we'll respond promptly.</p>
          </div>

          <FadeIn><div className="contact-cards">
            {contactMethods.map(({ Icon, label, value, desc, btnLabel, href }) => (
              <div className="contact-card" key={label}>
                <div className="contact-card-icon">
                  <Icon size={30} color="var(--blue)" strokeWidth={1.75} />
                </div>
                <h3>{label}</h3>
                <div className="contact-card-value">{value}</div>
                <p className="contact-card-desc">{desc}</p>
                <a href={href} className="contact-card-btn">{btnLabel}</a>
              </div>
            ))}
          </div></FadeIn>

        </div>
      </section>

      {/* Business Hours Banner */}
      <section className="hours-banner">
        <p className="hours-banner-label">Booking Details</p>
<div className="hours-banner-cols">
          <div className="hours-banner-col">
            <span className="hours-banner-day">Service Area</span>
            <span className="hours-banner-time">Pittsburgh & select surrounding neighborhoods</span>
          </div>
          <div className="hours-banner-divider" />
          <div className="hours-banner-col">
            <span className="hours-banner-day">Based Near</span>
            <span className="hours-banner-time">Pittsburgh, PA 15220</span>
          </div>
          <div className="hours-banner-divider" />
          <div className="hours-banner-col">
            <span className="hours-banner-day">Payment</span>
            <span className="hours-banner-time">Cash, Zelle & Venmo</span>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="section section-alt">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">The Process</p>
            <h2 className="section-title">What to Expect</h2>
            <p className="section-subtitle">
              Getting started is simple. Here's how it works from first contact to a spotless space.
            </p>
          </div>
          <FadeIn delay={150}><div className="steps-grid">
            {steps.map(({ Icon, step, title, desc }) => (
              <div className="step-card" key={step}>
                <div className="step-number">{step}</div>
                <div className="step-icon">
                  <Icon size={24} color="var(--blue)" strokeWidth={1.75} />
                </div>
                <h3>{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div></FadeIn>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="section-inner">
          <div className="section-header">
            <p className="section-label">FAQ</p>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-subtitle">
              Everything you need to know before booking. Can't find your answer? Just reach out.
            </p>
          </div>
          <FadeIn><div className="faq-list">
            {faqs.map(({ q, a }) => (
              <FaqItem key={q} q={q} a={a} />
            ))}
          </div></FadeIn>
        </div>
      </section>
    </main>
  )
}
