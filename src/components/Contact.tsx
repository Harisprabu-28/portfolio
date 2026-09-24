import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaPaperPlane, FaCheck, FaPhoneAlt } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { socialLinks } from '../data/data'
import SectionHeading from './SectionHeading'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    const name = form.name.trim()
    const email = form.email.trim()
    const message = form.message.trim()

    if (!name || !email || !message) {
      setStatus('error')
      setErrorMessage('Please fill in all required fields.')
      return
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setStatus('error')
      setErrorMessage('Please enter a valid email address.')
      return
    }

    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY
    if (!accessKey) {
      setStatus('error')
      setErrorMessage(
        'Submission key is missing. Please set VITE_WEB3FORMS_ACCESS_KEY in your environment.'
      )
      return
    }

    setLoading(true)
    setStatus('idle')
    setErrorMessage('')

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: accessKey,
          name,
          email,
          message,
          subject: `New Contact Form Submission from ${name}`,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setErrorMessage(
          result.message || 'Something went wrong. Please try again.'
        )
      }
    } catch {
      setStatus('error')
      setErrorMessage('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const socials = [
    {
      icon: FaGithub,
      label: 'GitHub',
      href: socialLinks.github,
      color: 'hover:text-white',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: socialLinks.linkedin,
      color: 'hover:text-blue-400',
    },
    {
      icon: SiLeetcode,
      label: 'LeetCode',
      href: socialLinks.leetcode,
      color: 'hover:text-yellow-500',
    },
    {
      icon: FaEnvelope,
      label: 'Email',
      href: `mailto:${socialLinks.email}`,
      color: 'hover:text-primary',
    },
    {
      icon: FaPhoneAlt,
      label: 'Phone Call',
      href: socialLinks.phoneTel,
      color: 'hover:text-primary',
    },
  ]

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="max-w-5xl mx-auto px-6">
        <SectionHeading
          title="Get in Touch"
          subtitle="Have a project in mind or just want to connect? I'd love to hear from you."
        />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8">
              <AnimatePresence mode="wait">
                {status === 'success' ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center justify-center py-12 gap-4 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ type: 'spring', stiffness: 200 }}
                  >
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
                      <FaCheck className="text-green-400 text-2xl" />
                    </div>
                    <p className="text-text-primary font-semibold text-lg">
                      Message sent successfully.
                    </p>
                    <p className="text-text-secondary text-sm">
                      Thank you for reaching out! I'll get back to you as soon as possible.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus('idle')}
                      className="mt-2 px-4 py-2 rounded-xl bg-surface-elevated border border-border text-text-secondary text-xs hover:text-text-primary transition-colors cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    className="space-y-5"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {status === 'error' && (
                      <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs font-medium flex items-center justify-between">
                        <span>{errorMessage || 'Something went wrong. Please try again.'}</span>
                        <button
                          type="button"
                          onClick={() => setStatus('idle')}
                          className="text-red-400 hover:text-red-300 ml-2 font-bold cursor-pointer"
                        >
                          ✕
                        </button>
                      </div>
                    )}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-text-secondary text-sm font-medium mb-2"
                      >
                        Name
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        disabled={loading}
                        value={form.name}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, name: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-text-primary text-sm placeholder:text-text-tertiary focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-text-secondary text-sm font-medium mb-2"
                      >
                        Email
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        disabled={loading}
                        value={form.email}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, email: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-text-primary text-sm placeholder:text-text-tertiary focus:outline-none focus:border-primary transition-colors disabled:opacity-50"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-text-secondary text-sm font-medium mb-2"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={5}
                        disabled={loading}
                        value={form.message}
                        onChange={(e) =>
                          setForm((f) => ({ ...f, message: e.target.value }))
                        }
                        className="w-full px-4 py-3 rounded-xl bg-surface-elevated border border-border text-text-primary text-sm placeholder:text-text-tertiary focus:outline-none focus:border-primary transition-colors resize-none disabled:opacity-50"
                        placeholder="What's on your mind?"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary text-bg font-semibold text-sm hover:bg-primary-hover transition-all btn-glow cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <span className="w-4 h-4 border-2 border-bg border-t-transparent rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <FaPaperPlane className="text-xs" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Social Links & Info */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <h3 className="text-text-primary font-bold text-xl mb-3">
                Let's build something great together
              </h3>
              <p className="text-text-secondary leading-relaxed">
                I'm always interested in hearing about new projects, creative ideas,
                or opportunities to be part of something meaningful. Feel free to reach
                out through the form or connect directly.
              </p>
            </div>

            <div>
              <h4 className="text-text-secondary text-xs uppercase tracking-wider font-semibold mb-4">
                Find me on &amp; Connect
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith('mailto') || s.href.startsWith('tel') ? undefined : '_blank'}
                    rel="noopener noreferrer"
                    className={`flex items-center gap-2.5 p-3.5 rounded-xl bg-surface border border-border text-text-secondary text-sm font-medium transition-all hover:border-primary/30 hover:bg-surface-elevated ${s.color}`}
                  >
                    <s.icon className="text-base flex-shrink-0" />
                    <span className="truncate">{s.label}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-surface border border-border">
                <p className="text-text-tertiary text-xs uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5">
                  <FaEnvelope className="text-primary text-xs" /> Email
                </p>
                <a
                  href={`mailto:${socialLinks.email}`}
                  className="text-primary font-medium text-sm hover:underline block truncate"
                >
                  {socialLinks.email}
                </a>
              </div>

              <div className="p-5 rounded-xl bg-surface border border-border">
                <p className="text-text-tertiary text-xs uppercase tracking-wider font-semibold mb-2 flex items-center gap-1.5">
                  <FaPhoneAlt className="text-primary text-xs" /> Phone
                </p>
                <a
                  href={socialLinks.phoneTel}
                  className="text-primary font-medium text-sm hover:underline inline-flex items-center gap-2"
                >
                  {socialLinks.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
