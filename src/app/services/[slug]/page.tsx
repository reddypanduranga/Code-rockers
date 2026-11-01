import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllServices, getServiceBySlug } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Accordion } from "@/components/ui/Accordion";
import {
  ArrowRight,
  CheckCircle2,
  Calendar,
  Layers,
  Sparkles,
  ShieldAlert,
  ArrowUpRight,
  Cpu,
  Terminal,
  Workflow
} from "lucide-react";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const services = getAllServices();
  return services.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {
      title: "Service Not Found"
    };
  }

  return {
    title: service.seoTitle,
    description: service.seoDescription,
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      type: "article",
      url: `https://coderockers.in/services/${service.slug}`
    }
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="bg-white">
      {/* 1 & 2: Breadcrumb & Hero */}
      <div className="bg-gradient-to-b from-slate-50 via-white to-white border-b border-slate-100 pt-8 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { label: "Services", href: "/services" },
              { label: service.category, href: `/services#${service.categorySlug}` },
              { label: service.title }
            ]}
          />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mt-6">
            {/* Left Hero Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{service.category}</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                {service.heroTitle}
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                {service.heroDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link
                  href="/start-a-project"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all shadow-md shadow-blue-500/20 active:scale-[0.98]"
                >
                  <span>Discuss Your Project</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>

                <Link
                  href="/book-a-meeting"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 hover:border-slate-300 transition-all shadow-xs"
                >
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <span>Book a Consultation</span>
                </Link>
              </div>
            </div>

            {/* Right: Technical Interface Mockup / Abstract Visual */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 text-white shadow-2xl space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-mono text-slate-400">
                    spec::{service.slug}.ts
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-950 text-blue-400 border border-blue-800">
                    Production Ready
                  </span>
                </div>

                <div className="space-y-3 pt-2 text-xs font-mono text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700">
                    <p className="text-slate-400 text-[10px] uppercase font-semibold">Primary Architecture</p>
                    <p className="text-white font-bold text-sm mt-0.5">{service.title}</p>
                    <p className="text-slate-400 text-xs mt-1">Modular · Resilient · Cloud Native</p>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-[11px]">
                    <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60">
                      <span className="text-slate-400 block text-[10px]">Security Standard</span>
                      <span className="text-emerald-400 font-bold">OWASP Top 10</span>
                    </div>
                    <div className="bg-slate-800/50 p-2.5 rounded-lg border border-slate-700/60">
                      <span className="text-slate-400 block text-[10px]">Codebase Ownership</span>
                      <span className="text-blue-400 font-bold">100% Client IP</span>
                    </div>
                  </div>
                </div>

                <div className="pt-2">
                  <span className="text-[10px] uppercase tracking-wider text-slate-400 block mb-2 font-mono">
                    Core Technologies
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {service.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-200 border border-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {/* Business Challenges & What We Offer */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Challenges */}
          <div className="bg-slate-50 border border-slate-200/90 rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">The Problem</span>
                <h3 className="text-xl font-bold text-slate-900">Challenges This Solves</h3>
              </div>
            </div>
            <ul className="space-y-3.5">
              {service.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                  <span>{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* What We Offer */}
          <div className="bg-blue-50/50 border border-blue-200/80 rounded-2xl p-8 space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-sm">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Our Solution</span>
                <h3 className="text-xl font-bold text-slate-900">What Code Rockers Offers</h3>
              </div>
            </div>
            <ul className="space-y-3.5">
              {service.whatWeOffer.map((offer, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                  <span>{offer}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Deliverables & Technologies */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Key Deliverables
            </h3>
            <p className="text-sm text-slate-600">
              Clear, concrete artifacts handed over to your team upon milestone completion.
            </p>
            <div className="space-y-3 pt-2">
              {service.deliverables.map((del, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-200 bg-white shadow-2xs flex items-center gap-3 text-sm font-medium text-slate-800">
                  <span className="w-6 h-6 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center text-xs font-bold flex-shrink-0">
                    ✓
                  </span>
                  <span>{del}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
              Suitable Use Cases
            </h3>
            <p className="text-sm text-slate-600">
              Scenarios where this technical engagement yields immediate commercial value.
            </p>
            <div className="space-y-3 pt-2">
              {service.useCases.map((uc, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-200 bg-slate-50 flex items-center gap-3 text-sm text-slate-700">
                  <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                  <span>{uc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Implementation Process */}
        <div className="space-y-8">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
              Methodology
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Engineering &amp; Implementation Process
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, idx) => (
              <div key={idx} className="bg-slate-50 rounded-2xl border border-slate-200/80 p-6 space-y-3">
                <span className="text-2xl font-mono font-black text-blue-600/40">
                  {step.step}
                </span>
                <h4 className="text-lg font-bold text-slate-900">
                  {step.title}
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Related Services */}
        {service.relatedServices && service.relatedServices.length > 0 && (
          <div className="space-y-6 pt-6 border-t border-slate-200">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Ecosystem
              </span>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                Related Services
              </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {service.relatedServices.map((rel) => (
                <Link
                  key={rel.slug}
                  href={`/services/${rel.slug}`}
                  className="group bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-2">
                      {rel.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed mb-4">
                      {rel.description}
                    </p>
                  </div>
                  <div className="flex items-center text-xs font-semibold text-blue-600">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <div className="space-y-8 pt-6 border-t border-slate-200 max-w-4xl mx-auto">
            <div className="text-center">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">
                Questions &amp; Answers
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                Frequently Asked About {service.title}
              </h3>
            </div>
            <Accordion
              items={service.faqs.map((f, i) => ({
                id: `faq-${i}`,
                question: f.question,
                answer: f.answer
              }))}
              defaultOpenIndex={0}
            />
          </div>
        )}

        {/* Final CTA Banner */}
        <div className="rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-800 text-white p-8 sm:p-12 text-center space-y-6">
          <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Begin Your {service.title} Project?
          </h3>
          <p className="text-blue-100 text-base max-w-2xl mx-auto leading-relaxed">
            Let&apos;s review your objectives and map out a concrete architecture. Schedule a free 30-minute consultation with our engineering team today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/start-a-project"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-white text-blue-900 font-bold text-sm hover:bg-slate-50 transition-all shadow-md"
            >
              Start a Project
            </Link>
            <Link
              href="/book-a-meeting"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-blue-700/60 hover:bg-blue-700 text-white font-semibold text-sm border border-blue-400/40 transition-all"
            >
              Book a Meeting
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
