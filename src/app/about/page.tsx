import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  Code2,
  Compass,
  Eye,
  ShieldCheck,
  CheckCircle2,
  Users,
  Target,
  ArrowRight,
  Sparkles,
  HeartHandshake
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Code Rockers",
  description: "Learn about Code Rockers, our mission, vision, engineering philosophy, and values as a modern software development partner."
};

export default function AboutPage() {
  const values = [
    {
      title: "Pragmatic Engineering",
      description: "We pick proven, scalable technologies that solve business challenges rather than pursuing experimental trends for the sake of novelty.",
      icon: Code2
    },
    {
      title: "Radical Transparency",
      description: "We communicate openly about timelines, trade-offs, and technical debt. No hidden charges, vague updates, or misleading claims.",
      icon: Eye
    },
    {
      title: "Client IP Ownership",
      description: "You own 100% of the custom source code, databases, design assets, and cloud repositories from day one with zero lock-in.",
      icon: ShieldCheck
    },
    {
      title: "Long-Term Partnership",
      description: "We measure our success by the endurance and market traction of the software we build, providing ongoing support as your business scales.",
      icon: HeartHandshake
    }
  ];

  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "About Us" }]} />
          
          <div className="mt-4 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Who We Are</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              We Code. We Create. We Rock.
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Code Rockers is a modern technology partner dedicated to helping ambitious startups, growing small businesses, and forward-looking enterprises build digital products, automate workflows, and scale with confidence.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission */}
          <div className="rounded-3xl bg-blue-50/60 border border-blue-200/80 p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Our Mission</h2>
            </div>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              &quot;Help businesses turn practical ideas into reliable digital products through thoughtful engineering and modern technology.&quot;
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We eliminate technical friction so founders and executives can focus on customer acquisition, market fit, and core business operations while we build the software infrastructure underneath.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-3xl bg-indigo-50/60 border border-indigo-200/80 p-8 sm:p-10 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-indigo-600 text-white flex items-center justify-center">
                <Compass className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">Our Vision</h2>
            </div>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              &quot;Become a trusted technology partner for businesses building their next stage of growth.&quot;
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              We envision a world where high-growth companies can access elite engineering standards, honest architectural guidance, and modern AI capabilities without navigating bloated agency overhead.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="space-y-12">
          <SectionHeading
            eyebrow="OUR FOUNDATIONAL VALUES"
            title="The Principles Guiding Every Project"
            description="Our core values shape how we review pull requests, communicate with founders, and engineer resilient systems."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-blue-300 transition-all">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Technology Philosophy */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 space-y-8">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest">
              Engineering Mindset
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              Our Technology Philosophy
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Great software is measured by its reliability, maintainability, and alignment with business goals—not lines of code or architectural complexity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
            <div className="space-y-2">
              <h4 className="text-base font-bold text-white">Type Safety Everywhere</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We employ strict TypeScript end-to-end to eliminate runtime crashes, document API contracts implicitly, and empower rapid fearless refactoring.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-base font-bold text-white">Modern Monoliths First</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                We advocate for well-structured modular monoliths for early-stage products, avoiding distributed systems microservice overhead until true domain scale requires it.
              </p>
            </div>
            <div className="space-y-2">
              <h4 className="text-base font-bold text-white">Grounded AI Implementations</h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                When implementing AI, we enforce deterministic evaluation test harnesses, private vector retrieval (RAG), and zero-data-retention enterprise privacy guarantees.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center space-y-6 pt-8 border-t border-slate-100">
          <h3 className="text-3xl font-extrabold text-slate-900 tracking-tight">
            Ready to Build With Code Rockers?
          </h3>
          <p className="text-slate-600 text-base max-w-xl mx-auto">
            Schedule a conversation with our engineering team to review your goals and start planning your next product release.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/start-a-project"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md"
            >
              Start a Project
            </Link>
            <Link
              href="/book-a-meeting"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-semibold transition-all"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
