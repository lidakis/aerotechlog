import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SEO from '../components/SEO'
import './FAQ.css'

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

const faqs = [
  {
    question: 'What is AeroTechLog?',
    answer: 'AeroTechLog is a comprehensive digital aircraft technical log solution that replaces paper-based journey logs with a fully electronic system. It includes features for flight crew entries, defect management, MEL/CDL tracking, and maintenance record integration.'
  },
  {
    question: 'Is AeroTechLog compliant with aviation regulations?',
    answer: 'Yes, AeroTechLog is designed to be fully compliant with EASA, ICAO, and FAA regulations for electronic technical logs. We work closely with regulatory bodies to ensure our solution meets all requirements for paperless operations.'
  },
  {
    question: 'Can AeroTechLog work offline?',
    answer: 'Yes, AeroTechLog is designed to work offline. Crew members can make entries and access aircraft data even without internet connectivity. All data automatically synchronizes when a connection is restored.'
  },
  {
    question: 'How does AeroTechLog handle digital signatures?',
    answer: 'AeroTechLog uses secure digital signature technology that complies with aviation regulatory requirements. Each user has a unique signature credential that provides non-repudiation and audit trails for all entries.'
  },
  {
    question: 'Can AeroTechLog integrate with our existing systems?',
    answer: 'Yes, AeroTechLog offers extensive integration capabilities with MRO systems, flight operations systems, crew management platforms, and other enterprise software. We provide APIs and standard connectors for seamless data exchange.'
  },
  {
    question: 'How is data security handled?',
    answer: 'AeroTechLog employs enterprise-grade security including encryption at rest and in transit, multi-factor authentication, role-based access control, and regular security audits. We are ISO 27001 certified.'
  },
  {
    question: 'What devices are supported?',
    answer: 'AeroTechLog works on tablets, laptops, and desktop computers through any modern web browser. We also offer dedicated mobile apps for iOS and Android for enhanced offline capabilities.'
  },
  {
    question: 'How long does implementation take?',
    answer: 'Implementation timeline varies based on fleet size and integration requirements. Typical implementations range from 4-12 weeks, including data migration, integration setup, training, and regulatory approval processes.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className="faq-page">
      <SEO
        title="FAQ | AeroTechLog - Digital Aircraft Technical Log"
        description="Frequently asked questions about AeroTechLog digital aircraft technical log solution for airlines and operators."
        canonical="/faq"
      />

      {/* Hero Section */}
      <section className="faq-hero">
        <div className="container">
          <motion.div
            className="faq-hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.span className="section-label" variants={fadeInUp}>FAQ</motion.span>
            <motion.h1 variants={fadeInUp}>
              Frequently Asked <span className="text-gradient">Questions</span>
            </motion.h1>
            <motion.p variants={fadeInUp}>
              Find answers to common questions about AeroTechLog
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="faq-content section-lg">
        <div className="container">
          <motion.div
            className="faq-list"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {faqs.map((faq, idx) => (
              <motion.div
                key={idx}
                className={`faq-item ${openIndex === idx ? 'open' : ''}`}
                variants={fadeInUp}
              >
                <button
                  className="faq-question"
                  onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                >
                  <span>{faq.question}</span>
                  <ChevronDown size={20} />
                </button>
                <AnimatePresence>
                  {openIndex === idx && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}
