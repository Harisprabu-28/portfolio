import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-scroll'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { useIntro } from '../context/IntroContext'
import { navLinks } from '../data/data'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { introComplete } = useIntro()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'navbar-glass py-3' : 'py-5'
        }`}
        initial={{ opacity: 0, y: -20 }}
        animate={introComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
        transition={{ delay: introComplete ? 1.7 : 0, duration: 0.4, ease: 'easeOut' }}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="hero"
            smooth
            duration={600}
            className="cursor-pointer flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center shadow-[0_0_12px_rgba(250,204,21,0.25)]">
              <span className="text-bg font-extrabold text-sm tracking-tighter">HP</span>
            </div>
            <span className="text-text-primary font-bold text-sm tracking-[0.12em] uppercase group-hover:text-primary transition-colors">
              Haris Prabu
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                spy
                smooth
                offset={-80}
                duration={600}
                activeClass="active"
                className="nav-link text-[11px] font-semibold tracking-[0.18em] uppercase text-text-secondary hover:text-text-primary transition-colors cursor-pointer"
              >
                {link.label}
              </Link>
            ))}
            <a
              href="/resume.pdf"
              download
              className="ml-2 px-5 py-2 rounded-full bg-primary text-bg text-[11px] font-bold tracking-[0.1em] uppercase hover:bg-primary-hover transition-colors btn-glow"
            >
              Resume
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-text-primary text-2xl p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-bg/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.to}
                  spy
                  smooth
                  offset={-80}
                  duration={600}
                  onClick={() => setMobileOpen(false)}
                  className="text-xl font-bold tracking-[0.15em] uppercase text-text-secondary hover:text-primary transition-colors cursor-pointer"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.a
              href="/resume.pdf"
              download
              className="mt-4 px-8 py-3 rounded-full bg-primary text-bg font-bold text-base tracking-wider uppercase"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
            >
              Download Resume
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
