export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  category: string;
  categorySlug: string;
  shortDescription: string;
  heroTitle: string;
  heroDescription: string;
  iconName: string;
  featured?: boolean;
  challenges: string[];
  whatWeOffer: string[];
  deliverables: string[];
  technologies: string[];
  useCases: string[];
  process: {
    step: string;
    title: string;
    description: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: {
    title: string;
    slug: string;
    description: string;
  }[];
  seoTitle: string;
  seoDescription: string;
}

export interface ServiceCategory {
  title: string;
  slug: string;
  description: string;
  services: ServiceItem[];
}

export const servicesData: ServiceItem[] = [
  // --- Category A: Web and Product Development ---
  {
    id: "website-development",
    title: "Website Development",
    slug: "website-development",
    category: "Web and Product Development",
    categorySlug: "web-and-product-development",
    shortDescription: "Modern, responsive websites designed to make a memorable first impression and turn visitors into customers.",
    heroTitle: "High-Performance Websites Crafted for Maximum Conversion and Impact",
    heroDescription: "We engineer custom corporate websites, interactive landing pages, and content management platforms that combine visual distinction, sub-second load times, and search engine excellence.",
    iconName: "Globe",
    featured: true,
    challenges: [
      "Slow page speeds causing high visitor bounce rates",
      "Outdated visual presence that undermines credibility with prospective clients",
      "Inflexible CMS setups that require developer intervention for basic updates",
      "Poor mobile rendering and inconsistent cross-browser behavior",
      "Weak technical SEO leading to poor organic search visibility"
    ],
    whatWeOffer: [
      "Custom responsive design tailored to your specific brand identity",
      "Modern headless CMS integration (Sanity, Strapi, WordPress Headless, or custom admin)",
      "Strict Core Web Vitals optimization and sub-second load times",
      "WCAG 2.2 AA accessibility standards compliance",
      "Full SEO foundation: structured data, semantic hierarchy, dynamic sitemaps",
      "Comprehensive analytics and conversion tracking integration"
    ],
    deliverables: [
      "Complete responsive frontend codebase with production build configuration",
      "Intuitive CMS administration dashboard for non-technical team members",
      "Technical SEO documentation and schema markup verification report",
      "Cross-browser and multi-device automated testing suite pass",
      "Deployment pipeline and post-launch maintenance runbook"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Sanity / Strapi", "Vercel / AWS", "Lighthouse"],
    useCases: [
      "Enterprise technology firms refreshing their corporate presence",
      "High-growth venture-backed startups launching a new product line",
      "B2B professional services firms requiring lead-capture platforms",
      "E-commerce brands seeking editorial storytelling web storefronts"
    ],
    process: [
      { step: "01", title: "Discovery & Architecture", description: "Audit existing assets, establish brand goals, user journeys, and wireframe key page layouts." },
      { step: "02", title: "Visual & Interface Design", description: "Create high-fidelity design tokens, interactive components, and responsive viewport specifications." },
      { step: "03", title: "Engineering & Integration", description: "Develop clean semantic Next.js code, integrate CMS schemas, and implement dynamic routing." },
      { step: "04", title: "Performance & Launch", description: "Audit Core Web Vitals, implement SSL, DNS routing, and monitor post-deployment telemetry." }
    ],
    faqs: [
      {
        question: "How long does a custom website development project take?",
        answer: "Typically between 3 to 8 weeks depending on the scope of custom animations, CMS complexity, and the number of bespoke page templates required."
      },
      {
        question: "Can our marketing team update text and imagery without code?",
        answer: "Yes. We configure intuitive visual CMS schemas that allow your team to publish blog posts, update copy, and swap media without touching the code."
      },
      {
        question: "How do you ensure search engine performance?",
        answer: "We implement server-side rendering (SSR), automated OpenGraph tags, schema.org JSON-LD structured data, clean canonical URLs, and lightning-fast loading speeds."
      }
    ],
    relatedServices: [
      { title: "Web Applications", slug: "web-applications", description: "Custom web software for complex business processes." },
      { title: "UI/UX Design Systems", slug: "ui-ux-design-systems", description: "Design foundations and component libraries." },
      { title: "Full-Stack Development", slug: "full-stack-development", description: "End-to-end full stack architecture." }
    ],
    seoTitle: "Custom Website Development Services | Code Rockers",
    seoDescription: "High-performance, modern corporate websites engineered by Code Rockers. Clean code, sub-second speeds, and conversion-focused design."
  },
  {
    id: "web-applications",
    title: "Web Applications",
    slug: "web-applications",
    category: "Web and Product Development",
    categorySlug: "web-and-product-development",
    shortDescription: "Purpose-built web applications that simplify the way your team and customers get things done.",
    heroTitle: "Mission-Critical Web Applications Built for Reliability and Scale",
    heroDescription: "We engineer resilient, secure web apps with modern frontend frameworks, decoupled APIs, and rock-solid relational or document databases.",
    iconName: "LayoutGrid",
    featured: true,
    challenges: [
      "Clunky legacy spreadsheets and manual paperwork stifling business efficiency",
      "Off-the-shelf software lacking the bespoke workflows your business demands",
      "Security vulnerabilities and inconsistent role-based permission control",
      "Application crashes under concurrent usage spikes",
      "Difficulties integrating with legacy databases or third-party webhooks"
    ],
    whatWeOffer: [
      "Custom single-page and server-rendered web application engineering",
      "Fine-grained Role-Based Access Control (RBAC) and SSO integration (OAuth2, SAML)",
      "High-throughput RESTful and GraphQL API layer architecture",
      "Real-time data synchronization using WebSockets and server-sent events",
      "Relational (PostgreSQL) and NoSQL (MongoDB, Redis) data models",
      "Interactive data visualizations and actionable operational dashboards"
    ],
    deliverables: [
      "Secure web application frontend and backend codebase",
      "Authenticated API documentation (Swagger/OpenAPI)",
      "Automated test suites (unit, integration, end-to-end)",
      "Docker containerized infrastructure blueprints",
      "Comprehensive administration panel and logging dashboard"
    ],
    technologies: ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
    useCases: [
      "Custom internal operations dashboards and CRM platforms",
      "Client portals with secure file sharing and billing workflows",
      "Logistics dispatch and inventory management portals",
      "Multi-tenant customer-facing web platforms"
    ],
    process: [
      { step: "01", title: "Domain Modeling", description: "Map entities, permissions, user roles, and transactional state transitions." },
      { step: "02", title: "API & Data Schema Design", description: "Define relational schemas, API contracts, authentication flows, and indexing strategies." },
      { step: "03", title: "Iterative Sprint Execution", description: "Develop features in agile sprints with bi-weekly staging environment reviews." },
      { step: "04", title: "Hardening & Production Release", description: "Perform security audits, load testing, containerization, and failover validation." }
    ],
    faqs: [
      {
        question: "How do you protect sensitive corporate data in the web app?",
        answer: "We implement encrypted storage at rest (AES-256), TLS 1.3 in transit, strict RBAC, automated input sanitization, CSRF protections, and rate-limiting."
      },
      {
        question: "Can the application connect to our existing ERP or CRM?",
        answer: "Yes, we regularly architect bi-directional integrations with Salesforce, SAP, HubSpot, Stripe, QuickBooks, and custom legacy endpoints."
      }
    ],
    relatedServices: [
      { title: "Full-Stack Development", slug: "full-stack-development", description: "Complete end-to-end software engineering." },
      { title: "SaaS Product Engineering", slug: "saas-product-engineering", description: "Multi-tenant cloud platform architecture." },
      { title: "Security Reviews", slug: "security-reviews", description: "Rigorous code and architectural security audits." }
    ],
    seoTitle: "Custom Web Application Development | Code Rockers",
    seoDescription: "Engineered web applications built for reliability, scale, and seamless user experiences by Code Rockers."
  },
  {
    id: "full-stack-development",
    title: "Full-Stack Development",
    slug: "full-stack-development",
    category: "Web and Product Development",
    categorySlug: "web-and-product-development",
    shortDescription: "End-to-end web development that brings polished interfaces, reliable APIs, and data together.",
    heroTitle: "End-to-End Engineering Connecting Interfaces, APIs, and Data",
    heroDescription: "From dynamic client interfaces to robust backend microservices and database clustering, we build unified digital architectures with zero friction.",
    iconName: "Layers",
    featured: true,
    challenges: [
      "Fragmented teams creating bottlenecks between frontend and backend",
      "Incompatible data contracts causing integration bugs and release delays",
      "Slow API roundtrips causing sluggish UI feedback",
      "Technical debt from disjointed architectural decisions"
    ],
    whatWeOffer: [
      "Single-team accountability across UI, server runtime, and persistence tiers",
      "Type-safe end-to-end architectures (TypeScript, tRPC, GraphQL)",
      "High-performance caching strategies using Redis and CDN edge networks",
      "Asynchronous background worker queues (BullMQ, Celery, SQS)",
      "Automated CI/CD pipelines with seamless zero-downtime deployments"
    ],
    deliverables: [
      "Unified repository structure with automated type generation",
      "High-coverage automated test suites",
      "Comprehensive architectural decision records (ADRs)",
      "Continuous integration workflows and staging environments"
    ],
    technologies: ["TypeScript", "Next.js", "Node.js", "PostgreSQL", "Prisma/Drizzle", "Redis", "Docker", "Tailwind CSS"],
    useCases: [
      "Businesses replacing disjointed vendor stacks with a unified platform",
      "Fast-moving startups needing rapid full-cycle feature rollouts",
      "Enterprises requiring scalable microservices alongside modern web portals"
    ],
    process: [
      { step: "01", title: "Full-Stack Blueprint", description: "Define cross-cutting concerns: auth, logging, typing, database schemas, and networking." },
      { step: "02", title: "Core Architecture", description: "Stand up data access layers, API controllers, and corresponding frontend view states." },
      { step: "03", title: "Continuous Delivery", description: "Implement automated builds, schema migrations, and preview environments for testing." },
      { step: "04", title: "Observability & Scaling", description: "Set up OpenTelemetry, error alerting (Sentry), and database read-replicas." }
    ],
    faqs: [
      {
        question: "What is the benefit of a full-stack engineering partner?",
        answer: "A unified full-stack team eliminates finger-pointing between frontend and backend developers, resulting in 40% faster release cycles and consistent type safety."
      }
    ],
    relatedServices: [
      { title: "Web Applications", slug: "web-applications", description: "Custom software for business workflows." },
      { title: "DevOps & CI/CD", slug: "devops-ci-cd", description: "Automated pipelines and infrastructure." }
    ],
    seoTitle: "Full-Stack Development Services | Code Rockers",
    seoDescription: "End-to-end full-stack development services combining modern frontend interfaces, robust backends, and cloud databases."
  },
  {
    id: "mvp-development",
    title: "MVP Development",
    slug: "mvp-development",
    category: "Web and Product Development",
    categorySlug: "web-and-product-development",
    shortDescription: "Launch a focused first version of your product, learn from real users, and build with confidence.",
    heroTitle: "Validate Faster: Turn Your Product Concept Into Market Reality",
    heroDescription: "We help founders and product leaders strip away non-essential scope, focus on the core value proposition, and ship a production-grade Minimum Viable Product in weeks, not months.",
    iconName: "Rocket",
    featured: false,
    challenges: [
      "Scope creep delaying launch and exhausting financial runway",
      "Over-engineering features that users never actually use",
      "Fragile prototype code that must be completely rewritten after launch",
      "Lack of product analytics to measure genuine user activation"
    ],
    whatWeOffer: [
      "Ruthless feature prioritization matrix (MoSCoW framework)",
      "Clickable interactive prototypes for early stakeholder alignment",
      "Production-ready MVP built on scalable foundations (no throwaway code)",
      "Integrated telemetry: PostHog/Mixpanel user event tracking and feedback widgets",
      "Payment gateway integration (Stripe) for immediate monetization validation"
    ],
    deliverables: [
      "Fully functional MVP web or mobile application",
      "Stripe or payment processing integration",
      "Telemetry dashboard tracking activation and retention",
      "Product roadmap and iteration plan based on initial cohort feedback"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase / PostgreSQL", "Stripe", "PostHog"],
    useCases: [
      "Early-stage founders validating market demand before seed funding",
      "Established businesses testing a new digital business unit",
      "Consulting firms packaging proprietary methodology into software"
    ],
    process: [
      { step: "01", title: "Scoping Workshop", description: "Define the single most important user problem and outline the minimal viable feature set." },
      { step: "02", title: "Rapid Prototyping", description: "Build low-friction wireframes and finalize the core user journey within 5 business days." },
      { step: "03", title: "Sprint Execution", description: "Build the functional application with production-quality code and integrated analytics." },
      { step: "04", title: "Launch & Metric Review", description: "Deploy to production, onboard beta users, and analyze user engagement patterns." }
    ],
    faqs: [
      {
        question: "How fast can you build an MVP?",
        answer: "Most focused MVPs are designed, engineered, and deployed to production within 4 to 8 weeks."
      },
      {
        question: "Will we need to rewrite the code if we raise funding or scale?",
        answer: "No. We build on scalable modern stacks (Next.js, TypeScript, PostgreSQL) with clean modular architecture so your MVP can grow directly into your v2 platform."
      }
    ],
    relatedServices: [
      { title: "SaaS Product Engineering", slug: "saas-product-engineering", description: "Scale your MVP into a full SaaS offering." },
      { title: "Fractional CTO Leadership", slug: "fractional-cto-leadership", description: "Strategic technology direction for early-stage products." }
    ],
    seoTitle: "MVP Development Services for Startups | Code Rockers",
    seoDescription: "Ship a market-ready Minimum Viable Product in weeks. Clean code, scalable architecture, and built-in telemetry."
  },
  {
    id: "saas-product-engineering",
    title: "SaaS Product Engineering",
    slug: "saas-product-engineering",
    category: "Web and Product Development",
    categorySlug: "web-and-product-development",
    shortDescription: "Build and improve SaaS products with dependable architecture, thoughtful UX, and room to scale.",
    heroTitle: "Scalable Multi-Tenant Architecture for High-Growth SaaS Platforms",
    heroDescription: "We engineer resilient, multi-tenant SaaS platforms equipped with automated billing, team permissions, tenant isolation, and high-availability cloud infrastructure.",
    iconName: "Cpu",
    featured: true,
    challenges: [
      "Complex multi-tenant data isolation and data compliance headaches",
      "Billing management nightmares (prorations, tier changes, seat allocations)",
      "Technical debt preventing rapid delivery of customer-requested features",
      "Performance degradation as customer account data expands exponentially"
    ],
    whatWeOffer: [
      "Multi-tenant database strategies (shared schema with tenant keys, or isolated schemas)",
      "Subscription management and usage-based metered billing via Stripe",
      "Organization hierarchies, invitations, and role-based permissions",
      "Customer onboarding flows designed to maximize activation rates",
      "Comprehensive webhook event delivery system with retry mechanisms",
      "Self-service tenant administrative settings and API key generation"
    ],
    deliverables: [
      "Complete multi-tenant SaaS frontend and backend codebase",
      "Stripe Customer Portal & Billing Engine integration",
      "API documentation with rate-limiting and developer key access",
      "Terraform cloud infrastructure configurations"
    ],
    technologies: ["Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis", "Stripe Billing", "AWS / GCP", "Tailwind CSS"],
    useCases: [
      "B2B software ventures scaling from initial customer cohorts to enterprise tiers",
      "Traditional IT companies migrating on-premise software into a cloud SaaS model",
      "Internal proprietary tools being commercialized as standalone SaaS products"
    ],
    process: [
      { step: "01", title: "Tenant & Data Modeling", description: "Determine schema tenancy patterns, billing model mechanics, and access policies." },
      { step: "02", title: "Foundation Layer", description: "Build auth, tenant switching, billing subscription engines, and audit logging." },
      { step: "03", title: "Domain Features", description: "Implement high-value core product workflows with unit and integration coverage." },
      { step: "04", title: "Scale Hardening", description: "Optimize database queries, install rate-limiters, and conduct security reviews." }
    ],
    faqs: [
      {
        question: "How do you handle multi-tenant data isolation?",
        answer: "We utilize PostgreSQL Row-Level Security (RLS) or dedicated schema partitioning depending on your compliance requirements, guaranteeing zero cross-tenant data leakage."
      }
    ],
    relatedServices: [
      { title: "Web Applications", slug: "web-applications", description: "Custom operational software." },
      { title: "Cloud Architecture", slug: "cloud-architecture", description: "Resilient infrastructure for cloud services." }
    ],
    seoTitle: "SaaS Product Engineering Services | Code Rockers",
    seoDescription: "Multi-tenant SaaS engineering, subscription billing, organization management, and cloud scale by Code Rockers."
  },
  {
    id: "codebase-modernization",
    title: "Codebase Modernization",
    slug: "codebase-modernization",
    category: "Web and Product Development",
    categorySlug: "web-and-product-development",
    shortDescription: "Improve legacy applications incrementally while protecting the behavior your users rely on.",
    heroTitle: "Refactor and Modernize Legacy Systems Without Risky Big-Bang Rewrites",
    heroDescription: "We breathe new life into brittle, outdated codebases through disciplined strangler-fig refactoring, automated testing harnesses, and gradual cloud migrations.",
    iconName: "RefreshCw",
    featured: false,
    challenges: [
      "Fear of touching critical business logic due to zero automated test coverage",
      "Outdated frameworks exposing the business to critical unpatched CVEs",
      "Crippling release cycles where minor tweaks take weeks to deploy safely",
      "Difficulty recruiting modern engineering talent to work on obsolete stacks"
    ],
    whatWeOffer: [
      "Comprehensive architectural dependency and vulnerability auditing",
      "Implementation of end-to-end regression testing harnesses before touching code",
      "Strangler-fig pattern execution to migrate features incrementally into modern stacks",
      "Database schema refactoring and zero-downtime data migration pipelines",
      "Adoption of containerization (Docker) and modern CI/CD automation"
    ],
    deliverables: [
      "Detailed codebase health audit and prioritized refactoring roadmap",
      "Regression test coverage suite ensuring parity",
      "Incrementally upgraded microservices and modern frontend interfaces",
      "Modernized deployment documentation and developer onboarding guides"
    ],
    technologies: ["TypeScript", "Next.js", "Docker", "Node.js", "PostgreSQL", "Jest / Playwright", "GitHub Actions"],
    useCases: [
      "Established businesses operating legacy PHP, .NET, or Rails systems",
      "Apps struggling with monolithic slowdowns and memory leaks",
      "Companies preparing their technology stack for private equity acquisition audits"
    ],
    process: [
      { step: "01", title: "Audit & Baseline", description: "Inspect dependencies, map data flows, identify security risks, and establish benchmarks." },
      { step: "02", title: "Safety Net Setup", description: "Write end-to-end regression tests to verify that critical business behaviors remain intact." },
      { step: "03", title: "Incremental Migration", description: "Carve out modules piece by piece using proxy routing and modern components." },
      { step: "04", title: "Decommissioning", description: "Retire legacy subsystems cleanly once the modernized services demonstrate stability." }
    ],
    faqs: [
      {
        question: "Can we modernize without halting new feature development?",
        answer: "Yes. By applying the Strangler Fig pattern, your team can continue building high-priority business features while we systematically upgrade the underlying infrastructure."
      }
    ],
    relatedServices: [
      { title: "Security Reviews", slug: "security-reviews", description: "Identify application vulnerabilities." },
      { title: "DevOps & CI/CD", slug: "devops-ci-cd", description: "Modernize deployment workflows." }
    ],
    seoTitle: "Legacy Codebase Modernization Services | Code Rockers",
    seoDescription: "Safely refactor, modernize, and migrate legacy software applications with zero downtime and automated test harnesses."
  },

  // --- Category B: Mobile Development ---
  {
    id: "mobile-applications",
    title: "Mobile Applications",
    slug: "mobile-applications",
    category: "Mobile Development",
    categorySlug: "mobile-development",
    shortDescription: "Useful, intuitive iOS and Android apps that keep your business close to the people who matter.",
    heroTitle: "Polished iOS and Android Mobile Solutions That Users Love to Open",
    heroDescription: "We build intuitive, fluid mobile applications that keep your brand in your customers' pockets, featuring native hardware integration, offline support, and silky 60fps animations.",
    iconName: "Smartphone",
    featured: false,
    challenges: [
      "High development and maintenance costs of maintaining duplicate native codebases",
      "Poor offline performance causing user abandonment in low-connectivity areas",
      "Sluggish touch responsiveness and uninspired UI design",
      "Inconsistent push notification delivery rates"
    ],
    whatWeOffer: [
      "Cross-platform React Native and Flutter mobile applications",
      "Offline-first data synchronization (WatermelonDB, SQLite)",
      "Native device hardware integration (Camera, GPS, Biometrics, Bluetooth)",
      "Targeted push notification infrastructure via FCM and APNs",
      "In-app purchase and subscription billing architecture"
    ],
    deliverables: [
      "Production-ready iOS and Android app bundles",
      "Complete source code repository with reusable component libraries",
      "Automated CI/CD build pipelines using Fastlane",
      "Crashlytics and performance telemetry dashboards"
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Swift", "Kotlin", "Firebase / Supabase", "Fastlane"],
    useCases: [
      "Consumer brands launching loyalty and ordering applications",
      "Field service organizations outfitting on-the-road technicians",
      "Healthcare companies providing patient monitoring applications",
      "Fintech startups delivering mobile wallet and investment interfaces"
    ],
    process: [
      { step: "01", title: "Mobile UX Mapping", description: "Design thumb-friendly user flows, gesture paradigms, and micro-interactions." },
      { step: "02", title: "Cross-Platform Build", description: "Develop reusable component structures with native bridge modules." },
      { step: "03", title: "Offline & Hardware Testing", description: "Verify background tasks, caching resilience, biometrics, and push notifications." },
      { step: "04", title: "Beta Distribution", description: "Distribute builds via Apple TestFlight and Google Play Internal Testing for validation." }
    ],
    faqs: [
      {
        question: "Should we build cross-platform or separate native apps?",
        answer: "For over 90% of commercial applications, modern cross-platform frameworks (React Native) deliver native 60fps performance while reducing development costs and timeline by nearly half."
      }
    ],
    relatedServices: [
      { title: "Mobile App Development", slug: "mobile-app-development", description: "End-to-end mobile development lifecycle." },
      { title: "App Store & Play Console Setup", slug: "app-store-play-console", description: "Submission and account configuration." }
    ],
    seoTitle: "Mobile Application Development | Code Rockers",
    seoDescription: "High-performance iOS and Android mobile applications built with React Native and native integrations by Code Rockers."
  },
  {
    id: "mobile-app-development",
    title: "Mobile App Development",
    slug: "mobile-app-development",
    category: "Mobile Development",
    categorySlug: "mobile-development",
    shortDescription: "Plan and build engaging mobile applications for iOS and Android.",
    heroTitle: "End-to-End Mobile App Development Lifecycle From Strategy to Storefront",
    heroDescription: "A structured engineering engagement covering user journey research, architecture, custom mobile code, API orchestration, and long-term release management.",
    iconName: "TabletSmartphone",
    featured: true,
    challenges: [
      "Unclear mobile product strategy and premature feature overload",
      "Complex backend integration and slow payload serialization",
      "Battery drain and memory leaks on lower-end mobile devices",
      "Navigating stringent Apple and Google App Store review guidelines"
    ],
    whatWeOffer: [
      "Strategic mobile roadmap definition and technical feasibility consulting",
      "Mobile-optimized GraphQL and REST backend orchestration",
      "Extensive automated device farm testing across screen sizes and OS versions",
      "Biometric security, secure keychain/keystore token storage",
      "Real-time crash reporting and automated remote configuration"
    ],
    deliverables: [
      "Verified iOS and Android build artifacts ready for submission",
      "End-to-end test suites executing on physical device emulators",
      "API backend integrations and synchronization endpoints",
      "Store release checklist and developer documentation"
    ],
    technologies: ["React Native", "TypeScript", "Node.js", "GraphQL", "Fastlane", "Jest", "Detox"],
    useCases: [
      "Startups building their flagship mobile product from scratch",
      "Enterprises looking for an experienced engineering team to execute an app overhaul",
      "Businesses launching companion apps for IoT or hardware products"
    ],
    process: [
      { step: "01", title: "Architecture & Wireframing", description: "Establish state management patterns, API contracts, and screen wireframes." },
      { step: "02", title: "Agile Mobile Sprints", description: "Iterative feature construction with weekly TestFlight/APK releases for stakeholder review." },
      { step: "03", title: "Device Farm Testing", description: "Execute automated tests across 30+ physical device configurations." },
      { step: "04", title: "Launch & Support", description: "Coordinate public rollout, monitor crash rates, and ship day-1 hotfixes if required." }
    ],
    faqs: [
      {
        question: "What is the difference between this engagement and general mobile apps?",
        answer: "This is our full-lifecycle development engagement, covering in-depth strategic planning, device farm testing, API backend construction, and continuous release management."
      }
    ],
    relatedServices: [
      { title: "Mobile Applications", slug: "mobile-applications", description: "Cross-platform mobile apps." },
      { title: "App Store & Play Console Setup", slug: "app-store-play-console", description: "Store compliance and deployment." }
    ],
    seoTitle: "Mobile App Development Lifecycle & Engineering | Code Rockers",
    seoDescription: "Strategic iOS and Android mobile app development. Architecture, UI design, device testing, and store launch."
  },
  {
    id: "app-store-play-console",
    title: "App Store & Play Console Setup",
    slug: "app-store-play-console",
    category: "Mobile Development",
    categorySlug: "mobile-development",
    shortDescription: "Practical support preparing your developer accounts and app listing for a smooth store submission.",
    heroTitle: "Hassle-Free Apple App Store and Google Play Console Submissions",
    heroDescription: "We guide you through developer enrollment, certificate signing, privacy manifests, in-app purchase setups, and store compliance to avoid painful rejections.",
    iconName: "Store",
    featured: false,
    challenges: [
      "Navigating complex Apple Developer Program and Google Play Console verification steps",
      "App rejections due to strict privacy policy requirements, permissions, or missing disclosures",
      "Certificate and provisioning profile signing errors breaking build pipelines",
      "Difficulty setting up in-app subscription products and server-to-server webhook notifications"
    ],
    whatWeOffer: [
      "Apple Developer Program (D-U-N-S number) and Google Play Console account setup assistance",
      "Generation and management of signing certificates, bundle IDs, and keystores",
      "App privacy declaration preparation and data safety nutrition labels",
      "Fastlane automated deployment pipelines for one-click store uploads",
      "App Store Optimization (ASO) metadata formatting: titles, keywords, and screenshots",
      "Hands-on resolution of App Review rejections and compliance objections"
    ],
    deliverables: [
      "Configured developer console accounts with verified ownership",
      "Approved app listings on both Apple App Store and Google Play Console",
      "Automated build and signing pipeline scripts",
      "Comprehensive compliance and annual credential renewal guide"
    ],
    technologies: ["Apple App Store Connect", "Google Play Console", "Fastlane", "Xcode", "Android Studio"],
    useCases: [
      "First-time app publishers navigating regulatory requirements",
      "Businesses launching mission-critical customer apps with strict release deadlines",
      "Companies encountering repeated rejections from Apple or Google reviewers"
    ],
    process: [
      { step: "01", title: "Account Verification", description: "Verify corporate entities, D-U-N-S records, and console permissions." },
      { step: "02", title: "Compliance & Privacy", description: "Audit data collection practices, build privacy manifests, and draft safety disclosures." },
      { step: "03", title: "Assets & Storefront", description: "Prepare screenshot sets for all required resolutions, localized copy, and metadata." },
      { step: "04", title: "Submission & Approval", description: "Submit binary packages, coordinate reviewer inquiries, and manage final release." }
    ],
    faqs: [
      {
        question: "How long does App Store review take?",
        answer: "Apple typically reviews submissions within 24 to 48 hours, while Google Play can take 3 to 7 business days for new developer accounts. We prepare all documentation ahead of time to minimize review cycles."
      }
    ],
    relatedServices: [
      { title: "Mobile Applications", slug: "mobile-applications", description: "Cross-platform mobile apps." },
      { title: "Mobile App Development", slug: "mobile-app-development", description: "Full-lifecycle app development." }
    ],
    seoTitle: "App Store & Google Play Console Setup Services | Code Rockers",
    seoDescription: "Expert assistance with Apple App Store and Google Play Console setup, compliance, privacy labels, and app publishing."
  },

  // --- Category C: Artificial Intelligence ---
  {
    id: "ai-integration",
    title: "AI Integration",
    slug: "ai-integration",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    shortDescription: "Practical AI integrations and workflow automation that save time and help your team do more.",
    heroTitle: "Integrate Generative AI Into Your Existing Software Ecosystem",
    heroDescription: "We embed state-of-the-art Large Language Models, embeddings, and intelligent inference directly into your web applications, internal tools, and customer workflows.",
    iconName: "Sparkles",
    featured: true,
    challenges: [
      "Hype-driven AI projects that fail to solve concrete business pain points",
      "Hallucinations and unpredictable outputs threatening customer trust",
      "Data privacy concerns over proprietary company information leaking into public models",
      "Runaway API costs from unoptimized model selection and context windows"
    ],
    whatWeOffer: [
      "Pragmatic LLM integration (OpenAI, Anthropic Claude, Gemini, open-source Llama)",
      "Retrieval-Augmented Generation (RAG) over internal knowledge bases and databases",
      "Vector database setup and hybrid semantic search (Pinecone, Qdrant, pgvector)",
      "Structured output validation and deterministic schema enforcement (Pydantic / Zod)",
      "Strict data privacy protocols: zero-retention API contracts and local embeddings",
      "Intelligent caching and token optimization to reduce operational costs by up to 70%"
    ],
    deliverables: [
      "Fully integrated AI capabilities within your existing web or mobile product",
      "Vector database pipeline with automated document chunking and indexing",
      "Evaluation test suite measuring response accuracy and latency",
      "Cost and usage monitoring dashboard with budget alerts"
    ],
    technologies: ["OpenAI API", "Anthropic Claude", "Gemini", "LangChain / LlamaIndex", "pgvector / Pinecone", "TypeScript", "Python"],
    useCases: [
      "Customer support platforms automatically drafting human-verified responses",
      "Legal and compliance teams querying thousands of proprietary contracts",
      "SaaS tools generating automated summaries, tags, and data categorizations",
      "Content teams augmenting editorial research and content drafting"
    ],
    process: [
      { step: "01", title: "Use-Case Validation", description: "Assess feasibility, data availability, and determine ROI before writing code." },
      { step: "02", title: "Data Pipeline & RAG", description: "Extract, clean, chunk, and embed your proprietary business context." },
      { step: "03", title: "Guardrail Engineering", description: "Implement prompt templates, output sanitization, and fallback rules." },
      { step: "04", title: "Deployment & Observability", description: "Monitor token consumption, latency, and real-world response quality." }
    ],
    faqs: [
      {
        question: "Will our proprietary company data be used to train public AI models?",
        answer: "No. We exclusively configure enterprise API endpoints that guarantee zero data retention and explicitly prohibit your data from being used for model training."
      },
      {
        question: "What is RAG (Retrieval-Augmented Generation)?",
        answer: "RAG is a technique where an AI model retrieves factual documents from your private database before drafting an answer, ensuring responses are accurate, cite real sources, and do not hallucinate."
      }
    ],
    relatedServices: [
      { title: "Autonomous AI Agents", slug: "autonomous-ai-agents", description: "Goal-oriented multi-step autonomous workflows." },
      { title: "Document Intelligence", slug: "document-intelligence", description: "Automated document data extraction." },
      { title: "AI Evaluation & Safety", slug: "ai-evaluation-safety", description: "Testing and guardrail validation." }
    ],
    seoTitle: "AI Integration Services for Business | Code Rockers",
    seoDescription: "Practical AI integrations, RAG architecture, LLM pipelines, and vector databases engineered by Code Rockers."
  },
  {
    id: "ai-smart-automation",
    title: "AI Smart Automation",
    slug: "ai-smart-automation",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    shortDescription: "Apply AI to practical workflows to reduce manual steps and help your team focus.",
    heroTitle: "Intelligent Workflow Automation That Eliminates Repetitive Manual Work",
    heroDescription: "We combine modern rule-based automation with cognitive AI decision-making to triage support tickets, classify documents, parse emails, and update enterprise databases.",
    iconName: "Bot",
    featured: false,
    challenges: [
      "High-paid team members spending hours copying data across disconnected software",
      "Brittle legacy automation scripts that break whenever formats slightly change",
      "Manual bottlenecks slowing down order processing and customer inquiries",
      "Inconsistent human classification and data entry errors"
    ],
    whatWeOffer: [
      "Intelligent email and inquiry routing with sentiment and intent classification",
      "Unstructured to structured data transformation (invoices, receipts, leads)",
      "Exception handling with human-in-the-loop review workflows",
      "Integration across ERPs, CRMs, Slack, email, and internal databases",
      "Audit logging and operational telemetry for every automated step"
    ],
    deliverables: [
      "Robust automation pipelines deployed on resilient cloud workers",
      "Human review dashboard for handling edge cases and low-confidence decisions",
      "Complete workflow documentation and error recovery runbooks",
      "Metrics dashboard displaying hours saved and task throughput"
    ],
    technologies: ["Node.js / Python", "Temporal / Inngest", "OpenAI / Claude", "PostgreSQL", "Slack API", "Webhook Orchestration"],
    useCases: [
      "Finance teams automatically matching incoming receipts against purchase orders",
      "Logistics firms parsing freight bills of lading and updating dispatch systems",
      "HR teams screening and categorizing inbound resumes against job requirements"
    ],
    process: [
      { step: "01", title: "Workflow Audit", description: "Shadow team operations to identify high-frequency, rule-guided manual workflows." },
      { step: "02", title: "Pipeline Architecture", description: "Design fault-tolerant event triggers, fallback channels, and verification checks." },
      { step: "03", title: "Pilot Execution", description: "Run automation in parallel with human operators to calibrate precision." },
      { step: "04", title: "Full Automation", description: "Roll out to production with real-time alerting on exceptions." }
    ],
    faqs: [
      {
        question: "What happens when the AI is unsure about a decision?",
        answer: "We engineer confidence scoring thresholds. If confidence falls below 95%, the item is automatically routed to a human review queue with the suggested answer pre-filled for one-click approval."
      }
    ],
    relatedServices: [
      { title: "Workflow Automation", slug: "workflow-automation", description: "Connect existing business tools." },
      { title: "Document Intelligence", slug: "document-intelligence", description: "Extract structured data from documents." }
    ],
    seoTitle: "AI Smart Automation Services | Code Rockers",
    seoDescription: "Automate complex business processes with intelligent AI automation, human-in-the-loop reviews, and zero data entry errors."
  },
  {
    id: "ai-product-development",
    title: "AI Product Development",
    slug: "ai-product-development",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    shortDescription: "Design and build AI-powered products around real user needs and measurable outcomes.",
    heroTitle: "Build Defensible, AI-Native Software Products From the Ground Up",
    heroDescription: "We partner with visionary founders and enterprises to architect AI-native software where intelligent models are not just an add-on, but the fundamental engine powering the user experience.",
    iconName: "Cpu",
    featured: false,
    challenges: [
      "Thin wrappers around generic APIs that lack competitive differentiation",
      "Poor UX around latency: users staring at blank screens waiting for LLM responses",
      "Unclear unit economics where high inference costs kill gross margins",
      "Lack of continuous evaluation pipelines to catch model regressions"
    ],
    whatWeOffer: [
      "AI-native user interface design (streaming responses, contextual autocomplete, conversational canvas)",
      "Fine-tuning and domain adaptation of open-source models for proprietary tasks",
      "Cost-optimized hybrid routing (small fast models for triage, large models for deep reasoning)",
      "Continuous evaluation harnesses and human feedback loops (RLHF/RLAIF setup)",
      "Scalable infrastructure architecture designed for high-concurrency inference"
    ],
    deliverables: [
      "Commercial-grade AI product application with end-to-end user flows",
      "Proprietary fine-tuning pipelines and curated training datasets",
      "Real-time streaming UI components with optimistic updates",
      "Inference cost telemetry and optimization controls"
    ],
    technologies: ["Next.js", "Python / FastAPI", "PyTorch / HuggingFace", "vLLM", "PostgreSQL", "Redis", "TypeScript"],
    useCases: [
      "AI-native productivity platforms (legal drafting, code generation, design automation)",
      "Intelligent analytics platforms uncovering anomalies in financial streams",
      "Personalized learning platforms adapting curriculum to student comprehension"
    ],
    process: [
      { step: "01", title: "Moat Strategy", description: "Define data flywheels, proprietary context, and user value propositions." },
      { step: "02", title: "Interactive Canvas Design", description: "Design responsive interfaces that mask AI latency with streaming and previews." },
      { step: "03", title: "Model Optimization", description: "Select, fine-tune, or quantize models to balance quality, latency, and cost." },
      { step: "04", title: "Scale Deployment", description: "Deploy containerized inference on cloud GPUs with autoscaling." }
    ],
    faqs: [
      {
        question: "How do you avoid building a 'thin wrapper' that big tech can replicate?",
        answer: "We focus on proprietary workflow integration, proprietary domain data collection, feedback loops that improve your platform with every user action, and seamless system integrations."
      }
    ],
    relatedServices: [
      { title: "SaaS Product Engineering", slug: "saas-product-engineering", description: "Multi-tenant cloud architecture." },
      { title: "AI Evaluation & Safety", slug: "ai-evaluation-safety", description: "Safety and accuracy testing." }
    ],
    seoTitle: "AI-Native Product Development | Code Rockers",
    seoDescription: "Engineer defensible, AI-first digital products with proprietary data flywheels and optimized inference pipelines."
  },
  {
    id: "autonomous-ai-agents",
    title: "Autonomous AI Agents",
    slug: "autonomous-ai-agents",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    shortDescription: "Design AI agents to assist with defined tasks, with appropriate permissions, oversight, and safeguards.",
    heroTitle: "Goal-Oriented AI Agents Equipped With Tools, Memory, and Safeguards",
    heroDescription: "We build autonomous agentic workflows that break down complex high-level goals into tactical steps, browse the web, execute API calls, and deliver completed work with strict permission bounds.",
    iconName: "Workflow",
    featured: false,
    challenges: [
      "Agents going into endless execution loops or getting stuck on edge cases",
      "Lack of sandboxing creating security risks when executing code or API mutations",
      "Loss of state and context over long multi-turn execution trajectories",
      "Absence of human oversight controls leading to unintended actions"
    ],
    whatWeOffer: [
      "State-machine agent architecture (LangGraph, CrewAI, AutoGen)",
      "Long-term vector and episodic memory management",
      "Tool-calling integrations with external APIs, databases, and browser automation",
      "Strict capability sandboxing and human-in-the-loop authorization gates",
      "Trajectory logging, rollback capabilities, and step-by-step observability"
    ],
    deliverables: [
      "Production agent server runtime with secure sandbox execution",
      "Admin monitoring dashboard displaying agent reasoning steps and tool calls",
      "Role-based permission gating configuration",
      "Comprehensive telemetry and failure recovery mechanisms"
    ],
    technologies: ["LangGraph", "Python", "TypeScript", "Docker Sandboxes", "Redis", "PostgreSQL", "OpenAI Tool Calling"],
    useCases: [
      "Automated competitive intelligence agents monitoring market movements",
      "Code review agents that inspect pull requests, run tests, and propose fixes",
      "Financial research agents synthesizing quarterly SEC filings into executive briefs",
      "Customer onboarding agents guiding clients through complex account setup"
    ],
    process: [
      { step: "01", title: "Tool & Capability Definition", description: "Identify read and write tools the agent is permitted to utilize." },
      { step: "02", title: "State Machine Graph", description: "Model the agent's reasoning loop: plan, act, observe, reflect, and conclude." },
      { step: "03", title: "Guardrails & Confirmation", description: "Build permission checkpoints for high-impact external actions." },
      { step: "04", title: "Continuous Trajectory Evaluation", description: "Benchmark agent task completion rates across challenging scenarios." }
    ],
    faqs: [
      {
        question: "Can an autonomous agent perform harmful actions without permission?",
        answer: "No. We implement hard deterministic checkpoints where any irreversible action (such as sending emails, deleting records, or making financial transactions) halts execution until an authorized human approves it."
      }
    ],
    relatedServices: [
      { title: "AI Integration", slug: "ai-integration", description: "Core LLM and API integrations." },
      { title: "AI Evaluation & Safety", slug: "ai-evaluation-safety", description: "Agent safety audits and guardrails." }
    ],
    seoTitle: "Autonomous AI Agent Development | Code Rockers",
    seoDescription: "Engineer robust autonomous AI agents with tool-calling capabilities, deterministic guardrails, and persistent memory."
  },
  {
    id: "document-intelligence",
    title: "Document Intelligence",
    slug: "document-intelligence",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    shortDescription: "Extract, organize, and validate information from business documents with intelligent processing.",
    heroTitle: "Transform Complex PDF and Document Archives Into Structured Data",
    heroDescription: "We build high-accuracy document intelligence pipelines that parse messy PDFs, scanned images, contracts, and financial statements into clean, validated JSON schemas.",
    iconName: "FileText",
    featured: false,
    challenges: [
      "Hundreds of manual hours spent retyping data from invoices, forms, and contracts",
      "Traditional OCR breaking when formatting, layouts, or fonts change",
      "Complex nested tables and multi-column layouts losing structural meaning",
      "Lack of validation against existing database records"
    ],
    whatWeOffer: [
      "Multi-modal vision and text document extraction (GPT-4o, Claude 3.5 Sonnet, AWS Textract)",
      "High-precision tabular data extraction preserving column-row relationships",
      "Entity extraction: dates, totals, legal clauses, signatures, line items",
      "Automated cross-validation against internal ERP and accounting databases",
      "Audit trail linking extracted fields directly to bounding boxes on source documents"
    ],
    deliverables: [
      "Automated document processing backend pipeline",
      "Side-by-side human validation interface with document zoom and field highlighting",
      "Validated JSON/CSV export integration with target business databases",
      "Security and PII redaction pipeline for confidential files"
    ],
    technologies: ["Python", "FastAPI", "Vision LLMs", "AWS Textract", "PostgreSQL", "Docker", "React Viewer"],
    useCases: [
      "Accounts payable automation: extracting invoice line items into ERPs",
      "Insurance claim processing: extracting medical receipts and incident reports",
      "Legal discovery: extracting clauses and obligations across thousands of contracts"
    ],
    process: [
      { step: "01", title: "Schema Definition", description: "Define target JSON structures, required validation rules, and confidence thresholds." },
      { step: "02", title: "Vision-Text Extraction", description: "Implement multi-modal processing with table parsing algorithms." },
      { step: "03", title: "Validation Engine", description: "Enforce arithmetic checks (e.g. subtotal + tax = total) and database lookups." },
      { step: "04", title: "System Integration", description: "Feed clean structured outputs directly into your core business systems." }
    ],
    faqs: [
      {
        question: "Can it handle handwritten text or skewed scans?",
        answer: "Yes. Modern vision-language models excel at deciphering handwritten notes, stamps, and skewed mobile scans far better than legacy OCR engines."
      }
    ],
    relatedServices: [
      { title: "AI Smart Automation", slug: "ai-smart-automation", description: "Automate downstream workflows." },
      { title: "Computer Vision", slug: "computer-vision", description: "Visual inspection and image recognition." }
    ],
    seoTitle: "Document Intelligence & PDF Data Extraction | Code Rockers",
    seoDescription: "High-accuracy automated document intelligence, PDF parsing, contract extraction, and invoice processing by Code Rockers."
  },
  {
    id: "conversational-ai",
    title: "Conversational AI",
    slug: "conversational-ai",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    shortDescription: "Build conversational experiences that help customers and teams find relevant answers and take action.",
    heroTitle: "Context-Aware Conversational Assistants That Actually Solve Problems",
    heroDescription: "We engineer conversational interfaces for web, mobile, and messaging platforms that resolve customer inquiries, guide users through workflows, and hand off smoothly to human operators.",
    iconName: "MessageSquare",
    featured: false,
    challenges: [
      "Frustrating legacy chatbots with rigid decision trees that fail on natural questions",
      "Customer support teams overwhelmed by high volumes of tier-1 repetitive tickets",
      "Chatbots giving incorrect or outdated answers due to disconnected knowledge",
      "Inability of chatbots to actually execute actions like cancellations or bookings"
    ],
    whatWeOffer: [
      "Natural language conversational interfaces powered by modern foundation models",
      "Real-time knowledge synchronization with your help desk, FAQs, and product catalog",
      "Action execution: booking appointments, updating shipping addresses, issuing refunds",
      "Multi-channel deployment: web widget, WhatsApp, Slack, SMS, and in-app chat",
      "Sentiment analysis and seamless warm handoff to live human agents"
    ],
    deliverables: [
      "Customizable embeddable web chat widget matched to your brand identity",
      "Conversational backend with session memory and action webhooks",
      "Human agent escalation dashboard with complete conversation history",
      "Analytics reporting on resolution rates, common questions, and customer satisfaction"
    ],
    technologies: ["React", "TypeScript", "WebSocket", "OpenAI / Claude", "Pinecone", "Zendesk / Intercom API"],
    useCases: [
      "24/7 e-commerce customer support handling order status and returns",
      "Internal IT and HR help desk answering policy and setup questions",
      "Financial advisory assistants answering account and eligibility queries"
    ],
    process: [
      { step: "01", title: "Knowledge Ingestion", description: "Crawl and index your support documentation, knowledge base, and product specs." },
      { step: "02", title: "Persona & Prompting", description: "Establish brand tone, response boundaries, and multi-turn conversational patterns." },
      { step: "03", title: "API Action Binding", description: "Connect the bot to your transactional APIs for self-service resolution." },
      { step: "04", title: "Continuous Tuning", description: "Review transcripts weekly to expand knowledge coverage and refine responses." }
    ],
    faqs: [
      {
        question: "Can the conversational assistant integrate with our existing CRM?",
        answer: "Yes, we integrate with Salesforce, HubSpot, Zendesk, Intercom, and custom database endpoints to log conversations and pull user records."
      }
    ],
    relatedServices: [
      { title: "AI Integration", slug: "ai-integration", description: "Core AI and LLM pipelines." },
      { title: "Web Applications", slug: "web-applications", description: "Custom customer portal interfaces." }
    ],
    seoTitle: "Conversational AI & Customer Assistant Development | Code Rockers",
    seoDescription: "Build intelligent conversational AI assistants that resolve customer queries, execute actions, and integrate with your CRM."
  },
  {
    id: "ai-evaluation-safety",
    title: "AI Evaluation & Safety",
    slug: "ai-evaluation-safety",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    shortDescription: "Evaluate AI outputs, uncover failure modes, and introduce safeguards before and after release.",
    heroTitle: "Rigorous Evaluation Harnesses and Safety Guardrails for Production AI",
    heroDescription: "We help enterprises deploy AI with confidence by creating automated evaluation test suites, red-teaming model prompts, detecting hallucinations, and enforcing compliance guardrails.",
    iconName: "ShieldCheck",
    featured: false,
    challenges: [
      "Fear of reputational damage from toxic, biased, or hallucinatory AI responses",
      "Inability to objectively measure whether a prompt or model update made the system better or worse",
      "Prompt injection attacks bypassing basic application instructions",
      "Lack of compliance tracking for emerging AI governance regulations"
    ],
    whatWeOffer: [
      "Automated LLM-as-a-judge evaluation benchmarks for accuracy and groundedness",
      "Adversarial red-teaming to uncover prompt injection and jailbreak vulnerabilities",
      "Runtime guardrails (NeMo Guardrails, Llama Guard) filtering unsafe inputs and outputs",
      "PII/PHI detection and dynamic anonymization before data reaches model providers",
      "Continuous production monitoring for semantic drift and regression tracking"
    ],
    deliverables: [
      "Automated evaluation pipeline integrated into your CI/CD test workflow",
      "Security audit report documenting red-teaming findings and mitigations",
      "Runtime guardrail layer intercepting queries in real time",
      "AI governance compliance documentation and audit log repository"
    ],
    technologies: ["Ragas / DeepEval", "Python", "Llama Guard", "NeMo Guardrails", "OpenTelemetry", "PostgreSQL"],
    useCases: [
      "Regulated financial services deploying AI assistants to customer-facing channels",
      "Healthcare applications requiring strict HIPAA compliance and zero medical fabrication",
      "Enterprise SaaS platforms maintaining SLAs on AI feature reliability"
    ],
    process: [
      { step: "01", title: "Golden Dataset Creation", description: "Curate representative prompt-response pairs including edge cases and adversarial inputs." },
      { step: "02", title: "Automated Benchmarking", description: "Establish baseline scores across correctness, relevancy, and safety." },
      { step: "03", title: "Guardrail Implementation", description: "Install input sanitizers, output filters, and model safety wrappers." },
      { step: "04", title: "CI/CD Integration", description: "Block prompt changes or model swaps that degrade baseline benchmark scores." }
    ],
    faqs: [
      {
        question: "How do you test for hallucinations programmatically?",
        answer: "We use RAG triad evaluations: verifying context relevancy, groundedness (whether the answer is strictly supported by retrieved facts), and answer relevancy."
      }
    ],
    relatedServices: [
      { title: "AI Integration", slug: "ai-integration", description: "Enterprise AI integrations." },
      { title: "Security Reviews", slug: "security-reviews", description: "Full-stack security audits." }
    ],
    seoTitle: "AI Evaluation, Safety & Guardrails Services | Code Rockers",
    seoDescription: "Automated AI evaluation, red-teaming, prompt injection defense, and safety guardrails engineered by Code Rockers."
  },
  {
    id: "computer-vision",
    title: "Computer Vision",
    slug: "computer-vision",
    category: "Artificial Intelligence",
    categorySlug: "artificial-intelligence",
    shortDescription: "Develop computer vision capabilities for image recognition, visual inspection, and document workflows.",
    heroTitle: "Computer Vision for Automated Visual Inspection and Image Intelligence",
    heroDescription: "We engineer computer vision models and edge-inference pipelines for automated defect detection, object classification, spatial measurement, and visual workflow verification.",
    iconName: "Eye",
    featured: false,
    challenges: [
      "High labor costs and fatigue-induced errors in manual visual quality inspections",
      "Difficulty running heavy vision models with acceptable latency at the network edge",
      "Scarcity of labeled training images for niche industrial defect categories",
      "Environmental variability (lighting changes, camera angles) degrading model accuracy"
    ],
    whatWeOffer: [
      "Custom object detection, segmentation, and classification models (YOLO, Segment Anything)",
      "Edge-optimized inference deployment on NVIDIA Jetson and mobile devices (TensorRT, ONNX)",
      "Synthetic data generation and data augmentation pipelines for rare defects",
      "Real-time video stream processing and anomaly alerting",
      "Camera calibration and optical inspection software development"
    ],
    deliverables: [
      "Trained computer vision models packaged in optimized container runtimes",
      "Edge deployment scripts with hardware acceleration (CUDA/TensorRT)",
      "Web-based annotation and dataset management dashboard",
      "Real-time visual monitoring and alert dispatch interface"
    ],
    technologies: ["PyTorch", "OpenCV", "YOLOv8/v11", "ONNX / TensorRT", "Python", "NVIDIA Jetson / Cloud GPU"],
    useCases: [
      "Manufacturing lines automatically detecting surface defects on assembly parts",
      "Retail shelf analytics monitoring inventory stock levels and item placement",
      "Construction sites tracking PPE compliance and hazardous zone infractions"
    ],
    process: [
      { step: "01", title: "Data Collection & Annotation", description: "Capture operational video footage and build high-precision bounding box annotations." },
      { step: "02", title: "Model Training & Tuning", description: "Train vision architectures with transfer learning and synthetic augmentations." },
      { step: "03", title: "Edge Optimization", description: "Quantize models (FP16/INT8) to achieve sub-50ms inference on target hardware." },
      { step: "04", title: "Field Deployment", description: "Deploy cameras, install edge appliances, and integrate with facility alert systems." }
    ],
    faqs: [
      {
        question: "Can these models run on-premise without an active internet connection?",
        answer: "Yes. We package optimized inference runtimes that execute locally on edge appliances (like NVIDIA Jetson or on-premise GPU servers) for zero-latency, private operation."
      }
    ],
    relatedServices: [
      { title: "Document Intelligence", slug: "document-intelligence", description: "Document extraction and OCR." },
      { title: "Cloud & DevOps Infrastructure", slug: "cloud-devops-infrastructure", description: "Scalable GPU hosting." }
    ],
    seoTitle: "Computer Vision & Visual Inspection Services | Code Rockers",
    seoDescription: "Edge and cloud computer vision solutions, defect detection, object recognition, and video analytics by Code Rockers."
  },

  // --- Category D: Cloud and Engineering ---
  {
    id: "cloud-solutions",
    title: "Cloud Solutions",
    slug: "cloud-solutions",
    category: "Cloud and Engineering",
    categorySlug: "cloud-and-engineering",
    shortDescription: "Scalable cloud services that help your applications stay secure, available, and ready for what's next.",
    heroTitle: "Architect, Migrate, and Scale on Modern Cloud Platforms",
    heroDescription: "We design and operate cloud infrastructure on AWS, Google Cloud, and Microsoft Azure that guarantees high uptime, automated scaling, and strict cost controls.",
    iconName: "Cloud",
    featured: true,
    challenges: [
      "Overpriced, unoptimized cloud bills with thousands of dollars wasted each month",
      "Single points of failure causing unexpected downtime during traffic surges",
      "Manual server administration leading to inconsistent configuration drift",
      "Complex compliance requirements (SOC 2, ISO 27001, HIPAA) demanding cloud controls"
    ],
    whatWeOffer: [
      "Multi-cloud and hybrid infrastructure design (AWS, GCP, Azure)",
      "Serverless and containerized microservices orchestration (ECS, EKS, Cloud Run)",
      "Automated horizontal and vertical autoscaling configurations",
      "Cloud FinOps audits uncovering immediate 20% to 45% monthly cost reductions",
      "Disaster recovery planning, multi-region replication, and automated backups"
    ],
    deliverables: [
      "Infrastructure-as-Code repositories (Terraform, Pulumi)",
      "Architecture diagram and disaster recovery runbook",
      "Cloud FinOps cost optimization and rightsizing report",
      "24/7 uptime monitoring and automated incident alerting setup"
    ],
    technologies: ["AWS", "Google Cloud", "Microsoft Azure", "Terraform", "Docker", "Kubernetes", "CloudWatch / Datadog"],
    useCases: [
      "Companies migrating from expensive on-premise hardware to the cloud",
      "High-traffic platforms needing resilience against viral traffic spikes",
      "SaaS ventures needing automated customer environment provisioning"
    ],
    process: [
      { step: "01", title: "Cloud Assessment", description: "Analyze current infrastructure, workload patterns, bottlenecks, and billing statements." },
      { step: "02", title: "Target Architecture", description: "Draft zero-trust cloud topologies with high availability across multiple availability zones." },
      { step: "03", title: "IaC Implementation", description: "Code infrastructure declaratively with Terraform and test in staging." },
      { step: "04", title: "Migration & Cutover", description: "Execute zero-downtime database and DNS cutovers with roll-back contingencies." }
    ],
    faqs: [
      {
        question: "How do you prevent unexpected cloud billing surprises?",
        answer: "We implement hard budget alerts, auto-shutdown for non-production environments, reserved instance rightsizing, and automated anomaly detection."
      }
    ],
    relatedServices: [
      { title: "Cloud Architecture", slug: "cloud-architecture", description: "Resilient systems architecture." },
      { title: "DevOps & CI/CD", slug: "devops-ci-cd", description: "Continuous integration pipelines." }
    ],
    seoTitle: "Cloud Solutions & Migration Services | Code Rockers",
    seoDescription: "Secure, cost-effective cloud solutions on AWS, GCP, and Azure designed for high availability and growth."
  },
  {
    id: "cloud-devops-infrastructure",
    title: "Cloud & DevOps Infrastructure",
    slug: "cloud-devops-infrastructure",
    category: "Cloud and Engineering",
    categorySlug: "cloud-and-engineering",
    shortDescription: "Build and operate secure cloud infrastructure that supports your products and engineering team.",
    heroTitle: "Robust Infrastructure Engineered for Modern Software Teams",
    heroDescription: "We eliminate deployment friction by building automated, observable, and immutable cloud platforms that let your developers ship code with total confidence.",
    iconName: "Server",
    featured: false,
    challenges: [
      "Developers waiting hours for manual deployments and server provisioning",
      "'It works on my machine' syndrome causing frequent production release failures",
      "Lack of centralized log management making debugging production issues painful",
      "Unmanaged access privileges exposing production environments to human error"
    ],
    whatWeOffer: [
      "Immutable infrastructure pipelines with Docker and container registries",
      "Kubernetes cluster setup and GitOps workflows (ArgoCD, Flux)",
      "Centralized observability: metrics, traces, and structured logs (Datadog, Grafana, Loki)",
      "Zero-trust VPC networking, bastion hosts, and secret management (Vault, AWS Secrets Manager)",
      "Automated blue-green and canary deployment strategies"
    ],
    deliverables: [
      "Modular Infrastructure-as-Code repository with staging and prod parity",
      "Centralized observability dashboard with SLA/SLO tracking",
      "Secret management system with automated key rotation",
      "Engineer onboarding runbook for rapid staging environment spin-up"
    ],
    technologies: ["Kubernetes", "Terraform", "Docker", "ArgoCD", "Grafana", "Prometheus", "AWS / GCP"],
    useCases: [
      "Engineering departments scaling from 5 to 50+ developers",
      "Platforms needing SOC 2 compliant environment segmentation",
      "Teams transitioning from bare metal or fragile VPS setups to cloud-native platforms"
    ],
    process: [
      { step: "01", title: "Infrastructure Audit", description: "Evaluate existing environments, deployment cycles, and security posture." },
      { step: "02", title: "GitOps Foundation", description: "Implement declarative cluster configs and automated continuous delivery." },
      { step: "03", title: "Observability Rollout", description: "Instrument application runtimes with OpenTelemetry, metrics, and alerting." },
      { step: "04", title: "Team Enablement", description: "Train in-house engineers on GitOps workflows and self-healing cluster operations." }
    ],
    faqs: [
      {
        question: "Why should we use Infrastructure as Code (Terraform)?",
        answer: "IaC documents your entire architecture in code, ensures staging matches production exactly, eliminates manual human configuration errors, and allows full disaster recovery in minutes."
      }
    ],
    relatedServices: [
      { title: "Cloud Solutions", slug: "cloud-solutions", description: "Cloud migration and strategy." },
      { title: "DevOps & CI/CD", slug: "devops-ci-cd", description: "Build and release automation." }
    ],
    seoTitle: "Cloud & DevOps Infrastructure Engineering | Code Rockers",
    seoDescription: "Build scalable cloud infrastructure, Kubernetes clusters, and GitOps pipelines with Code Rockers."
  },
  {
    id: "cloud-architecture",
    title: "Cloud Architecture",
    slug: "cloud-architecture",
    category: "Cloud and Engineering",
    categorySlug: "cloud-and-engineering",
    shortDescription: "Plan secure, resilient cloud architectures that fit your applications, constraints, and growth plans.",
    heroTitle: "Strategic Cloud Architecture for Mission-Critical Systems",
    heroDescription: "We create battle-tested architectural blueprints tailored to your compliance, latency, data sovereignty, and budgetary requirements before a single dollar is spent on hosting.",
    iconName: "Network",
    featured: false,
    challenges: [
      "Premature microservices architectures introducing unmanageable network complexity",
      "Monolithic databases buckling under concurrent read/write bottlenecks",
      "Data sovereignty and regulatory compliance across international regions",
      "Difficulty choosing the right technologies among hundreds of cloud vendor services"
    ],
    whatWeOffer: [
      "Well-Architected Framework reviews (Security, Reliability, Performance, Cost, Operational Excellence)",
      "Decoupled event-driven architecture design (Kafka, RabbitMQ, SQS/SNS)",
      "Global multi-region and edge-caching topologies",
      "Database sharding, partitioning, and read-replica strategies",
      "Architectural Decision Records (ADRs) establishing technical standards"
    ],
    deliverables: [
      "Detailed architectural blueprint diagrams (C4 model notation)",
      "Technical risk mitigation matrix and scaling roadmap",
      "Vendor service selection and total cost of ownership (TCO) analysis",
      "Disaster recovery and failover architecture specifications"
    ],
    technologies: ["AWS", "GCP", "Apache Kafka", "Redis", "PostgreSQL", "Terraform", "C4 Modeling"],
    useCases: [
      "Startups designing their core product architecture for anticipated scale",
      "Enterprises re-architecting monoliths into maintainable modular services",
      "Firms preparing for strict external technical due diligence"
    ],
    process: [
      { step: "01", title: "Requirements & Constraints", description: "Establish throughput targets, latency SLAs, compliance rules, and budget limits." },
      { step: "02", title: "C4 System Modeling", description: "Map system contexts, containers, components, and code interfaces." },
      { step: "03", title: "Failure Mode Analysis", description: "Simulate service outages, network partitions, and data recovery procedures." },
      { step: "04", title: "Review & Sign-Off", description: "Present executive and engineering teams with detailed implementation blueprints." }
    ],
    faqs: [
      {
        question: "Should our application be a monolith or microservices?",
        answer: "We recommend a well-structured modular monolith for most early and mid-stage products, transitioning to microservices only when distinct domain boundaries and independent scaling demands require it."
      }
    ],
    relatedServices: [
      { title: "Cloud Solutions", slug: "cloud-solutions", description: "Cloud migration and management." },
      { title: "Fractional CTO Leadership", slug: "fractional-cto-leadership", description: "Strategic technology executive leadership." }
    ],
    seoTitle: "Cloud Architecture Design & Consulting | Code Rockers",
    seoDescription: "Battle-tested cloud architecture consulting, Well-Architected reviews, and event-driven distributed system design."
  },
  {
    id: "devops-ci-cd",
    title: "DevOps & CI/CD",
    slug: "devops-ci-cd",
    category: "Cloud and Engineering",
    categorySlug: "cloud-and-engineering",
    shortDescription: "Automate build, test, and release workflows to make software delivery more repeatable.",
    heroTitle: "Continuous Integration and Continuous Deployment That Moves Fast Safely",
    heroDescription: "We engineer lightning-fast CI/CD pipelines that test, build, and deploy your code automatically with every git commit, turning releases into effortless non-events.",
    iconName: "GitMerge",
    featured: false,
    challenges: [
      "Lengthy 45+ minute CI builds delaying developer feedback loops",
      "Manual production releases done late at night out of fear of breaking things",
      "Inconsistent staging environments failing to catch bugs before production",
      "Flaky test suites that developers begin ignoring"
    ],
    whatWeOffer: [
      "Parallelized, cached CI pipelines reducing build times by up to 75%",
      "Automated pull-request preview environments for rapid QA validation",
      "Automated semantic versioning, changelog generation, and package publishing",
      "Zero-downtime deployment pipelines with automated rollback on health check failure",
      "Secret scanning and static code analysis (SAST) embedded in pull requests"
    ],
    deliverables: [
      "Production-ready GitHub Actions or GitLab CI pipeline configurations",
      "Automated preview environment provisioning system",
      "Pipeline speed optimization audit report",
      "Developer deployment guidelines and rollback procedures"
    ],
    technologies: ["GitHub Actions", "GitLab CI", "Docker", "Fastlane", "SonarQube", "Snyk", "AWS / Vercel"],
    useCases: [
      "Engineering teams shipping software multiple times per day",
      "Companies wanting automatic ephemeral preview environments for every PR",
      "Organizations establishing automated compliance checks on code commits"
    ],
    process: [
      { step: "01", title: "Pipeline Profiling", description: "Identify slow build steps, dependency caching bottlenecks, and test bottlenecks." },
      { step: "02", title: "Pipeline Modernization", description: "Re-architect workflows with build caching, parallel job execution, and container reuse." },
      { step: "03", title: "Automated Deployments", description: "Implement blue-green cutover scripts with synthetic monitoring smoke tests." },
      { step: "04", title: "Guardrails & Metrics", description: "Track DORA metrics (Deployment Frequency, Lead Time for Changes, MTTR)." }
    ],
    faqs: [
      {
        question: "Can we deploy multiple times per day without risking downtime?",
        answer: "Yes. With blue-green deployments and automated health checks, new versions are verified before receiving production traffic. If any health probe fails, traffic remains on the old version with zero downtime."
      }
    ],
    relatedServices: [
      { title: "Engineering Operations", slug: "engineering-operations", description: "Improve developer workflows." },
      { title: "Cloud & DevOps Infrastructure", slug: "cloud-devops-infrastructure", description: "Underlying cloud infrastructure." }
    ],
    seoTitle: "DevOps & CI/CD Automation Services | Code Rockers",
    seoDescription: "High-speed CI/CD pipelines, automated testing, preview environments, and zero-downtime releases by Code Rockers."
  },
  {
    id: "engineering-operations",
    title: "Engineering Operations",
    slug: "engineering-operations",
    category: "Cloud and Engineering",
    categorySlug: "cloud-and-engineering",
    shortDescription: "Improve the systems, practices, and feedback loops that make software delivery more predictable.",
    heroTitle: "Optimize Engineering Velocity, Standards, and Developer Experience",
    heroDescription: "We partner with engineering leaders to eliminate friction in the software development lifecycle, establish clear quality standards, and track measurable delivery metrics.",
    iconName: "Terminal",
    featured: false,
    challenges: [
      "Unpredictable sprint velocity and constant missed project deadlines",
      "Lack of shared coding standards causing endless debate during code reviews",
      "New engineers taking weeks to set up their local development environments",
      "Poor visibility into team bottlenecks and technical debt accumulation"
    ],
    whatWeOffer: [
      "DORA metric tracking implementation (Lead Time, Deployment Frequency, Change Failure Rate, MTTR)",
      "Standardized local developer tooling (Dev Containers, Makefile/Taskfile, monorepo tooling)",
      "Code review guidelines and automated linting/formatting rules (Biome, ESLint, Prettier)",
      "Incident management post-mortem frameworks and blameless retrospective processes",
      "Technical documentation systems (Docs-as-code, ADR frameworks)"
    ],
    deliverables: [
      "Engineering handbook documenting standards, onboarding, and workflows",
      "One-command local development environment configuration",
      "DORA metrics dashboard and weekly velocity reporting",
      "Standardized Incident Response and On-Call runbooks"
    ],
    technologies: ["Dev Containers", "Turborepo", "GitHub Actions", "Linear / Jira", "Notion / Markdown", "Datadog"],
    useCases: [
      "Fast-growing engineering teams onboarding dozens of new hires",
      "Startups preparing their technical operations for Series A/B scaling",
      "Enterprises looking to modernize legacy waterfall workflows into agile cadences"
    ],
    process: [
      { step: "01", title: "Workflow Assessment", description: "Interview engineers to map out bottlenecks from ticket assignment to production." },
      { step: "02", title: "Standardization", description: "Align coding conventions, monorepo architectures, and review SLAs." },
      { step: "03", title: "Automation", description: "Automate changelogs, staging environment spin-ups, and PR checks." },
      { step: "04", title: "Metrics & Review", description: "Review DORA metrics and team satisfaction scores in bi-weekly retrospectives." }
    ],
    faqs: [
      {
        question: "How do you measure whether engineering operations are improving?",
        answer: "We focus on industry-standard DORA metrics: tracking whether code moves from commit to production faster, release frequency increases, and change failure rates decline."
      }
    ],
    relatedServices: [
      { title: "DevOps & CI/CD", slug: "devops-ci-cd", description: "Deployment pipelines." },
      { title: "Fractional CTO Leadership", slug: "fractional-cto-leadership", description: "Strategic executive guidance." }
    ],
    seoTitle: "Engineering Operations & Developer Experience | Code Rockers",
    seoDescription: "Streamline developer workflows, standardize code quality, and boost engineering velocity with Code Rockers."
  },
  {
    id: "security-reviews",
    title: "Security Reviews",
    slug: "security-reviews",
    category: "Cloud and Engineering",
    categorySlug: "cloud-and-engineering",
    shortDescription: "Review application design and code for security risks, then prioritize practical remediation steps.",
    heroTitle: "Comprehensive Application and Infrastructure Security Audits",
    heroDescription: "We identify vulnerabilities in your code, APIs, authentication mechanisms, and cloud configurations before malicious actors do, delivering actionable remediation steps.",
    iconName: "ShieldAlert",
    featured: false,
    challenges: [
      "Undiscovered vulnerabilities exposing sensitive customer data to breach risks",
      "Failing enterprise vendor security questionnaires (SIG, CAIQ, VSA)",
      "Outdated open-source dependencies carrying known critical CVEs",
      "Misconfigured cloud storage buckets and overly permissive IAM roles"
    ],
    whatWeOffer: [
      "OWASP Top 10 code audits (SQLi, XSS, CSRF, SSRF, IDOR vulnerabilities)",
      "Authentication and authorization review (JWT hygiene, session expiration, RBAC enforcement)",
      "Dependency supply chain scanning and automated Software Bill of Materials (SBOM)",
      "Cloud IAM and security group configuration audits (AWS, GCP, Azure)",
      "Prioritized remediation roadmap categorizing findings by severity and impact"
    ],
    deliverables: [
      "Executive security summary suitable for boards and enterprise clients",
      "Detailed technical vulnerability report with reproduction steps and code snippets",
      "Specific pull requests resolving high-priority vulnerabilities",
      "Security questionnaire response assistance for enterprise sales deals"
    ],
    technologies: ["OWASP ZAP", "Snyk", "Semgrep", "Trivy", "AWS Security Hub", "Burp Suite"],
    useCases: [
      "B2B SaaS companies closing enterprise accounts requiring security proof",
      "Startups preparing for SOC 2 Type I or Type II certification audits",
      "Organizations recovering from or preventing digital security incidents"
    ],
    process: [
      { step: "01", title: "Threat Modeling", description: "Map out application attack surfaces, data entry points, and high-value data stores." },
      { step: "02", title: "Static & Dynamic Analysis", description: "Run automated SAST/DAST scans combined with deep manual code inspection." },
      { step: "03", title: "Cloud Configuration Audit", description: "Verify network segmentation, encryption at rest, and least-privilege IAM policies." },
      { step: "04", title: "Remediation & Re-Test", description: "Collaborate with your team to patch vulnerabilities and re-test to confirm closure." }
    ],
    faqs: [
      {
        question: "Do you provide guarantees that an application is 100% unhackable?",
        answer: "No reputable security firm guarantees 100% invulnerability. We systematically reduce your attack surface, eliminate known vulnerabilities, and help you adopt industry best practices to make attacks economically unfeasible."
      }
    ],
    relatedServices: [
      { title: "Web Applications", slug: "web-applications", description: "Secure web application development." },
      { title: "Cloud Architecture", slug: "cloud-architecture", description: "Zero-trust cloud network architecture." }
    ],
    seoTitle: "Application Security Reviews & Code Audits | Code Rockers",
    seoDescription: "Identify and remediate software vulnerabilities, API flaws, and cloud misconfigurations with Code Rockers security reviews."
  },

  // --- Category E: Design and Data ---
  {
    id: "ui-ux-design-systems",
    title: "UI/UX Design Systems",
    slug: "ui-ux-design-systems",
    category: "Design and Data",
    categorySlug: "design-and-data",
    shortDescription: "Create accessible user experiences and reusable interface systems for consistent digital products.",
    heroTitle: "Scalable UI/UX Design Systems That Unify Your Digital Products",
    heroDescription: "We design beautiful, accessible, and modular design systems that bridge the gap between Figma and production code, ensuring consistent experiences across every user touchpoint.",
    iconName: "Palette",
    featured: false,
    challenges: [
      "Inconsistent UI elements, buttons, and colors scattered across different products",
      "Engineers wasting time rebuilding the same modal and form components repeatedly",
      "Figma designs diverging from what actually gets built in production code",
      "Poor accessibility (contrast, keyboard focus) alienating users and risking lawsuits"
    ],
    whatWeOffer: [
      "Complete design token taxonomy (color, typography, elevation, spacing, radii)",
      "Accessible Figma component library with variants and auto-layout",
      "Production-ready React/Tailwind component implementations (Storybook documented)",
      "Strict WCAG 2.2 AA accessibility compliance testing",
      "Design-to-code contribution guidelines and versioning workflows"
    ],
    deliverables: [
      "Comprehensive Figma design system library linked to shared team assets",
      "Storybook component catalog with interactive props and documentation",
      "Ready-to-use npm package or internal component repository",
      "Accessibility audit report and brand guideline documentation"
    ],
    technologies: ["Figma", "React", "TypeScript", "Tailwind CSS", "Storybook", "Radix UI", "Axe Accessibility"],
    useCases: [
      "Companies with multiple web properties needing unified visual consistency",
      "SaaS platforms preparing for major feature expansions",
      "Product teams wanting to accelerate sprint velocity by reusing verified components"
    ],
    process: [
      { step: "01", title: "Visual & Component Audit", description: "Inventory existing screens to catalog inconsistencies, duplicates, and edge cases." },
      { step: "02", title: "Design Token Architecture", description: "Establish semantic tokens for themes, dark modes, spacing, and typography scales." },
      { step: "03", title: "Component Construction", description: "Design in Figma and simultaneously code corresponding React components." },
      { step: "04", title: "Documentation & Rollout", description: "Publish Storybook documentation and train product squads on component consumption." }
    ],
    faqs: [
      {
        question: "How does a design system speed up feature development?",
        answer: "By providing pre-tested, accessible components for buttons, inputs, tables, and dialogs, engineering teams can build new screens up to 3x faster without re-inventing basic UI elements."
      }
    ],
    relatedServices: [
      { title: "Website Development", slug: "website-development", description: "Responsive marketing websites." },
      { title: "Web Applications", slug: "web-applications", description: "Feature-rich web applications." }
    ],
    seoTitle: "UI/UX Design Systems & Component Libraries | Code Rockers",
    seoDescription: "Create cohesive, accessible, and scalable design systems in Figma and React with Code Rockers."
  },
  {
    id: "data-architecture",
    title: "Data Architecture",
    slug: "data-architecture",
    category: "Design and Data",
    categorySlug: "design-and-data",
    shortDescription: "Design dependable data structures and flows that support products, reporting, and decision-making.",
    heroTitle: "Scalable Data Pipelines and Schemas That Power Real-Time Decisions",
    heroDescription: "We architect clean, reliable data pipelines, modern analytical data warehouses, and transactional database schemas that keep your reporting accurate and your products fast.",
    iconName: "Database",
    featured: false,
    challenges: [
      "Data trapped in application silos with no single source of truth",
      "Heavy analytical queries bringing production transactional databases to a crawl",
      "Inconsistent data schemas leading to conflicting revenue and customer reports",
      "Slow reporting queries delaying executive business decisions"
    ],
    whatWeOffer: [
      "Transactional schema design and normalization (PostgreSQL, MySQL)",
      "Analytical data warehouse modeling (Snowflake, BigQuery, ClickHouse)",
      "ELT/ETL pipeline engineering (dbt, Airflow, Fivetran)",
      "Real-time event streaming and CDC (Change Data Capture) with Debezium / Kafka",
      "Data quality validation and automated anomaly testing"
    ],
    deliverables: [
      "Optimized database schemas and migration scripts",
      "Automated data pipeline workflows with monitoring",
      "Consolidated analytical data warehouse models",
      "Data dictionary documenting metrics, business logic, and definitions"
    ],
    technologies: ["PostgreSQL", "ClickHouse", "BigQuery", "Snowflake", "dbt", "Apache Kafka", "Python"],
    useCases: [
      "SaaS platforms needing isolated customer analytics without taxing production DBs",
      "E-commerce brands consolidating multichannel sales, inventory, and ad data",
      "Enterprises establishing a unified business intelligence data warehouse"
    ],
    process: [
      { step: "01", title: "Data Discovery", description: "Catalog source databases, event streams, third-party APIs, and analytical needs." },
      { step: "02", title: "Target Data Model", description: "Design dimensional star/snowflake schemas and establish metric definitions." },
      { step: "03", title: "Pipeline Build", description: "Develop resilient extraction, transformation, and loading pipelines." },
      { step: "04", title: "Validation & Handover", description: "Reconcile reporting outputs against source ledgers and configure automated alerts." }
    ],
    faqs: [
      {
        question: "How do you keep analytics queries from slowing down the live web app?",
        answer: "We replicate data asynchronously to a dedicated analytical warehouse or read-replica (such as BigQuery or ClickHouse), so heavy aggregations never touch your primary transactional database."
      }
    ],
    relatedServices: [
      { title: "Web Applications", slug: "web-applications", description: "Interactive business applications." },
      { title: "AI Integration", slug: "ai-integration", description: "Leverage data for predictive models." }
    ],
    seoTitle: "Data Architecture & Pipeline Engineering | Code Rockers",
    seoDescription: "Modern data architecture, analytical warehouses, ETL pipelines, and transactional database schemas by Code Rockers."
  },

  // --- Category F: Business and Technical Advisory ---
  {
    id: "it-company-setup",
    title: "IT Company Setup Support",
    slug: "it-company-setup",
    category: "Business and Technical Advisory",
    categorySlug: "business-and-technical-advisory",
    shortDescription: "A helping hand with the technology, online presence, and business tools needed to get your IT company started.",
    heroTitle: "Launch Your Technology Business With the Right Infrastructure from Day One",
    heroDescription: "We guide founders through the critical technical decisions of launching an IT company: corporate domain setup, secure workspace configurations, brand websites, client tooling, and development environments.",
    iconName: "Briefcase",
    featured: false,
    challenges: [
      "Overwhelm choosing among hundreds of business software tools and subscriptions",
      "Insecure email and identity setups making the young firm look unprofessional",
      "Lack of standardized contract and project management tooling for client delivery",
      "Slow start due to fragmented development environments"
    ],
    whatWeOffer: [
      "Google Workspace / Microsoft 365 setup with SPF, DKIM, and DMARC email authentication",
      "Professional corporate website design and SEO launch configuration",
      "Client relationship and project delivery infrastructure (CRM, Notion, Jira/Linear)",
      "Standard developer tooling setups (GitHub Organization, 1Password, CI/CD templates)",
      "Technical advisory on service pricing, delivery workflows, and proposal architecture"
    ],
    deliverables: [
      "Fully operational corporate IT infrastructure with verified email deliverability",
      "Turnkey corporate website and contact generation engine",
      "Configured team workspace and client project delivery templates",
      "Standard technical operations guide for onboarding staff"
    ],
    technologies: ["Google Workspace", "GitHub", "1Password", "Notion", "Next.js", "Stripe"],
    useCases: [
      "Software engineers leaving agencies to start their own development firm",
      "IT consulting practices formalizing their digital operations",
      "New technology startups needing complete digital back-office setup"
    ],
    process: [
      { step: "01", title: "Needs Assessment", description: "Define your company's service offerings, team size, and immediate tooling requirements." },
      { step: "02", title: "Domain & Identity Setup", description: "Configure custom domains, secure email DNS records, and centralized password vaults." },
      { step: "03", title: "Website & Brand Launch", description: "Deploy an authoritative corporate website with contact capture forms." },
      { step: "04", title: "Workflow Handover", description: "Provide documented SOPs for client onboarding, code management, and billing." }
    ],
    faqs: [
      {
        question: "Do you provide legal or accounting advice?",
        answer: "No. We focus purely on the technical, digital, and operational infrastructure required to get your technology company running smoothly."
      }
    ],
    relatedServices: [
      { title: "Website Development", slug: "website-development", description: "High-impact company websites." },
      { title: "Fractional CTO Leadership", slug: "fractional-cto-leadership", description: "Executive technical strategy." }
    ],
    seoTitle: "IT Company Setup & Technical Advisory | Code Rockers",
    seoDescription: "Launch your technology business with verified digital infrastructure, corporate web presence, and developer tooling."
  },
  {
    id: "fractional-cto-leadership",
    title: "Fractional CTO Leadership",
    slug: "fractional-cto-leadership",
    category: "Business and Technical Advisory",
    categorySlug: "business-and-technical-advisory",
    shortDescription: "Get strategic technical guidance and hands-on leadership without a full-time executive hire.",
    heroTitle: "Executive Technology Guidance to Scale Your Product and Engineering",
    heroDescription: "Get veteran technology leadership on a flexible basis. We help non-technical founders and growing businesses make sound architectural decisions, hire engineers, and pass investor due diligence.",
    iconName: "Compass",
    featured: false,
    challenges: [
      "Cost of hiring a full-time experienced CTO ($250k+ plus equity) before product-market fit",
      "Lack of technical expertise to evaluate engineering candidates or agencies",
      "Costly architectural mistakes made by well-meaning junior developers",
      "Difficulty translating executive business goals into actionable engineering roadmaps"
    ],
    whatWeOffer: [
      "Technology roadmap creation aligned with core business milestones",
      "Technical candidate interviewing, vetting, and hiring process design",
      "Vendor and agency contract evaluation and technical oversight",
      "Architecture and code review governance",
      "Investor pitch preparation and technical due diligence audit readiness"
    ],
    deliverables: [
      "Written technology roadmap with quarterly milestones and budget estimates",
      "Structured engineering hiring rubrics and interview assessments",
      "Monthly architectural health and technical debt scorecards",
      "Direct attendance at executive strategy meetings and board sessions"
    ],
    technologies: ["Strategic Architecture", "Engineering Management", "Due Diligence", "Roadmapping", "Cloud Strategy"],
    useCases: [
      "Non-technical founders building their first venture-backed software product",
      "SMBs executing a digital transformation without an in-house engineering executive",
      "Growth-stage companies bridging the gap while searching for a permanent executive"
    ],
    process: [
      { step: "01", title: "Strategic Audit", description: "Review current team capability, technology choices, technical debt, and business goals." },
      { step: "02", title: "Roadmap Alignment", description: "Align the engineering queue directly with commercial revenue and product goals." },
      { step: "03", title: "Governance Cadence", description: "Lead sprint planning, architectural reviews, and 1-on-1s with lead engineers." },
      { step: "04", title: "Executive Reporting", description: "Provide clear, non-jargon updates to the CEO and board of directors." }
    ],
    faqs: [
      {
        question: "How many hours per week does a Fractional CTO provide?",
        answer: "Engagements typically range from 5 to 20 hours per week depending on whether you need high-level strategic advisory or hands-on team leadership."
      }
    ],
    relatedServices: [
      { title: "Cloud Architecture", slug: "cloud-architecture", description: "System design and cloud reviews." },
      { title: "Engineering Operations", slug: "engineering-operations", description: "Developer productivity and standards." }
    ],
    seoTitle: "Fractional CTO Leadership & Advisory | Code Rockers",
    seoDescription: "Strategic technology executive leadership, architectural governance, and engineering roadmap consulting."
  },
  {
    id: "workflow-automation",
    title: "Workflow Automation",
    slug: "workflow-automation",
    category: "Business and Technical Advisory",
    categorySlug: "business-and-technical-advisory",
    shortDescription: "Streamline recurring business processes by connecting the tools and steps your team already uses.",
    heroTitle: "Connect Your Business Tools and Automate Repetitive Admin Tasks",
    heroDescription: "We build reliable data bridges between your CRM, accounting software, communication channels, and internal databases so your team never has to retype the same data twice.",
    iconName: "Sliders",
    featured: false,
    challenges: [
      "Data silos forcing employees to manually update 4 different software systems",
      "Missed sales follow-ups because leads aren't piped immediately to sales reps",
      "Human errors during invoice creation and client onboarding steps",
      "Inability to get real-time cross-departmental status updates"
    ],
    whatWeOffer: [
      "Custom bi-directional webhook and API integrations",
      "Integration of tools like Make, Zapier, n8n, and custom Node.js workers",
      "Automated lead enrichment, scoring, and instant notification dispatch",
      "Automated client onboarding: contract generation, invoicing, and folder creation",
      "Fault-tolerant retry logic ensuring zero data loss during network hiccups"
    ],
    deliverables: [
      "Fully operational automated workflow pipelines across your software stack",
      "Visual workflow diagram and step-by-step logic documentation",
      "Automated error monitoring channel in Slack or email",
      "Quarterly maintenance and endpoint schema update reviews"
    ],
    technologies: ["Node.js", "n8n", "Make / Zapier", "Webhooks", "Stripe API", "Slack API", "HubSpot / Salesforce"],
    useCases: [
      "Sales teams automatically creating deals, folders, and contracts upon form submission",
      "Operations teams synchronizing e-commerce orders with warehouse fulfillment systems",
      "Billing departments generating automated invoice reminders and reconciliation reports"
    ],
    process: [
      { step: "01", title: "Process Mapping", description: "Document the exact trigger events, decision branches, and destination apps." },
      { step: "02", title: "Pipeline Construction", description: "Build automated scenarios with data transformation and validation checks." },
      { step: "03", title: "Sandbox Testing", description: "Simulate edge cases, duplicate entries, and API downtime to verify error handlers." },
      { step: "04", title: "Live Activation", description: "Turn on automations and monitor real-time execution logs." }
    ],
    faqs: [
      {
        question: "Can we use low-code tools like Make or custom code?",
        answer: "We support both. For simple tool connections, platforms like Make or n8n offer great visual agility. For complex high-volume operations, we engineer bespoke serverless microservices."
      }
    ],
    relatedServices: [
      { title: "AI Smart Automation", slug: "ai-smart-automation", description: "Cognitive AI workflow automation." },
      { title: "Web Applications", slug: "web-applications", description: "Custom business tools." }
    ],
    seoTitle: "Business Workflow Automation Services | Code Rockers",
    seoDescription: "Eliminate repetitive manual tasks. Connect your CRM, billing, and communication tools with automated workflows."
  },
  {
    id: "connect-and-meeting-schedule",
    title: "Connect & Meeting Schedule",
    slug: "connect-and-meeting-schedule",
    category: "Business and Technical Advisory",
    categorySlug: "business-and-technical-advisory",
    shortDescription: "Book a convenient time to meet with our team, talk through your goals, and plan sensible next steps.",
    heroTitle: "Schedule a Direct 30-Minute Strategy Session With Our Engineering Team",
    heroDescription: "Let's review your product plans, technical hurdles, and business goals. No aggressive sales pitches—just practical engineering advice on the best way forward.",
    iconName: "Calendar",
    featured: false,
    challenges: [
      "Wasting weeks on back-and-forth emails trying to align calendars",
      "Uncertainty about the technical feasibility or approximate cost of your project",
      "Need for a non-disclosure agreement (NDA) before sharing proprietary concepts",
      "Difficulty finding technology partners who listen before prescribing solutions"
    ],
    whatWeOffer: [
      "Direct 1-on-1 video consultation with a senior software architect",
      "Honest technical feasibility evaluation and technology stack recommendations",
      "High-level roadmap and timeline estimation for your project",
      "Instant calendar scheduling with automatic timezone synchronization",
      "Pre-meeting NDA execution when sharing confidential materials"
    ],
    deliverables: [
      "30-minute structured strategy session over Google Meet or Zoom",
      "Written meeting summary highlighting discussed recommendations",
      "Preliminary scope estimation and sensible recommended next steps",
      "No-obligation project proposal if you decide to proceed together"
    ],
    technologies: ["Google Meet", "Calendar Integration", "Cal.com / Calendly", "Interactive Booking"],
    useCases: [
      "Founders with a new product concept seeking technical validation",
      "Business owners planning to replace an outdated software system",
      "Product managers needing immediate technical capacity to hit a deadline"
    ],
    process: [
      { step: "01", title: "Pick a Time", description: "Select a date and time slot that fits your schedule using our interactive booking tool." },
      { step: "02", title: "Share Context", description: "Briefly tell us about your project goals and any specific questions you want answered." },
      { step: "03", title: "Video Consultation", description: "Join our video call for an in-depth, candid conversation on technical strategy." },
      { step: "04", title: "Action Plan", description: "Receive a written summary of recommended next steps and architectural advice." }
    ],
    faqs: [
      {
        question: "Is there any cost or commitment for the strategy session?",
        answer: "No. The initial 30-minute consultation is completely complimentary and carries zero obligation to work with us."
      },
      {
        question: "Can we sign an NDA before the call?",
        answer: "Absolutely. Simply mention you require an NDA in the booking notes, and our team will countersign your mutual NDA prior to our meeting."
      }
    ],
    relatedServices: [
      { title: "IT Company Setup Support", slug: "it-company-setup", description: "Infrastructure setup guidance." },
      { title: "Fractional CTO Leadership", slug: "fractional-cto-leadership", description: "Longer-term executive advisory." }
    ],
    seoTitle: "Book a Strategy Meeting With Our Engineers | Code Rockers",
    seoDescription: "Schedule a direct consultation with Code Rockers to discuss software development, AI solutions, or cloud engineering."
  }
];

// Helper functions for services
export function getAllServices(): ServiceItem[] {
  return servicesData;
}

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return servicesData.find((service) => service.slug === slug);
}

export function getFeaturedServices(): ServiceItem[] {
  return servicesData.filter((service) => service.featured);
}

export function getServicesByCategory(): ServiceCategory[] {
  const categoriesMap: { [key: string]: ServiceCategory } = {
    "Web and Product Development": {
      title: "Web and Product Development",
      slug: "web-and-product-development",
      description: "Custom web applications, responsive websites, SaaS platforms, and modern full-stack architectures.",
      services: []
    },
    "Mobile Development": {
      title: "Mobile Development",
      slug: "mobile-development",
      description: "Intuitive iOS and Android apps, cross-platform engineering, and App Store / Google Play approvals.",
      services: []
    },
    "Artificial Intelligence": {
      title: "Artificial Intelligence",
      slug: "artificial-intelligence",
      description: "Generative AI integrations, intelligent workflow automation, RAG pipelines, and autonomous agents.",
      services: []
    },
    "Cloud and Engineering": {
      title: "Cloud and Engineering",
      slug: "cloud-and-engineering",
      description: "Scalable cloud hosting, DevOps CI/CD automation, security reviews, and resilient systems architecture.",
      services: []
    },
    "Design and Data": {
      title: "Design and Data",
      slug: "design-and-data",
      description: "Accessible UI/UX design systems and modern data architecture pipelines.",
      services: []
    },
    "Business and Technical Advisory": {
      title: "Business and Technical Advisory",
      slug: "business-and-technical-advisory",
      description: "Fractional CTO consulting, IT company setup guidance, and workflow integrations.",
      services: []
    }
  };

  servicesData.forEach((service) => {
    if (categoriesMap[service.category]) {
      categoriesMap[service.category].services.push(service);
    }
  });

  return Object.values(categoriesMap);
}
