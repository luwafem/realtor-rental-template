import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { siteConfig } from '../config'
import { useEffect, useState } from 'react'

const ServiceDetail = () => {
  const { id } = useParams()
  const [service, setService] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    const found = siteConfig.services.find(s => s.id === id)
    setService(found)
  }, [id])

  if (!service) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#050505]">
        <Link to="/services" className="text-[10px] tracking-[0.3em] text-white/50 uppercase border-b border-white/10 pb-1">
          Capability Not Found — Return to Advisory
        </Link>
      </div>
    )
  }

  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`I would like to discuss the ${service.title} mandate.`)}`

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Helmet>
        <title>{service.title} | {siteConfig.companyName}</title>
        <meta name="description" content={service.description} />
      </Helmet>

      {/* Immersive Header Section */}
      <section className="relative h-[65vh] flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover grayscale" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-16 w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.6em] uppercase text-white/40 mb-6 block font-bold">Advisory Capability</span>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter leading-none">
              {service.title.split(' ').map((word, i) => i === 1 ? <span key={i} className="italic">{word} </span> : word + ' ')}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Main Strategic Description */}
          <div className="lg:col-span-7">
            <h2 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-10 font-bold">The Strategic Approach</h2>
            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed mb-16 italic">
              {service.description}
            </p>
            
            {service.features && (
              <div className="space-y-16">
                <div>
                  <h3 className="text-[10px] tracking-[0.4em] uppercase text-white/20 mb-10 font-bold">Operational Pillars</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 gap-x-16">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="flex flex-col gap-4 border-l border-white/5 pl-8"
                      >
                        <span className="text-[9px] text-white/20 font-bold uppercase tracking-widest">0{idx + 1}</span>
                        <span className="text-base font-light text-white/70 leading-snug">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Advisory Sidebar */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 p-10 border border-white/5 bg-white/[0.01] backdrop-blur-xl rounded-sm">
              <div className="mb-10">
                <p className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-3 font-bold">Guidance Entry</p>
                <p className="text-4xl font-extralight tracking-tighter">{service.price}</p>
                <p className="text-[9px] text-white/20 mt-2 uppercase tracking-widest italic font-light">Subject to mandate complexity</p>
              </div>
              
              <div className="flex flex-col gap-4">
                <Link 
                  to="/contact" 
                  className="w-full py-5 bg-white text-black text-center rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:bg-neutral-200 transition-all duration-500"
                >
                  Initiate Mandate
                </Link>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-5 border border-white/10 text-white text-center rounded-full text-[11px] font-bold uppercase tracking-[0.3em] hover:border-white/40 transition-all duration-500"
                >
                  Private Consultation
                </a>
              </div>
              
              <div className="mt-10 pt-10 border-t border-white/5 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Market focus</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/60">London & PCL</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[9px] uppercase tracking-widest text-white/30 font-bold">Confidentiality</span>
                  <span className="text-[10px] uppercase tracking-widest text-white/60">Non-Disclosure Basis</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Subtle Navigation Footnote */}
      <div className="max-w-7xl mx-auto px-6 pb-24 border-t border-white/5 pt-12">
        <Link to="/services" className="group flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] text-white/20 hover:text-white transition-all duration-500">
          <span className="group-hover:-translate-x-2 transition-transform duration-500 font-light text-lg">←</span> Return to Advisory Portfolio
        </Link>
      </div>
    </div>
  )
}

export default ServiceDetail