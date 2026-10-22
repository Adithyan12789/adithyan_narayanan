export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  number: string;
  name: string;
  eyebrow: string;
  summary: string;
  contribution: string;
  highlights: string[];
  stack: string[];
  image: string;
  imageAlt: string;
  demo?: ProjectLink;
  sources: ProjectLink[];
};

export const projects: Project[] = [
  {
    number: "01",
    name: "VortexBuy",
    eyebrow: "FULL-STACK E-COMMERCE",
    summary:
      "A full-stack storefront that brings product discovery, shopping, and checkout together in a single shopping experience.",
    contribution:
      "Product search and filtering, authentication, cart functionality, checkout, and a product-management dashboard.",
    highlights: [
      "Product catalog with search and filters",
      "Authentication and authorization",
      "Shopping cart and checkout",
      "Admin product management",
    ],
    stack: ["Next.js", "Express.js", "MongoDB", "Node.js", "JWT", "Tailwind CSS"],
    image: "/images/vortexbuy.jpg",
    imageAlt: "VortexBuy project cover from the original portfolio",
    demo: { label: "Live demo", href: "https://vortex-buy.vercel.app/" },
    sources: [
      { label: "Frontend source", href: "https://github.com/Adithyan12789/Vortex_buy" },
      { label: "Backend source", href: "https://github.com/Adithyan12789/vortex_buy_backend" },
    ],
  },
  {
    number: "02",
    name: "TicketHive",
    eyebrow: "MOVIE TICKETING",
    summary:
      "A booking platform that connects moviegoers with theatres and gives theatre teams tools to manage venues, screens, and showtimes.",
    contribution:
      "Authentication and role-based access, theatre management, configurable screens and seats, showtimes, and ticket booking.",
    highlights: [
      "Theatre owner and user accounts",
      "Theatre management and admin approval",
      "Screen and seat-layout configuration",
      "Showtime and ticket-booking flows",
    ],
    stack: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "Tailwind CSS"],
    image: "/images/tickethive.jpg",
    imageAlt: "TicketHive project cover from the original portfolio",
    demo: { label: "Live demo", href: "https://ticket-hive-main.vercel.app/" },
    sources: [
      { label: "Frontend source", href: "https://github.com/Adithyan12789/Ticket-Hive-main" },
      { label: "Backend source", href: "https://github.com/Adithyan12789/Ticket-hive-Back-End-main" },
    ],
  },
  {
    number: "03",
    name: "Interview Ninja",
    eyebrow: "AI INTERVIEW PREP",
    summary:
      "A focused practice platform for job seekers who want to rehearse aloud and build confidence before the real conversation.",
    contribution:
      "AI mock interviews, Firebase authentication, and real-time data with Cloud Firestore.",
    highlights: [
      "AI-led mock interview sessions",
      "Firebase authentication",
      "Real-time Firestore data",
      "Structured question experiences",
    ],
    stack: ["Next.js", "TypeScript", "Firebase", "Vapi AI", "Google Gemini", "Tailwind CSS"],
    image: "/images/interview-ninja.jpg",
    imageAlt: "Interview Ninja project cover from the original portfolio",
    demo: { label: "Live demo", href: "https://interviewninja-dun.vercel.app/" },
    sources: [
      { label: "Frontend source", href: "https://github.com/Adithyan12789/interviewninja-main" },
    ],
  },
  {
    number: "04",
    name: "MovieHive",
    eyebrow: "MOBILE · MOVIE DISCOVERY",
    summary:
      "A cross-platform movie discovery app built around dynamic listings and movie data from TMDB.",
    contribution:
      "A React Native and Expo browsing experience with responsive UI components and live API integration.",
    highlights: [
      "Dynamic movie discovery",
      "TMDB API integration",
      "App-like mobile browsing",
      "Cross-platform React Native build",
    ],
    stack: ["React Native", "Expo", "TMDB API", "React Navigation", "Axios"],
    image: "/images/moviehive.jpg",
    imageAlt: "MovieHive project cover from the original portfolio",
    sources: [{ label: "Source code", href: "https://github.com/Adithyan12789/MovieHive.git" }],
  },
  {
    number: "05",
    name: "GAME//ROOM",
    eyebrow: "GAMING HUB · WEB EXPERIENCE",
    summary:
      "A digital front door for a physical gaming centre, bringing its stations, racing simulators, events, and bookings into one place.",
    contribution:
      "A responsive Next.js experience for exploring gaming hardware, rooms, simulator sessions, and tournaments.",
    highlights: [
      "Gaming-station showcase",
      "Racing simulator information",
      "Room and session bookings",
      "Tournament and event details",
    ],
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    image: "/images/gameroom.jpg",
    imageAlt: "GAME//ROOM Gaming Hub project cover from the original portfolio",
    demo: { label: "Live demo", href: "https://gaming-hub-inky.vercel.app/" },
    sources: [{ label: "Frontend source", href: "https://github.com/Adithyan12789/gaming-hub" }],
  },
];
