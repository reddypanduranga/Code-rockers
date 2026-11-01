import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllFaqs } from "@/data/faqs";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { Sparkles, ArrowRight, MessageSquareCode } from "lucide-react";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Code Rockers",
  description: "Comprehensive answers to common questions about Code Rockers services, development process, pricing models, timelines, code ownership, and maintenance."
};

export default function FAQPage() {
  const faqs = getAllFaqs();

  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: "FAQs" }]} />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Questions &amp; Answers</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Frequently Asked Questions
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Everything you need to know about partnering with Code Rockers—from pricing models and intellectual property ownership to our engineering standards and post-launch SLAs.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        <Accordion items={faqs} defaultOpenIndex={0} />

        {/* Contact fallback */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center sm:text-left">
            <h3 className="text-xl font-bold text-white">
              Have a question specific to your project?
            </h3>
            <p className="text-xs text-slate-400">
              Our engineering leadership is happy to provide candid answers with zero sales pressure.
            </p>
          </div>
          <Link
            href="/contact"
            className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm flex-shrink-0"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </div>
  );
}
