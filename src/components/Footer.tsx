import { Link } from 'react-router-dom'
import { ClipboardList, Mail, Phone, MapPin, Linkedin, Shield, Award } from 'lucide-react'
import './Footer.css'

const company = [
  { name: 'About Us', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
]

const compliance = [
  { name: 'EASA Compliance', path: '/about' },
  { name: 'ICAO Standards', path: '/about' },
  { name: 'Data Security', path: '/about' },
]

const relatedProducts = [
  { name: 'AeroEBT', url: 'https://aeroebt.skydynamics.aero', external: true },
  { name: 'AeroEFB', url: 'https://skydynamics.aero', external: true },
  { name: 'FleetSnap', url: 'https://skydynamics.aero', external: true },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/" className="footer-logo">
              <div className="footer-logo-icon">
                <ClipboardList size={20} />
              </div>
              <span className="footer-logo-text">
                <span className="logo-aero">Aero</span>
                <span className="logo-techlog">TechLog</span>
              </span>
            </Link>
            <p className="footer-description">
              Digital aircraft technical log solution. Paperless journey log, 
              maintenance tracking, defect management, and complete regulatory 
              compliance for airlines and operators worldwide.
            </p>
            <div className="footer-certifications">
              <div className="certification-badge">
                <Shield size={16} />
                <span>ISO 27001</span>
              </div>
              <div className="certification-badge">
                <Award size={16} />
                <span>EASA Compliant</span>
              </div>
            </div>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              {company.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Compliance */}
          <div className="footer-section">
            <h4>Compliance</h4>
            <ul>
              {compliance.map((item) => (
                <li key={item.name}>
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Related Products */}
          <div className="footer-section">
            <h4>Related Products</h4>
            <ul>
              {relatedProducts.map((item) => (
                <li key={item.name}>
                  {item.external ? (
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      {item.name}
                    </a>
                  ) : (
                    <Link to={item.url}>{item.name}</Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section footer-contact">
            <h4>Contact</h4>
            <ul>
              <li>
                <Mail size={16} />
                <a href="mailto:info@skydynamics.aero">info@skydynamics.aero</a>
              </li>
              <li>
                <Mail size={16} />
                <a href="mailto:info@skydynamics.aero">info@skydynamics.aero</a>
              </li>
              <li>
                <Phone size={16} />
                <span>+30 2813 015 538</span>
              </li>
              <li>
                <MapPin size={16} />
                <span>Science & Technology Park of Crete<br />Heraklion, Greece</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>&copy; {new Date().getFullYear()} SkyDynamics G.P.</span>
            <div className="footer-legal-links">
              <Link to="/privacy">Privacy Policy</Link>
              <span className="footer-separator">&bull;</span>
              <Link to="/terms">Terms of Use</Link>
            </div>
          </div>
          <div className="footer-bottom-right">
            <a href="https://linkedin.com/company/sky-dynamics" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
