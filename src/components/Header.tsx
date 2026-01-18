import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, ClipboardList, Mail, Shield, Award, FileCheck, Lock,
  Sun, Moon
} from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { toggleTheme, setTheme } from '../store/slices/uiSlice'
import './Header.css'

const navLinks = [
  { name: 'Features', path: '/#features' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: 'FAQ', path: '/faq' },
]

const complianceItems = [
  { icon: Shield, text: 'EASA Compliant' },
  { icon: FileCheck, text: 'ICAO Compliant' },
  { icon: Award, text: 'FAA Compatible' },
  { icon: Lock, text: 'ISO 27001' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const dispatch = useAppDispatch()
  const theme = useAppSelector((state) => state.ui.theme)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location])

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'light' || stored === 'dark') {
      document.documentElement.setAttribute('data-theme', stored)
      dispatch(setTheme(stored))
    }
  }, [dispatch])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo">
          <div className="logo-icon">
            <ClipboardList size={22} />
          </div>
          <span className="logo-text">
            <span className="logo-aero">Aero</span>
            <span className="logo-techlog">TechLog</span>
          </span>
        </Link>

        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="nav-link">
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => dispatch(toggleTheme())}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            <motion.div
              key={theme}
              initial={{ rotate: -30, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 30, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
            </motion.div>
          </button>
          <a href="mailto:info@skydynamics.aero" className="btn btn-primary">
            <Mail size={16} />
            Request Demo
          </a>
          <button
            className="mobile-menu-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-content">
              <div className="mobile-section">
                <span className="mobile-section-title">Navigation</span>
                {navLinks.map((link) => (
                  <Link key={link.name} to={link.path} className="mobile-link">
                    {link.name}
                  </Link>
                ))}
              </div>
              <div className="mobile-section">
                <span className="mobile-section-title">Compliance</span>
                <div className="mobile-compliance">
                  {complianceItems.map((item, idx) => (
                    <div key={idx} className="compliance-item">
                      <item.icon size={16} />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mobile-section mobile-cta">
                <a href="mailto:info@skydynamics.aero" className="btn btn-primary btn-block">
                  <Mail size={16} />
                  Request Demo
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
