import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Terms and Conditions | Code Rockers",
  description: "Standard terms and conditions governing the use of the Code Rockers website and general consulting engagement principles."
};

export default function TermsAndConditionsPage() {
  return (
    <div className="bg-white">
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Terms &amp; Conditions
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Last Updated: November 1, 2026 · Marked for review prior to commercial contract execution
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <strong>Notice:</strong> These terms govern the public use of this website. Specific software development projects, milestones, intellectual property transfers, and service-level agreements are governed by separate Master Services Agreements (MSAs) signed by both parties.
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Acceptance of Terms</h2>
          <p>
            By accessing the Code Rockers website, submitting an inquiry, or scheduling a strategy meeting, you agree to comply with and be bound by these Terms and Conditions.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. Intellectual Property &amp; Concept Work</h2>
          <p>
            All website design, trademarks, logos, and technical articles on this site belong to Code Rockers. Concept demonstrations and architectural reference projects showcased on this website are illustrative engineering models.
          </p>
          <p>
            For client engagements, 100% of all custom software code, database structures, and design tokens created under executed statements of work transfer entirely to the client upon milestone payment completion.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Disclaimer of Warranties</h2>
          <p>
            Content on this website is provided for informational and educational purposes only. While we strive for absolute technical accuracy, Code Rockers makes no warranties regarding the completeness or real-time accuracy of general site content without a formal technical evaluation.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Limitation of Liability</h2>
          <p>
            In no event shall Code Rockers or its directors be liable for any indirect, incidental, or consequential damages arising from the use of or inability to access this website.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">5. Governing Law</h2>
          <p>
            These terms shall be governed by and construed in accordance with the laws of the jurisdiction specified in executed client agreements, without regard to conflict of law principles.
          </p>
        </section>
      </div>
    </div>
  );
}
