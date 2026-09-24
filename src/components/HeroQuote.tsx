import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntro } from '../context/IntroContext'

/* ─── 3 Rotating Proverbs ─── */
const proverbs = [
  {
    text: 'Every expert was once a beginner.',
    category: 'Learning Mindset',
  },
  {
    text: 'First, solve the problem. Then, write the code.',
    category: 'Engineering Philosophy',
  },
  {
    text: 'Make it work, make it right, make it scalable.',
    category: 'Software Craftsmanship',
  },
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
      <div className="flex items-start gap-3 p-3 sm:p-3.5 rounded-xl bg-[#141414]/75 border border-white/10 backdrop-blur-md shadow-2xl hover:border-primary/40 transition-colors">
        {/* Animated Glowing Indicator & Step Bars */}
        <div className="mt-1 flex flex-col items-center gap-1.5 flex-shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
          </span>
          <div className="flex flex-col gap-1 mt-1">
            {proverbs.map((_, i) => (
              <div
                key={i}
                className={`w-1 transition-all duration-500 rounded-full ${
                  currentProverb === i
                    ? 'h-3 bg-primary shadow-[0_0_8px_rgba(250,204,21,0.5)]'
                    : 'h-1 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Animated Proverb Text */}
        <div className="flex-1 overflow-hidden min-h-[50px] flex flex-col justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProverb}
              initial={{ opacity: 0, y: 10, filter: 'blur(3px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -10, filter: 'blur(3px)' }}
              transition={{ duration: 0.45, ease: EASE_CINE }}
            >
              <p className="text-xs sm:text-[13px] text-text-primary font-medium leading-snug italic">
                "{proverbs[currentProverb].text}"
              </p>
              <p className="text-[10px] text-primary font-semibold tracking-wider uppercase mt-1">
                — {proverbs[currentProverb].category}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  )
}
