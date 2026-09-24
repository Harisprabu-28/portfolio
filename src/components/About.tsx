import { motion } from 'framer-motion'
import { FaGraduationCap } from 'react-icons/fa'
import SectionHeading from './SectionHeading'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: 'easeOut' },
  }),
}

const careerFocusList = [
  'Software Development',
  'Full-stack & Backend Development',
  'Java',
  'Python',
  'DSA',
  'Databases',
  'Git/GitHub',
  'Cloud',
  'AI application development',
]

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="About Me" subtitle="A glimpse into who I am and what drives me" />

        <div className="grid md:grid-cols-2 gap-10 items-start">
          {/* Bio */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <motion.p
              custom={0}
              variants={fadeUp}
              className="text-text-secondary leading-relaxed text-base md:text-lg"
            >
              I'm a <span className="text-text-primary font-medium">curious builder</span> who
              learns best by shipping real projects. Pursuing{' '}
              <span className="text-text-primary font-medium">B.Tech Information Technology</span> at{' '}
              <span className="text-text-primary font-medium">M. Kumarasamy College of Engineering (MKCE)</span>,
              I'm driven by the challenge of turning concepts into robust, working software.
            </motion.p>
            <motion.p
              custom={1}
              variants={fadeUp}
              className="text-text-secondary leading-relaxed text-base md:text-lg"
            >
              My work spans the full spectrum — from{' '}
              <span className="text-primary font-medium">modern web applications</span> and{' '}
              <span className="text-primary font-medium">AI-powered tools</span> to{' '}
              <span className="text-primary font-medium">IoT hardware-software integration</span>.
              I believe the most impactful solutions come from strong engineering fundamentals and continuous experimentation.
            </motion.p>
            <motion.p
              custom={2}
              variants={fadeUp}
              className="text-text-secondary leading-relaxed text-base md:text-lg"
            >
              Passionate about scalable system design, full-stack & backend development, algorithms, and AI solutions,
              with a clear goal of becoming a high-impact{' '}
              <span className="text-text-primary font-medium">Software Engineer</span>.
            </motion.p>
          </motion.div>

          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-dim flex items-center justify-center">
                  <FaGraduationCap className="text-primary text-xl" />
                </div>
                <div>
                  <h3 className="text-text-primary font-bold text-lg">Education</h3>
                  <p className="text-text-tertiary text-sm">Academic Background</p>
                </div>
              </div>

              <div className="space-y-5">
                <div className="p-5 rounded-xl bg-surface-elevated border border-border">
                  <h4 className="text-text-primary font-bold text-base leading-snug">
                    B.Tech Information Technology | 2024–2028 Batch | M. Kumarasamy College of Engineering (MKCE)
                  </h4>
                  <p className="text-text-tertiary text-sm mt-2">Tamil Nadu, India</p>
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-medium text-text-tertiary uppercase tracking-wider">
                      Academic Standing
                    </span>
                    <span className="px-3 py-1 rounded-full bg-primary-dim text-primary text-sm font-semibold border border-primary/20">
                      CGPA: 7.60
                    </span>
                  </div>
                </div>

                {/* Career Focus */}
                <div className="p-5 rounded-xl border border-border bg-surface/50">
                  <h4 className="text-text-secondary text-xs uppercase tracking-wider font-semibold mb-3.5">
                    Career Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {careerFocusList.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-surface border border-border text-text-secondary hover:border-primary/40 hover:text-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
