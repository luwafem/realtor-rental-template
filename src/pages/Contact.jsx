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
    { label: 'Call Us', value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
    { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}` },
    { label: 'WhatsApp', value: 'Chat with us', href: `https://wa.me/${siteConfig.whatsappNumber}` },
  ]

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Helmet>
        <title>Contact Us | {siteConfig.companyName}</title>
        <meta name="description" content="Get in touch with Ezenwa James Real Estate in Awka. Call, WhatsApp, or email us to schedule viewings or inquire about properties." />
      </Helmet>

      <section className="pt-32 pb-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-20 border-b border-white/5 pb-12"
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-4 block font-bold">Get in Touch</span>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter leading-none">
              Contact <span className="italic text-white/90">Us</span>
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
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6 font-bold">Let's Connect</h3>
                <p className="text-lg font-light text-white/60 leading-relaxed italic">
                  Whether you're looking for your dream home, a rental property, or expert advice, we're here to help. Reach out today.
                </p>
              </div>

              <div className="space-y-8">
                {contactMethods.map((method) => (
                  <div key={method.label} className="group">
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/20 mb-2 font-bold">{method.label}</p>
                    <a href={method.href} className="text-sm tracking-[0.2em] text-white/80 group-hover:text-white transition-colors uppercase font-light">
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
              className="lg:col-span-8 bg-white/[0.01] border border-white/5 rounded-[40px] p-8 md:p-16 backdrop-blur-sm"
            >
              <AnimatePresence mode="wait">
                {status.submitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="h-full flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="w-12 h-[1px] bg-white/20 mb-10" />
                    <h2 className="text-2xl font-extralight tracking-[0.3em] uppercase mb-4 text-white italic">Message Received</h2>
                    <p className="text-white/40 text-[11px] tracking-widest uppercase font-light">Thank you for reaching out. We'll get back to you shortly.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="relative">
                        <label className="text-[8px] tracking-[0.4em] text-white/20 uppercase mb-2 block font-bold">Full Name</label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/10 py-3 text-xs tracking-widest focus:outline-none focus:border-white transition-colors uppercase font-light"
                        />
                      </div>
                      <div className="relative">
                        <label className="text-[8px] tracking-[0.4em] text-white/20 uppercase mb-2 block font-bold">Email</label>
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full bg-transparent border-b border-white/10 py-3 text-xs tracking-widest focus:outline-none focus:border-white transition-colors uppercase font-light"
                        />
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className="text-[8px] tracking-[0.4em] text-white/20 uppercase mb-2 block font-bold">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 py-3 text-xs tracking-widest focus:outline-none focus:border-white transition-colors uppercase font-light"
                      />
                    </div>

                    <div className="relative">
                      <label className="text-[8px] tracking-[0.4em] text-white/20 uppercase mb-2 block font-bold">Message / Inquiry</label>
                      <textarea
                        name="message"
                        rows="3"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-transparent border-b border-white/10 py-3 text-xs tracking-widest focus:outline-none focus:border-white transition-colors uppercase font-light resize-none"
                      ></textarea>
                    </div>

                    {status.error && (
                      <p className="text-red-400 text-[9px] tracking-[0.3em] uppercase italic">
                        Error: {status.error}
                      </p>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.01 }}
                      whileTap={{ scale: 0.99 }}
                      type="submit"
                      disabled={status.submitting}
                      className="w-full py-6 bg-white text-black text-[10px] font-bold uppercase tracking-[0.4em] rounded-full disabled:opacity-20 transition-all shadow-2xl"
                    >
                      {status.submitting ? 'Sending...' : 'Send Message'}
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