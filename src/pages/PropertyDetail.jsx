import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { siteConfig } from '../config'
import { useEffect, useState } from 'react'

const PropertyDetail = () => {
  const { id } = useParams()
  const [property, setProperty] = useState(null)

  useEffect(() => {
    const found = siteConfig.properties.find(p => p.id === id)
    setProperty(found)
    window.scrollTo(0, 0)
  }, [id])

  if (!property) {
    return (
      <div className="min-h-screen bg-[#050505] flex flex-col items-center justify-center text-white p-6">
        <p className="text-white/40 tracking-widest uppercase text-xs mb-8 font-light">Estate not found</p>
        <Link to="/properties" className="border border-white/10 px-8 py-3 rounded-full text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all">
          Return to Collection
        </Link>
      </div>
    )
  }

  const whatsappMessage = encodeURIComponent(`Hello, I am interested in ${property.name} (${property.location}). Could you provide a private briefing?`)
  const whatsappLink = `https://wa.me/${siteConfig.whatsappNumber}?text=${whatsappMessage}`

  return (
    <div className="bg-[#050505] text-white min-h-screen pb-24">
      <Helmet>
        <title>{property.name} | {siteConfig.companyName}</title>
        <meta name="description" content={property.description.substring(0, 160)} />
      </Helmet>

      {/* Header / Breadcrumb */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto">
          <Link to="/properties" className="text-[10px] uppercase tracking-[0.4em] text-white/30 hover:text-white transition-colors mb-8 inline-block">
            &larr; Back to Listings
          </Link>
        </div>
      </section>

      <section className="px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            
            {/* Visuals - Large Cinematic Image */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-7"
            >
              <div className="relative group overflow-hidden rounded-[40px] border border-white/5">
                <img 
                  src={property.image} 
                  alt={property.name} 
                  className="w-full aspect-[4/5] object-cover transition-transform duration-[2s] group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/60 via-transparent to-transparent" />
              </div>
            </motion.div>

            {/* Information Sidebar */}
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:col-span-5 space-y-12"
            >
              <div>
                <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-4 block">
                  {property.type} • {property.location}
                </span>
                <h1 className="text-4xl md:text-6xl font-extralight tracking-tighter mb-6 leading-none">
                  {property.name}
                </h1>
                <p className="text-2xl font-extralight italic text-white/80 tracking-tight">
                  {property.price}
                </p>
              </div>

              {/* Technical Grid */}
              <div className="grid grid-cols-3 gap-8 py-8 border-y border-white/5">
                <div className="space-y-1">
                  <p className="text-[9px] uppercase tracking-widest text-white/20 font-bold">Bedrooms</p>
                  <p className="text-lg font-light">{property.bedrooms || '—'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] uppercase tracking-widest text-white/20 font-bold">Bathrooms</p>
                  <p className="text-lg font-light">{property.bathrooms || '—'}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[9px] uppercase tracking-widest text-white/20 font-bold">Square Ft</p>
                  <p className="text-lg font-light">{property.area}</p>
                </div>
              </div>

              <div>
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6 font-bold">The Description</h3>
                <p className="text-white/60 font-light leading-relaxed italic text-lg">
                  {property.description}
                </p>
              </div>

              <div>
                <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-6 font-bold">Key Amenities</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4">
                  {property.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-xs tracking-wide text-white/50 uppercase font-light">
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 mr-4" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Refined CTA Group */}
              <div className="flex flex-col gap-4 pt-8">
                <Link to="/contact" className="w-full bg-white text-black py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] text-center hover:bg-white/90 transition-all">
                  Inquire Privately
                </Link>
                <a 
                  href={whatsappLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full border border-white/10 text-white py-5 rounded-full text-[11px] font-bold uppercase tracking-[0.3em] text-center hover:bg-white/5 transition-all"
                >
                  WhatsApp Concierge
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default PropertyDetail