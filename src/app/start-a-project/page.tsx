import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { StartProjectWizard } from "@/components/forms/StartProjectWizard";
import { Sparkles, ShieldCheck, CheckCircle2, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Start a Project | Code Rockers",
  description: "Outline your software development project with our multi-step engineering scoping wizard to receive an architectural estimate."
};

export default function StartAProjectPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: "Start a Project" }]} />
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive Scoping Wizard</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Let&apos;s Scope Your Next Software Project
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Complete our structured 4-step wizard below. Our senior engineers will review your requirements, assess technical feasibility, and prepare a concrete proposal.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              100% Confidential
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600" />
              24-Hour Review SLA
            </span>
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-indigo-600" />
              No Obligation
            </span>
          </div>
        </div>
      </div>

      {/* Main Wizard */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StartProjectWizard />
      </div>
    </div>
  );
}
