export interface IndustryItem {
  id: string;
  title: string;
  slug: string;
  subtitle: string;
  heroDescription: string;
  iconName: string;
  businessChallenges: string[];
  softwareSolutions: string[];
  recommendedArchitecture: string[];
  relevantServices: {
    title: string;
    slug: string;
  }[];
  caseStudyHighlight?: {
    title: string;
    description: string;
    outcome: string;
  };
  seoTitle: string;
  seoDescription: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "healthcare",
    title: "Healthcare",
    slug: "healthcare",
    subtitle: "Secure, patient-centered digital health platforms built to strict data standards.",
    heroDescription: "We engineer intuitive telemedicine interfaces, patient portal systems, and clinical workflow tools with uncompromising data privacy, encryption, and auditability.",
    iconName: "Activity",
    businessChallenges: [
      "Strict data privacy regulations (HIPAA, GDPR) requiring end-to-end encryption and audit trails",
      "Fragmented legacy EHR systems that do not communicate with modern patient apps",
      "High patient drop-off on complex appointment scheduling and intake workflows",
      "Need for secure real-time video consultations and telemetry synchronization"
    ],
    softwareSolutions: [
      "Custom patient engagement portals with automated appointment booking",
      "WebRTC-powered secure video consultation rooms with end-to-end encryption",
      "FHIR and HL7 compatible API integration layers connecting disparate clinical systems",
      "Automated clinical document extraction for laboratory reports and referrals"
    ],
    recommendedArchitecture: [
      "Zero-trust VPC networking with automated access logging",
      "Encrypted data storage at rest (AES-256) and TLS 1.3 in transit",
      "Granular role-based access for practitioners, nurses, and patients",
      "Automated disaster recovery and immutable backup snapshots"
    ],
    relevantServices: [
      { title: "Web Applications", slug: "web-applications" },
      { title: "Security Reviews", slug: "security-reviews" },
      { title: "Document Intelligence", slug: "document-intelligence" }
    ],
    caseStudyHighlight: {
      title: "Regional Telehealth Consultation Portal",
      description: "Concept demonstration of a zero-friction patient intake and encrypted video consulting platform.",
      outcome: "Enabled 1-click patient onboarding with sub-second video connection latency."
    },
    seoTitle: "Healthcare Software Engineering & Digital Health Solutions | Code Rockers",
    seoDescription: "Secure, compliant healthcare software, telemedicine platforms, and patient portals built by Code Rockers."
  },
  {
    id: "education",
    title: "Education & EdTech",
    slug: "education",
    subtitle: "Engaging digital learning platforms, student management, and assessment tools.",
    heroDescription: "We develop interactive learning management systems, automated assessment tools, and virtual classroom applications that elevate learner outcomes.",
    iconName: "GraduationCap",
    businessChallenges: [
      "Low course completion rates due to unengaging, static learning materials",
      "High administrative overhead grading assessments and tracking student attendance",
      "Inability to handle massive traffic spikes during semester registration periods",
      "Complex multi-tier access requirements for students, instructors, and parents"
    ],
    softwareSolutions: [
      "Custom Learning Management Systems (LMS) with gamified milestone progression",
      "Automated assessment engines with instant feedback and plagiarism heuristics",
      "Interactive video lessons with bookmarking, quizzes, and note-taking canvas",
      "Administrative dashboards tracking cohort retention, attendance, and exam performance"
    ],
    recommendedArchitecture: [
      "Autoscaling serverless containers supporting peak enrollment surges",
      "CDN edge caching for high-definition educational video streaming",
      "Microservices architecture separating grading engines from student portals",
      "Integration with single-sign-on (Google Classroom, Microsoft Education)"
    ],
    relevantServices: [
      { title: "Web Applications", slug: "web-applications" },
      { title: "Mobile Applications", slug: "mobile-applications" },
      { title: "UI/UX Design Systems", slug: "ui-ux-design-systems" }
    ],
    caseStudyHighlight: {
      title: "Interactive Stem Learning Portal",
      description: "Concept platform delivering modular coding lessons with interactive browser code execution.",
      outcome: "Boosted student retention through interactive micro-feedback loops."
    },
    seoTitle: "EdTech Software Development & Learning Platforms | Code Rockers",
    seoDescription: "Scalable EdTech platforms, custom LMS architectures, and student engagement portals by Code Rockers."
  },
  {
    id: "ecommerce",
    title: "Retail & E-Commerce",
    slug: "ecommerce",
    subtitle: "High-performance digital storefronts and unified multichannel operations.",
    heroDescription: "We build modern e-commerce storefronts, mobile commerce apps, and inventory synchronization systems designed for fast conversion and smooth order fulfillment.",
    iconName: "ShoppingBag",
    businessChallenges: [
      "Slow mobile checkout flows causing elevated cart abandonment rates",
      "Inventory mismatches between retail stores, warehouses, and online channels",
      "Rigid legacy platforms preventing creative merchandising and fast promotion launches",
      "Difficulty scaling during seasonal sales events like Black Friday"
    ],
    softwareSolutions: [
      "Headless Next.js storefronts with sub-second page transitions",
      "One-click mobile checkout with Apple Pay, Google Pay, and localized currencies",
      "Real-time multi-location inventory synchronization pipelines",
      "Personalized product recommendation algorithms based on browsing intent"
    ],
    recommendedArchitecture: [
      "Headless commerce architecture decoupling frontends from commerce engines",
      "Redis caching layer for instant catalog lookups and search filtering",
      "Global CDN edge caching for media assets and product pages",
      "Asynchronous webhook queues ensuring reliable order processing"
    ],
    relevantServices: [
      { title: "Website Development", slug: "website-development" },
      { title: "Web Applications", slug: "web-applications" },
      { title: "Cloud Solutions", slug: "cloud-solutions" }
    ],
    caseStudyHighlight: {
      title: "Global Direct-to-Consumer Storefront",
      description: "Demonstration architecture of a high-speed headless storefront with automated localized currency.",
      outcome: "Achieved perfect Core Web Vitals and eliminated checkout friction."
    },
    seoTitle: "E-Commerce Software & Headless Storefront Development | Code Rockers",
    seoDescription: "High-speed headless e-commerce storefronts, inventory integrations, and mobile shopping apps by Code Rockers."
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Industrial",
    slug: "manufacturing",
    subtitle: "Intelligent factory floor tracking, automated visual inspection, and ERP integrations.",
    heroDescription: "We build industrial operations dashboards, automated visual quality inspection systems, and equipment monitoring software that optimize production uptime.",
    iconName: "Factory",
    businessChallenges: [
      "Unplanned equipment downtime causing costly production halts",
      "Manual visual inspection of parts suffering from human fatigue and inconsistency",
      "Paper-based machine maintenance logs creating blind spots for plant managers",
      "Disconnected legacy PLC and SCADA machinery lacking modern analytics interfaces"
    ],
    softwareSolutions: [
      "Edge-deployed computer vision models for automated defect detection on production lines",
      "Real-time factory floor dashboards tracking Overall Equipment Effectiveness (OEE)",
      "Predictive maintenance logging and automated work-order dispatching",
      "Warehouse tracking tools mapping raw materials to finished goods batches"
    ],
    recommendedArchitecture: [
      "Edge computing appliances (NVIDIA Jetson) running low-latency inference on-premise",
      "Time-series database modeling (TimescaleDB / InfluxDB) for sensor telemetry",
      "Offline-resilient tablet applications for factory floor operators",
      "Secure IoT gateway protocols (MQTT, OPC-UA) with TLS encryption"
    ],
    relevantServices: [
      { title: "Computer Vision", slug: "computer-vision" },
      { title: "Web Applications", slug: "web-applications" },
      { title: "Workflow Automation", slug: "workflow-automation" }
    ],
    caseStudyHighlight: {
      title: "Edge Visual Inspection System",
      description: "Concept demonstration of sub-50ms optical defect detection running on industrial edge devices.",
      outcome: "Automated real-time classification of manufactured components with zero cloud latency."
    },
    seoTitle: "Manufacturing Software & Industrial IoT Development | Code Rockers",
    seoDescription: "Industrial operations software, computer vision defect inspection, and factory floor monitoring platforms."
  },
  {
    id: "real-estate",
    title: "Real Estate & Construction",
    slug: "real-estate",
    subtitle: "Property management portals, interactive virtual listings, and field management.",
    heroDescription: "We engineer property management software, tenant portals, interactive 3D listing platforms, and construction project tracking tools that streamline real estate operations.",
    iconName: "Home",
    businessChallenges: [
      "Dispersed property data causing delays in leasing and maintenance coordination",
      "Clunky tenant payment workflows leading to late rent collection",
      "Disconnection between on-site construction crews and back-office project managers",
      "Outdated listing websites with slow search filtering and poor mobile UX"
    ],
    softwareSolutions: [
      "Custom tenant and owner portals with automated online rent payments and lease signing",
      "Mobile field inspection apps enabling photo capture, maintenance ticket creation, and offline sync",
      "Interactive property search platforms with map integration and instant filter caching",
      "Construction milestone tracking dashboards managing change orders and subcontractor bids"
    ],
    recommendedArchitecture: [
      "Geospatial indexing (PostGIS) for ultra-fast location-based property searches",
      "Stripe ACH and credit card integration for recurring automated rent collection",
      "S3-compatible image processing pipelines creating responsive thumbnail sets",
      "Role-based permission matrices for property managers, owners, and tenants"
    ],
    relevantServices: [
      { title: "Web Applications", slug: "web-applications" },
      { title: "Mobile Applications", slug: "mobile-applications" },
      { title: "Full-Stack Development", slug: "full-stack-development" }
    ],
    caseStudyHighlight: {
      title: "Commercial Property Portfolio Platform",
      description: "Concept demonstration of an integrated tenant portal and maintenance dispatch system.",
      outcome: "Streamlined rent collection and reduced maintenance resolution turnarounds."
    },
    seoTitle: "Real Estate Software Development & PropTech | Code Rockers",
    seoDescription: "Property management portals, interactive listing platforms, and construction tracking apps by Code Rockers."
  },
  {
    id: "logistics",
    title: "Logistics & Supply Chain",
    slug: "logistics",
    subtitle: "Real-time fleet tracking, dispatch optimization, and warehouse coordination.",
    heroDescription: "We develop custom dispatch software, driver mobile apps, route optimization engines, and supply chain transparency portals that keep shipments moving smoothly.",
    iconName: "Truck",
    businessChallenges: [
      "Inaccurate shipment tracking causing constant customer support inquiries",
      "Inefficient manual dispatching leading to deadhead miles and wasted fuel",
      "Paper-based proof of delivery (POD) documents taking days to process and invoice",
      "Integration friction between diverse freight carriers, EDI formats, and shipper systems"
    ],
    softwareSolutions: [
      "Automated dispatch management consoles with live GPS fleet telemetry",
      "Mobile driver applications supporting electronic proof of delivery (ePOD) and barcode scanning",
      "Client tracking portals providing real-time shipment milestones and ETA calculations",
      "EDI and API translation microservices connecting diverse freight networks"
    ],
    recommendedArchitecture: [
      "WebSocket and server-sent events for real-time geospatial coordinate streaming",
      "PostgreSQL with PostGIS for complex spatial routing queries",
      "Offline-first mobile client architecture ensuring uninterrupted driver logging in rural zones",
      "Asynchronous webhook pipelines updating customer ERPs upon delivery completion"
    ],
    relevantServices: [
      { title: "Web Applications", slug: "web-applications" },
      { title: "Mobile Applications", slug: "mobile-applications" },
      { title: "Workflow Automation", slug: "workflow-automation" }
    ],
    caseStudyHighlight: {
      title: "Real-Time Fleet Dispatch Console",
      description: "Concept demonstration of automated route assignment and driver telemetry streaming.",
      outcome: "Eliminated dispatch latency with live vehicle coordinate tracking."
    },
    seoTitle: "Logistics Software & Fleet Management Engineering | Code Rockers",
    seoDescription: "Custom dispatch systems, mobile driver apps, and real-time shipment tracking platforms built by Code Rockers."
  },
  {
    id: "startups",
    title: "Startups & Emerging Tech",
    slug: "startups",
    subtitle: "Agile product engineering tailored to the speed, runway, and demands of venture founders.",
    heroDescription: "We partner with early-stage founders to turn ambitious product visions into production-grade software, execute rapid pivots, and prepare clean codebases for investor technical due diligence.",
    iconName: "Zap",
    businessChallenges: [
      "Balancing development velocity against long-term architectural stability",
      "Difficulty recruiting top-tier engineering talent before raising venture capital",
      "Uncertain customer feedback requiring quick, clean product iterations",
      "Passing rigorous technical due diligence during institutional funding rounds"
    ],
    softwareSolutions: [
      "Rapid MVP sprints shipping market-ready applications in 4 to 8 weeks",
      "Fractional CTO advisory guiding technology selection and roadmap planning",
      "Modular full-stack architectures built on Next.js, TypeScript, and modern clouds",
      "Integrated product analytics uncovering user activation and retention funnels"
    ],
    recommendedArchitecture: [
      "Modular monolith architecture for rapid iteration without distributed systems overhead",
      "Modern TypeScript across frontend and backend for end-to-end type safety",
      "Managed serverless databases (Supabase / RDS) minimizing operational maintenance",
      "Continuous deployment pipelines shipping updates with every pull request"
    ],
    relevantServices: [
      { title: "MVP Development", slug: "mvp-development" },
      { title: "Fractional CTO Leadership", slug: "fractional-cto-leadership" },
      { title: "SaaS Product Engineering", slug: "saas-product-engineering" }
    ],
    caseStudyHighlight: {
      title: "Venture-Ready SaaS Product Platform",
      description: "Concept demonstration of an end-to-end multi-tenant application built in 6 weeks.",
      outcome: "Equipped founders with an institutional-quality codebase ready for immediate customer onboarding."
    },
    seoTitle: "Startup Software Development & Tech Partner | Code Rockers",
    seoDescription: "Dedicated software engineering for startups. Fast MVP delivery, scalable architecture, and fractional CTO leadership."
  }
];

export function getAllIndustries(): IndustryItem[] {
  return industriesData;
}

export function getIndustryBySlug(slug: string): IndustryItem | undefined {
  return industriesData.find((industry) => industry.slug === slug);
}
