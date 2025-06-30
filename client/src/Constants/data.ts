import { BadgeCheck, Handshake, LayoutDashboard, Lightbulb, MessageSquare, Stethoscope, StethoscopeIcon, UserRound, UsersRound } from "lucide-react";

export const libraries = [
    "Zustand",
    "React Router",
    "React Query",
    "React Hook Form",
    "Sonner",
    "Lucide-React",
    "Tailwind CSS",
    "TypeScript",
    "axios",
    "Framer Motion",
    "Zod",
]

export const menuItems = [
    {
        title: "Home",
        path: "/"
    },
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Services",
        path: "#services",
    },
    {
        title: "Contact",
        path: "#contact",
    },
]

export const coreValues = [
  {
    title: "Integrity",
    description:
      "To act at all times honestly and ethically, with the understanding that our actions, as individuals and as corporate citizens, enhance the level of efficiency of the communities and people we serve.",
    icon: Handshake
  },
  {
    title: "Initiative",
    description:
      "To identify obstacles for success and create solutions. We hold ourselves accountable for meeting our commitments. We take calculated risks to achieve our goals. We pursue excellence, as individuals and as a corporation, in everything we do.",
    icon: Lightbulb
  },
  {
    title: "Social Responsibility",
    description:
      "To participate in the communities within which we work and to continually strive to make a positive impact on the individuals and environment that support us.",
    icon: Stethoscope
  },
  {
    title: "Excellence in Service",
    description:
      "Excellent delivery is our drive; we are passionate about what we do and how we do it. We show passion for improvement in the way we render our services with a commitment to continuous improvement.",
    icon: BadgeCheck
  },
  {
    title: "Customer-Centric",
    description:
      "We respect our customers, place them in high esteem regardless of what each customer is bringing to the table, and we are ready and willing to research the specific needs of each customer.",
    icon: UserRound
  }
];


export const services = [
    {
        id:"meal-planning-services",
        image:"/meal-planning.avif",
        title: "Meal Planning Services",
        description: "We offer personalized meal planning services to help you achieve your health and wellness goals."
    },
    {
        id: "maternal-care",
        image: "/maternal.avif",
        title: "Maternal Care",
        description: "This program offers personalized nutrition support for women and couples through all stages of fertility, pregnancy, and hormonal transitions. It includes guidance for couples trying to conceive, prenatal nutrition to manage pregnancy discomforts and meet mother-baby needs, and postnatal care to support recovery and nourishment after delivery. The comprehensive prenatal program features 1-on-1 virtual sessions, personalized meal plans, grocery lists, supplementation guidance, and tools to simplify cooking and preparation. Additionally, support is available for women navigating pre- and post-menopause, addressing symptoms like weight gain, fatigue, and muscle loss, with nutrition plans tailored to evolving hormonal needs."
    },{
        id: "corporate-food-and-industry-services",
        image: "/food.avif",
        title: "Corporate Food and Industry Services",
        description: "This service offers a range of nutrition and wellness solutions across corporate, industry, and educational settings. For corporate clients, it includes healthy eating and lifestyle presentations, as well as engaging cooking demonstrations or classes. In the food and beverage industry, services include nutritional analysis of menus, culinary workshops, recipe creation, cookbook development, product development, food styling, and food photography. Educational institutions can benefit from tailored healthy eating and lifestyle presentations designed for schools, classes, or student groups, promoting long-term wellness habits among youth."
    }
]

export const sidebarItems = [
    {
        title: "Dashboard",
        path: "/dashboard",
        icon: LayoutDashboard
    },
    {
      title: "Services",
      path: "/services",
      icon: StethoscopeIcon
    },
    {
      title: "Members",
      path: "/members",
      icon: UsersRound
    },
    {
      title: "Forum",
      path: "/forum",
      icon: MessageSquare
    },
    {
      title: "Profile",
      path: "/profile",
      icon: UserRound
    },
]


