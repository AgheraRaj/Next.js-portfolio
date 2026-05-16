// ─── Technologies ─────────────────────────────────────────────────────────────
export const technologies = [
  // Frontend
  {
    name: "JavaScript",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    proficiency: 90,
  },
  {
    name: "React",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    proficiency: 90,
  },
  {
    name: "Next.js",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    proficiency: 88,
  },
  {
    name: "TypeScript",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    proficiency: 85,
  },
  // Backend
  {
    name: "Node.js",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
    proficiency: 82,
  },
  {
    name: "Express.js",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
    proficiency: 80,
  },
  {
    name: "Redis",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    proficiency: 70,
  },
  // Database
  {
    name: "PostgreSQL",
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    proficiency: 78,
  },
  {
    name: "MongoDB",
    category: "Database",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
    proficiency: 75,
  },
  // DevOps
  {
    name: "Docker",
    category: "DevOps",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    proficiency: 72,
  },
  {
    name: "Git",
    category: "DevOps",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    proficiency: 88,
  },
  {
    name: "Redux",
    category: "Frontend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
    proficiency: 78,
  },
];

// ─── Skill Categories (for filter tabs) ───────────────────────────────────────
export const skillCategories = ["All", "Frontend", "Backend", "Database", "DevOps"] as const;

// ─── Timeline (About section) ─────────────────────────────────────────────────
export const timeline = [
  {
    year: "2022",
    title: "Computer Science — The Foundation",
    description: "Started my B.Tech, but didn't just study theory. I was already building side projects, losing sleep over bugs, and learning that problem-solving is a muscle.",
    type: "education" as const,
  },
  {
    year: "2023",
    title: "Fell in Love with the Frontend",
    description: "Went deep on React, component architecture, and motion design. Built interfaces that didn't just work — they felt good to use.",
    type: "milestone" as const,
  },
  {
    year: "2024",
    title: "Went Full-Stack",
    description: "Stopped stopping at the API boundary. Learned Node.js, Express, PostgreSQL, and MongoDB to own the entire product — from user input to database row.",
    type: "milestone" as const,
  },
  {
    year: "2024",
    title: "Internship — Real Production Code",
    description: "Built the Efive Form Management System at an actual company, using React Hook Form, Java Spring Boot, and MySQL. My first taste of shipping code that real users depended on.",
    type: "work" as const,
  },
  {
    year: "2025",
    title: "Shipping Complex Systems",
    description: "Built a ride-sharing backend, a video platform API, and a real-time chat app. Learned distributed systems, WebSockets, Redis caching, and what 'production-ready' actually means.",
    type: "milestone" as const,
  },
  {
    year: "2026",
    title: "Available — Let's Build Something",
    description: "Currently open to freelance projects and full-time roles. I bring a full-stack perspective, fast delivery, and code you'll be proud to maintain.",
    type: "current" as const,
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "Job Application Platform",
    description: "A full-stack hiring platform with separate dashboards for job seekers and employers — resume management, live application tracking, and a clean REST API underneath.",
    image: "https://cdn.dribbble.com/userupload/15633227/file/original-ebb610a7bf4f699a0aad4f2837e4763e.png?resize=1600x1138&vertical=center",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript", "MongoDB"],
    category: "Full-Stack",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "User authentication and role management",
      "Dynamic resume parsing and matching",
      "Real-time application status tracking",
      "Employer dashboard for job postings"
    ],
    problem: "Job seekers had no centralized way to manage applications. Employers had no pipeline tool that fit a lean team.",
    solution: "Built role-based dashboards with JWT auth, dynamic resume handling, and a REST API that served both user types from a single backend.",
    impact: "A scalable architecture that handles concurrent job postings and applications without performance degradation.",
  },
  {
    title: "Restaurant Order Dashboard",
    description: "A real-time operations dashboard for restaurant staff — live order queues, table management, and revenue analytics, all in one screen.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop",
    technologies: ["React", "Redux", "Tailwind CSS", "Recharts", "Framer Motion"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Real-time order queue visualization",
      "Drag-and-drop table management",
      "Interactive revenue charts",
      "Responsive layout for POS systems"
    ],
    problem: "Paper tickets and shouted orders were causing missed items and table confusion during rush hours.",
    solution: "Built a highly reactive UI with drag-and-drop table management and live order state — no page refreshes, no missed tickets.",
    impact: "Faster order processing and a measurable drop in errors during peak service hours.",
  },
  {
    title: "HR Management Dashboard",
    description: "An internal HR tool that replaces spreadsheet chaos — employee directories, attendance visualization, leave tracking, and payroll summaries in one clean interface.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["React", "Redux", "Tailwind CSS", "Recharts", "Framer Motion"],
    category: "Frontend",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Interactive employee directory",
      "Visualized attendance and leave data",
      "Payroll summary tables",
      "Customizable metric widgets"
    ],
    problem: "HR teams were drowning in spreadsheets and couldn't get instant clarity on workforce data.",
    solution: "Designed an accessibility-focused dashboard with Recharts visualizations, giving HR a single source of truth for all employee data.",
    impact: "Decision-making time on resource allocation dropped significantly — data that took hours to compile is now visible instantly.",
  },
  {
    title: "Efive Form Management",
    description: "A dynamic form management system built during my internship — schema-driven form generation, strict validation, and an admin panel for reviewing submissions.",
    image: "https://images.pexels.com/photos/6928879/pexels-photo-6928879.jpeg",
    technologies: ["React.js", "React Hook Form", "Java", "Spring Boot", "MySQL"],
    category: "Full-Stack",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Dynamic form generation based on schemas",
      "Strict client and server-side validation",
      "Secure data submission and storage",
      "Admin panel for reviewing submissions"
    ],
    problem: "The company needed to deploy varied data collection forms without writing custom code each time.",
    solution: "Built a schema-driven form engine with React Hook Form and Zod on the frontend, backed by a Spring Boot API and MySQL for persistent storage.",
    impact: "New internal forms went from days of dev work to hours. Data integrity issues dropped to near zero.",
  },
  {
    title: "Crysenta (Fertilizer Platform)",
    description: "A brand website for an agricultural company — product showcases, educational content, and a CMS-backed catalog designed to earn trust from both farmers and enterprises.",
    image: "https://images.pexels.com/photos/37099126/pexels-photo-37099126.jpeg",
    technologies: ["React.js", "Tailwind CSS", "Express.js", "MongoDB Atlas", "Cloudinary"],
    category: "Full-Stack",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Smooth scroll animations and transitions",
      "Interactive product catalog",
      "Responsive, mobile-first design",
      "SEO optimized structure"
    ],
    problem: "The brand had no digital presence. Their target market spanned traditional farmers and corporate buyers — two very different audiences.",
    solution: "Crafted a responsive, SEO-optimized site with smooth scroll animations, a nature-inspired palette, and a Cloudinary-powered product catalog.",
    impact: "A polished digital footprint that gives the brand credibility in a market where most competitors have no web presence at all.",
  },
  {
    title: "Real-time Chat Application",
    description: "A full-stack messaging platform with instant delivery, online presence indicators, read receipts, and typing indicators — all via WebSockets.",
    image: "https://images.pexels.com/photos/6215002/pexels-photo-6215002.jpeg?_gl=1*h86539*_ga*MTQ1MjM3NDMzNi4xNzM0NTAwMzEw*_ga_8JE65Q40S6*czE3Nzc4MTUyOTAkbzgkZzEkdDE3Nzc4MTU4NDkkajM0JGwwJGgw",
    technologies: ["React.js", "Express.js", "Socket.io", "MongoDB"],
    category: "Full-Stack",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Instant messaging via WebSockets",
      "User online/offline status indicators",
      "Read receipts and typing indicators",
      "Secure authentication"
    ],
    problem: "Building a communication tool that feels instant while maintaining persistent history and secure access.",
    solution: "Used Socket.io for bi-directional real-time events and MongoDB for chat persistence, with JWT-protected auth endpoints.",
    impact: "Reliably handles multiple concurrent connections with sub-100ms message delivery latency.",
  },
  {
    title: "Uber Backend Clone",
    description: "A backend architecture replicating Uber's core — geospatial driver matching, real-time location tracking, fare calculation, and Redis-cached active rides.",
    image: "https://images.pexels.com/photos/9260061/pexels-photo-9260061.jpeg?_gl=1*14dvgbk*_ga*MTQ1MjM3NDMzNi4xNzM0NTAwMzEw*_ga_8JE65Q40S6*czE3Nzc4MTUyOTAkbzgkZzEkdDE3Nzc4MTU0MDIkajExJGwwJGgw",
    technologies: ["Node.js", "Express", "MongoDB", "Redis", "Socket.io"],
    category: "Backend",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Geospatial queries for nearby drivers",
      "Real-time location updates via WebSockets",
      "Fare calculation algorithms",
      "Redis caching for active rides"
    ],
    problem: "Ride-sharing requires complex spatial queries and ultra-fast driver-to-rider matching that standard REST APIs can't handle.",
    solution: "Used MongoDB geospatial indexes for proximity queries and Redis for maintaining high-speed access to active driver locations via WebSockets.",
    impact: "An optimized API capable of processing rapid location pings from multiple drivers without response degradation.",
  },
  {
    title: "YouTube Backend Architecture",
    description: "A robust video platform API — upload pipelines, chunked streaming, a comment and like system, and subscription notifications built from scratch.",
    image: "https://images.pexels.com/photos/33440278/pexels-photo-33440278.jpeg?_gl=1*14fpyb7*_ga*MTQ1MjM3NDMzNi4xNzM0NTAwMzEw*_ga_8JE65Q40S6*czE3Nzc4MTUyOTAkbzgkZzEkdDE3Nzc4MTUzMTIkajM4JGwwJGgw",
    technologies: ["Node.js", "Express", "MongoDB", "Cloudinary"],
    category: "Backend",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Video upload and processing pipeline",
      "Chunked video streaming",
      "Comment and like system architecture",
      "Subscription and notification models"
    ],
    problem: "Serving large video files through a standard Express server would overwhelm it and create latency spikes for all other requests.",
    solution: "Separated media delivery from API logic entirely — Cloudinary handles uploads and streaming, while the Express server handles data operations only.",
    impact: "Scalable media delivery that doesn't compete with API performance, even under heavy concurrent load.",
  },
  {
    title: "E-Commerce API System",
    description: "A secure e-commerce backend — inventory management, cart state, Stripe-integrated payments, and admin analytics endpoints with bulletproof transaction handling.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["Node.js", "Express", "MongoDB", "Stripe API"],
    category: "Backend",
    liveUrl: "#",
    githubUrl: "#",
    features: [
      "Complex relational database schema",
      "Secure payment gateway integration",
      "Cart and order state management",
      "Admin analytics endpoints"
    ],
    problem: "E-commerce is unforgiving: race conditions on inventory, failed transactions, and inconsistent cart state can directly cost money.",
    solution: "Built strict transactional logic with MongoDB sessions and integrated Stripe's webhook system to verify payments before fulfilling orders.",
    impact: "A reliable checkout pipeline that prevents overselling and ensures every transaction either completes fully or rolls back cleanly.",
  },
];

// ─── Project Categories (for filter tabs) ─────────────────────────────────────
export const projectCategories = ["All", "Full-Stack", "Frontend", "Backend"] as const;