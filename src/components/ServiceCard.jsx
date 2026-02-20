import { Link } from 'react-router-dom'
import { motion } from 'framer-motion' // Continuing the high-end motion theme

const ServiceCard = ({ service }) => {
  const { id, title, shortDesc, image, price } = service

  return (
    <motion.div 
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="group relative flex flex-col bg-[#0f0f0f] border border-white/5 overflow-hidden rounded-2xl transition-all duration-500 hover:border-white/20"
    >
      <Link 
            to={`/services/${id}`} 
            
          >
      {/* Image Container with Zoom Effect */}
      <div className="relative h-64 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
        />
        {/* Elegant Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] via-transparent to-transparent opacity-60" />
      </div>

      {/* Content Area */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-xl font-extralight tracking-tight text-white group-hover:text-white/90 transition-colors">
            {title}
          </h3>
          <span className="text-[10px] tracking-[0.2em] uppercase text-white/40 font-medium pt-1">
            {price}
          </span>
        </div>

        <p className="text-sm leading-relaxed text-white/50 font-light mb-8 line-clamp-2">
          {shortDesc}
        </p>

        {/* Minimalist Footer Link */}
        <div className="mt-auto pt-4 border-t border-white/5 flex justify-end">
          <Link 
            to={`/services/${id}`} 
            className="relative flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-white overflow-hidden group/link"
          >
            <span className="relative z-10 transition-transform duration-300 group-hover/link:-translate-x-1">
              Explore Experience
            </span>
            <span className="text-lg transition-transform duration-300 group-hover/link:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </div>
      </Link>
    </motion.div>
  )
}

export default ServiceCard