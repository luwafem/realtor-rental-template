export const siteConfig = {
  companyName: 'NAFF Properties',
  tagline: 'Legacy Assets. London Living.',
  description: 'A bespoke UK property advisory specializing in the acquisition and management of high-yield residential and commercial assets across London and the Home Counties.',
  phone: '+44 20 7946 0000',
  whatsappNumber: '442079460000', 
  email: 'concierge@naffproperties.co.uk',
  logo: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=200&auto=format&fit=crop', 
  
  hero: {
    title: 'The Blueprint of British Luxury.',
    subtitle: 'Private advisory for the acquisition of significant UK architectural assets.',
    backgroundImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop', // Moody London Street View (Westminster/Mayfair)
    ctaText: 'Enter the Catalog',
    ctaLink: '/properties'
  },

  services: [
    {
      id: 'private-acquisition',
      title: 'Strategic Acquisition',
      shortDesc: 'Securing Prime Central London real estate with surgical precision.',
      description: 'We represent global private wealth in the sourcing of off-market Grade II listed residences and modern penthouses across the UK’s most coveted postcodes.',
      image: 'https://unsplash.com/photos/DwEjabQHKJU/download?force=true&w=2400', 
      price: 'Bespoke Fees',
      features: ['Off-Market Sourcing', 'Stamp Duty Optimization', 'Conveyancing Management', 'Anonymity Assured']
    },
    {
      id: 'portfolio-stewardship',
      title: 'Estate Stewardship',
      shortDesc: 'End-to-end management for the high-net-worth landlord.',
      description: 'Our London-based team provides rigorous asset protection, ensuring high-tier occupancy and capital appreciation through strategic refurbishments.',
      image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=2070&auto=format&fit=crop', 
      price: 'Competitive Retention',
      features: ['Corporate Tenant Sourcing', 'Compliance Management', '24/7 Crisis Response', 'Monthly Yield Audits']
    },
    {
      id: 'investment-advisory',
      title: 'Capital Advisory',
      shortDesc: 'Yield-focused investment strategies in the UK’s growth corridors.',
      description: 'From Purpose-Built Student Accommodation (PBSA) to Buy-to-Let portfolios in the North, we provide data-driven entry and exit strategies.',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop', 
      price: 'Portfolio Specific',
      features: ['Market Cycle Analysis', 'Debt Financing Support', 'Portfolio Rebalancing', 'Tax Efficiency']
    }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Julian V.',
      role: 'Portfolio Client',
      content: 'NAFF Properties navigated the complexities of my Chelsea acquisition with remarkable speed and total discretion.',
      rating: 5
    },
    {
      id: 2,
      name: 'Sarah T.',
      role: 'Investment Partner',
      content: 'Their insights into the Greater London rental market have been instrumental in our 12% YOY growth.',
      rating: 5
    }
  ],

  social: {
    linkedin: 'https://linkedin.com/company/naffpropertiesuk',
    instagram: 'https://instagram.com/naffproperties',
    twitter: 'https://twitter.com/naffpropsuk',
  },

  properties: [
    {
      id: 'knightsbridge-penthouse',
      name: 'The Pavilion Penthouse',
      type: 'Luxury Apartment',
      bedrooms: 4,
      bathrooms: 4,
      area: '3,200 sq ft',
      location: 'Knightsbridge, London SW1',
      price: '£12,500,000',
      features: ['Harrods Proximity', 'Private Lift', 'Climate Controlled Wine Cellar', '24hr Porter'],
      image: 'https://images.unsplash.com/photo-1567496898669-ee935f5f647a?q=80&w=2071&auto=format&fit=crop', 
      description: 'A masterclass in contemporary British design. This lateral penthouse features views over Hyde Park and bespoke interiors by world-renowned craftsmen.'
    },
    {
      id: 'cotswolds-estate',
      name: 'Sterling Manor',
      type: 'Country Estate',
      bedrooms: 8,
      bathrooms: 7,
      area: '12,000 sq ft',
      location: 'The Cotswolds, Oxfordshire',
      price: '£8,250,000',
      features: ['Helipad', 'Equestrian Facilities', 'Grade II Listed', '15-Acre Grounds'],
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop', 
      description: 'An expansive 17th-century estate meticulously restored for the 21st century. The ultimate retreat for privacy and rural grandeur.'
    },
    {
      id: 'canary-wharf-office',
      name: 'The Meridian Hub',
      type: 'Commercial Asset',
      bedrooms: 0,
      bathrooms: 10,
      area: '15,000 sq ft',
      location: 'Canary Wharf, London E14',
      price: '£18,000,000',
      features: ['Triple-Height Lobby', 'Sky Garden Access', 'BREEAM Excellent', 'High-Speed Backbone'],
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop', 
      description: 'A premium commercial investment opportunity in the heart of London’s financial district. Fully let to Blue-Chip tenants.'
    }
  ],

  formspreeEndpoint: 'https://formspree.io/f/your-form-id',

  meta: {
    title: 'NAFF Properties | UK Real Estate & Portfolio Management',
    description: 'Premier UK property advisory specializing in high-value acquisitions and luxury estate management in London and the Cotswolds.',
    ogImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=1200&auto=format&fit=crop',
    url: 'https://naffproperties.co.uk',
    twitterHandle: '@naffpropsuk'
  }
};