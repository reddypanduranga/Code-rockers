export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}

export const globalFaqs: FAQItem[] = [
  {
    id: "services-offered",
    category: "Services",
    question: "What types of services does Code Rockers specialize in?",
    answer: "Code Rockers provides comprehensive technology partnership covering Web and Product Development, Native & Cross-Platform Mobile Apps, Artificial Intelligence Integration, Cloud Solutions and DevOps, UI/UX Design Systems, and Technical Advisory (including Fractional CTO leadership). We handle everything from initial product scoping through architecture, development, deployment, and long-term maintenance."
  },
  {
    id: "project-timelines",
    category: "Timelines & Delivery",
    question: "How long does a typical software development project take?",
    answer: "Timelines vary depending on technical complexity and scope. A focused Minimum Viable Product (MVP) or corporate website typically takes 4 to 8 weeks. Larger custom web applications, multi-tenant SaaS platforms, or deep AI integrations typically require 3 to 6 months of agile sprint delivery. We provide clear milestone timelines during our initial discovery phase."
  },
  {
    id: "pricing-structure",
    category: "Pricing & Billing",
    question: "How does Code Rockers structure project pricing?",
    answer: "We offer both fixed-price milestone contracts (ideal for well-defined scopes such as MVPs, websites, or technical security audits) and dedicated monthly engineering team retainers (ideal for evolving SaaS platforms and ongoing product roadmaps). We maintain complete transparency with detailed scope breakdowns—no surprise fees or hidden charges."
  },
  {
    id: "technologies-used",
    category: "Technology Stack",
    question: "What technologies and frameworks do you build with?",
    answer: "We build primarily on modern, industry-standard technologies: Next.js, React, TypeScript, Node.js, Python, PostgreSQL, Redis, React Native, Tailwind CSS, Docker, and major cloud providers (AWS, Google Cloud, Azure). We choose proven, maintainable technologies that make hiring and scaling straightforward rather than chasing transient experimental frameworks."
  },
  {
    id: "intellectual-property",
    category: "Ownership & IP",
    question: "Who owns the code and intellectual property created during the project?",
    answer: "You do. 100% of all custom source code, database architectures, design files, and documentation created during our engagement belong entirely to your company upon milestone completion. We transfer complete repository access and cloud credentials directly to your team."
  },
  {
    id: "maintenance-support",
    category: "Post-Launch Support",
    question: "Do you offer post-launch maintenance and continuous support?",
    answer: "Yes. Following launch, we provide ongoing maintenance and service level agreements (SLAs) covering uptime monitoring, security patching, dependency upgrades, bug fixes, and continuous feature development so your product remains secure and competitive."
  },
  {
    id: "getting-started",
    category: "Getting Started",
    question: "How do we get started on a project with Code Rockers?",
    answer: "Simply submit our project inquiry form or schedule a direct 30-minute discovery consultation. We will discuss your business objectives, review technical requirements, sign a mutual NDA if requested, and deliver a clear architectural proposal and timeline estimate within a few business days."
  },
  {
    id: "collaboration-communication",
    category: "Process & Communication",
    question: "How does Code Rockers communicate during active projects?",
    answer: "We practice transparent, asynchronous-first collaboration with weekly live sprint reviews. You receive direct access to a shared Slack or Teams channel, weekly recorded video walkthroughs of completed features, staging environment previews, and a transparent project board (Linear/Jira) tracking real-time sprint progress."
  }
];

export function getAllFaqs(): FAQItem[] {
  return globalFaqs;
}
