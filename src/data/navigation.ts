export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const mainNavigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Personal Care", href: "/services/personal-care" },
      { label: "Community Care", href: "/services/community-care" },
      { label: "Travel Care", href: "/services/travel-care" },
      { label: "Group Activities", href: "/services/group-activities" },
      { label: "Life Skills", href: "/services/life-skills" },
      { label: "Household Tasks", href: "/services/household-tasks" },
      { label: "Plan Management", href: "/services/plan-management" },
      { label: "Psychosocial Recovery", href: "/services/psychosocial-recovery" },
    ],
  },
  { label: "About", href: "/about" },
  { label: "Referrals", href: "/referrals" },
  { label: "Contact", href: "/contact" },
];

export const footerNavigation = {
  services: [
    { label: "Personal Care", href: "/services/personal-care" },
    { label: "Community Care", href: "/services/community-care" },
    { label: "Travel Care", href: "/services/travel-care" },
    { label: "Plan Management", href: "/services/plan-management" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Make a Referral", href: "/referrals" },
    { label: "Contact Us", href: "/contact" },
    { label: "Complaints Process", href: "/complaints" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms of Service", href: "/terms-of-service" },
  ],
};

export const contactInfo = {
  phone: "0451 918 884",
  phoneHref: "tel:+61451918884",
  email: "info@ephraimcare.com.au",
  emailHref: "mailto:info@ephraimcare.com.au",
  location: "Western Sydney, NSW",
  hours: "Monday - Friday: 8am - 6pm",
};
