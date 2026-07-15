import { Link } from 'react-router-dom'
import { Phone, MessageSquare, Mail } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-intro">
            <div className="footer-brand">
              <img src={logo} alt="Pristine Cleaning by Nicole" className="footer-logo" />
            </div>
            <p className="footer-tagline">
              Insured, owner-operated cleaning for Pittsburgh homes, vacation rentals, moves, and apartment turnovers.
            </p>
          </div>

          <div className="footer-col footer-col-services">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Deep Cleaning</Link></li>
              <li><Link to="/services">Monthly Cleaning</Link></li>
              <li><Link to="/services">Vacation Rentals</Link></li>
              <li><Link to="/services">Move In / Move Out</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact</h4>
            <p>
              <Phone size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              412-572-1944<br />
              <MessageSquare size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              412-572-1944<br />
              <Mail size={13} style={{ marginRight: 6, verticalAlign: 'middle' }} />
              pcleaning86@gmail.com
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {year} Pristine Cleaning by Nicole, LLC. Pittsburgh, PA.
        </div>
      </div>
    </footer>
  )
}
