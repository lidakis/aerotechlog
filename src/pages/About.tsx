import { motion } from 'framer-motion'
import { Users, Award, Globe, Shield, Clock, Target } from 'lucide-react'
import SEO from '../components/SEO'
import './About.css'

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

const values = [
  {
    icon: Shield,
    title: 'Safety First',
    description: 'Aviation safety is at the core of everything we build. Our solutions are designed to enhance operational safety and compliance.'
  },
  {
    icon: Target,
    title: 'User-Centric Design',
    description: 'Built by aviation professionals for aviation professionals. We understand the real-world challenges of aircraft operations.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every feature, ensuring our solutions meet the highest standards of quality and reliability.'
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: '99.9% uptime guarantee with robust infrastructure designed for mission-critical aviation operations.'
  }
]

export default function About() {
  return (
    <div className="about-page">
      <SEO
        title="About Us | AeroTechLog - Digital Aircraft Technical Log"
        description="Learn about SkyDynamics and AeroTechLog - the team behind the digital aircraft technical log solution for airlines and operators."
        canonical="/about"
      />

      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <motion.div
            className="about-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>About Us</motion.span>
            <motion.h1 variants={fadeInUp}>
              Transforming Aviation<br />
              <span className="text-gradient">Operations</span>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              SkyDynamics is a leading provider of aviation software solutions, 
              dedicated to modernizing airline operations through innovative technology.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Company Info */}
      <section className="about-company section-lg">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-content"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h2 variants={fadeInUp}>Our Mission</motion.h2>
              <motion.p variants={fadeInUp}>
                At SkyDynamics, we believe that aviation operations should be seamless, 
                efficient, and fully compliant. Our mission is to provide innovative 
                software solutions that help airlines and operators achieve operational 
                excellence while maintaining the highest safety standards.
              </motion.p>
              <motion.p variants={fadeInUp}>
                With over 25 years of aviation experience, our team understands the 
                challenges faced by airlines, operators, and training organizations. 
                AeroTechLog is the result of this deep industry knowledge combined 
                with cutting-edge technology.
              </motion.p>
            </motion.div>
            <motion.div
              className="about-stats"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div className="about-stat" variants={fadeInUp}>
                <Users size={32} />
                <div>
                  <strong>25+</strong>
                  <span>Years of Experience</span>
                </div>
              </motion.div>
              <motion.div className="about-stat" variants={fadeInUp}>
                <Globe size={32} />
                <div>
                  <strong>Global</strong>
                  <span>Customer Base</span>
                </div>
              </motion.div>
              <motion.div className="about-stat" variants={fadeInUp}>
                <Award size={32} />
                <div>
                  <strong>ISO 27001</strong>
                  <span>Certified</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="about-values section-lg">
        <div className="container">
          <motion.div
            className="section-header text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Our Values</motion.span>
            <motion.h2 variants={fadeInUp}>
              What Drives <span className="text-gradient">Us</span>
            </motion.h2>
          </motion.div>

          <motion.div
            className="values-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {values.map((value, idx) => (
              <motion.div key={idx} className="value-card" variants={fadeInUp}>
                <div className="value-icon">
                  <value.icon size={28} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Location */}
      <section className="about-location section-lg">
        <div className="container">
          <motion.div
            className="location-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="location-content">
              <h2>Our Location</h2>
              <p>
                SkyDynamics is headquartered at the Science & Technology Park of Crete, 
                a hub for innovation and technology in the Mediterranean region.
              </p>
              <address>
                <strong>SkyDynamics G.P.</strong><br />
                Science & Technology Park of Crete<br />
                Heraklion, Greece
              </address>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
