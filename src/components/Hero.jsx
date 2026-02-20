import { siteConfig } from '../config'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  const { title, subtitle, backgroundImage, ctaText, ctaLink } = siteConfig.hero

  return (
    <section className="relative w-full h-svh overflow-hidden flex items-center justify-center px-6">
      {/* Background - Cinematic Scale Effect */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 3, ease: [0.22, 1, 0.36, 1] }} 
        className="absolute inset-0 z-0"
      >
        <img 
          src={backgroundImage} 
          alt="Prime Real Estate" 
          className="w-full h-full object-cover" 
          loading="eager"
        />
        {/* Multilayered Overlay for High-End Text Legibility */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#050505]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Subtle Sector Tag */}
          <motion.span 
            initial={{ opacity: 0, tracking: "0.2em" }}
            animate={{ opacity: 1, tracking: "0.5em" }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-[10px] uppercase text-white/60 mb-8 font-bold"
          >
            Strategic Acquisition
          </motion.span>

          <h1 className="text-5xl sm:text-7xl md:text-9xl font-extralight tracking-tighter text-white mb-10 leading-[0.85] max-w-5xl">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-white/60 mb-14 max-w-2xl mx-auto font-light leading-relaxed tracking-wide italic">
            {subtitle}
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          >
            <Link 
              to={ctaLink} 
              className="relative px-14 py-6 overflow-hidden rounded-full bg-white text-black transition-all duration-700 group flex items-center gap-3"
            >
              <span className="relative z-10 text-[11px] font-bold tracking-[0.3em] uppercase">
                {ctaText}
              </span>
              {/* Refined button hover effect */}
              <div className="absolute inset-0 w-full h-full bg-neutral-200 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Aesthetic Scroll Anchor */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [-40, 80] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white/80"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero