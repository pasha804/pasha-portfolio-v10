export type FAQCategory = "all" | "ai" | "fullstack" | "backend" | "collaboration";

export type FAQItem = {
  id: string;
  category: "ai" | "fullstack" | "backend" | "collaboration";
  q: string;
  a: string;
  tags: string[];
  iconType: "ai" | "fullstack" | "backend" | "motion" | "collab" | "gear";
};

export const faqs: FAQItem[] = [
  {
    id: "tech-stack",
    category: "fullstack",
    iconType: "fullstack",
    q: "What technologies and stack do you use?",
    a: "My core stack pairs React 19, TypeScript, and modern Tailwind CSS on the frontend with Python and FastAPI on the backend. For data and state, I utilize PostgreSQL and Redis. For AI, I integrate LLM APIs (OpenAI, Anthropic, Gemini), LangChain, vector embeddings, and custom agentic runtime loops.",
    tags: ["React 19", "TypeScript", "FastAPI", "PostgreSQL", "Redis"],
  },
  {
    id: "ai-applications",
    category: "ai",
    iconType: "ai",
    q: "Can you build production-ready AI-powered applications?",
    a: "Yes — applied AI is the core of my engineering focus. I don't just call simple completions; I build multi-turn conversational agents, RAG (Retrieval-Augmented Generation) knowledge pipelines with vector search, structured function-calling routines, and autonomous task workers integrated into real user workflows.",
    tags: ["LLM Agents", "RAG Systems", "Vector Search", "Prompt Directives"],
  },
  {
    id: "full-stack-capabilities",
    category: "fullstack",
    iconType: "fullstack",
    q: "Do you handle complete full-stack development from scratch?",
    a: "Absolutely. I manage the entire lifecycle: architectural blueprints, database schema design, typed REST/WebSocket APIs, reactive responsive interfaces, authentication, caching, and CI/CD automated deployment to production.",
    tags: ["End-to-End", "API Architecture", "Database Design", "Auth & State"],
  },
  {
    id: "cinematic-websites",
    category: "fullstack",
    iconType: "motion",
    q: "Can you build custom, cinematic interactive websites?",
    a: "Yes. I specialize in motion-led, hyper-polished web experiences featuring fluid scroll choreography, 60fps micro-animations, glassmorphism, and dynamic lighting effects that stay exceptionally lightweight, responsive, and SEO-friendly.",
    tags: ["60fps Motion", "Framer Motion", "Micro-Interactions", "Performance"],
  },
  {
    id: "python-backends",
    category: "backend",
    iconType: "backend",
    q: "Why choose Python & FastAPI for the backend?",
    a: "Python + FastAPI provides asynchronous concurrency, automatic OpenAPI documentation, strict Pydantic data validation, and seamless native interoperability with modern machine learning models and AI SDKs, backed by PostgreSQL and Redis for low-latency scale.",
    tags: ["FastAPI", "Python", "Pydantic", "Async APIs", "Microservices"],
  },
  {
    id: "ai-integration-legacy",
    category: "ai",
    iconType: "ai",
    q: "Can you integrate AI into my existing product without a rewrite?",
    a: "Yes. I can hook into your current stack (whether Node, Django, Laravel, or Next.js) via clean microservices, background job workers, or standalone API gateways, adding intelligent copilot features or automated pipelines without breaking existing architecture.",
    tags: ["Incremental AI", "Microservices", "API Gateways", "Zero Downtime"],
  },
  {
    id: "project-timeline",
    category: "collaboration",
    iconType: "collab",
    q: "What is your typical project timeline and delivery workflow?",
    a: "Most scoped products take between 1 to 4 weeks. I operate in transparent, sprint-based cycles: discovery and architecture on Day 1-2, rapid interactive prototypes by the first week, continuous staging deployments with real-time feedback, and final security/performance sign-off.",
    tags: ["1–4 Weeks", "Sprint Based", "Continuous Demos", "Transparent"],
  },
  {
    id: "deployment-hosting",
    category: "backend",
    iconType: "gear",
    q: "How do you handle deployment, cloud hosting, and DevOps?",
    a: "I package services into Docker containers for reproducible environments, deploy backends to cloud providers (AWS, DigitalOcean, Railway, or VPS) with SSL and automated restarts, and serve frontends via global CDN edges (Vercel, Netlify) with automated CI/CD pipelines.",
    tags: ["Docker", "AWS / VPS", "CI/CD Pipelines", "Edge CDN", "SSL"],
  },
  {
    id: "hiring-collaboration",
    category: "collaboration",
    iconType: "collab",
    q: "Can I hire you on a contract, freelance, or dedicated basis?",
    a: "Yes, I am available for select freelance contracts, MVP builds, advisory engagements, and dedicated engineering sprints. Reach out through the contact section below with your project goals to get a proposal within 24 hours.",
    tags: ["Contracts", "MVP Builds", "Consulting", "Remote Global"],
  },
];

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: "all" | "ai" | "fullstack" | "backend" | "cloud" | "design";
  credentialUrl?: string;
  credentialId?: string;
  image: string;
  skills: string[];
  description: string;
};

export const certificates: Certificate[] = [
  {
    id: "ai-engineering",
    title: "Generative AI & LLM Systems Specialist",
    issuer: "DeepLearning.AI & AI Systems Council",
    category: "ai",
    date: "2024",
    credentialId: "DL-AI-88392-GEN",
    credentialUrl: "https://www.deeplearning.ai/",
    image: "/images/certificates/cert-ai-engineering.jpg",
    skills: ["Generative AI", "LLM APIs", "RAG Architectures", "Autonomous Agents", "Prompt Engineering"],
    description:
      "Demonstrated advanced mastery in architecting large language model workflows, autonomous agentic loops, vector database retrieval (RAG), and production prompt directives.",
  },
  {
    id: "meta-fullstack",
    title: "Professional Full Stack & React Developer",
    issuer: "Meta Certified Developer Program",
    category: "fullstack",
    date: "2024",
    credentialId: "META-DEV-61049-FS",
    credentialUrl: "https://www.coursera.org/professional-certificates/meta-front-end-developer",
    image: "/images/certificates/cert-meta-fullstack.jpg",
    skills: ["React 19", "TypeScript", "Next.js", "State Architecture", "Modern Web Systems"],
    description:
      "Mastered end-to-end frontend and full-stack engineering with modular React architecture, strict TypeScript typing, state management, and modern component lifecycle design.",
  },
  {
    id: "python-backend",
    title: "Python Software & Systems Engineering",
    issuer: "Python Institute & Systems Council",
    category: "backend",
    date: "2023",
    credentialId: "PY-FAST-49120-SYS",
    credentialUrl: "https://pythoninstitute.org/",
    image: "/images/certificates/cert-python-backend.jpg",
    skills: ["Python", "FastAPI", "PostgreSQL", "Redis Caching", "Async Microservices"],
    description:
      "Certified in building high-throughput asynchronous REST APIs using FastAPI, complex relational schema design in PostgreSQL, in-memory caching with Redis, and containerized Python services.",
  },
  {
    id: "cloud-devops",
    title: "Cloud DevOps & Docker Containerization",
    issuer: "AWS & Cloud Native Computing",
    category: "cloud",
    date: "2024",
    credentialId: "AWS-DOK-98421",
    credentialUrl: "https://aws.amazon.com/certification/",
    image: "/images/certificates/cert-cloud-devops.jpg",
    skills: ["Docker", "AWS Cloud", "CI/CD Pipelines", "Container Orchestration", "Microservices"],
    description:
      "Validated proficiency in Docker containerization, multi-stage production builds, automated CI/CD deployment pipelines, and scalable cloud infrastructure.",
  },
  {
    id: "creative-uiux",
    title: "Creative UI/UX & High-Performance Web Engineering",
    issuer: "Google & UX Fellowship",
    category: "design",
    date: "2024",
    credentialId: "UX-ENG-7721",
    credentialUrl: "https://grow.google/certificates/ux-design/",
    image: "/images/certificates/cert-uiux-creative.jpg",
    skills: ["Creative UI/UX", "60fps Motion Design", "Modern CSS & Tailwind", "Web Performance"],
    description:
      "Certified in human-centered UI/UX design, fluid scroll choreography, 60fps micro-interactions, responsive design systems, and lighthouse web performance optimization.",
  },
];
