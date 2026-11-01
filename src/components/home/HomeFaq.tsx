import React from "react";
import Link from "next/link";
import { getAllFaqs } from "@/data/faqs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowRight } from "lucide-react";

export const HomeFaq: React.FC = () => {
  const faqs = getAllFaqs().slice(0, 6);

  return (
    <section className="py-24 bg-slate-50 border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Clear Answers to Common Questions"
          description="Everything you need to know about our project engagement model, technology standards, and pricing."
        />

        <div className="mt-14">
          <Accordion items={faqs} defaultOpenIndex={0} />
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-slate-600 mb-3">
            Have a question that isn&apos;t covered here?
          </p>
          <div className="flex items-center justify-center gap-4">
            <Link
              href="/faq"
              className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors"
            >
              <span>View Full FAQ Directory</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <span className="text-slate-300">·</span>
            <Link
              href="/contact"
              className="text-sm font-semibold text-slate-800 hover:text-blue-600 transition-colors"
            >
              Contact Our Engineers
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
