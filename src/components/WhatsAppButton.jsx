import { motion } from 'framer-motion'
import { siteConfig } from '../config'

const WhatsAppButton = () => {
  // Updated message for UK Property Advisory
  const message = encodeURIComponent("Hello, I would like to enquire about off-market property opportunities.")
  const link = `https://wa.me/${siteConfig.whatsappNumber}?text=${message}`

  return (
    <motion.a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ 
        scale: 1.1, 
        backgroundColor: 'rgba(255, 255, 255, 1)', 
        color: '#000' 
      }}
      className="fixed bottom-8 right-8 w-14 h-14 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full shadow-2xl z-50 flex items-center justify-center transition-colors duration-500"
      aria-label="Chat on WhatsApp"
    >
      {/* Refined minimalist chat icon - matches the architectural feel of NAFF Properties */}
      <svg 
        className="w-6 h-6" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24" 
        strokeWidth="1.2"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" 
        />
      </svg>

      {/* Discreet notification dot - high-end brands use white/silver rather than green/red */}
      <span className="absolute top-0 right-0 flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-40"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white/60"></span>
      </span>
    </motion.a>
  )
}

export default WhatsAppButton