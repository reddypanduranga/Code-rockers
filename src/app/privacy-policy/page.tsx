import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy | Code Rockers",
  description: "Learn how Code Rockers collects, processes, and protects your information when using our website and services."
};

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: "Privacy Policy" }]} />
          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-xs text-slate-500 font-mono">
            Last Updated: November 1, 2026 · Marked for legal review prior to custom commercial modifications
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 prose prose-slate max-w-none space-y-8 text-sm sm:text-base leading-relaxed text-slate-700">
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900">
          <strong>Notice:</strong> This document serves as a baseline privacy policy standard for Code Rockers website visitors. It is maintained transparently to inform users of our data practices and does not constitute formal legal counsel.
        </div>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">1. Information We Collect</h2>
          <p>
            When you visit the Code Rockers website or fill out an inquiry form, we collect information that you voluntarily provide to us, including:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Contact details: Name, business email address, company name, and phone number.</li>
            <li>Project specifications: Product requirements, technology preferences, and budget ranges.</li>
            <li>Technical usage data: Browser type, operating system, IP address, and anonymized page interaction logs collected via performance telemetry.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">2. How We Use Your Information</h2>
          <p>
            We process collected information strictly for the following operational purposes:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Responding to project inquiries and coordinating scheduled strategy consultations.</li>
            <li>Preparing technical proposals, scope estimates, and mutual non-disclosure agreements.</li>
            <li>Maintaining website security, preventing automated spam submissions, and diagnosing server performance issues.</li>
          </ul>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">3. Non-Disclosure &amp; Zero Training Data Sharing</h2>
          <p>
            We do not sell, rent, or monetize your personal or commercial project information. Furthermore, when integrating AI systems for client products, Code Rockers strictly configures enterprise zero-retention API agreements ensuring your data is never used to train third-party foundation models.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">4. Data Retention and Security</h2>
          <p>
            We apply industry-standard technical measures (TLS 1.3 encryption in transit, strict access control, and encrypted database backups) to protect your submissions against unauthorized access or disclosure.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-slate-900">5. Contact Information</h2>
          <p>
            If you have questions regarding this privacy notice or wish to exercise your data rights, please contact our data governance team at{" "}
            <a href="mailto:privacy@coderockers.com" className="text-blue-600 underline">
              privacy@coderockers.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
