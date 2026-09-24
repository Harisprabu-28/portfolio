import { motion } from 'framer-motion'
import { FaTrophy, FaRocket } from 'react-icons/fa'
import { hackathons } from '../data/data'
import SectionHeading from './SectionHeading'

const icons = [FaRocket, FaTrophy]

export default function Hackathons() {
  return (
    <section id="hackathons" className="py-24 md:py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <SectionHeading
          title="Hackathons"
          subtitle="Competitions and collaborative challenges"
        />

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border hidden sm:block" />

          <div className="space-y-10">
            {hackathons.map((hack, i) => {
              const Icon = icons[i % icons.length]
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={hack.title}
                  className={`relative flex flex-col sm:flex-row items-start gap-6 ${
                    isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                >
                  {/* Timeline dot */}
                  <div className="hidden sm:flex absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary border-4 border-bg z-10" />

                  {/* Card */}
                  <div
                    className={`flex-1 glass-card p-6 ${
                      isLeft ? 'sm:mr-8 md:mr-12' : 'sm:ml-8 md:ml-12'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary-dim flex items-center justify-center">
                        <Icon className="text-primary" />
                      </div>
                      {hack.highlight && (
                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-dim text-primary border border-primary/20">
                          {hack.highlight}
                        </span>
                      )}
                    </div>
                    <h3 className="text-text-primary font-bold text-lg mb-2">
                      {hack.title}
                    </h3>
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {hack.description}
                    </p>
                  </div>

                  {/* Spacer for the other side */}
                  <div className="hidden sm:block flex-1" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
