import { Helmet } from 'react-helmet'
import { motion, AnimatePresence } from 'framer-motion'
import { siteConfig } from '../config'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState({ submitting: false, submitted: false, error: null })

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })
    try {
      const res = await fetch(siteConfig.formspreeEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus({ submitting: false, submitted: true, error: null })
        setFormData({ name: '', email: '', phone: '', message: '' })
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      setStatus({ submitting: false, submitted: false, error: error.message })
    }
  }

  const contactMethods = [
    { label: 'Direct Line', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { label: 'Electronic Mail', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: 'Instant Message', value: 'WhatsApp Concierge', href: `https://wa.me/${siteConfig.whatsappNumber}` },
  ]

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Helmet>
        <title>Concierge | {siteConfig.companyName}</title>
        <meta name="description" content="Secure your private chauffeur experience. Contact our elite concierge team." />
      </Helmet>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 border-b border-white/5 pb-12"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-4 block">Inquiries</span>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter italic leading-none">
              Contact <span className="not-italic text-white/90">Concierge</span>
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
            {/* Sidebar Info */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 space-y-16"
            >
              <div>
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6 font-bold">The Experience</h3>
                <p className="text-lg font-light text-white/60 leading-relaxed italic">
                  Whether booking for immediate travel or a future engagement, our team ensures every detail is orchestrated with precision.
                </p>
              </div>

              <div className="space-y-8">
                {contactMethods.map((method) => (
                  <div key={method.label} className="group">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 mb-2">{method.label}</p>
                    <a href={method.href} className="text-sm tracking-[0.1em] text-white/80 group-hover:text-white transition-colors">
                      {method.value}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Premium Form */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-8 bg-white/[0.02] border border-white/5 rounded-3xl p-8 md:p-12"
            >
              <AnimatePresence mode="wait">
                {status.submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-12 h-[1px] bg-white/20 mb-8" />
                    <h2 className="text-2xl font-extralight tracking-widest uppercase mb-4 text-white">Message Received</h2>
                    <p className="text-white/40 text-sm tracking-wide">Our concierge will reach out to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                      <div className="relative group">
                        <input
                          type="text"
                          name="name"
                          placeholder="FULL NAME"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/10 py-4 text-xs tracking-widest focus:outline-none focus:border-white transition-colors placeholder:text-white/10 uppercase font-light"
                        />
                      </div>
                      <div className="relative group">
                        <input
                          type="email"
                          name="email"
                          placeholder="EMAIL ADDRESS"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/10 py-4 text-xs tracking-widest focus:outline-none focus:border-white transition-colors placeholder:text-white/10 uppercase font-light"
                        />
                      </div>
                    </div>
                    
                    <div className="relative group">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="PHONE NUMBER (OPTIONAL)"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xs tracking-widest focus:outline-none focus:border-white transition-colors placeholder:text-white/10 uppercase font-light"
                      />
                    </div>

                    <div className="relative group">
                      <textarea
                        name="message"
                        placeholder="YOUR REQUIREMENTS"
                        rows="4"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 py-4 text-xs tracking-widest focus:outline-none focus:border-white transition-colors placeholder:text-white/10 uppercase font-light resize-none"
                      ></textarea>
                    </div>

                    {status.error && (
                      <p className="text-red-400 text-[10px] tracking-widest uppercase italic">
                        System Error: {status.error}
                      </p>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={status.submitting}
                      className="w-full py-5 bg-white text-black text-[11px] font-bold uppercase tracking-[0.3em] rounded-full disabled:opacity-20 transition-all"
                    >
                      {status.submitting ? 'Processing...' : 'Send Inquiry'}
                    </motion.button>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact