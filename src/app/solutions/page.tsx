import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllSolutions } from "@/data/solutions";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Tailored Business Solutions | Code Rockers",
  description: "Outcome-driven software solutions designed around key business challenges: startups, digital transformation, AI, SaaS, automation, and enterprise websites."
};

export default function SolutionsPage() {
  const solutions = getAllSolutions();

  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Solutions" }]} />
          
          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Business-Aligned Capabilities</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Software Solutions Engineered Around Your Business Objectives
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We package engineering services into comprehensive solutions designed to address specific commercial milestones: launching an MVP, retiring legacy spreadsheets, or scaling SaaS infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((sol) => (
            <div
              key={sol.slug}
              className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-blue-50 text-blue-700 font-semibold">
                  /solutions/{sol.slug}
                </span>

                <h2 className="text-2xl font-bold text-slate-900">
                  {sol.title}
                </h2>
                <p className="text-sm font-medium text-blue-600">
                  {sol.subtitle}
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {sol.heroDescription}
                </p>

                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                    Key Capabilities:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {sol.recommendedCapabilities.slice(0, 3).map((cap, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 rounded-md bg-slate-100 text-slate-700">
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                <Link
                  href={`/solutions/${sol.slug}`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Solution Framework</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
