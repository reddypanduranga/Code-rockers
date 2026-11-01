import React from "react";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Globe, AppWindow, Smartphone, Sparkles, Server, SlidersHorizontal, ArrowUpRight } from "lucide-react";

export const WhatWeBuild: React.FC = () => {
  const categories = [
    {
      title: "Business Websites",
      description: "Editorial, high-performance corporate web platforms that turn visitors into qualified leads.",
      icon: Globe,
      link: "/solutions/business-websites",
      color: "from-blue-500/10 to-indigo-500/10 text-blue-600 border-blue-200/60",
      tag: "Conversion & Speed"
    },
    {
      title: "Custom Web Applications",
      description: "Complex transactional software, client portals, and real-time operational platforms.",
      icon: AppWindow,
      link: "/solutions/internal-business-tools",
      color: "from-indigo-500/10 to-purple-500/10 text-indigo-600 border-indigo-200/60",
      tag: "Zero-Latency"
    },
    {
      title: "Mobile Applications",
      description: "Intuitive iOS and Android apps with offline caching, hardware integration, and store compliance.",
      icon: Smartphone,
      link: "/services/mobile-applications",
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 border-emerald-200/60",
      tag: "iOS & Android"
    },
    {
      title: "AI-Powered Products",
      description: "Domain-specific AI applications, RAG pipelines, and automated intelligence engines.",
      icon: Sparkles,
      link: "/solutions/ai-business-solutions",
      color: "from-purple-500/10 to-pink-500/10 text-purple-600 border-purple-200/60",
      tag: "RAG & LLMs"
    },
    {
      title: "SaaS Platforms",
      description: "Multi-tenant software with automated Stripe billing, tenant isolation, and team management.",
      icon: Server,
      link: "/solutions/saas-solutions",
      color: "from-cyan-500/10 to-blue-500/10 text-cyan-600 border-cyan-200/60",
      tag: "Multi-Tenant"
    },
    {
      title: "Internal Business Tools",
      description: "Bespoke administrative dashboards, approval systems, and automated ERP bridges.",
      icon: SlidersHorizontal,
      link: "/solutions/business-automation",
      color: "from-amber-500/10 to-orange-500/10 text-amber-600 border-amber-200/60",
      tag: "Automated Ops"
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-dark opacity-50 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="PRODUCT DISCIPLINES"
          title="What We Build"
          description="We specialize in six core software product formats, each engineered with tailored architectures to match specific operational requirements."
          isDark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                href={cat.link}
                className="group relative rounded-2xl bg-slate-800/80 border border-slate-700/80 p-8 hover:bg-slate-800 hover:border-slate-600 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-700/60 flex items-center justify-center text-blue-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-slate-700 text-slate-300 border border-slate-600">
                      {cat.tag}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed mb-6">
                    {cat.description}
                  </p>
                </div>

                <div className="flex items-center text-xs font-semibold text-blue-400 group-hover:text-blue-300 transition-colors">
                  <span>Learn more</span>
                  <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
