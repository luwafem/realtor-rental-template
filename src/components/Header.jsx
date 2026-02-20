import { Link, useLocation } from 'react-router-dom'
import { siteConfig } from '../config'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/80 backdrop-blur-lg py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <Link to="/" className="group flex items-center space-x-3">
          <img src={siteConfig.logo} alt={siteConfig.companyName} className="h-8 md:h-10 w-auto brightness-0 invert" />
          <div className="flex flex-col">
            <span className="text-lg font-extralight tracking-[0.3em] uppercase text-white leading-none">
              {siteConfig.companyName}
            </span>
            <span className="text-[8px] tracking-[0.4em] uppercase text-white/40 mt-1">Chauffeur Excellence</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              to={link.path} 
              className={`text-[11px] uppercase tracking-[0.2em] transition-colors duration-300 ${
                location.pathname === link.path ? 'text-white' : 'text-white/50 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link 
            to="/contact" 
            className="px-6 py-2 border border-white/20 rounded-full text-[10px] uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile Menu Trigger */}
        <button 
          className="md:hidden relative z-50 p-2 text-white" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`h-[1px] w-full bg-white transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-[1px] w-full bg-white transition-all ${isOpen ? 'opacity-0' : ''}`} />
            <span className={`h-[1px] w-full bg-white transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Full-Screen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-black z-40 md:hidden flex flex-col justify-center px-12"
          >
            <nav className="flex flex-col space-y-8">
              {navLinks.map((link, i) => (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  key={link.path}
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className="text-4xl font-extralight tracking-tighter text-white italic"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            
            <div className="mt-20 pt-8 border-t border-white/10">
              <p className="text-[10px] tracking-widest uppercase text-white/40 mb-4">Reservations</p>
              <p className="text-xl text-white font-light">+1 (555) 000- luxury</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header