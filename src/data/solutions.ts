export interface SolutionItem {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  heroDescription: string;
  businessProblem: string;
  proposedSolution: string;
  recommendedCapabilities: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  relevantServices: {
    title: string;
    slug: string;
    description?: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  seoTitle: string;
  seoDescription: string;
}

export const solutionsData: SolutionItem[] = [
  {
    id: "startup-solutions",
    title: "Startup Solutions",
    slug: "startup-solutions",
    subtitle: "Turn early-stage concepts into validated, scalable digital products.",
    heroDescription: "We partner with visionary founders to build production-grade MVPs, establish robust software architectures, and prepare technical foundations for venture scaling.",
    businessProblem: "Startups often struggle with limited capital, tight timelines, and the dilemma of choosing between rapid throwaway prototypes or over-engineered architectures that deplete their financial runway.",
    proposedSolution: "A balanced, modular engineering methodology that ships a focused, high-impact product to early adopters in weeks, built on production-grade infrastructure that can effortlessly scale.",
    recommendedCapabilities: [
      "Rapid MVP scoping and user journey prioritization",
      "Interactive high-fidelity clickable prototypes",
      "Production-ready Next.js, TypeScript, and Supabase / PostgreSQL architecture",
      "Automated user telemetry and activation tracking (PostHog / Mixpanel)",
      "Stripe payment integration and automated customer billing",
      "Technical advisory for investor pitch decks and due diligence"
    ],
    process: [
      { step: "01", title: "Problem Definition", description: "Isolate the single highest-value user problem and define core validation metrics." },
      { step: "02", title: "Design Sprint", description: "Create clickable wireframes and validate user flows before coding." },
      { step: "03", title: "Iterative Build", description: "Engineer the core MVP in agile sprints with bi-weekly testable builds." },
      { step: "04", title: "Beta Launch", description: "Deploy to production, onboard beta users, and analyze user retention." }
    ],
    relevantServices: [
      { title: "MVP Development", slug: "mvp-development" },
      { title: "Fractional CTO Leadership", slug: "fractional-cto-leadership" },
      { title: "SaaS Product Engineering", slug: "saas-product-engineering" }
    ],
    faqs: [
      {
        question: "How do you help startups preserve their runway?",
        answer: "We employ strict MoSCoW prioritization to eliminate unnecessary feature creep, leveraging modern frameworks to ship in 4 to 8 weeks rather than months."
      },
      {
        question: "Who owns the intellectual property and code?",
        answer: "You own 100% of the code, intellectual property, repositories, and cloud accounts from day one."
      }
    ],
    seoTitle: "Startup Software Solutions & MVP Engineering | Code Rockers",
    seoDescription: "Accelerate your startup launch with production-ready MVPs, scalable architectures, and founder-focused technology guidance."
  },
  {
    id: "business-websites",
    title: "Business Websites",
    slug: "business-websites",
    subtitle: "Establish an authoritative digital presence that converts high-value clients.",
    heroDescription: "We engineer lightning-fast corporate websites combining editorial design, clear value messaging, and automated lead capture pipelines.",
    businessProblem: "Many corporate websites are slow, generic, difficult to update, and fail to clearly articulate what makes the business unique, resulting in lost sales opportunities.",
    proposedSolution: "A modern headless web architecture offering sub-second page loads, distinctive custom typography and layouts, intuitive visual content editing, and search engine optimization.",
    recommendedCapabilities: [
      "Bespoke visual branding and responsive interface design",
      "Headless CMS integration for frictionless marketing updates",
      "Core Web Vitals scores exceeding 95 on mobile and desktop",
      "Structured data (JSON-LD) for enhanced search engine visibility",
      "Integrated CRM lead capture and interactive contact forms",
      "Multi-language and global CDN edge caching"
    ],
    process: [
      { step: "01", title: "Brand Strategy", description: "Define key messaging pillars, target personas, and conversion goals." },
      { step: "02", title: "Visual Layouts", description: "Design responsive page compositions reflecting corporate authority." },
      { step: "03", title: "Next.js Development", description: "Build semantic, accessible code with headless CMS integration." },
      { step: "04", title: "SEO & Cutover", description: "Verify 301 redirects, analytics tags, and launch with zero downtime." }
    ],
    relevantServices: [
      { title: "Website Development", slug: "website-development" },
      { title: "UI/UX Design Systems", slug: "ui-ux-design-systems" },
      { title: "Cloud Solutions", slug: "cloud-solutions" }
    ],
    faqs: [
      {
        question: "Can our marketing team publish new case studies and blog articles?",
        answer: "Yes, we integrate modern headless CMS solutions like Sanity or Strapi that give marketing teams an intuitive visual editor without touching code."
      }
    ],
    seoTitle: "Modern Business Websites & Corporate Web Platforms | Code Rockers",
    seoDescription: "High-performance business websites engineered for credibility, conversion, and effortless content management."
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    slug: "digital-transformation",
    subtitle: "Modernize operational workflows and retire legacy paper and spreadsheet systems.",
    heroDescription: "We assist established enterprises in replacing fragmented legacy tools, paper processes, and siloed databases with modern, unified cloud platforms.",
    businessProblem: "Organizations frequently operate on brittle legacy spreadsheets and disconnected software, resulting in operational delays, data discrepancies, and employee burnout.",
    proposedSolution: "Systematic modernization that connects core enterprise databases, automates repetitive human tasks, and equips leadership with real-time operational visibility.",
    recommendedCapabilities: [
      "Legacy software audit and technical debt assessment",
      "Secure cloud migration and relational database restructuring",
      "Custom role-based internal web applications for employees and field staff",
      "API integrations connecting ERP, accounting, and CRM systems",
      "Automated compliance tracking and audit trail logging"
    ],
    process: [
      { step: "01", title: "Process Discovery", description: "Shadow operational teams to identify pain points, data bottlenecks, and redundant entries." },
      { step: "02", title: "Architecture Blueprint", description: "Design modernized data schemas and incremental migration strategies." },
      { step: "03", title: "Parallel Rollout", description: "Deploy cloud platforms alongside existing tools to verify data consistency." },
      { step: "04", title: "Legacy Sunset", description: "Train team members and safely decommission obsolete software." }
    ],
    relevantServices: [
      { title: "Codebase Modernization", slug: "codebase-modernization" },
      { title: "Web Applications", slug: "web-applications" },
      { title: "Data Architecture", slug: "data-architecture" }
    ],
    faqs: [
      {
        question: "How do you minimize operational disruption during transformation?",
        answer: "We migrate systems incrementally using parallel data synchronization, allowing teams to test modern workflows thoroughly before switching over."
      }
    ],
    seoTitle: "Digital Transformation & Legacy Modernization | Code Rockers",
    seoDescription: "Modernize legacy systems, automate corporate processes, and build custom enterprise cloud applications."
  },
  {
    id: "business-automation",
    title: "Business Automation",
    slug: "business-automation",
    subtitle: "Eliminate repetitive manual tasks through intelligent system synchronization.",
    heroDescription: "We build reliable data bridges and automated event pipelines between your business applications, freeing your staff from manual data entry.",
    businessProblem: "Knowledge workers waste hours daily copying details between emails, spreadsheets, invoicing platforms, and project management tools, resulting in avoidable human errors.",
    proposedSolution: "Custom automated workflow pipelines that listen for business events, transform data securely, and trigger multi-system updates with built-in retry mechanisms.",
    recommendedCapabilities: [
      "Bi-directional synchronization across CRM, ERP, and payment platforms",
      "Automated customer onboarding: contract generation, invoicing, and workspace provisioning",
      "Scheduled data reconciliation scripts detecting billing and inventory anomalies",
      "Instant Slack / Teams alert dispatching for high-priority business events",
      "Audit logging and error notification channels"
    ],
    process: [
      { step: "01", title: "Workflow Mapping", description: "Document source triggers, decision trees, and destination payloads." },
      { step: "02", title: "Pipeline Development", description: "Build fault-tolerant worker pipelines with webhook listeners and validation." },
      { step: "03", title: "Dry-Run Testing", description: "Execute synthetic transactions to verify error handling and retries." },
      { step: "04", title: "Production Monitoring", description: "Monitor execution telemetry with real-time exception alerting." }
    ],
    relevantServices: [
      { title: "Workflow Automation", slug: "workflow-automation" },
      { title: "AI Smart Automation", slug: "ai-smart-automation" },
      { title: "Engineering Operations", slug: "engineering-operations" }
    ],
    faqs: [
      {
        question: "What happens if a connected API experiences downtime?",
        answer: "Our automation pipelines utilize persistent queue buffers (Redis/BullMQ) that automatically back off and retry operations until the destination API recovers."
      }
    ],
    seoTitle: "Business Process Automation & System Integration | Code Rockers",
    seoDescription: "Streamline operations with automated system integrations, webhook pipelines, and error-tolerant data synchronization."
  },
  {
    id: "ai-business-solutions",
    title: "AI Business Solutions",
    slug: "ai-business-solutions",
    subtitle: "Deploy practical AI that drives tangible efficiency and revenue gains.",
    heroDescription: "We help forward-thinking companies integrate generative AI, automated document extraction, and conversational intelligence into their daily business operations safely.",
    businessProblem: "Many companies want to adopt AI but fear hallucinations, leaking sensitive client data to public models, or investing in trendy experiments that yield no actual ROI.",
    proposedSolution: "Grounded AI architectures utilizing private vector retrieval (RAG), strict enterprise confidentiality, human-in-the-loop validation, and cost-controlled inference.",
    recommendedCapabilities: [
      "Private knowledge base search over proprietary company records (RAG)",
      "Automated document processing: invoices, contracts, and medical records",
      "Customer support conversational AI with warm human handoff",
      "AI evaluation harnesses verifying response accuracy and eliminating hallucinations",
      "Zero-retention enterprise privacy configurations"
    ],
    process: [
      { step: "01", title: "Feasibility Audit", description: "Identify use cases where AI provides a measurable operational advantage." },
      { step: "02", title: "Data Pipeline", description: "Extract, clean, and vectorize internal documentation into private vector stores." },
      { step: "03", title: "Model Guardrails", description: "Implement prompt templates, deterministic schema validation, and safety filters." },
      { step: "04", title: "Production Deployment", description: "Integrate into user interfaces and monitor accuracy benchmarks." }
    ],
    relevantServices: [
      { title: "AI Integration", slug: "ai-integration", description: "Core LLM integrations." },
      { title: "Document Intelligence", slug: "document-intelligence", description: "PDF and document extraction." },
      { title: "AI Evaluation & Safety", slug: "ai-evaluation-safety", description: "Automated benchmarks and safety." }
    ],
    faqs: [
      {
        question: "How do you protect our confidential company information?",
        answer: "We configure enterprise-grade zero-retention API contracts and private on-premise or VPC vector databases so your proprietary information is never stored or used to train third-party models."
      }
    ],
    seoTitle: "Practical AI Solutions for Business | Code Rockers",
    seoDescription: "Deploy secure, enterprise-grade AI solutions, RAG pipelines, and automated document intelligence with Code Rockers."
  },
  {
    id: "saas-solutions",
    title: "SaaS Solutions",
    slug: "saas-solutions",
    subtitle: "Launch and scale recurring-revenue subscription platforms.",
    heroDescription: "We engineer multi-tenant software-as-a-service platforms featuring secure tenant partitioning, flexible subscription billing, role hierarchies, and cloud elasticity.",
    businessProblem: "Building a SaaS product requires solving complex infrastructure hurdles—tenant isolation, Stripe subscription prorations, user invitations, and compliance—before even building core product value.",
    proposedSolution: "A modular, scalable SaaS architecture providing turnkey organization management, automated billing, and high-availability database tenancy.",
    recommendedCapabilities: [
      "Multi-tenant database architectures with PostgreSQL Row-Level Security",
      "Stripe Billing integration for tiered, seat-based, or usage-metered subscriptions",
      "Organization workspaces, invitations, and granular role-based permissions",
      "Customer onboarding self-service flows and guided tours",
      "Comprehensive developer APIs with rate-limiting and API keys"
    ],
    process: [
      { step: "01", title: "Tenancy Modeling", description: "Define data partitioning rules, billing mechanics, and user hierarchies." },
      { step: "02", title: "SaaS Core Engineering", description: "Build auth, subscription webhooks, organization switching, and audit logs." },
      { step: "03", title: "Core Features", description: "Implement the unique domain capabilities that solve your customers' problems." },
      { step: "04", title: "Hardening & Launch", description: "Conduct security reviews, database load testing, and configure monitoring." }
    ],
    relevantServices: [
      { title: "SaaS Product Engineering", slug: "saas-product-engineering" },
      { title: "Full-Stack Development", slug: "full-stack-development" },
      { title: "Cloud Architecture", slug: "cloud-architecture" }
    ],
    faqs: [
      {
        question: "Can we support complex pricing models like usage-based billing?",
        answer: "Yes, we integrate Stripe Metered Billing and custom event aggregation engines to bill customers accurately based on API calls, active users, or storage."
      }
    ],
    seoTitle: "SaaS Architecture & Engineering Solutions | Code Rockers",
    seoDescription: "Multi-tenant cloud architecture, subscription billing, and scalable engineering for growing SaaS products."
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    slug: "ecommerce-solutions",
    subtitle: "High-converting headless commerce experiences built for global scale.",
    heroDescription: "We engineer custom e-commerce web storefronts and mobile applications that combine editorial storytelling, lightning-fast product catalogs, and frictionless checkout flows.",
    businessProblem: "Standard monolithic commerce templates often suffer from sluggish mobile load times, restricted checkout customization, and rigid layout capabilities that hinder conversion rates.",
    proposedSolution: "Headless commerce architecture decoupling modern frontend presentations from backend inventory and payment engines (Shopify Plus, Medusa, custom APIs).",
    recommendedCapabilities: [
      "Headless storefronts with instant page transitions and sub-second catalog filtering",
      "Frictionless checkout optimization (Apple Pay, Google Pay, localized currencies)",
      "Automated inventory and order synchronization with enterprise ERPs",
      "Personalized product recommendation engines",
      "Rich editorial content and product storytelling integration"
    ],
    process: [
      { step: "01", title: "Customer Journey Audit", description: "Analyze drop-off points in product discovery and cart checkout funnels." },
      { step: "02", title: "Headless Architecture", description: "Design Next.js storefronts connected to headless commerce backends." },
      { step: "03", title: "Checkout & Payment Setup", description: "Integrate global payment processors with fraud detection rules." },
      { step: "04", title: "Performance Tuning", description: "Optimize image compression, caching, and CDN edge delivery." }
    ],
    relevantServices: [
      { title: "Website Development", slug: "website-development" },
      { title: "Web Applications", slug: "web-applications" },
      { title: "Mobile Applications", slug: "mobile-applications" }
    ],
    faqs: [
      {
        question: "Why choose headless commerce over a standard template?",
        answer: "Headless commerce delivers up to 3x faster page loads, complete creative control over every pixel, and the flexibility to sell seamlessly across web, mobile, and custom kiosks."
      }
    ],
    seoTitle: "Headless E-Commerce Solutions & Engineering | Code Rockers",
    seoDescription: "Custom headless e-commerce platforms engineered for fast load speeds, high conversion rates, and global scale."
  },
  {
    id: "internal-business-tools",
    title: "Internal Business Tools",
    slug: "internal-business-tools",
    subtitle: "Empower your team with bespoke operational portals and administrative dashboards.",
    heroDescription: "We build intuitive internal applications that consolidate dispersed operations, automate multi-step approvals, and give teams clear control over business data.",
    businessProblem: "Off-the-shelf software often forces businesses to compromise their unique workflows, while poorly maintained spreadsheets lead to data corruption and audit nightmares.",
    proposedSolution: "Purpose-built internal software featuring clean operational tables, granular permission matrices, audit logs, and direct integration with your primary databases.",
    recommendedCapabilities: [
      "Custom operations and dispatch management consoles",
      "Granular role-based permissions (admin, manager, analyst, auditor)",
      "Real-time operational dashboards with data filtering and CSV exports",
      "Multi-step approval workflows with audit logging",
      "Secure Single Sign-On (SSO) integration via Google Workspace or Okta"
    ],
    process: [
      { step: "01", title: "Internal Workflow Audit", description: "Map out the daily operational tasks and data interactions of your team." },
      { step: "02", title: "Data Model & Permissions", description: "Define security boundaries, edit privileges, and state lifecycles." },
      { step: "03", title: "Agile Development", description: "Build clean, dense UI tables with rapid search, batch actions, and validations." },
      { step: "04", title: "Deployment & Training", description: "Deploy securely behind your corporate VPN or SSO provider." }
    ],
    relevantServices: [
      { title: "Web Applications", slug: "web-applications" },
      { title: "Full-Stack Development", slug: "full-stack-development" },
      { title: "Security Reviews", slug: "security-reviews" }
    ],
    faqs: [
      {
        question: "Can internal tools connect directly to our production database?",
        answer: "Yes, we implement secure database connections with read-replicas, connection pooling, and strict role permissions to ensure internal tooling operations never jeopardize live client traffic."
      }
    ],
    seoTitle: "Custom Internal Business Tools & Dashboards | Code Rockers",
    seoDescription: "Bespoke internal operations software, admin dashboards, and automated approval workflows built by Code Rockers."
  }
];

export function getAllSolutions(): SolutionItem[] {
  return solutionsData;
}

export function getSolutionBySlug(slug: string): SolutionItem | undefined {
  return solutionsData.find((solution) => solution.slug === slug);
}
