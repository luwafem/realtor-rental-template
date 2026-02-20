export const siteConfig = {
  companyName: 'Driven by Vivan',
  tagline: 'Refining the Art of Travel',
  description: 'Experience luxury and reliability with Driven by Vivan. We offer professional chauffeur services for airport transfers, in-city rides, and special events across Nigeria.',
  phone: '+234 800 123 4567',
  whatsappNumber: '2348001234567', 
  email: 'bookings@DrivenbyVivan.ng',
  // Using a minimalist typography-based placeholder for the logo
  logo: 'https://images.unsplash.com/photo-1599305090748-361664af8791?q=80&w=500&auto=format&fit=crop',
  
  hero: {
    title: 'Luxury Chauffeur Services in Nigeria',
    subtitle: 'Travel in comfort and style with our professional drivers',
    // Dark cinematic interior of a luxury car
    backgroundImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop',
    ctaText: 'Book Now',
    ctaLink: '/contact'
  },

  services: [
    {
      id: 'airport-transfer',
      title: 'Airport Transfer',
      shortDesc: 'Reliable and luxurious transportation to and from all major airports.',
      description: 'Our airport transfer service ensures you arrive on time and in style. We monitor your flight for delays and provide a complimentary wait time.',
      // High-end terminal/car silhouette
      image: 'https://unsplash.com/photos/WO2Pfxc-24U/download?force=true&w=2400',
      price: 'From ₦25,000',
      features: ['Flight tracking', 'Meet & greet', 'Complimentary water', 'Luggage assistance']
    },
    {
      id: 'in-city-rides',
      title: 'In-City Rides',
      shortDesc: 'Effortless travel within the city for business or leisure.',
      description: 'Whether you need a ride to a meeting, shopping, or dinner, our city service provides seamless transportation with professional chauffeurs.',
      // City lights reflected on a black car
      image: 'https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?q=80&w=1974&auto=format&fit=crop',
      price: 'From ₦15,000/hour',
      features: ['Hourly bookings', 'Multiple stops', 'Wi-Fi onboard', 'Refreshments']
    },
    {
      id: 'events-transportation',
      title: 'Events Transportation',
      shortDesc: 'Make a statement at weddings, galas, and corporate events.',
      description: 'Arrive in elegance. We provide chauffeured vehicles for special occasions, with customised itineraries and dedicated support.',
      // Focus on the detail of a suit/luxury door handle
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop',
      price: 'Custom quote',
      features: ['Red carpet service', 'Champagne upon request', 'Flexible scheduling', 'Dedicated coordinator']
    }
  ],

  fleet: [
    {
      id: 'mercedes-s-class',
      name: 'Mercedes-Benz S-Class',
      capacity: '4 passengers',
      luggage: '2 suitcases',
      features: ['Leather seats', 'Climate control', 'Wi-Fi', 'Mineral water'],
      // Front grill/headlight close-up
      image: 'https://unsplash.com/photos/DCr2SU1-lA8/download?force=true&w=2400',
      price: 'From ₦35,000/hour',
      description: 'Experience ultimate luxury in the flagship Mercedes S-Class. Perfect for executive travel.'
    },
    {
      id: 'range-rover-vogue',
      name: 'Range Rover Vogue',
      capacity: '5 passengers',
      luggage: '3 suitcases',
      features: ['Panoramic roof', 'Premium sound system', 'Off-road capability', 'Refreshments'],
      // Profile of a black Range Rover
      image: 'https://unsplash.com/photos/wrRhFFTySnc/download?force=true&w=2400',
      price: 'From ₦40,000/hour',
      description: 'Command the road with the Range Rover Vogue. Spacious, powerful, and elegant.'
    },
    {
      id: 'toyota-land-cruiser',
      name: 'Toyota Land Cruiser Prado',
      capacity: '7 passengers',
      luggage: '4 suitcases',
      features: ['SUV comfort', 'Dual AC', 'Entertainment system', 'Charging ports'],
      // Modern SUV in dark lighting
      image: 'https://unsplash.com/photos/CyEyJjfgd5A/download?force=true&w=2400',
      price: 'From ₦30,000/hour',
      description: 'Ideal for group travel and airport transfers. Reliable, spacious, and comfortable.'
    },
    {
      id: 'lexus-es350',
      name: 'Lexus ES 350',
      capacity: '4 passengers',
      luggage: '2 suitcases',
      features: ['Quiet cabin', 'Heated seats', 'Mark Levinson sound', 'Privacy glass'],
      // Clean side-shot of a black Lexus
      image: 'https://unsplash.com/photos/IdkJXb89Km4/download?force=true&w=2400',
      price: 'From ₦28,000/hour',
      description: 'Smooth, quiet, and refined – the Lexus ES offers a serene ride.'
    },
    {
      id: 'sprinter-bus',
      name: 'Mercedes-Benz Sprinter',
      capacity: '14 passengers',
      luggage: '8 suitcases',
      features: ['Captain seats', 'TV/DVD', 'Mini fridge', 'PA system'],
      // High-roof black sprinter van
      image: 'https://unsplash.com/photos/X3BMmUhYX8w/download?force=true&w=2400',
      price: 'From ₦60,000/hour',
      description: 'Perfect for group events and corporate outings. Luxury on a larger scale.'
    }
  ],

  meta: {
    title: 'Driven by Vivan - Premium Chauffeur Services Nigeria',
    description: 'Book luxury chauffeur services in Nigeria. Professional drivers, premium vehicles, 24/7 availability.',
    ogImage: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2070&auto=format&fit=crop',
    url: 'https://DrivenbyVivan.ng',
    twitterHandle: '@DrivenbyVivan'
  },
  
  formspreeEndpoint: 'https://formspree.io/f/your-form-id',
  social: {
    facebook: 'https://facebook.com/DrivenbyVivan',
    instagram: 'https://instagram.com/DrivenbyVivan',
    twitter: 'https://twitter.com/DrivenbyVivan',
  },
  
  testimonials: [
    {
      id: 1,
      name: 'Dr. Adebayo O.',
      role: 'Business Executive',
      content: 'Driven by Vivan made my airport transfer flawless. The driver was professional and the car was immaculate. Highly recommended!',
      rating: 5
    },
    {
      id: 2,
      name: 'Mrs. Chioma E.',
      role: 'Event Planner',
      content: 'We used them for a corporate gala and all our VIP guests were impressed. Punctual, courteous, and luxurious.',
      rating: 5
    }
  ],
};