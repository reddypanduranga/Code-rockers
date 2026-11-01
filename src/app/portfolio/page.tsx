import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllProjects } from "@/data/portfolio";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArrowRight, Sparkles, Layers, ArrowUpRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Portfolio & Engineering Concepts | Code Rockers",
  description: "Browse our portfolio of software engineering proofs of concept, SaaS architecture references, and web application demonstrations."
};

export default function PortfolioPage() {
  const projects = getAllProjects();

  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Portfolio" }]} />
          
          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Reference Concepts</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Selected Work &amp; Concept Demonstrations
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Explore our architectural demonstrations and reference applications showcasing production engineering standards, modern design systems, and robust cloud configurations.
            </p>
            <div className="mt-4 p-4 rounded-xl bg-amber-50 border border-amber-200/80 text-xs text-amber-800 leading-relaxed max-w-2xl">
              <span className="font-bold">Disclosure Note:</span> In strict accordance with our truthfulness guidelines, these projects represent engineered architectural concepts and technical proofs-of-concept created by our engineering team to demonstrate technical capabilities.
            </div>
          </div>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Banner */}
                <div className={`h-48 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between text-white relative overflow-hidden`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold">
                      Concept Demo
                    </span>
                    <span className="text-xs text-white/90 font-medium">
                      {project.industry}
                    </span>
                  </div>

                  <div className="z-10">
                    <h3 className="text-xl font-black tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>

                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
                </div>

                {/* Body */}
                <div className="p-6 space-y-4">
                  <div className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {project.category}
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>

                  <div className="space-y-2 pt-2">
                    <span className="text-xs font-bold text-slate-900 block">Delivered Capabilities:</span>
                    <ul className="space-y-1.5 text-xs text-slate-600">
                      {project.keyFeatures.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 flex-shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-3">
                    {project.technologies.map((t) => (
                      <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <Link
                  href="/case-studies"
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors pt-4"
                >
                  <span>Review Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/start-a-project"
                  className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors pt-4"
                >
                  Build Similar →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-3xl font-black text-white tracking-tight">
            Have a Specific Software Product in Mind?
          </h3>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            We can architect and engineer an end-to-end prototype or production product tailored to your exact operational requirements.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/start-a-project"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all"
            >
              Start a Project
            </Link>
            <Link
              href="/book-a-meeting"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition-all"
            >
              Schedule Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
