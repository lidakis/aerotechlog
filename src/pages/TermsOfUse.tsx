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

export default function TermsOfUse() {
  return (
    <div className="privacy-page">
      <SEO
        title="Terms of Use | AeroTechLog"
        description="Terms of Use for AeroTechLog - Digital Aircraft Technical Log solution by SkyDynamics."
        canonical="/terms"
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
            <motion.h1 variants={fadeInUp}>Terms of Use</motion.h1>
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
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using AeroTechLog, you agree to be bound by these Terms of Use. 
                If you do not agree to these terms, please do not use our service.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>2. Use of Service</h2>
              <p>
                AeroTechLog is provided for use by authorized personnel of licensed aircraft 
                operators, maintenance organizations, and training organizations. You agree to 
                use the service only for lawful purposes and in accordance with aviation regulations.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>3. User Accounts</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account credentials 
                and for all activities that occur under your account. You must notify us immediately 
                of any unauthorized use of your account.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>4. Data Accuracy</h2>
              <p>
                Users are responsible for ensuring the accuracy of all data entered into AeroTechLog. 
                The service is designed to assist in compliance but does not replace the user's 
                obligation to ensure regulatory compliance.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>5. Intellectual Property</h2>
              <p>
                AeroTechLog and all related content, features, and functionality are owned by 
                SkyDynamics G.P. and are protected by international copyright, trademark, and 
                other intellectual property laws.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>6. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, SkyDynamics G.P. shall not be liable for 
                any indirect, incidental, special, consequential, or punitive damages resulting 
                from your use of the service.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>7. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Use at any time. We will notify 
                users of any material changes via email or through the service.
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <h2>8. Contact</h2>
              <p>
                For questions about these Terms of Use, please contact us at:
              </p>
              <p>
                <strong>Email:</strong> legal@skydynamics.aero<br />
                <strong>Address:</strong> Science & Technology Park of Crete, Heraklion, Greece
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
