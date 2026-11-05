export const projectsData = [
  {
    id: "q3v",
    title: "Q3V | Programming & Problem Solving",
    tagline: "Educational Programming & Computer Science YouTube Channel",
    category: "education",
    categoryLabel: "Education & Community",
    role: "Creator & Software Instructor",
    featured: true,
    description:
      "A dedicated programming channel created to demystify core computer science concepts, software engineering fundamentals, and practical problem solving. Content covers algorithmic thinking, Java programming, data structures, and real-world coding challenges.",
    highlights: [
      "In-depth tutorials breaking down complex algorithms and data structures into intuitive lessons.",
      "Hands-on coding walkthroughs in Java, object-oriented principles, and clean code practices.",
      "Coding interview problem solving and competitive programming techniques.",
      "Growing community of passionate students and aspiring software engineers."
    ],
    technologies: ["Java", "Data Structures", "Algorithms", "Problem Solving", "Software Engineering"],
    links: [
      {
        type: "youtube",
        label: "Visit YouTube Channel",
        url: "https://youtube.com/@q3v_203?si=nJ_gJDI9gQJcoDzD",
        primary: true
      }
    ]
  },
  {
    id: "qnode",
    title: "QNode — AI Automation Platform",
    tagline: "Enterprise-Grade Business Automation & AI Agent Orchestration",
    category: "ai",
    categoryLabel: "AI & Automation",
    role: "Lead Architect & Workflow Developer",
    featured: true,
    description:
      "A Jordan-focused intelligent automation platform built to streamline business communication, booking systems, customer support, and repetitive operations using autonomous AI agents and complex workflow pipelines.",
    highlights: [
      "Autonomous AI customer service agents handling bilingual (Arabic & English) multi-turn conversations.",
      "Complex workflow automation engine powered by n8n orchestrating business logic and webhooks.",
      "Omnichannel messaging integrations spanning WhatsApp Business API, Telegram Bots, and Instagram Direct.",
      "Automated order intake, appointment booking, and instant cloud sync with Google Sheets and internal databases.",
      "Role-based administrative dashboard for real-time monitoring of active agent runs and error alerts."
    ],
    technologies: [
      "n8n Workflows",
      "AI Agents",
      "Node.js",
      "JavaScript",
      "WhatsApp Cloud API",
      "Telegram API",
      "REST APIs",
      "Webhooks"
    ],
    links: [
      {
        type: "info",
        label: "Architecture Overview",
        url: "#qnode-details"
      }
    ]
  },
  {
    id: "exptrack",
    title: "ExpTrack — Personal Expense Tracker",
    tagline: "Cross-Platform Finance Management with Cloud Synchronization",
    category: "software",
    categoryLabel: "Full-Stack & Mobile",
    role: "Full-Stack Application Developer",
    featured: true,
    description:
      "A fast, responsive personal finance tracking application engineered for desktop and mobile environments. Features comprehensive income/expense tracking, intelligent categorization, detailed financial analytics, and real-time cloud data synchronization.",
    highlights: [
      "Seamless cross-platform client developed with Flutter and Dart, compiling natively to Windows desktop and Android.",
      "Real-time database integration and secure authentication backed by Supabase and PostgreSQL.",
      "Instant visual financial analytics with income vs. expense breakdown charts and trend reports.",
      "Multi-currency support and offline-capable transaction queue with background reconciliation.",
      "Direct install packages available for immediate download for both Windows PC and Android."
    ],
    technologies: ["Flutter", "Dart", "Supabase", "PostgreSQL", "Cloud Sync", "REST APIs"],
    downloads: [
      {
        platform: "Windows Desktop",
        filename: "ExpTrack.exe",
        url: "/ExpTrack.exe",
        size: "38.2 MB",
        badge: ".exe"
      },
      {
        platform: "Android Mobile",
        filename: "ExpTrack.apk",
        url: "/ExpTrack.apk",
        size: "53.8 MB",
        badge: ".apk"
      }
    ]
  },
  {
    id: "portfolio",
    title: "Qusai.online — Personal Portfolio",
    tagline: "High-Performance Developer Portfolio & Interactive Showcase",
    category: "software",
    categoryLabel: "Full-Stack & Mobile",
    role: "UI/UX Designer & Frontend Engineer",
    featured: false,
    description:
      "A modern developer portfolio designed and built from scratch with a custom interactive HTML5 canvas particle simulation, reactive ambient aurora lighting, accessible components, and optimized Vite build pipeline.",
    highlights: [
      "Interactive 60fps physics canvas with mouse-repulsion, touch bursts, and reduced-motion fallback.",
      "Custom CSS design system featuring ultra-thin frosted glassmorphism and modern cyber glow accents.",
      "Accessible, mobile-first responsive architecture with smooth scroll navigation and route deep linking.",
      "Clean component hierarchy built with React 19 and modern Vite tooling."
    ],
    technologies: ["React 19", "Vite", "JavaScript", "HTML5 Canvas", "CSS Glassmorphism", "React Router 7"],
    links: [
      {
        type: "github",
        label: "GitHub Repository",
        url: "https://github.com/qusaianwer",
        primary: true
      }
    ]
  },
  {
    id: "project-five",
    title: "Next-Gen System",
    tagline: "Upcoming Distributed Cloud Application",
    category: "upcoming",
    categoryLabel: "In Development",
    role: "Software Architect",
    featured: false,
    underConstruction: true,
    description:
      "Currently architecting a new software application focusing on modern backend systems, distributed architecture, and smart cloud services. Full release coming soon.",
    technologies: ["Distributed Systems", "Cloud APIs", "Modern Backend"]
  }
];

export const projectCategories = [
  { id: "all", label: "All Projects" },
  { id: "software", label: "Software & Mobile" },
  { id: "ai", label: "AI & Automation" },
  { id: "education", label: "Education & YouTube" }
];
