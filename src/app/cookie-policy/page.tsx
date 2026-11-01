import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Cookie Policy | Code Rockers",
  description: "Learn about the cookies and browser storage technologies used on the Code Rockers website."
};

export default function CookiePolicyPage() {
  return (
    <div className="bg-white">
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: "Cookie Policy" }]} />
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Cookie Policy
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Last Updated: November 1, 2026
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files stored in your web browser that allow websites to recognize your device, remember preferences, and analyze traffic patterns.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. How Code Rockers Uses Cookies</h2>
          <p>
            We adhere to a minimalist tracking philosophy. We only use cookies for:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Strictly Necessary Cookies:</strong> Maintaining form state in multi-step wizards and session security.</li>
            <li><strong>Functional Preferences:</strong> Remembering user interface settings such as navigation drawer state.</li>
            <li><strong>Anonymized Telemetry:</strong> Aggregated Core Web Vitals telemetry to monitor page load speeds without identifying individual visitors.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Managing Cookie Preferences</h2>
          <p>
            You can modify your browser settings to decline or clear cookies at any time. Note that disabling strictly necessary cookies may impact the interactivity of forms and wizards.
          </p>
        </section>
      </div>
    </div>
  );
}
