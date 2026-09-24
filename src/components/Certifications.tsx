import { motion } from 'framer-motion'
import { FaCertificate, FaExternalLinkAlt } from 'react-icons/fa'
import { certifications, socialLinks } from '../data/data'
import SectionHeading from './SectionHeading'

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Certifications"
          subtitle="Professional certifications and achievements — click any certificate to view on LinkedIn"
        />

        <motion.div
          className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.05 } } }}
        >
          {certifications.map((cert) => (
            <motion.a
              key={cert.name}
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-badge group block cursor-pointer transition-all duration-300 hover:border-primary/60 hover:bg-surface-elevated hover:shadow-[0_4px_25px_rgba(250,204,21,0.15)] hover:-translate-y-1"
              variants={{
                hidden: { opacity: 0, y: 20, scale: 0.97 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
              }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3 min-w-0">
                  <div className="w-8 h-8 rounded-lg bg-primary-dim flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-primary/20 transition-colors">
                    <FaCertificate className="text-primary text-sm" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-text-primary text-sm font-semibold leading-snug group-hover:text-primary transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-text-tertiary text-xs mt-1">{cert.issuer}</p>
                  </div>
                </div>
                <FaExternalLinkAlt className="text-text-tertiary text-xs opacity-50 group-hover:opacity-100 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0 mt-1" />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
