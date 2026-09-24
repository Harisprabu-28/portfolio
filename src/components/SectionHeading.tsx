import { motion } from 'framer-motion'

interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div className="text-center mb-16">
      <motion.h2
        className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title.split(' ').map((word, i) => (
          <span key={i}>
            {i === 0 ? (
              <span className="text-gradient-yellow">{word}</span>
            ) : (
              <span className="text-text-primary"> {word}</span>
            )}
          </span>
        ))}
      </motion.h2>
      {subtitle && (
        <motion.p
          className="mt-4 text-text-secondary text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        className="mt-6 mx-auto w-20 h-1 rounded-full bg-primary"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
    </div>
  )
}
