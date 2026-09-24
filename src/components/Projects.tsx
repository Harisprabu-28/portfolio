import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { projects, projectCategories } from '../data/data'
import SectionHeading from './SectionHeading'

const categoryColorMap: Record<string, string> = {
  AI: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
  Web: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  IoT: 'bg-green-500/10 text-green-400 border-green-500/20',
  Other: 'bg-orange-500/10 text-orange-400 border-orange-500/20',
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered =
    activeFilter === 'All'
      ? projects
      : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <SectionHeading
          title="Featured Projects"
          subtitle="Real-world applications I've built and shipped — click any project to view on GitHub"
        />

        {/* Filter Bar */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {projectCategories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
              onClick={() => setActiveFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project Cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filtered.map((project, i) => (
              <motion.a
                key={project.title}
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group glass-card p-6 flex flex-col cursor-pointer transition-all duration-300 hover:border-primary/60 hover:shadow-[0_8px_32px_rgba(250,204,21,0.18)] hover:-translate-y-1.5"
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                layout
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 pr-3">
                    <div className="flex items-center gap-3 mb-2">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                          categoryColorMap[project.category] || categoryColorMap.Other
                        }`}
                      >
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-text-primary font-bold text-lg leading-snug group-hover:text-primary transition-colors flex items-center gap-2">
                      {project.title}
                      <FaExternalLinkAlt className="text-xs opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </h3>
                  </div>
                  <div className="p-2 rounded-xl bg-surface border border-border text-text-tertiary group-hover:text-primary group-hover:border-primary/40 group-hover:bg-primary-dim transition-all flex-shrink-0">
                    <FaGithub className="text-xl" />
                  </div>
                </div>

                {/* Description */}
                <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-border/50">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-xs font-medium bg-surface-elevated text-text-tertiary border border-border group-hover:border-primary/20 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}
