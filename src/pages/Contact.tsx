import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'
import SEO from '../components/SEO'
import './Contact.css'

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

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    content: 'info@skydynamics.aero',
    link: 'mailto:info@skydynamics.aero'
  },
  {
    icon: Phone,
    title: 'Phone',
    content: '+30 2813 015 538',
    link: 'tel:+302813015538'
  },
  {
    icon: MapPin,
    title: 'Address',
    content: 'Science & Technology Park of Crete, Heraklion, Greece',
    link: null
  },
  {
    icon: Clock,
    title: 'Business Hours',
    content: 'Monday - Friday: 9:00 AM - 6:00 PM (EET)',
    link: null
  }
]

export default function Contact() {
  return (
    <div className="contact-page">
      <SEO
        title="Contact Us | AeroTechLog - Digital Aircraft Technical Log"
        description="Get in touch with the AeroTechLog team. Request a demo or learn more about our digital aircraft technical log solution."
        canonical="/contact"
      />

      {/* Hero Section */}
      <section className="contact-hero">
        <div className="container">
          <motion.div
            className="contact-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>Contact Us</motion.span>
            <motion.h1 variants={fadeInUp}>
              Get in <span className="text-gradient">Touch</span>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              Have questions about AeroTechLog? We'd love to hear from you. 
              Reach out to our team for demos, inquiries, or support.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info section-lg">
        <div className="container">
          <motion.div
            className="contact-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {contactInfo.map((item, idx) => (
              <motion.div key={idx} className="contact-card" variants={fadeInUp}>
                <div className="contact-icon">
                  <item.icon size={24} />
                </div>
                <h3>{item.title}</h3>
                {item.link ? (
                  <a href={item.link}>{item.content}</a>
                ) : (
                  <p>{item.content}</p>
                )}
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="contact-cta"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Transform Your Operations?</h2>
            <p>
              Schedule a personalized demo to see how AeroTechLog can streamline 
              your aircraft technical log management.
            </p>
            <a href="mailto:info@skydynamics.aero?subject=AeroTechLog Demo Request" className="btn btn-primary btn-lg">
              <Mail size={18} />
              Request a Demo
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
