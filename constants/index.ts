// ─── Technologies ─────────────────────────────────────────────────────────────
export const technologies = [
  // Frontend
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
    name: "GraphQL",
    category: "Backend",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
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
    title: "Started B.Tech in Computer Science and Engineering",
    description: "Began my journey in computer science and engineering, diving deep into programming fundamentals and web technologies.",
    type: "education" as const,
  },
  {
    year: "2023",
    title: "First Freelance Project",
    description: "Built my first client website — a business landing page with a CMS. Learned real-world expectations fast.",
    type: "work" as const,
  },
  {
    year: "2023",
    title: "Mastered Full-Stack Development",
    description: "Completed multiple projects with React.js, Node.js, and MongoDB. Shifted focus to building complete products.",
    type: "milestone" as const,
  },
  {
    year: "2024",
    title: "Built AI-Integrated Applications",
    description: "Integrated OpenAI APIs into production apps. Developed a task manager with AI prioritization used by 100+ users.",
    type: "work" as const,
  },
  {
    year: "2024",
    title: "Open Source Contributions",
    description: "Started contributing to open-source projects. Currently maintaining two npm packages with 500+ weekly downloads.",
    type: "milestone" as const,
  },
  {
    year: "2025",
    title: "Available for Freelance & Full-Time",
    description: "Actively looking for exciting projects and opportunities. Open to remote and Ahmedabad-based roles.",
    type: "current" as const,
  },
];

// ─── Projects ─────────────────────────────────────────────────────────────────
export const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    // TODO: Replace with real screenshot → put image in /public/projects/ecommerce.png
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&h=600&fit=crop",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe", "PostgreSQL"],
    category: "Full-Stack",
    liveUrl: "https://ecommerce-demo.com",
    githubUrl: "https://github.com/AgheraRaj/ecommerce",
    features: [
      "Real-time inventory tracking",
      "Secure payment processing via Stripe",
      "Admin dashboard with analytics",
      "Order management & email notifications",
    ],
    // Case-study details shown in modal
    problem: "The client was manually tracking inventory in spreadsheets and losing sales due to overselling.",
    solution: "Built a real-time inventory system with PostgreSQL row-level locking and Stripe webhooks for instant order sync.",
    impact: "Reduced inventory errors by 95% and increased checkout completion rate by 30%.",
  },
  {
    title: "AI-Powered Task Manager",
    description:
      "Smart task management application that uses AI to prioritize and categorize tasks, with team collaboration features.",
    image: "https://images.unsplash.com/photo-1554774853-aae0a22c8aa4?w=800&h=600&fit=crop",
    technologies: ["React", "Node.js", "OpenAI", "MongoDB", "WebSocket"],
    category: "Full-Stack",
    liveUrl: "https://taskmanager-demo.com",
    githubUrl: "https://github.com/AgheraRaj/taskmanager",
    features: [
      "AI task prioritization via GPT-4",
      "Real-time collaboration with WebSockets",
      "Custom workflow automation",
      "Analytics dashboard",
    ],
    problem: "Teams struggled to prioritize their task backlog, wasting 30+ mins daily on planning.",
    solution: "Integrated OpenAI to auto-categorize and score tasks by urgency and impact based on natural language descriptions.",
    impact: "100+ active users. Average planning time cut from 35 minutes to under 5 minutes.",
  },
  {
    title: "Social Media Analytics",
    description:
      "Comprehensive analytics platform providing engagement insights and growth metrics across multiple social platforms.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    technologies: ["Vue.js", "Python", "D3.js", "AWS", "Redis"],
    category: "Frontend",
    liveUrl: "https://analytics-demo.com",
    githubUrl: "https://github.com/AgheraRaj/analytics",
    features: [
      "Cross-platform analytics aggregation",
      "Custom report generation as PDF",
      "Engagement trend analysis with D3.js",
      "Redis-cached real-time updates",
    ],
    problem: "Marketing teams were juggling 4 different platform dashboards with no unified view.",
    solution: "Built a single-pane dashboard that pulls from multiple APIs, normalises data, and presents unified metrics.",
    impact: "Saved marketing team 10+ hours/week. Onboarded 3 paying clients within first month.",
  },
];

// ─── Project Categories (for filter tabs) ─────────────────────────────────────
export const projectCategories = ["All", "Full-Stack", "Frontend", "Backend"] as const;