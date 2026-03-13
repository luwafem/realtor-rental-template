import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import { siteConfig } from '../config'

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.8 }
  }

  return (
    <div className="bg-[#050505] text-white min-h-screen">
      <Helmet>
        <title>About Us | {siteConfig.companyName}</title>
        <meta name="description" content={`Learn about ${siteConfig.companyName} – your trusted real estate partner in Awka, Nigeria. We are committed to helping you find the perfect property with integrity and professionalism.`} />
      </Helmet>

      {/* Narrative Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-6 block font-bold">Our Story</span>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter leading-[0.9] mb-12">
              Your Trusted <br /> <span className="italic text-white/90">Real Estate Partner.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-white/70 italic">
                  {siteConfig.companyName} was founded with a simple mission to provide honest, professional, and personalized real estate services to the people of Awka and beyond.
                </p>
              </div>
              <div className="md:col-span-5 flex flex-col gap-6 pt-2">
                 <div className="h-[1px] w-full bg-white/10" />
                 <p className="text-sm font-light text-white/40 leading-relaxed uppercase tracking-widest">
                    Awka • Anambra State • Nigeria <br /> Est. 2020 • Client First
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values - Focus on Local Trust */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp} className="space-y-12">
              <div>
                <h2 className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6 font-bold">Our Commitment</h2>
                <p className="text-3xl font-extralight tracking-tight leading-snug">
                  To provide <span className="italic">transparent, reliable,</span> and <span className="italic">client focused</span> real estate services, helping you navigate Awka's property market with confidence and ease.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-extralight italic mb-2 tracking-tighter">₦2B+</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Properties Sold</p>
                </div>
                <div>
                  <p className="text-4xl font-extralight italic mb-2 tracking-tighter">500+</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Happy Clients</p>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us - Pillars of Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Local Knowledge", desc: "Deep understanding of Awka's neighborhoods, market trends, and property values." },
                { title: "Trusted Network", desc: "Strong relationships with lawyers, surveyors, and financial institutions to ensure smooth transactions." },
                { title: "Professional Service", desc: "From first viewing to final handover, we provide dedicated, responsive support." },
                { title: "Legal Expertise", desc: "We guide you through documentation and ensure all properties have clear titles." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 border border-white/5 bg-white/[0.02] rounded-2xl hover:border-white/20 transition-colors"
                >
                  <h4 className="text-[11px] tracking-[0.3em] uppercase text-white mb-3 font-bold">{item.title}</h4>
                  <p className="text-xs text-white/40 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophical Closer */}
      <section className="py-32 px-6">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-extralight italic mb-8 leading-relaxed">
            A home is more than just a building it's where life happens, memories are made, and futures are built. We're honored to help you find yours.
          </h3>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mb-8" />
          <p className="text-sm text-white/50 font-light leading-relaxed max-w-xl mx-auto">
            At {siteConfig.companyName}, we combine local expertise with a personal touch. Whether you're a first-time buyer, a growing family, or an investor looking for opportunities in Awka, we're here to make your real estate journey seamless and successful.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default About