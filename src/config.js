export const siteConfig = {
  companyName: 'Ezenwa James',
  tagline: 'Your Trusted Real Estate Partner in Awka',
  description: 'A premier real estate agency based in Awka, Anambra State, specializing in the sale, rental, and management of residential and commercial properties. We provide personalized service to help you find your dream home or make sound property investments.',
  phone: '+234 803 123 4567',
  whatsappNumber: '2348031234567', 
  email: 'info@ezenwajames.com.ng',
  logo: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=200&auto=format&fit=crop', // Modern building facade
  
  hero: {
    title: 'Discover Your Perfect Property in Awka',
    subtitle: 'Expert real estate services tailored to your needs. Buy, sell, or rent with confidence.',
    backgroundImage: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?q=80&w=2070&auto=format&fit=crop', // Modern Nigerian neighborhood
    ctaText: 'View Properties',
    ctaLink: '/properties'
  },

  services: [
    {
      id: 'property-sales',
      title: 'Property Sales',
      shortDesc: 'Find your ideal home or investment property in Awka.',
      description: 'We offer a wide range of residential and commercial properties for sale, from cozy bungalows to expansive compounds. Our team guides you through every step of the purchasing process.',
      image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=2070&auto=format&fit=crop', // Beautiful house
      price: 'Negotiable',
      features: ['Wide Selection', 'Title Verification', 'Negotiation Support', 'Legal Assistance']
    },
    {
      id: 'rentals',
      title: 'Rental Services',
      shortDesc: 'Quality rental properties in prime locations.',
      description: 'Whether you need a short-term apartment or a long-term family home, we have verified rental options to suit your budget and preferences.',
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=2070&auto=format&fit=crop', // Modern apartment interior
      price: 'Market Rates',
      features: ['Flexible Terms', 'Maintenance Support', 'Tenant Screening', 'Lease Management']
    },
    {
      id: 'property-management',
      title: 'Property Management',
      shortDesc: 'Hassle-free management for landlords.',
      description: 'Let us handle your property worries. From tenant sourcing to rent collection and maintenance, we ensure your investment is well taken care of.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2070&auto=format&fit=crop', // Office building
      price: 'Competitive Rates',
      features: ['Tenant Sourcing', 'Rent Collection', 'Maintenance Coordination', 'Regular Inspections']
    }
  ],

  testimonials: [
    {
      id: 1,
      name: 'Chidi Okonkwo',
      role: 'Home Buyer',
      content: 'Ezenwa James made my first home purchase in Awka seamless and stress-free. Their knowledge of the local market is unmatched.',
      rating: 5
    },
    {
      id: 2,
      name: 'Ngozi Eze',
      role: 'Landlord',
      content: 'I have trusted them with managing my properties for over two years. Professional, reliable, and always responsive.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emeka Nwosu',
      role: 'Investor',
      content: 'They helped me acquire a prime commercial plot in Awka. Excellent negotiation and due diligence.',
      rating: 5
    }
  ],

  social: {
    instagram: 'https://instagram.com/ezenwajamesrealestate',
    facebook: 'https://facebook.com/ezenwajamesproperties',
    twitter: 'https://twitter.com/ezenwajames',
  },

  properties: [
    {
      id: 'awka-3bedroom-duplex',
      name: 'Luxury 3-Bedroom Duplex',
      type: 'Residential',
      bedrooms: 3,
      bathrooms: 3,
      area: '300 sqm',
      location: 'Government Layout, Awka',
      price: '₦85,000,000',
      features: ['Modern Finishes', 'Boys Quarters', 'Parking for 3 Cars', 'Fenced Yard'],
      image: 'https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&w=2070&auto=format&fit=crop', // Modern duplex
      description: 'A stunning duplex in a serene neighborhood. Features spacious living areas, en-suite bedrooms, and a well-equipped kitchen. Close to schools and shopping centers.'
    },
    {
      id: 'awka-commercial-land',
      name: 'Prime Commercial Land',
      type: 'Land',
      bedrooms: 0,
      bathrooms: 0,
      area: '500 sqm',
      location: 'Along Enugu-Onitsha Expressway, Awka',
      price: '₦120,000,000',
      features: ['High Traffic', 'Ready for Development', 'All Documents Verified', 'Corner Plot'],
      image: 'https://images.nigeriapropertycentre.com/properties/images/3184944/0690a1447d706e-anambra-state-trrritory-for-sale-awka-anambra.jpg', // Commercial plot
      description: 'Excellent location for business development. Suitable for retail, office, or mixed-use. With all necessary approvals in place.'
    },
    {
      id: 'awka-4bedroom-bungalow',
      name: 'Spacious 4-Bedroom Bungalow',
      type: 'Residential',
      bedrooms: 4,
      bathrooms: 3,
      area: '450 sqm',
      location: 'Temporary Site, Awka',
      price: '₦65,000,000',
      features: ['Large Compound', 'POP Ceilings', 'Tiled Floors', 'Borehole'],
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=2070&auto=format&fit=crop', // Bungalow
      description: 'Ideal for a large family. This bungalow offers generous living space, a well-maintained garden, and proximity to Nnamdi Azikiwe University.'
    }
  ],

  formspreeEndpoint: 'https://formspree.io/f/your-form-id',

  meta: {
    title: 'Ezenwa James | Real Estate Agent in Awka, Nigeria',
    description: 'Ezenwa James offers professional real estate services in Awka. Buy, sell, or rent properties with a trusted local agent. Residential & commercial listings.',
    ogImage: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop',
    url: 'https://ezenwajames.com.ng',
    twitterHandle: '@ezenwajames'
  }
};