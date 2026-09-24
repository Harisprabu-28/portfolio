import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useIntro } from '../context/IntroContext'

export default function IntroAnimation() {
  const { markIntroComplete } = useIntro()

  const [visible, setVisible] = useState(() => {
    if (typeof window !== 'undefined') {
      return !sessionStorage.getItem('hp_portfolio_intro_seen')
    }
    return false
  })

  useEffect(() => {
    if (!visible) {
      // If already seen (returning visitor in same session), mark complete immediately
      markIntroComplete()
      return
    }

    // Auto-dismiss after 2.6 seconds
    const timer = setTimeout(() => {
      dismiss()
    }, 2600)

    return () => clearTimeout(timer)
  }, [visible])

  const dismiss = () => {
    sessionStorage.setItem('hp_portfolio_intro_seen', 'true')
    setVisible(false)
  }

  const name = 'HARIS PRABU'
  const letters = name.split('')

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 25, filter: 'blur(8px)', scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      scale: 1,
      transition: {
        duration: 0.45,
        ease: 'easeOut',
      },
    },
  }

  return (
    <AnimatePresence
      onExitComplete={() => {
        // Fire when the overlay exit animation fully finishes
        markIntroComplete()
      }}
    >
      {visible && (
        <motion.div
          onClick={dismiss}
          className="fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center cursor-pointer select-none px-4"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          {/* Subtle background glow */}
          <div className="absolute w-96 h-96 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />

          {/* Letter by letter reveal */}
          <motion.div
            className="flex items-center justify-center flex-wrap gap-x-3 sm:gap-x-4 md:gap-x-5"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {letters.map((char, index) => {
              if (char === ' ') {
                return (
                  <span key={index} className="w-3 sm:w-5 md:w-7 inline-block" />
                )
              }
              return (
                <motion.span
                  key={index}
                  variants={letterVariants}
                  className="text-4xl sm:text-6xl md:text-7xl tracking-[0.08em] text-primary drop-shadow-[0_0_25px_rgba(250,204,21,0.55)]"
                  style={{ fontFamily: "'Stardos Stencil', serif", fontWeight: 700 }}
                >
                  {char}
                </motion.span>
              )
            })}
          </motion.div>

          {/* Subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="mt-4 flex items-center gap-3"
          >
            <div className="w-8 h-[1px] bg-primary/40" />
            <p className="text-xs sm:text-sm font-semibold tracking-[0.3em] uppercase text-text-secondary">
              Software Developer
            </p>
            <div className="w-8 h-[1px] bg-primary/40" />
          </motion.div>

          {/* Skip hint */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 1.4, duration: 0.4 }}
            className="absolute bottom-8 text-[11px] text-text-tertiary tracking-wider uppercase font-medium hover:opacity-100 transition-opacity"
          >
            Click anywhere to skip
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

