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
    title: "Computer Science Foundation",
    description: "Began my B.Tech journey, building a strong academic foundation in algorithms, data structures, and programming fundamentals.",
    type: "education" as const,
  },
  {
    year: "2023",
    title: "Frontend & UI Engineering",
    description: "Focused on crafting highly interactive and responsive user interfaces using React, JavaScript, and modern CSS techniques.",
    type: "milestone" as const,
  },
  {
    year: "2024",
    title: "Full-Stack Expansion",
    description: "Expanded my architecture to the backend, integrating Node.js, Express, and databases to build secure and scalable APIs.",
    type: "milestone" as const,
  },
  {
    year: "2025",
    title: "Delivering End-to-End Solutions",
    description: "Transitioned from conceptual knowledge to building complete, production-ready full-stack applications with real-world use cases.",
    type: "work" as const,
  },
  {
    year: "2025",
    title: "Specializing in Modern Web Stacks",
    description: "Deepened expertise in Next.js and TypeScript to build SEO-friendly, high-performance web applications tailored for business growth.",
    type: "milestone" as const,
  },
  {
    year: "2026",
    title: "Open for Freelance & Full-Time",
    description: "Actively partnering with businesses and teams to deliver premium digital experiences. Open to remote and Ahmedabad-based roles.",
    type: "current" as const,
  },

];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "Job Application Platform",
    description: "A comprehensive platform connecting job seekers with employers, featuring resume management, application tracking, and an intuitive dashboard.",
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
    problem: "Job seekers needed a centralized place to track applications, while employers needed a streamlined hiring pipeline.",
    solution: "Developed a full-stack portal with custom dashboards for both roles, integrating a robust REST API for seamless data flow.",
    impact: "Created a scalable architecture capable of handling concurrent job postings and applications efficiently.",
  },
  {
    title: "Restaurant Order Dashboard",
    description: "A dynamic frontend interface for restaurant staff to manage incoming orders, track table statuses, and monitor operations.",
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
    problem: "Restaurant staff struggled with chaotic paper tickets and inefficient table management during peak hours.",
    solution: "Built a highly responsive and interactive UI that centralizes all order and table data into a single dashboard.",
    impact: "Improved order processing speed and reduced missed tickets through intuitive visual cues.",
  },
  {
    title: "HR Management Dashboard",
    description: "An administrative frontend application designed for HR teams to track employee attendance, payroll, and performance metrics.",
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
    problem: "HR departments needed a modern, visually appealing way to interpret complex employee data without spreadsheets.",
    solution: "Designed a clean, accessibility-focused dashboard using modern data visualization libraries for instant insights.",
    impact: "Streamlined data readability, allowing HR to make faster decisions regarding resource allocation.",
  },
  {
    title: "Efive Form Management",
    description: "A robust form management system developed during my internship to handle complex data collection, validation, and storage.",
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
    problem: "The company needed a scalable way to deploy various types of data collection forms without writing new code for each.",
    solution: "Implemented a dynamic form builder leveraging Zod for rock-solid type safety and validation.",
    impact: "Significantly reduced development time for new internal forms and improved overall data integrity.",
  },
  {
    title: "Crysenta (Fertilizer Platform)",
    description: "A modern, engaging website for a fertilizer brand, focusing on product showcases, agricultural education, and brand awareness.",
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
    problem: "The brand needed a digital presence that felt modern and trustworthy to both traditional farmers and enterprises.",
    solution: "Crafted a visually stunning interface with micro-animations and a nature-inspired palette to highlight products.",
    impact: "Established a strong digital footprint and provided an intuitive, engaging catalog for their customer base.",
  },
  {
    title: "Real-time Chat Application",
    description: "A full-stack messaging platform supporting instant text communication, online presence, and group chats.",
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
    problem: "Building a communication tool that required zero-latency message delivery and persistent chat history.",
    solution: "Integrated Socket.io for real-time bi-directional communication alongside a robust MongoDB schema.",
    impact: "Successfully handled multiple concurrent connections with minimal latency and high reliability.",
  },
  {
    title: "Uber Backend Clone",
    description: "A scalable backend architecture replicating core ride-sharing functionalities, including driver matching and location tracking.",
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
    problem: "Ride-sharing requires complex spatial data processing and ultra-fast driver-rider matching.",
    solution: "Utilized PostgreSQL's PostGIS for spatial queries and Redis for maintaining high-speed access to active locations.",
    impact: "Created a highly optimized API capable of processing rapid location pings efficiently.",
  },
  {
    title: "YouTube Backend Architecture",
    description: "A robust API mimicking video hosting platform features, including video processing, streaming, and user interactions.",
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
    problem: "Handling large media files and ensuring smooth playback without overwhelming the main server.",
    solution: "Implemented chunked streaming and integrated cloud storage to separate media serving from API logic.",
    impact: "Achieved scalable media storage and efficient video delivery independent of the core server.",
  },
  {
    title: "E-Commerce API System",
    description: "A secure and efficient backend system for online retail, handling everything from inventory management to payment processing.",
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
    problem: "E-commerce platforms require bulletproof transaction handling and accurate inventory synchronization.",
    solution: "Built a strict relational schema with PostgreSQL and integrated Stripe to ensure transactions are safely verified.",
    impact: "Provided a robust foundation that prevents race conditions and ensures critical data consistency.",
  }
];

// ─── Project Categories (for filter tabs) ─────────────────────────────────────
export const projectCategories = ["All", "Full-Stack", "Frontend", "Backend"] as const;