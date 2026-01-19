import { motion } from 'framer-motion'
import {
  ArrowRight, AlertTriangle, Shield, Lock, CheckCircle2, Mail, Users,
  Brain, Bell, Smartphone, Trophy, Award, Star, Crown, Medal, Rocket,
  Building2, Database, Radio, Clock, Zap, BarChart3, Wrench, Server, Plane, Tablet
} from 'lucide-react'
import SEO from '../components/SEO'
import './Home.css'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 }
  }
}

const features = [
  {
    icon: Brain,
    title: 'AeroBrain AI Integration',
    description: 'AI-powered defect analysis, predictive maintenance insights, and smart MEL suggestions as you type – powered by AeroBrain.',
    color: '#8b5cf6'
  },
  {
    icon: Rocket,
    title: 'Fast Fleet Onboarding',
    description: 'Ready-made aircraft database with pre-loaded MEL items for all major aircraft types. Get your fleet up and running in days, not months.',
    color: '#0d9488'
  },
  {
    icon: Users,
    title: 'Cross-Department Sync',
    description: 'Real-time updates across all company departments. Pilots, maintenance, operations, and management – everyone sees the same live data.',
    color: '#10b981'
  },
  {
    icon: Smartphone,
    title: 'Wingman Mobile Alerts',
    description: 'Real-time push notifications on your mobile phone via Wingman app. Stay informed about your flights and aircraft defects instantly.',
    color: '#3b82f6'
  },
  {
    icon: Building2,
    title: 'On-Premises Deployment',
    description: 'Host AeroTechLog on your own servers for complete data control. Your data stays within your airline infrastructure.',
    color: '#64748b'
  },
  {
    icon: Database,
    title: 'Smart MEL Autocomplete',
    description: 'Intelligent suggestions as you type with complete MEL database. Find the right reference in seconds with AI-powered search.',
    color: '#0ea5e9'
  },
  {
    icon: Radio,
    title: 'Peer-to-Peer Sync',
    description: 'Sync data directly between company iPads without internet connection. Perfect for remote locations, high-security areas, or when connectivity is unavailable.',
    color: '#f59e0b'
  }
]

const stats = [
  { value: '25+', label: 'Years of Aviation Expertise' },
  { value: '100%', label: 'Regulatory Compliance' },
  { value: '99.9%', label: 'System Availability' },
  { value: '24/7', label: 'Support Available' }
]

const benefits = [
  {
    icon: Clock,
    title: 'Save Time',
    desc: 'Reduce administrative workload by up to 70% with automated data entry and digital workflows.'
  },
  {
    icon: Shield,
    title: 'Ensure Compliance',
    desc: 'Stay compliant with EASA, ICAO, and other regulatory requirements with built-in validation.'
  },
  {
    icon: Zap,
    title: 'Real-Time Updates',
    desc: 'Instant synchronization between crew, maintenance, and operations teams.'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics',
    desc: 'Gain insights from your fleet data with comprehensive reporting and trend analysis.'
  }
]

const capabilities = [
  {
    icon: Brain,
    title: 'AeroBrain AI Integration',
    description: 'Leverage AI-powered analytics for smarter defect management, predictive maintenance, and intelligent suggestions as you type.',
    features: ['Smart Suggestions', 'Defect Analysis', 'Predictive Insights', 'Pattern Recognition']
  },
  {
    icon: Users,
    title: 'Cross-Department Sync',
    description: 'Real-time updates flow instantly to all company departments. Everyone works with the same live data for seamless coordination.',
    features: ['Operations Team', 'Maintenance Dept', 'Flight Crew', 'Management']
  },
  {
    icon: Rocket,
    title: 'Fast Fleet Onboarding',
    description: 'Pre-loaded aircraft database with MEL items for Boeing, Airbus, ATR, Embraer and more. Your fleet is ready from day one.',
    features: ['Ready-Made MEL Data', 'All Aircraft Types', 'Quick Setup', 'Custom Configuration']
  },
  {
    icon: Smartphone,
    title: 'Wingman Mobile App',
    description: 'Real-time notifications on your phone for flights and aircraft. Never miss a defect update or maintenance status change.',
    features: ['Push Notifications', 'Flight Alerts', 'Defect Updates', 'Offline Access']
  },
  {
    icon: Building2,
    title: 'On-Premises Hosting',
    description: 'Deploy AeroTechLog on your own infrastructure for complete data sovereignty. Full control over your operational data.',
    features: ['Your Servers', 'Data Sovereignty', 'Custom Security', 'Full Control']
  },
  {
    icon: Radio,
    title: 'Peer-to-Peer Sync',
    description: 'Synchronize data directly between company iPads without internet. Ideal for high-security environments, remote airfields, or areas with no connectivity.',
    features: ['No Internet Required', 'Direct iPad Sync', 'Secure Local Transfer', 'Offline Operations']
  }
]

const integrations = [
  { icon: Brain, title: 'AeroBrain AI', desc: 'AI-powered insights & smart suggestions', color: '#8b5cf6', featured: true },
  { icon: Wrench, title: 'FleetSnap', desc: 'Instant defect sync to maintenance', color: '#ef4444', featured: true },
  { icon: Smartphone, title: 'Wingman App', desc: 'Mobile notifications for flights', color: '#3b82f6', featured: true },
  { icon: Server, title: 'AMOS', desc: 'Swiss-AS MRO integration', color: '#10b981', featured: false },
  { icon: Server, title: 'TRAX', desc: 'TRAX maintenance system', color: '#0ea5e9', featured: false },
  { icon: Server, title: 'SAP Aviation', desc: 'SAP MRO integration', color: '#f59e0b', featured: false },
  { icon: Plane, title: 'AeroEBT', desc: 'Training management', color: '#0066b3', featured: false },
  { icon: Tablet, title: 'AeroEFB', desc: 'Electronic flight bag', color: '#64748b', featured: false }
]

export default function Home() {

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'AeroTechLog',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    offers: {
      '@type': 'Offer',
      price: '0',
      priceCurrency: 'USD'
    },
    description: 'Digital aircraft technical log solution for airlines and operators. Paperless journey log, maintenance tracking, defect management, and regulatory compliance.',
    provider: {
      '@type': 'Organization',
      name: 'SkyDynamics G.P.',
      url: 'https://skydynamics.aero'
    }
  }

  return (
    <div className="home">
      <SEO structuredData={structuredData} />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-pattern" />
        </div>

        <div className="container">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="hero-badges" variants={fadeInUp}>
              <span className="compliance-badge">
                <Shield size={14} />
                EASA & ICAO Compliant
              </span>
              <span className="security-badge">
                <Lock size={14} />
                ISO 27001 Certified
              </span>
            </motion.div>

            <motion.h1 className="hero-title" variants={fadeInUp}>
              Digital Aircraft<br />
              <span className="text-gradient">Technical Log</span>
            </motion.h1>

            <motion.p className="hero-subtitle" variants={fadeInUp}>
              The complete <strong>paperless solution</strong> for aircraft technical logs. 
              <strong>AeroBrain AI</strong> powered suggestions. <strong>Real-time sync</strong> across all departments. 
              Ready-made database for <strong>fast onboarding</strong>. On-premises or cloud – your choice.
            </motion.p>

            <motion.div className="hero-actions" variants={fadeInUp}>
              <a href="mailto:info@skydynamics.aero?subject=AeroTechLog Demo Request" className="btn btn-primary btn-lg">
                <Mail size={18} />
                Request Demo
              </a>
              <a href="#features" className="btn btn-secondary btn-lg">
                Explore Features
                <ArrowRight size={18} />
              </a>
            </motion.div>

            <motion.div className="hero-highlights" variants={fadeInUp}>
              <div className="highlight-item">
                <CheckCircle2 size={18} />
                <span>AeroBrain AI Powered</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} />
                <span>Cross-Department Sync</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} />
                <span>On-Premises Option</span>
              </div>
              <div className="highlight-item">
                <CheckCircle2 size={18} />
                <span>Fast Fleet Onboarding</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {/* iPad Mockup */}
            <div className="hero-mockup ipad-mockup">
              <div className="ipad-frame">
                <div className="ipad-camera"></div>
                <div className="mockup-screen">
                  <div className="mockup-header">
                    <span className="mockup-title">AeroTechLog</span>
                    <div className="mockup-status">
                      <Bell size={14} />
                      <span className="notification-badge">3</span>
                    </div>
                  </div>
                  <div className="mockup-content">
                    <div className="mockup-card ai-card">
                      <Brain size={24} />
                      <div>
                        <strong>AeroBrain AI</strong>
                        <span className="sync-status">Smart Suggestions Active</span>
                      </div>
                    </div>
                    <div className="mockup-card sync-card">
                      <Users size={24} />
                      <div>
                        <strong>All Departments</strong>
                        <span className="sync-status">Live Connected</span>
                      </div>
                    </div>
                    <div className="mockup-card">
                      <AlertTriangle size={24} />
                      <div>
                        <strong>Open Defects</strong>
                        <span>2 MEL Items</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ipad-home-indicator"></div>
              </div>
            </div>
            {/* Phone Mockup */}
            <motion.div 
              className="phone-mockup"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <div className="phone-frame">
                <div className="phone-notch"></div>
                <div className="phone-screen">
                  <div className="phone-header">
                    <Smartphone size={12} />
                    <span>Wingman</span>
                  </div>
                  <div className="phone-notification">
                    <Bell size={16} />
                    <div>
                      <strong>Defect Alert</strong>
                      <span>SX-ABC: New MEL item logged</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <motion.div
            className="stats-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} className="stat-item" variants={fadeInUp}>
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="awards-section">
        <div className="container">
          <motion.div
            className="awards-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="award-badge gold" variants={fadeInUp}>
              <div className="award-icon">
                <Trophy size={28} />
              </div>
              <div className="award-content">
                <span className="award-title">Best in Class</span>
                <span className="award-subtitle">Aviation Software 2025</span>
              </div>
            </motion.div>
            
            <motion.div className="award-badge gold" variants={fadeInUp}>
              <div className="award-icon">
                <Award size={28} />
              </div>
              <div className="award-content">
                <span className="award-title">Winner Product</span>
                <span className="award-subtitle">TechLog Solutions</span>
              </div>
            </motion.div>
            
            <motion.div className="award-badge gold" variants={fadeInUp}>
              <div className="award-icon">
                <Star size={28} />
              </div>
              <div className="award-content">
                <span className="award-title">Top Rated</span>
                <span className="award-subtitle">By Aviation Experts</span>
              </div>
            </motion.div>
            
            <motion.div className="award-badge gold" variants={fadeInUp}>
              <div className="award-icon">
                <Crown size={28} />
              </div>
              <div className="award-content">
                <span className="award-title">Industry Leader</span>
                <span className="award-subtitle">Digital Tech Logs</span>
              </div>
            </motion.div>
            
            <motion.div className="award-badge gold" variants={fadeInUp}>
              <div className="award-icon">
                <Medal size={28} />
              </div>
              <div className="award-content">
                <span className="award-title">Excellence Award</span>
                <span className="award-subtitle">Airline Operations</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section section-lg">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Core Features</motion.span>
            <motion.h2 variants={fadeInUp}>
              Complete Technical Log <span className="text-gradient">Solution</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              Everything you need to digitize your aircraft technical log operations
              while maintaining full regulatory compliance.
            </motion.p>
          </motion.div>

          <motion.div 
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {features.map((feature, idx) => (
              <motion.div key={idx} className="feature-card" variants={fadeInUp}>
                <div className="feature-icon" style={{ background: `${feature.color}15`, color: feature.color }}>
                  <feature.icon size={28} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="showcase-section section-lg">
        <div className="container">
          {/* Showcase Item 1 - Dashboard */}
          <motion.div 
            className="showcase-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="showcase-content">
              <span className="showcase-label">Dashboard</span>
              <h3>Complete Fleet Overview</h3>
              <p>
                Get a real-time view of your entire fleet status at a glance. Monitor defects, 
                MEL items, and aircraft availability from a single, intuitive dashboard.
              </p>
              <ul className="showcase-features">
                <li><CheckCircle2 size={16} /> Fleet-wide status monitoring</li>
                <li><CheckCircle2 size={16} /> Quick access to all functions</li>
                <li><CheckCircle2 size={16} /> Customizable dashboard widgets</li>
              </ul>
            </div>
            <div className="showcase-image">
              <img src="/screenshot-1.png" alt="AeroTechLog Dashboard" />
            </div>
          </motion.div>

          {/* Showcase Item 2 - Defect Management */}
          <motion.div 
            className="showcase-item showcase-reverse"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="showcase-content">
              <span className="showcase-label">Defect Tracking</span>
              <h3>Smart Defect Management</h3>
              <p>
                Log, track, and manage aircraft defects with intelligent MEL suggestions. 
                Every entry syncs instantly across all departments.
              </p>
              <ul className="showcase-features">
                <li><CheckCircle2 size={16} /> AI-powered MEL suggestions</li>
                <li><CheckCircle2 size={16} /> Automatic rectification workflows</li>
                <li><CheckCircle2 size={16} /> Complete audit trail</li>
              </ul>
            </div>
            <div className="showcase-image">
              <img src="/screenshot-2.png" alt="AeroTechLog Defect Management" />
            </div>
          </motion.div>

          {/* Showcase Item 3 - Journey Log */}
          <motion.div 
            className="showcase-item"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="showcase-content">
              <span className="showcase-label">Journey Log</span>
              <h3>Digital Flight Sectors</h3>
              <p>
                Complete paperless journey log with real-time data capture. Flight crew signatures, 
                fuel calculations, and sector times – all digital.
              </p>
              <ul className="showcase-features">
                <li><CheckCircle2 size={16} /> Automated time calculations</li>
                <li><CheckCircle2 size={16} /> Digital crew signatures</li>
                <li><CheckCircle2 size={16} /> Fuel & oil tracking</li>
              </ul>
            </div>
            <div className="showcase-image">
              <img src="/screenshot-4.png" alt="AeroTechLog Journey Log" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section section-lg">
        <div className="container">
          <div className="benefits-layout">
            <motion.div
              className="benefits-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/screenshot-5.png" alt="AeroTechLog Fleet Status" />
            </motion.div>
            
            <motion.div 
              className="benefits-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span className="section-label" variants={fadeInUp}>Why AeroTechLog</motion.span>
              <motion.h2 variants={fadeInUp}>
                Benefits for Your <span className="text-gradient">Operations</span>
              </motion.h2>
              
              <div className="benefits-list">
                {benefits.map((benefit, idx) => (
                  <motion.div key={idx} className="benefit-card" variants={fadeInUp}>
                    <div className="benefit-icon">
                      <benefit.icon size={24} />
                    </div>
                    <div>
                      <h4>{benefit.title}</h4>
                      <p>{benefit.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section className="capabilities-section section-lg">
        <div className="container">
          <div className="capabilities-header-layout">
            <motion.div
              className="capabilities-intro"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span className="section-label" variants={fadeInUp}>Capabilities</motion.span>
              <motion.h2 variants={fadeInUp}>
                Powerful <span className="text-gradient">Functionality</span>
              </motion.h2>
              <motion.p variants={fadeInUp}>
                Comprehensive tools designed for modern airline operations. 
                From MEL database management to real-time reporting.
              </motion.p>
            </motion.div>
            <motion.div
              className="capabilities-featured-image"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/screenshot-3.png" alt="AeroTechLog MEL Database" />
            </motion.div>
          </div>

          <motion.div 
            className="capabilities-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {capabilities.map((cap, idx) => (
              <motion.div key={idx} className="capability-card" variants={fadeInUp}>
                <div className="capability-icon">
                  <cap.icon size={32} />
                </div>
                <h3>{cap.title}</h3>
                <p>{cap.description}</p>
                <ul className="capability-features">
                  {cap.features.map((feature, fIdx) => (
                    <li key={fIdx}>
                      <CheckCircle2 size={14} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="integrations-section section-lg">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Integrations</motion.span>
            <motion.h2 variants={fadeInUp}>
              Seamless <span className="text-gradient">Connectivity</span>
            </motion.h2>
            <motion.p variants={fadeInUp}>
              AeroTechLog integrates with your existing systems for a unified workflow
            </motion.p>
          </motion.div>

          <motion.div 
            className="integrations-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {integrations.map((integration, idx) => (
              <motion.div key={idx} className="integration-item" variants={fadeInUp}>
                <div className="integration-icon" style={{ background: `${integration.color}15`, color: integration.color }}>
                  <integration.icon size={24} />
                </div>
                <div>
                  <strong>{integration.title}</strong>
                  <span>{integration.desc}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div
            className="cta-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="cta-content">
              <h2>Ready to Go Paperless?</h2>
              <p>
                Transform your aircraft technical log operations with AeroTechLog.
                Request a demo to see how we can help streamline your compliance.
              </p>
            </div>
            <div className="cta-actions">
              <a href="mailto:info@skydynamics.aero?subject=AeroTechLog Demo Request" className="btn btn-primary btn-lg">
                <Mail size={18} />
                Schedule a Demo
              </a>
              <a href="mailto:info@skydynamics.aero?subject=AeroTechLog Inquiry" className="btn btn-outline btn-lg">
                Contact Sales
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
