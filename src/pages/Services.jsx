import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import ServiceCard from '../components/ServiceCard'
import { siteConfig } from '../config'

const Services = () => {
  // Animation variants for the grid items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <div className="bg-[#050505] min-h-screen">
      <Helmet>
        <title>Our Services | {siteConfig.companyName}</title>
        <meta name="description" content="Explore our premium chauffeur services: airport transfers, in-city rides, and event transportation." />
      </Helmet>

      {/* Header Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5 pb-12"
          >
            <div className="max-w-2xl">
              <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-4 block">
                Bespoke Travel
              </span>
              <h1 className="text-5xl md:text-7xl font-extralight tracking-tighter text-white leading-none">
                Our <span className="italic">Services</span>
              </h1>
            </div>
            
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-16"
          >
            {siteConfig.services.map(service => (
              <motion.div 
                key={service.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final Touch: Minimalist Contact Invitation */}
      <section className="py-24 border-t border-white/5 bg-[#080808]">
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-2xl font-extralight tracking-tight text-white mb-6">
            Requirement for a custom arrangement?
          </h2>
          <p className="text-white/40 font-light text-sm mb-10 leading-relaxed">
            For specialized requests including multi-day bookings or international 
            itineraries, our concierge team is at your disposal.
          </p>
          <motion.a 
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block text-[11px] uppercase tracking-[0.3em] text-white border border-white/20 px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500"
          >
            Contact Concierge
          </motion.a>
        </div>
      </section>
    </div>
  )
}

export default Services