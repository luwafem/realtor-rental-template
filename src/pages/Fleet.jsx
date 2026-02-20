import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import CarCard from '../components/CarCard'
import { siteConfig } from '../config'

const Fleet = () => {
  // Staggered entrance for the luxury vehicles
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  }

  return (
    <div className="bg-[#050505] min-h-screen">
      <Helmet>
        <title>The Fleet | {siteConfig.companyName}</title>
        <meta name="description" content="Explore our luxury fleet: Mercedes S-Class, Range Rover, and more. Redefining chauffeur excellence." />
      </Helmet>

      {/* Hero-style Section Header */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8 pb-12 border-b border-white/5"
          >
            <div className="max-w-2xl">
              <span className="text-[10px] tracking-[0.6em] uppercase text-white/40 mb-4 block">
                The Collection
              </span>
              <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter text-white leading-none">
                Our <span className="italic">Fleet</span>
              </h1>
            </div>
            
            <div className="flex flex-col items-start md:items-end gap-4">
              
              {/* Decorative category label - adds to the "showroom" feel */}
              <div className="flex gap-4 text-[9px] tracking-widest uppercase text-white/20">
                <span className="text-white border-b border-white pb-1 cursor-default">All</span>
                <span className="hover:text-white/60 transition-colors cursor-pointer">Sedan</span>
                <span className="hover:text-white/60 transition-colors cursor-pointer">Suv</span>
                <span className="hover:text-white/60 transition-colors cursor-pointer">Executive</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-x-12 lg:gap-y-16"
          >
            {siteConfig.fleet.map(car => (
              <motion.div 
                key={car.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <CarCard car={car} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Technical Excellence Note */}
      <section className="py-24 bg-[#080808] px-6 border-t border-white/5">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1">
            <h3 className="text-2xl font-extralight tracking-tight mb-4 italic text-white/90">
              Uncompromising Standards
            </h3>
            <p className="text-white/40 font-light text-sm leading-relaxed max-w-md">
              Every vehicle in our collection undergoes a rigorous multi-point 
              inspection daily. We ensure that visual elegance is matched 
              by mechanical perfection.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 flex-1">
            <div className="border-l border-white/10 pl-6">
              <p className="text-2xl font-extralight mb-1 tracking-tighter italic">2026</p>
              <p className="text-[9px] uppercase tracking-widest text-white/30">Latest Models</p>
            </div>
            <div className="border-l border-white/10 pl-6">
              <p className="text-2xl font-extralight mb-1 tracking-tighter italic">Daily</p>
              <p className="text-[9px] uppercase tracking-widest text-white/30">Sanitization</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Fleet