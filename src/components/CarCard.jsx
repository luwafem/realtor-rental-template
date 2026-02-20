import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CarCard = ({ car }) => {
  const { id, name, capacity, luggage, image, price, features } = car

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative bg-[#0a0a0a] border border-white/5 rounded-3xl overflow-hidden transition-all duration-500 hover:border-white/20"
    >
      <Link 
            to={`/fleet/${id}`} 
            >
      {/* Image Gallery Look */}
      <div className="relative h-60 sm:h-72 overflow-hidden bg-[#111]">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
        />
        <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
          <p className="text-[10px] tracking-widest text-white/90 uppercase">{price}</p>
        </div>
      </div>

      <div className="p-8">
        {/* Header */}
        <div className="mb-6">
          <h3 className="text-2xl font-extralight tracking-tight text-white mb-2 italic">
            {name}
          </h3>
          <div className="flex gap-6 text-[10px] tracking-[0.2em] uppercase text-white/40">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/20" /> {capacity} Passengers
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-white/20" /> {luggage} Bags
            </span>
          </div>
        </div>

        {/* Feature Tags - Premium pills instead of a list */}
        <div className="flex flex-wrap gap-2 mb-8">
          {features.slice(0, 2).map((f, idx) => (
            <span 
              key={idx} 
              className="text-[9px] uppercase tracking-wider px-3 py-1 rounded-full border border-white/5 bg-white/[0.02] text-white/60"
            >
              {f}
            </span>
          ))}
          {features.length > 2 && (
            <span className="text-[9px] uppercase tracking-wider px-3 py-1 text-white/30">
              +{features.length - 2} More
            </span>
          )}
        </div>

        {/* Action Area */}
        <div className="flex items-center justify-between pt-6 border-t border-white/5">
          <Link 
            to={`/fleet/${id}`} 
            className="w-full text-center py-3 rounded-xl bg-white text-black text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 hover:bg-white/90 hover:tracking-[0.3em]"
          >
            Inquire Now
          </Link>
        </div>
      </div>
      </Link>
    </motion.div>
  )
}

export default CarCard