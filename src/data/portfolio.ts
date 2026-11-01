export interface ProjectItem {
  id: string;
  title: string;
  slug: string;
  clientType: string;
  industry: string;
  category: string;
  servicesDelivered: string[];
  summary: string;
  conceptNote: string;
  challenge: string;
  solution: string;
  outcome: string;
  technologies: string[];
  keyFeatures: string[];
  deliverables: string[];
  gradient: string;
}

export const portfolioProjects: ProjectItem[] = [
  {
    id: "nexus-health",
    title: "NexusHealth Clinical Platform",
    slug: "nexus-health",
    clientType: "Healthcare · Concept Architecture",
    industry: "Healthcare",
    category: "Web Applications",
    servicesDelivered: ["Web Applications", "Security Reviews", "Document Intelligence"],
    summary: "An architectural concept for an encrypted telemedicine portal featuring sub-second video consultations and automated clinical document parsing.",
    conceptNote: "Demonstration Project: Engineered as an architectural proof-of-concept demonstrating HIPAA-ready encryption patterns and WebRTC video infrastructure.",
    challenge: "Traditional clinical portals often force patients through cumbersome authentication barriers, while healthcare practitioners struggle with disconnected document repositories and slow video connection handshakes.",
    solution: "We designed a unified Next.js web application incorporating WebRTC peer-to-peer video streams with fallback TURN servers, zero-knowledge patient record storage, and an automated document extraction pipeline for clinical lab results.",
    outcome: "Demonstrated sub-200ms video call establishment, zero-downtime failover, and automated parsing of complex PDF medical reports into structured JSON.",
    technologies: ["Next.js", "TypeScript", "WebRTC", "PostgreSQL", "AWS S3 / KMS", "Tailwind CSS"],
    keyFeatures: [
      "End-to-end encrypted video consultation rooms with zero software installation",
      "Automated clinical document intake with instant JSON extraction",
      "Granular role-based access control for practitioners, nurses, and patients",
      "Automated appointment reminders and instant calendar sync"
    ],
    deliverables: [
      "Modular full-stack web application codebase",
      "WebRTC signaling and TURN relay server configuration",
      "Security and encryption architecture verification audit",
      "API documentation for Electronic Health Record (EHR) integration"
    ],
    gradient: "from-blue-600 to-cyan-500"
  },
  {
    id: "strata-cloud",
    title: "StrataCloud SaaS Orchestrator",
    slug: "strata-cloud",
    clientType: "Cloud & DevOps · Architecture Concept",
    industry: "Startups & Emerging Tech",
    category: "SaaS Platforms",
    servicesDelivered: ["SaaS Product Engineering", "Cloud Architecture", "DevOps & CI/CD"],
    summary: "A multi-tenant cloud operations dashboard enabling engineering teams to provision ephemeral staging environments and monitor cloud spend.",
    conceptNote: "Demonstration Project: Showcases Code Rockers' multi-tenant database modeling, Stripe metered billing, and Terraform cloud automation blueprints.",
    challenge: "Engineering departments lose thousands of developer hours managing inconsistent staging environments and struggle to track cloud infrastructure costs across multiple cloud accounts.",
    solution: "We engineered a multi-tenant SaaS control plane that binds directly to cloud provider APIs (AWS and GCP) via secure IAM roles, generating ephemeral preview environments on demand with automated teardown schedules.",
    outcome: "Validated automated environment provisioning in under 3 minutes and demonstrated clear multi-tenant data isolation using PostgreSQL Row-Level Security.",
    technologies: ["Next.js", "TypeScript", "Docker", "PostgreSQL", "Terraform", "Stripe Billing", "Tailwind CSS"],
    keyFeatures: [
      "One-click ephemeral environment provisioning from git pull requests",
      "Multi-tenant organization management with fine-grained team roles",
      "Real-time cloud cost analytics with anomaly threshold alerts",
      "Automated Stripe subscription and metered billing integration"
    ],
    deliverables: [
      "Production-ready multi-tenant SaaS application",
      "Infrastructure-as-Code Terraform modules",
      "Stripe webhook billing and customer portal integration",
      "Comprehensive API documentation"
    ],
    gradient: "from-indigo-600 to-purple-600"
  },
  {
    id: "apex-logistics",
    title: "ApexFleet Dispatch & Telemetry",
    slug: "apex-logistics",
    clientType: "Logistics · Demonstration Project",
    industry: "Logistics",
    category: "Internal Business Tools",
    servicesDelivered: ["Web Applications", "Mobile Applications", "Workflow Automation"],
    summary: "Real-time dispatch management console and mobile driver application featuring automated route sequencing and live GPS telemetry.",
    conceptNote: "Demonstration Project: Engineered as an architectural reference for high-throughput WebSocket geospatial tracking and offline-first mobile data capture.",
    challenge: "Logistics dispatchers frequently face a 10-15 minute blind spot between driver updates, resulting in inaccurate customer delivery ETAs and inefficient vehicle routing.",
    solution: "We architected an event-driven dispatch platform combining a reactive Next.js dispatcher console with a cross-platform React Native driver application that continuously batches GPS coordinates even when offline.",
    outcome: "Achieved real-time map updates with sub-second WebSocket latency and seamless automatic synchronization when drivers reconnect to cellular data.",
    technologies: ["React Native", "Next.js", "WebSocket", "PostGIS", "Redis", "TypeScript"],
    keyFeatures: [
      "Live dispatcher map displaying fleet positions updated every 2 seconds",
      "Offline-first driver app for electronic proof-of-delivery (ePOD) and signature capture",
      "Automated ETA recalculation based on live road coordinates",
      "Customer delivery tracking portal accessible via SMS link"
    ],
    deliverables: [
      "Dispatcher web console application",
      "Cross-platform iOS and Android driver app",
      "High-throughput WebSocket telemetry ingestion microservice",
      "PostGIS spatial database schema"
    ],
    gradient: "from-amber-500 to-orange-600"
  },
  {
    id: "lumina-retail",
    title: "Lumina Headless Commerce",
    slug: "lumina-retail",
    clientType: "E-Commerce · Concept Architecture",
    industry: "Retail & E-Commerce",
    category: "E-Commerce",
    servicesDelivered: ["Website Development", "UI/UX Design Systems", "Cloud Solutions"],
    summary: "A headless digital storefront engineered for sub-second page loads, editorial product storytelling, and international multi-currency checkout.",
    conceptNote: "Demonstration Project: Showcases high-speed Next.js edge caching, headless commerce APIs, and conversion-optimized checkout funnels.",
    challenge: "Traditional monolithic commerce platforms struggle with sluggish mobile performance, rigid layout constraints, and high cart abandonment rates on international mobile traffic.",
    solution: "We decoupled the customer storefront using Next.js with Incremental Static Regeneration (ISR), pairing it with modern headless commerce APIs and global edge caching.",
    outcome: "Recorded perfect Core Web Vitals (99+ mobile score) and instantaneous catalog filtering across thousands of product variations.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Headless Commerce API", "Stripe Checkout", "Vercel Edge"],
    keyFeatures: [
      "Sub-second page transitions and instantaneous facet filtering",
      "Editorial lookbook integration with direct 'Shop the Look' hot-spots",
      "Localized multi-currency checkout with Apple Pay and Google Pay",
      "Dynamic stock level badges synchronized in real time"
    ],
    deliverables: [
      "Headless storefront frontend repository",
      "Reusable component design system in Tailwind CSS",
      "Automated product catalog webhook synchronization",
      "Edge caching and image optimization configuration"
    ],
    gradient: "from-emerald-500 to-teal-600"
  },
  {
    id: "cortex-ai",
    title: "Cortex Document Intelligence Hub",
    slug: "cortex-ai",
    clientType: "Enterprise AI · Concept Prototype",
    industry: "Manufacturing",
    category: "AI-Powered Products",
    servicesDelivered: ["AI Integration", "Document Intelligence", "AI Evaluation & Safety"],
    summary: "An automated intelligence pipeline converting unstructured vendor invoices, bills of lading, and compliance PDFs into verified business records.",
    conceptNote: "Demonstration Project: Engineered as an architectural benchmark for hybrid vision-LLM document extraction and deterministic schema validation.",
    challenge: "Enterprises process thousands of invoices, receipts, and technical manuals monthly, with teams losing hundreds of hours manually keying data into ERP systems.",
    solution: "We built a multi-stage document intelligence pipeline utilizing vision foundation models, bounding-box provenance tracking, and deterministic arithmetic cross-validation rules.",
    outcome: "Demonstrated 98.4% field extraction accuracy across complex nested tables and provided side-by-side human verification queues for low-confidence exceptions.",
    technologies: ["Python", "FastAPI", "Vision LLMs", "PostgreSQL", "Next.js", "Docker", "Tailwind CSS"],
    keyFeatures: [
      "Multi-page PDF parsing with nested table structure preservation",
      "Visual provenance highlighting: clicking an extracted field jumps to the source document location",
      "Automated arithmetic validation (subtotal, tax, discounts, total)",
      "Instant export to ERP-ready JSON and CSV formats"
    ],
    deliverables: [
      "Document ingestion and OCR inference pipeline",
      "Human-in-the-loop validation review web interface",
      "Evaluation test suite measuring field-level precision and recall",
      "Docker containerized deployment blueprints"
    ],
    gradient: "from-violet-600 to-fuchsia-600"
  },
  {
    id: "vanguard-proptech",
    title: "Vanguard Commercial PropTech",
    slug: "vanguard-proptech",
    clientType: "Real Estate · Architecture Blueprint",
    industry: "Real Estate",
    category: "Web Applications",
    servicesDelivered: ["Web Applications", "Full-Stack Development", "UI/UX Design Systems"],
    summary: "A comprehensive commercial property management portal with automated tenant lease tracking, maintenance request dispatch, and financial reporting.",
    conceptNote: "Demonstration Project: Illustrates Code Rockers' approach to complex relational data modeling, recurring billing, and role-based permissions.",
    challenge: "Property managers juggle multiple disparate tools for rent billing, maintenance requests, and lease documentation, leading to delayed collections and tenant dissatisfaction.",
    solution: "We designed a unified web application centralizing building portfolios, tenant leases, digital signature workflows, and maintenance dispatching into a single responsive portal.",
    outcome: "Demonstrated automated recurring rent collection workflows, real-time maintenance status tracking, and multi-property portfolio financial analytics.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Stripe Connect", "Tailwind CSS"],
    keyFeatures: [
      "Multi-property tenant dashboard with automated rent reminders and payment history",
      "Maintenance ticketing system with photo upload and contractor dispatching",
      "Digital lease storage and renewal notification alerts",
      "Executive portfolio income and occupancy analytics"
    ],
    deliverables: [
      "Full-stack property management web application",
      "Tenant payment portal with ACH and credit card processing",
      "Automated email and SMS notification engine",
      "Relational database schema and migration scripts"
    ],
    gradient: "from-blue-700 to-indigo-800"
  }
];

export function getAllProjects(): ProjectItem[] {
  return portfolioProjects;
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return portfolioProjects.find((project) => project.slug === slug);
}
