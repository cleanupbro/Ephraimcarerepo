import {
  Heart,
  Users,
  Car,
  UsersRound,
  Lightbulb,
  Home,
  Calculator,
  Brain,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: string;
  name: string;
  shortName: string;
  slug: string;
  description: string;
  longDescription: string;
  icon: LucideIcon;
  features: string[];
  color: string;
}

export const services: Service[] = [
  {
    id: "personal-care",
    name: "Personal Care",
    shortName: "Personal",
    slug: "personal-care",
    description:
      "Supporting your daily personal needs with dignity and respect.",
    longDescription:
      "Our Personal Care service provides compassionate support for daily living activities. We understand that everyone has unique needs, and our trained support workers are here to help you maintain your independence while ensuring your comfort and dignity.",
    icon: Heart,
    features: [
      "Assistance with showering and bathing",
      "Grooming and personal hygiene support",
      "Medication prompting and assistance",
      "Dressing and undressing assistance",
      "Toileting support",
      "Meal preparation and feeding assistance",
    ],
    color: "primary",
  },
  {
    id: "community-care",
    name: "Community Care",
    shortName: "Community",
    slug: "community-care",
    description:
      "Building connections and supporting your social inclusion goals.",
    longDescription:
      "Community Care focuses on helping you stay connected with your community. We support you to participate in social activities, visit friends and family, and engage with local groups and events that matter to you.",
    icon: Users,
    features: [
      "Social outings and activities",
      "Visiting friends and family",
      "Attending community events",
      "Shopping assistance",
      "Recreational activities",
      "Building social connections",
    ],
    color: "secondary",
  },
  {
    id: "travel-care",
    name: "Travel Care",
    shortName: "Travel",
    slug: "travel-care",
    description:
      "Safe and reliable transport assistance for your journeys.",
    longDescription:
      "Our Travel Care service provides safe, reliable transport assistance to help you get where you need to go. From medical appointments to social outings, we offer different levels of support based on your needs.",
    icon: Car,
    features: [
      "Level 1: Standard transport assistance",
      "Level 2: Wheelchair accessible transport",
      "Level 3: Complex mobility support",
      "Medical appointment transport",
      "Social activity transport",
      "Shopping and errands",
    ],
    color: "primary",
  },
  {
    id: "group-activities",
    name: "Group Activities",
    shortName: "Groups",
    slug: "group-activities",
    description:
      "Engaging centre-based programs for social connection and skill building.",
    longDescription:
      "Our Group Activities program offers centre-based activities designed to help you build skills, make friends, and have fun. From art classes to fitness programs, there is something for everyone.",
    icon: UsersRound,
    features: [
      "Art and craft sessions",
      "Fitness and movement classes",
      "Music and creative programs",
      "Cooking and life skills groups",
      "Social clubs and games",
      "Educational workshops",
    ],
    color: "secondary",
  },
  {
    id: "life-skills",
    name: "Life Skills",
    shortName: "Life Skills",
    slug: "life-skills",
    description:
      "Building independence through practical skill development.",
    longDescription:
      "Life Skills training helps you develop the practical abilities you need for greater independence. Our patient support workers work with you at your own pace to build confidence in everyday tasks.",
    icon: Lightbulb,
    features: [
      "Financial literacy and budgeting",
      "Conflict resolution skills",
      "Time management",
      "Communication skills",
      "Problem-solving strategies",
      "Self-advocacy training",
    ],
    color: "primary",
  },
  {
    id: "household-tasks",
    name: "Daily & Household Tasks",
    shortName: "Household",
    slug: "household-tasks",
    description:
      "Practical support to maintain a comfortable and safe home.",
    longDescription:
      "Our Household Tasks service helps you maintain a clean, comfortable, and safe living environment. We work alongside you to manage daily household responsibilities.",
    icon: Home,
    features: [
      "General house cleaning",
      "Laundry and ironing",
      "Meal preparation",
      "Grocery shopping",
      "Light gardening",
      "Home organisation",
    ],
    color: "secondary",
  },
  {
    id: "plan-management",
    name: "Plan Management",
    shortName: "Plan Mgmt",
    slug: "plan-management",
    description:
      "Expert financial administration for your NDIS plan.",
    longDescription:
      "Our Plan Management service takes the stress out of managing your NDIS funding. We handle invoices, payments, and financial tracking so you can focus on achieving your goals.",
    icon: Calculator,
    features: [
      "Invoice processing and payment",
      "Budget tracking and reporting",
      "Provider payment management",
      "Claiming from NDIS portal",
      "Monthly financial statements",
      "Funding utilisation advice",
    ],
    color: "primary",
  },
  {
    id: "psychosocial-recovery",
    name: "Psychosocial Recovery",
    shortName: "Recovery",
    slug: "psychosocial-recovery",
    description:
      "Compassionate mental health support for your recovery journey.",
    longDescription:
      "Our Psychosocial Recovery service provides specialist support for people living with mental health conditions. We work with you to build resilience, develop coping strategies, and work towards your recovery goals.",
    icon: Brain,
    features: [
      "One-on-one recovery coaching",
      "Emotional support and counselling",
      "Coping strategies development",
      "Social reconnection support",
      "Routine building assistance",
      "Crisis support planning",
    ],
    color: "secondary",
  },
];

export const getServiceBySlug = (slug: string): Service | undefined => {
  return services.find((service) => service.slug === slug);
};

export const getRelatedServices = (currentSlug: string, count: number = 3): Service[] => {
  return services
    .filter((service) => service.slug !== currentSlug)
    .slice(0, count);
};
