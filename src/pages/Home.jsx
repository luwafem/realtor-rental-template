import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import Testimonial from '../components/Testimonial'
import { siteConfig } from '../config'
import { Link } from 'react-router-dom'
import PropertyCard from '../components/PropertyCard'

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.8, ease: "easeOut" }
}

const Home = () => {
  return (
    <div className="bg-[#050505] text-white overflow-hidden">
      <Helmet>
        <title>{siteConfig.meta.title}</title>
        <meta name="description" content={siteConfig.meta.description} />
      </Helmet>

      <Hero />

      {/* Services Section - Focused on UK Advisory & Acquisition */}
      <section className="relative py-24 sm:py-32 px-6">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-4 block font-bold">The Directive</span>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight">
                Bespoke <span className="italic text-white/60">Advisory</span>
              </h2>
            </div>
            <Link to="/services" className="text-[10px] tracking-[0.3em] uppercase border-b border-white/20 pb-1 hover:border-white transition-all font-light">
              View Capabilities
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {siteConfig.services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Properties Preview Section - UK Portfolio */}
      {siteConfig.properties && siteConfig.properties.length > 0 && (
        <section className="py-24 px-6 border-y border-white/5 bg-[#080808]">
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-4 block font-bold">The UK Portfolio</span>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tighter mb-6 italic">
                Strategic <span className="not-italic">Acquisitions</span>
              </h2>
              <p className="text-white/40 font-light max-w-xl mx-auto text-sm leading-relaxed">
                From Prime Central London lateral apartments to historic country estates in the Home Counties.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {siteConfig.properties.slice(0, 3).map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            <div className="text-center">
              <Link to="/properties" className="text-[10px] tracking-[0.3em] uppercase border border-white/10 px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500 font-bold">
                Enter the Catalog
              </Link>
            </div>
          </motion.div>
        </section>
      )}

      {/* Testimonials - London High-Net-Worth Endorsements */}
      {siteConfig.testimonials.length > 0 && (
        <section className="py-32 px-6">
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
             <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-8 block font-bold">Client Success</span>
            <h2 className="text-3xl md:text-4xl font-extralight italic mb-20 text-white/90 leading-relaxed">
              The benchmark for asset acquisition <br className="hidden md:block"/> and stewardship in the UK market.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {siteConfig.testimonials.map(t => (
                <Testimonial key={t.id} testimonial={t} />
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Final CTA - Acquisition Focus */}
      <section className="relative py-40 px-6 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          {...fadeInUp}
          className="relative z-10 max-w-4xl mx-auto text-center border border-white/5 bg-white/[0.01] backdrop-blur-md py-24 px-8 rounded-[40px]"
        >
          <h2 className="text-5xl md:text-7xl font-extralight tracking-tighter mb-10 leading-[1.1]">
            Secure your <br /> <span className="italic text-white/80">British Legacy.</span>
          </h2>
          <p className="text-white/40 mb-14 max-w-sm mx-auto font-light text-sm tracking-wide leading-relaxed">
            Consult with our London-based advisors for off-market opportunities and strategic UK property mandates.
          </p>
          <Link to="/contact" className="inline-block bg-white text-black px-14 py-6 rounded-full font-bold uppercase text-[11px] tracking-[0.3em] hover:bg-white/90 hover:scale-105 transition-all duration-500">
            Request a Private Briefing
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home