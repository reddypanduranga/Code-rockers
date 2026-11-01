import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllSolutions, getSolutionBySlug } from "@/data/solutions";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Calendar, Layers } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const solutions = getAllSolutions();
  return solutions.map((solution) => ({
    slug: solution.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    return { title: "Solution Not Found" };
  }

  return {
    title: solution.seoTitle,
    description: solution.seoDescription,
    openGraph: {
      title: solution.seoTitle,
      description: solution.seoDescription,
      type: "article",
      url: `https://coderockers.com/solutions/${solution.slug}`
    }
  };
}

export default async function SolutionDetailPage({ params }: Props) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);

  if (!solution) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Top Banner & Hero */}
      <div className="bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: "Solutions", href: "/solutions" },
              { label: solution.title }
            ]}
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Tailored Business Solution</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {solution.title}
            </h1>
            <p className="text-xl text-blue-600 font-medium">
              {solution.subtitle}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {solution.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/start-a-project"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all shadow-md active:scale-[0.98] text-center"
              >
                Discuss This Solution
              </Link>
              <Link
                href="/book-a-meeting"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 transition-all text-center"
              >
                <Calendar className="w-5 h-5 text-blue-600" />
                <span>Book a Strategy Call</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Sections */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* The Problem & The Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-amber-50/50 border border-amber-200/80 rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">The Business Challenge</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {solution.businessProblem}
            </p>
          </div>

          <div className="bg-blue-50/50 border border-blue-200/80 rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Strategic Approach</h3>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {solution.proposedSolution}
            </p>
          </div>
        </div>

        {/* Recommended Capabilities */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Core Capabilities
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Recommended Capabilities &amp; Architecture
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solution.recommendedCapabilities.map((cap, i) => (
              <div key={i} className="p-5 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800 leading-snug">{cap}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Process */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Delivery Roadmap
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Implementation Process
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solution.process.map((step, idx) => (
              <div key={idx} className="bg-slate-50 border border-slate-200 rounded-2xl p-6 space-y-3">
                <span className="text-2xl font-mono font-black text-blue-600/40">
                  {step.step}
                </span>
                <h4 className="text-lg font-bold text-slate-900">{step.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Relevant Services */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Building Blocks
            </span>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Relevant Technical Services
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {solution.relevantServices.map((svc) => (
              <Link
                key={svc.slug}
                href={`/services/${svc.slug}`}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl border border-slate-200 hover:border-blue-400 bg-white hover:bg-blue-50/50 text-sm font-semibold text-slate-800 hover:text-blue-600 transition-all shadow-2xs"
              >
                <span>{svc.title}</span>
                <ArrowRight className="w-4 h-4 text-blue-600" />
              </Link>
            ))}
          </div>
        </div>

        {/* FAQs */}
        {solution.faqs && solution.faqs.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-200 max-w-4xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-900">
                Frequently Asked About This Solution
              </h3>
            </div>
            <Accordion
              items={solution.faqs.map((f, i) => ({
                id: `sol-faq-${i}`,
                question: f.question,
                answer: f.answer
              }))}
              defaultOpenIndex={0}
            />
          </div>
        )}

        {/* CTA */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-3xl font-black text-white tracking-tight">
            Ready to Implement This Solution?
          </h3>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Let&apos;s evaluate your current architecture and develop a concrete implementation plan.
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
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
