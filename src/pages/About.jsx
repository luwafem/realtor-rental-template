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
        <title>The Heritage | {siteConfig.companyName}</title>
        <meta name="description" content={`The heritage and mission of ${siteConfig.companyName} — Bespoke advisors for the UK’s most significant real estate.`} />
      </Helmet>

      {/* Narrative Header */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeInUp} className="max-w-4xl">
            <span className="text-[10px] tracking-[0.5em] uppercase text-white/40 mb-6 block font-bold">The Heritage</span>
            <h1 className="text-5xl md:text-8xl font-extralight tracking-tighter leading-[0.9] mb-12">
              Defining the <br /> <span className="italic text-white/90">Standard of PCL.</span>
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7">
                <p className="text-xl md:text-2xl font-light leading-relaxed text-white/70 italic">
                  {siteConfig.companyName} was established as a private mandate, dedicated to the acquisition, development, and stewardship of the United Kingdom’s most prestigious residential and commercial assets.
                </p>
              </div>
              <div className="md:col-span-5 flex flex-col gap-6 pt-2">
                 <div className="h-[1px] w-full bg-white/10" />
                 <p className="text-sm font-light text-white/40 leading-relaxed uppercase tracking-widest">
                    Mayfair • Kensington • The Cotswolds <br /> Est. 2026 • Private Portfolios
                 </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Values - Focus on Assets */}
      <section className="py-24 px-6 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div {...fadeInUp} className="space-y-12">
              <div>
                <h2 className="text-[10px] tracking-[0.4em] uppercase text-white/30 mb-6 font-bold">The Mandate</h2>
                <p className="text-3xl font-extralight tracking-tight leading-snug">
                  To provide a <span className="italic">discreet</span> gateway to the UK's most exclusive off-market opportunities, ensuring capital preservation through strategic asset selection.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <p className="text-4xl font-extralight italic mb-2 tracking-tighter">£250M+</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Assets Under Stewardship</p>
                </div>
                <div>
                  <p className="text-4xl font-extralight italic mb-2 tracking-tighter">100%</p>
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/30">Private Treaty Success</p>
                </div>
              </div>
            </motion.div>

            {/* Why Choose Us - Pillars of Trust */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Intelligence", desc: "Granular data on London's highest-growth micro-markets." },
                { title: "Sourcing", desc: "Unrivalled access to Grade I & II listed off-market estates." },
                { title: "Stewardship", desc: "Precision-led management focused on long-term capital growth." },
                { title: "Execution", desc: "Seamless navigation of the UK’s complex legal and tax frameworks." }
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
            "British real estate is not merely a purchase; it is the acquisition of a legacy that transcends generations."
          </h3>
          <div className="w-12 h-[1px] bg-white/20 mx-auto mb-8" />
          <p className="text-sm text-white/50 font-light leading-relaxed max-w-xl mx-auto">
            At {siteConfig.companyName}, we merge institutional-grade market analysis with the personal touch of a private family office. 
            We represent the global elite who demand architectural significance and financial resilience.
          </p>
        </motion.div>
      </section>
    </div>
  )
}

export default About