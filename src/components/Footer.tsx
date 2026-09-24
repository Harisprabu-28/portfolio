import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { Link } from 'react-scroll'
import { socialLinks } from '../data/data'

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-bg font-extrabold text-xs">HP</span>
            </div>
            <span className="text-text-secondary text-sm">
              © {new Date().getFullYear()} Crafted with care by Haris Prabu.
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="text-lg" />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-lg" />
            </a>
            <a
              href={socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-tertiary hover:text-primary transition-colors"
              aria-label="LeetCode"
            >
              <SiLeetcode className="text-lg" />
            </a>
            <a
              href={`mailto:${socialLinks.email}`}
              className="text-text-tertiary hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="text-lg" />
            </a>

            {/* Back to top */}
            <Link
              to="hero"
              smooth
              duration={800}
              className="ml-4 w-9 h-9 rounded-full border border-border flex items-center justify-center text-text-tertiary hover:text-primary hover:border-primary transition-all cursor-pointer"
              aria-label="Back to top"
            >
              <FaArrowUp className="text-sm" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
