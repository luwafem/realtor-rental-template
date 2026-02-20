import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import PropertyCard from '../components/PropertyCard'
import { siteConfig } from '../config'

const Properties = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8 }
  }

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Helmet>
        <title>The UK Portfolio | {siteConfig.companyName}</title>
        <meta name="description" content="Explore NAFF Properties' curated selection of Prime Central London residences and significant UK estates." />
      </Helmet>

      {/* Gallery Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-6 block font-bold">Strategic Assets</span>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter leading-none mb-10">
              The UK <br /> <span className="italic text-white/90">Portfolio.</span>
            </h1>
            <div className="flex flex-col md:flex-row gap-8 items-start justify-between border-t border-white/5 pt-10">
              <p className="text-white/50 font-light max-w-lg leading-relaxed italic">
                A definitive collection of Britain’s most coveted addresses from lateral apartments in Mayfair to historic manor houses in the Home Counties.
              </p>
              <div className="flex items-center gap-4">
                <span className="text-[9px] uppercase tracking-widest text-white/20 font-bold">Active Mandates:</span>
                <span className="text-2xl font-extralight italic">{siteConfig.properties.length}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Property Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-10"
          >
            {siteConfig.properties.map((property, index) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <PropertyCard property={property} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer-CTA for the Catalog */}
      <section className="py-24 px-6 border-t border-white/5 bg-gradient-to-b from-transparent to-white/[0.02]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[10px] uppercase tracking-[0.3em] text-white/30 mb-8 font-bold">Bespoke Requirements?</p>
          <h2 className="text-3xl md:text-4xl font-extralight italic mb-12 text-white/90">
            Access our Off-Market <br className="hidden md:block" /> Private Treaty Catalog
          </h2>
          <div className="flex flex-col items-center gap-6">
            <a 
              href={`mailto:${siteConfig.email}`}
              className="text-[10px] uppercase tracking-[0.4em] text-white border-b border-white/20 pb-2 hover:border-white transition-all font-bold"
            >
              Enquire for Private Briefing
            </a>
            <p className="text-[9px] text-white/20 tracking-widest uppercase italic">Discretion Assured</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Properties