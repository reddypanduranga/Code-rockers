import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllIndustries, getIndustryBySlug } from "@/data/industries";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArrowRight, CheckCircle2, ShieldAlert, Sparkles, Calendar, Layers, ShieldCheck } from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const industries = getAllIndustries();
  return industries.map((industry) => ({
    slug: industry.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    return { title: "Industry Not Found" };
  }

  return {
    title: industry.seoTitle,
    description: industry.seoDescription,
    openGraph: {
      title: industry.seoTitle,
      description: industry.seoDescription,
      type: "article",
      url: `https://coderockers.in/industries/${industry.slug}`
    }
  };
}

export default async function IndustryDetailPage({ params }: Props) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);

  if (!industry) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: "Industries", href: "/industries" },
              { label: industry.title }
            ]}
          />

          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Sector Domain</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {industry.title}
            </h1>
            <p className="text-xl text-blue-600 font-medium">
              {industry.subtitle}
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              {industry.heroDescription}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link
                href="/start-a-project"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all shadow-md active:scale-[0.98] text-center"
              >
                Discuss a Project in {industry.title}
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Industry Challenges & Software Solutions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Challenges */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Industry-Specific Hurdles</h3>
            </div>
            <ul className="space-y-3 pt-2">
              {industry.businessChallenges.map((ch, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Software Solutions */}
          <div className="bg-blue-50/50 border border-blue-200/80 rounded-2xl p-8 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Possible Software Solutions</h3>
            </div>
            <ul className="space-y-3 pt-2">
              {industry.softwareSolutions.map((sol, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommended Architecture */}
        <div className="space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Technical Standards
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Recommended Architecture &amp; Governance
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.recommendedArchitecture.map((arch, i) => (
              <div key={i} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-2xs flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-sm font-medium text-slate-800 leading-relaxed">{arch}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Case Study Concept Demonstration */}
        {industry.caseStudyHighlight && (
          <div className="rounded-2xl border border-blue-200 bg-blue-50/40 p-8 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold text-blue-700 uppercase tracking-wider">
                Concept Demonstration Spotlight
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">
                Reference Architecture
              </span>
            </div>
            <h4 className="text-xl font-bold text-slate-900">
              {industry.caseStudyHighlight.title}
            </h4>
            <p className="text-sm text-slate-600 leading-relaxed">
              {industry.caseStudyHighlight.description}
            </p>
            <div className="pt-2 text-xs font-semibold text-blue-800">
              Outcome: {industry.caseStudyHighlight.outcome}
            </div>
          </div>
        )}

        {/* Relevant Services */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Capabilities
            </span>
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Related Engineering Services
            </h3>
          </div>
          <div className="flex flex-wrap gap-4">
            {industry.relevantServices.map((svc) => (
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

        {/* Final CTA */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-3xl font-black text-white tracking-tight">
            Building in the {industry.title} Sector?
          </h3>
          <p className="text-slate-300 text-base max-w-xl mx-auto">
            Schedule a conversation with our software engineers to review your domain requirements and evaluate feasibility.
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
              Book Strategy Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
