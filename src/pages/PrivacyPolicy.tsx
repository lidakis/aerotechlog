import { motion } from 'framer-motion'
import SEO from '../components/SEO'
import './PrivacyPolicy.css'

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

export default function PrivacyPolicy() {
  return (
    <div className="privacy-page">
      <SEO
        title="Privacy Policy | AeroTechLog"
        description="Privacy Policy for AeroTechLog - Digital Aircraft Technical Log solution by SkyDynamics."
        canonical="/privacy"
      />

      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="container">
          <motion.div
            className="privacy-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.h1 variants={fadeInUp}>Privacy Policy</motion.h1>
            <motion.p variants={fadeInUp}>Last updated: January 2026</motion.p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="privacy-content section-lg">
        <div className="container">
          <motion.div
            className="privacy-body"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp}>
              <h2>1. Introduction</h2>
              <p>
                SkyDynamics G.P. ("we", "our", or "us") operates the AeroTechLog service. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard 
                your information when you use our service.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>2. Information We Collect</h2>
              <p>
                We collect information that you provide directly to us, including:
              </p>
              <ul>
                <li>Account information (name, email, organization)</li>
                <li>Aircraft operational data as entered by authorized users</li>
                <li>Usage data and analytics</li>
                <li>Communication records when you contact us</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>3. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process and complete transactions</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>4. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect 
                the security of your personal information. This includes encryption, access 
                controls, and regular security assessments. We are ISO 27001 certified.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>5. Data Retention</h2>
              <p>
                We retain your information for as long as necessary to provide our services 
                and fulfill the purposes outlined in this Privacy Policy, unless a longer 
                retention period is required by law or aviation regulations.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>6. Your Rights</h2>
              <p>
                Under GDPR and other applicable laws, you have the right to:
              </p>
              <ul>
                <li>Access your personal data</li>
                <li>Rectify inaccurate data</li>
                <li>Request erasure of your data</li>
                <li>Object to processing</li>
                <li>Data portability</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>7. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> privacy@skydynamics.aero<br />
                <strong>Address:</strong> Science & Technology Park of Crete, Heraklion, Greece
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
