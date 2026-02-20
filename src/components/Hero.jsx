import { siteConfig } from '../config'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Hero = () => {
  const { title, subtitle, backgroundImage, ctaText, ctaLink } = siteConfig.hero

  return (
    <section className="relative w-full h-svh overflow-hidden flex items-center justify-center px-6">
      {/* Background - Scale effect now covers the full viewport */}
      <motion.div 
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }} // Smooth "slow-stop" transition
        className="absolute inset-0 z-0"
      >
        <img 
          src={backgroundImage} 
          alt="" 
          className="w-full h-full object-cover" 
          loading="eager"
        />
        {/* Multilayered Overlay: Adds depth and ensures text pops regardless of image brightness */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-black/20" />
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex flex-col items-center text-center"
        >
          {/* Minimal Branding Element */}
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[10px] tracking-[0.5em] uppercase text-white/60 mb-6"
          >
            Private Hire
          </motion.span>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extralight tracking-tighter text-white mb-8 leading-[0.9] max-w-4xl">
            {title}
          </h1>

          <p className="text-base sm:text-xl text-white/70 mb-12 max-w-xl mx-auto font-light leading-relaxed tracking-wide">
            {subtitle}
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link 
              to={ctaLink} 
              className="relative px-12 py-5 overflow-hidden rounded-full bg-white text-black transition-all duration-500 group"
            >
              <span className="relative z-10 text-[11px] font-bold tracking-[0.2em] uppercase">
                {ctaText}
              </span>
              {/* Subtle button shine effect */}
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-black/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Premium Scroll Indicator - Visible on all devices */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[9px] tracking-[0.3em] uppercase text-white/30 rotate-0">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 64, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero