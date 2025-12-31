// Professional healthcare and disability service images from Unsplash
// All images are free to use and high quality

export const images = {
  // Hero images
  hero: {
    main: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1200&q=80",
    alt: "Healthcare professional providing compassionate care",
    secondary: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&q=80",
  },

  // Service images
  services: {
    "personal-care": {
      image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?w=600&q=80",
      alt: "Caregiver helping with personal care",
    },
    "community-care": {
      image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80",
      alt: "Group of people enjoying community activities together",
    },
    "travel-care": {
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=600&q=80",
      alt: "Accessible transportation and travel assistance",
    },
    "group-activities": {
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
      alt: "People participating in group activities",
    },
    "life-skills": {
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&q=80",
      alt: "Learning and developing new life skills",
    },
    "household-tasks": {
      image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&q=80",
      alt: "Assistance with household tasks and home maintenance",
    },
    "plan-management": {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
      alt: "NDIS plan management and financial support",
    },
    "psychosocial-recovery": {
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80",
      alt: "Mental health support and recovery coaching",
    },
  },

  // About section
  about: {
    team: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80",
    teamAlt: "Caring support team ready to help",
    values: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=800&q=80",
    valuesAlt: "Hands joined together showing unity and support",
  },

  // Testimonial avatars
  testimonials: {
    avatar1: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    avatar2: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    avatar3: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    avatar4: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&q=80",
    avatar5: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    avatar6: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80",
    avatar7: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&q=80",
  },

  // Background patterns and decorative
  patterns: {
    dots: "data:image/svg+xml,%3Csvg width='20' height='20' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='2' cy='2' r='1' fill='%232E7D6B' opacity='0.1'/%3E%3C/svg%3E",
    waves: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%232E7D6B' fill-opacity='0.05' d='M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,138.7C672,128,768,160,864,181.3C960,203,1056,213,1152,197.3C1248,181,1344,139,1392,117.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E",
  },

  // Trust/logos
  trust: {
    ndis: "/images/ndis-logo.svg",
    ndisAlt: "NDIS Registered Provider",
  },
};

export type ServiceSlug = keyof typeof images.services;
