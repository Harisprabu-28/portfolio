import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntro } from '../context/IntroContext'

/* ─── 4 Rotating Proverbs ─── */
const proverbs = [
  'Discipline wins always.',
  'Pressure is a privilege.',
  'Giving up is not in the blood.',
  'Every expert was once a beginner.',
]

/* ─── Cinematic ease curve ─── */
const EASE_CINE = [0.22, 1, 0.36, 1] as const

export default function HeroQuote() {
  const [currentProverb, setCurrentProverb] = useState(0)
  const { introComplete } = useIntro()

  const taglineDelay = 1.1

  /* Rotate proverbs every 3 seconds */
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProverb((prev) => (prev + 1) % proverbs.length)
    }, 3000)
    return () => clearInterval(timer)
  }, [])

  return (
    <motion.div
      className="absolute top-20 sm:top-24 left-4 sm:left-8 lg:left-12 z-30 max-w-[280px] sm:max-w-[340px]"
      initial={{ opacity: 0, x: -25 }}
      animate={introComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -25 }}
      transition={{ delay: introComplete ? taglineDelay : 0, duration: 0.4, ease: 'easeOut' }}
    >
      <div className="p-3 sm:p-3.5 rounded-xl bg-[#141414]/75 border border-white/10 backdrop-blur-md shadow-2xl hover:border-primary/40 transition-colors">
        {/* Animated Proverb Text */}
        <div className="overflow-hidden min-h-[50px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProverb}
              initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
              transition={{ duration: 0.45, ease: EASE_CINE }}
            >
              <p className="text-xs sm:text-[13px] text-text-primary font-medium leading-snug italic">
                "{proverbs[currentProverb]}"
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
