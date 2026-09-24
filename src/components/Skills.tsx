import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillCategories } from '../data/data'
import SectionHeading from './SectionHeading'

export default function Skills() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section id="skills" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading title="Skills & Technologies" subtitle="Technologies I work with and tools I use" />

        {/* Tab Buttons */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {skillCategories.map((cat, idx) => (
            <button
              key={cat.label}
              className={`filter-btn ${activeTab === idx ? 'active' : ''}`}
              onClick={() => setActiveTab(idx)}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
          >
            {skillCategories[activeTab].skills.map((skill, i) => {
              const Icon = skill.icon
              return (
                <motion.div
                  key={skill.name}
                  className="skill-badge"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.06 }}
                >
                  <Icon className="text-primary text-xl" />
                  <span>{skill.name}</span>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {/* View All indicator */}
        <motion.p
          className="text-center mt-8 text-text-tertiary text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Click tabs to explore different skill categories
        </motion.p>
      </div>
    </section>
  )
}
