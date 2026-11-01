import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllProjects } from "@/data/portfolio";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArrowRight, Sparkles, CheckCircle2, ShieldAlert, Cpu } from "lucide-react";

export const metadata: Metadata = {
  title: "Engineering Case Studies & Architectural Deep Dives | Code Rockers",
  description: "Detailed technical case studies and architectural concept reviews showcasing problem solving, modern technology stacks, and engineering outcomes."
};

export default function CaseStudiesPage() {
  const projects = getAllProjects();

  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Case Studies" }]} />
          
          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Technical Deep-Dives</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Engineering Case Studies &amp; Architectural Blueprints
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Step through our technical breakdowns illustrating how we diagnose complex software challenges, architect modular solutions, and execute with disciplined engineering.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-800 leading-relaxed max-w-2xl">
              <span className="font-bold">Disclosure Note:</span> These case studies are technical concept demonstrations developed by Code Rockers to showcase our architecture and problem-solving methodology.
            </div>
          </div>
        </div>
      </div>

      {/* Case Studies Detailed List */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {projects.map((project, idx) => (
          <article
            key={project.id}
            id={project.slug}
            className="rounded-3xl border border-slate-200 bg-white p-8 lg:p-12 shadow-sm space-y-8 scroll-mt-24"
          >
            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b border-slate-100 pb-6">
              <div className="space-y-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-[11px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 font-bold">
                    Case Study 0{idx + 1}
                  </span>
                  <span className="text-xs text-slate-500 font-medium">
                    {project.clientType}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                  {project.title}
                </h2>
                <p className="text-sm font-medium text-blue-600">
                  {project.summary}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                {project.servicesDelivered.map((svc) => (
                  <span key={svc} className="text-xs font-semibold px-3 py-1 rounded-lg bg-slate-100 text-slate-700">
                    {svc}
                  </span>
                ))}
              </div>
            </div>

            {/* Challenge & Solution Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200/80 space-y-3">
                <div className="flex items-center gap-2 text-amber-700">
                  <ShieldAlert className="w-4 h-4" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">The Architectural Challenge</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.challenge}
                </p>
              </div>

              <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-200/80 space-y-3">
                <div className="flex items-center gap-2 text-blue-700">
                  <CheckCircle2 className="w-4 h-4" />
                  <h3 className="text-sm font-bold uppercase tracking-wider">The Engineering Solution</h3>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* Outcome & Key Features */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900 text-white rounded-2xl p-8">
              <div className="lg:col-span-7 space-y-3">
                <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block">
                  Demonstrated Outcome
                </span>
                <p className="text-base text-slate-200 leading-relaxed font-medium">
                  {project.outcome}
                </p>
                <div className="pt-2 flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700">
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
                <Link
                  href="/start-a-project"
                  className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold text-center transition-all shadow-md"
                >
                  Discuss a Similar Architecture
                </Link>
                <Link
                  href="/book-a-meeting"
                  className="px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold text-center border border-slate-700 transition-all"
                >
                  Book 30-Min Strategy Call
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
