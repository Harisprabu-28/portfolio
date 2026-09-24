import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-scroll'
import { FaArrowRight } from 'react-icons/fa'
import { useIntro } from '../context/IntroContext'
import HeroQuote from './HeroQuote'

/* ─── Name clip-path reveal variant (2.5s duration, 0.6s start delay) ─── */
const nameVariants = {
  hidden: { clipPath: 'inset(0 50% 0 50%)' },
  visible: {
    clipPath: 'inset(0 0% 0 0%)',
    transition: {
      duration: 2.5,
      ease: [0.77, 0, 0.175, 1],
      delay: 0.6,
    },
  },
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null)
  const { introComplete } = useIntro()

  /* ─── Animation orchestration delays (relative to introComplete) ─── 
   * Sequence: photo → name → tagline → floating tags → navbar → dots
   * Total ≈ 2.5s. Steps overlap slightly for quick, fluid feel.
   */
  const photoDelay = 0      // Step 2: Photo slides up (0.6s)
  const taglineDelay = 1.1    // Step 4: Tagline/proverbs fade in (0.4s)
  const floatTagDelay = 1.3    // Step 5: Floating tags slide in from edges (0.4s each)
  const dotPagDelay = 1.9    // Step 7: Dot pagination fades in (0.3s)
  // Step 6 (navbar at ~1.7s) is handled in Navbar.tsx via the same context

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#050505] py-16 lg:py-0 select-none"
    >
      {/* ─── Center Studio Spotlight Glow ─── */}
      <div className="hero-spotlight" />
      <div className="hero-photo-halo" />

      {/* ─── Deep Black Edge & Corner Vignette ─── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 50%, transparent 25%, rgba(0, 0, 0, 0.75) 70%, #000000 100%)',
        }}
      />

      {/* ─── Left Mid-Screen Floating Tag (Step 5) ─── */}
      <motion.div
        className="hidden xl:flex absolute left-6 2xl:left-12 top-1/2 -translate-y-1/2 z-25 pointer-events-auto"
        initial={{ opacity: 0, x: -70 }}
        animate={introComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -70 }}
        transition={{ delay: introComplete ? floatTagDelay : 0, duration: 0.4, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414]/80 border border-white/10 backdrop-blur-md text-[11px] font-semibold tracking-wider text-text-secondary shadow-2xl hover:border-primary/40 hover:text-text-primary transition-all">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>• FULL STACK DEV •</span>
        </div>
      </motion.div>

      {/* ─── Right Mid-Screen Floating Tag (Step 5) ─── */}
      <motion.div
        className="hidden xl:flex absolute right-6 2xl:right-12 top-1/2 -translate-y-1/2 z-25 pointer-events-auto"
        initial={{ opacity: 0, x: 70 }}
        animate={introComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: 70 }}
        transition={{ delay: introComplete ? floatTagDelay + 0.1 : 0, duration: 0.4, ease: 'easeOut' }}
      >
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#141414]/80 border border-white/10 backdrop-blur-md text-[11px] font-semibold tracking-wider text-text-secondary shadow-2xl hover:border-primary/40 hover:text-text-primary transition-all">
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
          <span>• PROBLEM SOLVER •</span>
        </div>
      </motion.div>

      {/* ─── Top-Left: Rotating Proverbs (Step 4 — tagline, isolated in HeroQuote) ─── */}
      <HeroQuote />

      {/* ─── Main Hero Content ─── */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6">

        {/* ─── Big Name + Photo Layered Section ─── */}
        <div className="relative w-full max-w-[1400px] mx-auto flex flex-col items-center justify-center mt-12 sm:mt-16 lg:mt-8">

          {/* ─── Mobile: Name above photo (Step 3) ─── */}
          <div className="block lg:hidden text-center mb-4">
            <motion.h1
              className="hero-name-mobile hero-name"
              variants={nameVariants}
              initial="hidden"
              animate={introComplete ? 'visible' : 'hidden'}
            >
              <span className="hero-yellow-text">HARIS PRABU</span>
            </motion.h1>
          </div>

          {/* ─── Desktop: Name behind photo (Step 3) ─── */}
          <div className="hidden lg:flex relative items-center justify-center w-full" style={{ minHeight: '440px' }}>

            {/* Radial Spotlight Backlight (Layer 0: Behind Name & Photo) */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none z-0"
              style={{
                width: '540px',
                height: '540px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle at 50% 45%, rgba(255, 255, 255, 0.15) 0%, rgba(230, 230, 240, 0.07) 40%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(20px)',
              }}
            />

            {/* Big name text layer — behind photo (Layer 1: z-10) */}
            <div className="absolute inset-0 flex items-center justify-center select-none pointer-events-none z-10">
              <motion.h1
                className="hero-name-desktop hero-name"
                variants={nameVariants}
                initial="hidden"
                animate={introComplete ? 'visible' : 'hidden'}
              >
                <span className="hero-yellow-text">HARIS PRABU</span>
              </motion.h1>
            </div>

            {/* Photo cutout layer — in front of name (Layer 2: z-20) — Step 2 */}
            <motion.div
              className="relative z-20"
              initial={{ opacity: 0, y: 70, scale: 0.96 }}
              animate={introComplete ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 70, scale: 0.96 }}
              transition={{
                delay: introComplete ? photoDelay : 0,
                duration: 0.6,
                ease: 'easeOut',
              }}
            >
              <div className="hero-photo-cutout">
                <img
                  src="/profile.png"
                  alt="Haris Prabu"
                  className="w-full h-full object-cover object-top"
                />
                {/* Bottom soft gradient dissolve */}
                <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
              </div>
            </motion.div>
          </div>

          {/* ─── Mobile: Photo (Step 2) ─── */}
          <motion.div
            className="block lg:hidden relative z-20 mb-4"
            initial={{ opacity: 0, y: 40 }}
            animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{ delay: introComplete ? photoDelay : 0, duration: 0.6, ease: 'easeOut' }}
          >
            {/* Mobile Radial Backlight Glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none -z-10"
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                background:
                  'radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 70%)',
                filter: 'blur(16px)',
              }}
            />
            <div className="hero-photo-cutout-mobile">
              <img
                src="/profile.png"
                alt="Haris Prabu"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-bg to-transparent pointer-events-none" />
            </div>
          </motion.div>

          {/* ─── Bottom Action Row: Tagline on Left, CTA on Right (Step 4) ─── */}
          <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 mt-4 lg:-mt-10 relative z-30 flex flex-col sm:flex-row items-center justify-between gap-4">

            {/* ─── Left: Software Developer Tagline ─── */}
            <motion.div
              className="text-center sm:text-left"
              initial={{ opacity: 0, x: -30 }}
              animate={introComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ delay: introComplete ? taglineDelay : 0, duration: 0.4 }}
            >
              <h2 className="text-base sm:text-lg md:text-xl font-semibold tracking-wide">
                <span className="text-text-primary font-bold">Software</span>
                <span className="ml-2 text-text-secondary italic font-light">Developer</span>
              </h2>
            </motion.div>

            {/* ─── Right: CTA Contact & Resume ─── */}
            <motion.div
              className="flex items-center gap-2.5"
              initial={{ opacity: 0, x: 30 }}
              animate={introComplete ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ delay: introComplete ? taglineDelay + 0.1 : 0, duration: 0.4 }}
            >
              <Link
                to="contact"
                smooth
                offset={-80}
                duration={600}
                className="group inline-flex items-center gap-2 px-4.5 py-2 rounded-full bg-primary text-bg font-semibold text-xs tracking-wider uppercase hover:bg-primary-hover transition-all btn-glow cursor-pointer"
              >
                Contact
                <span className="w-4.5 h-4.5 rounded-full bg-bg/20 flex items-center justify-center text-[10px] group-hover:translate-x-0.5 transition-transform">
                  <FaArrowRight />
                </span>
              </Link>
              <a
                href="/resume.pdf"
                download
                className="w-8.5 h-8.5 rounded-full border border-border/80 bg-surface/40 backdrop-blur-sm flex items-center justify-center text-text-secondary hover:border-primary hover:text-primary transition-all text-xs"
                title="Download Resume"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-3.5 h-3.5"
                >
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ─── Dot Pagination Indicators (Step 7 — decorative, bottom-right) ─── */}
      <motion.div
        className="absolute bottom-8 right-8 z-30 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={introComplete ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: introComplete ? dotPagDelay : 0, duration: 0.3, ease: 'easeOut' }}
      >
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className={`rounded-full transition-all duration-500 ${i === 0
              ? 'w-2 h-2 bg-primary shadow-[0_0_6px_rgba(250,204,21,0.5)]'
              : 'w-1.5 h-1.5 bg-white/20'
              }`}
          />
        ))}
        <div className="w-[1px] h-6 bg-gradient-to-b from-white/15 to-transparent mt-1" />
      </motion.div>
    </section>
  )
}
