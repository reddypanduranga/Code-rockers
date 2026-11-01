import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CheckCircle2, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Accessibility Statement (WCAG 2.2 AA) | Code Rockers",
  description: "Code Rockers commitment to digital accessibility in accordance with WCAG 2.2 Level AA guidelines."
};

export default function AccessibilityPage() {
  const commitments = [
    {
      title: "Keyboard Operability",
      description: "All interactive elements—including the desktop mega menu, mobile drawer, interactive wizards, and accordion FAQs—are fully navigable via standard keyboard focus (Tab, Enter, Space, Escape)."
    },
    {
      title: "Contrast & Typography",
      description: "We enforce high color contrast ratios exceeding WCAG 2.2 AA standards across all text elements, borders, and buttons against both light and dark backgrounds."
    },
    {
      title: "Semantic HTML & ARIA",
      description: "Pages use descriptive heading hierarchies (H1 to H4), landmarks (<header>, <nav>, <main>, <article>, <footer>), and ARIA attributes for stateful components."
    },
    {
      title: "Reduced Motion Respect",
      description: "Our animations and micro-interactions honor CSS prefers-reduced-motion media queries, disabling non-essential motion for users with vestibular sensitivities."
    }
  ];

  return (
    <div className="bg-white">
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: "Accessibility" }]} />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Inclusive Digital Standards</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Accessibility Statement
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Code Rockers is committed to providing a website and digital software engineering services accessible to the widest possible audience, regardless of ability or technology.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="prose prose-slate max-w-none text-slate-700 space-y-4 text-sm sm:text-base leading-relaxed">
          <p>
            We adhere to the <strong>Web Content Accessibility Guidelines (WCAG) 2.2 Level AA</strong> as our baseline design and engineering standard. Our engineering team routinely verifies screen reader compatibility, automated Axe audits, and keyboard-only flows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {commitments.map((c, i) => (
            <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-slate-50/60 space-y-2">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-base">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                <span>{c.title}</span>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {c.description}
              </p>
            </div>
          ))}
        </div>

        <div className="rounded-2xl border border-slate-200 p-6 space-y-3 bg-white">
          <h3 className="text-base font-bold text-slate-900">
            Feedback and Reporting
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            If you encounter an accessibility barrier on any part of the Code Rockers website, please notify our accessibility team at{" "}
            <a href="mailto:accessibility@coderockers.in" className="text-blue-600 underline">
              accessibility@coderockers.in
            </a>
            . We review all reports and respond with prioritized remediation within 3 business days.
          </p>
        </div>
      </div>
    </div>
  );
}
