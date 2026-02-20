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
          Service Not Found — Return
        </Link>
      </div>
    )
  }

  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(`I'm interested in ${service.title}`)}`

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Helmet>
        <title>{service.title} | {siteConfig.companyName}</title>
        <meta name="description" content={service.description} />
      </Helmet>

      {/* Immersive Header Section */}
      <section className="relative h-[60vh] flex items-end">
        <div className="absolute inset-0 overflow-hidden">
          <motion.img 
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            src={service.image} 
            alt={service.title} 
            className="w-full h-full object-cover grayscale-[40%]" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 pb-12 w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/60 mb-4 block">Bespoke Service</span>
            <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter italic">{service.title}</h1>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Main Description */}
          <div className="lg:col-span-7">
            <p className="text-xl md:text-2xl font-light text-white/80 leading-relaxed mb-12">
              {service.description}
            </p>
            
            {service.features && (
              <div className="space-y-12">
                <div>
                  <h3 className="text-[11px] tracking-[0.3em] uppercase text-white/30 mb-8">Service Standards</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
                    {service.features.map((feature, idx) => (
                      <motion.div 
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx} 
                        className="flex items-start gap-4 border-l border-white/10 pl-6"
                      >
                        <span className="text-sm font-light text-white/70 italic">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Sticky Booking Sidebar */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32 p-8 border border-white/5 bg-white/[0.02] backdrop-blur-md rounded-3xl">
              <p className="text-[10px] tracking-[0.4em] uppercase text-white/40 mb-2">Estimated Rate</p>
              <p className="text-3xl font-extralight mb-8 tracking-tight">{service.price}</p>
              
              <div className="flex flex-col gap-4">
                <Link 
                  to="/contact" 
                  className="w-full py-5 bg-white text-black text-center rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-all"
                >
                  Request Reservation
                </Link>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full py-5 border border-white/10 text-white text-center rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all"
                >
                  Consult via WhatsApp
                </a>
              </div>
              
              <p className="text-[9px] text-center text-white/30 mt-6 tracking-widest uppercase">
                Available 24/7 • Multi-lingual Chauffeurs
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Subtle Back Link */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        <Link to="/services" className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all">
          <span className="group-hover:-translate-x-1 transition-transform">←</span> Return to all services
        </Link>
      </div>
    </div>
  )
}

export default ServiceDetail