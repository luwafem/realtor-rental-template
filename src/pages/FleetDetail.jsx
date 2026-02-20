import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { siteConfig } from '../config'
import { useEffect, useState } from 'react'

const FleetDetail = () => {
  const { id } = useParams()
  const [car, setCar] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0) // Reset scroll for "Premium" transitions
    const found = siteConfig.fleet.find(c => c.id === id)
    setCar(found)
  }, [id])

  if (!car) {
    return (
      <div className="h-screen flex items-center justify-center bg-[#050505] text-white">
        <div className="text-center">
          <h2 className="text-2xl font-extralight tracking-widest mb-4">VEHICLE NOT FOUND</h2>
          <Link to="/fleet" className="text-[10px] uppercase tracking-[0.4em] border-b border-white/20 pb-1">Return to Fleet</Link>
        </div>
      </div>
    )
  }

  const whatsappMessage = encodeURIComponent(`Hello, I'm interested in the ${car.name}. Could you provide availability?`)
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Helmet>
        <title>{car.name} | {siteConfig.companyName}</title>
        <meta name="description" content={car.description} />
      </Helmet>

      {/* Main Content Split Section */}
      <section className="relative flex flex-col lg:flex-row min-h-screen pt-20 lg:pt-0">
        
        {/* Left: Sticky Image Section */}
        <div className="w-full lg:w-1/2 lg:h-screen lg:sticky lg:top-0">
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2 }}
            className="w-full h-[50svh] lg:h-full relative overflow-hidden"
          >
            <img 
              src={car.image} 
              alt={car.name} 
              className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-1000" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent hidden lg:block" />
          </motion.div>
        </div>

        {/* Right: Scrollable Details */}
        <div className="w-full lg:w-1/2 px-6 py-12 lg:p-24 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-4 block">Fleet Selection</span>
            <h1 className="text-4xl md:text-6xl font-extralight tracking-tighter mb-4 italic">
              {car.name}
            </h1>
            <p className="text-xl font-light text-white/60 mb-8 tracking-wide italic">{car.price}</p>

            <div className="grid grid-cols-2 gap-8 mb-12 border-y border-white/5 py-8">
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1 font-bold">Passengers</p>
                <p className="text-lg font-light tracking-widest">{car.capacity}</p>
              </div>
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-white/30 mb-1 font-bold">Luggage Pieces</p>
                <p className="text-lg font-light tracking-widest">{car.luggage}</p>
              </div>
            </div>

            <div className="prose prose-invert max-w-none mb-12">
              <p className="text-white/60 leading-relaxed font-light text-lg">
                {car.description}
              </p>
            </div>

            {/* Feature Tags */}
            <div className="mb-12">
              <h3 className="text-[11px] tracking-[0.3em] uppercase text-white/40 mb-6">Amenity Inclusions</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                {car.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-light text-white/80">
                    <span className="w-1 h-1 rounded-full bg-white/40" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Sticky/Floating-style Action Buttons for Mobile Optimization */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="flex-1 bg-white text-black text-center py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white/90 transition-all"
              >
                Inquire & Book
              </Link>
              <a 
                href={whatsappLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex-1 border border-white/20 text-white text-center py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2"
              >
                Direct Message
              </a>
            </div>
            
            <div className="mt-12 text-center lg:text-left">
              <Link to="/fleet" className="text-[10px] uppercase tracking-[0.3em] text-white/30 hover:text-white transition-colors">
                ← Return to Fleet
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default FleetDetail