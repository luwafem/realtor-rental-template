import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import ServiceCard from '../components/ServiceCard'
import CarCard from '../components/CarCard'    
import Testimonial from '../components/Testimonial'
import { siteConfig } from '../config'
import { Link } from 'react-router-dom'

// Subtle reveal animation for sections
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
        {/* ... rest of your helmet tags */}
      </Helmet>

      <Hero />

      {/* Services Section - Modern Dark Aesthetic */}
      <section className="relative py-24 sm:py-32 px-6">
        <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-xs uppercase tracking-[0.3em] text-white/40 mb-4 block">Excellence Defined</span>
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight italic md:not-italic">
                Our <span className="text-white/60">Services</span>
              </h2>
            </div>
            <Link to="/services" className="text-sm tracking-widest uppercase border-b border-white/20 pb-1 hover:border-white transition-all">
              Explore All
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            {siteConfig.services.map(service => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </motion.div>
      </section>

      {/* Fleet Preview Section - Overlapping Elements */}
      {siteConfig.fleet && siteConfig.fleet.length > 0 && (
        <section className="py-24 bg-[#0a0a0a] px-6">
          <motion.div {...fadeInUp} className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-extralight tracking-tight mb-6">The Luxury Fleet</h2>
              <div className="w-16 h-[1px] bg-white/20 mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {siteConfig.fleet.slice(0, 3).map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            
            <div className="flex justify-center">
              <Link to="/fleet" className="px-12 py-4 border border-white/10 hover:bg-white hover:text-black transition-all duration-500 rounded-full text-xs uppercase tracking-widest">
                View Full Fleet
              </Link>
            </div>
          </motion.div>
        </section>
      )}

      {/* Testimonials - Editorial Layout */}
      {siteConfig.testimonials.length > 0 && (
        <section className="py-24 px-6 bg-[#050505]">
          <motion.div {...fadeInUp} className="max-w-5xl mx-auto text-center">
            <h2 className="text-3xl font-extralight italic mb-16 text-white/90">Client Experiences</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
              {siteConfig.testimonials.map(t => (
                <Testimonial key={t.id} testimonial={t} />
              ))}
            </div>
          </motion.div>
        </section>
      )}

      {/* Final CTA - Minimalist Glassmorphism */}
      <section className="relative py-32 px-6 overflow-hidden">
        {/* Abstract Background Element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />
        
        <motion.div 
          {...fadeInUp}
          className="relative z-10 max-w-4xl mx-auto text-center border border-white/5 bg-white/[0.02] backdrop-blur-sm py-20 px-8 rounded-3xl"
        >
          <h2 className="text-4xl md:text-6xl font-extralight tracking-tighter mb-8 leading-tight">
            Ready to experience <br /> <span className="italic">true luxury?</span>
          </h2>
          <p className="text-white/50 mb-12 max-w-md mx-auto font-light">
            Available 24/7 for bespoke travel arrangements and airport transfers.
          </p>
          <Link to="/contact" className="inline-block bg-white text-black px-12 py-5 rounded-full font-semibold uppercase text-[10px] tracking-[0.2em] hover:scale-105 transition-transform duration-300">
            Make a Reservation
          </Link>
        </motion.div>
      </section>
    </div>
  )
}

export default Home