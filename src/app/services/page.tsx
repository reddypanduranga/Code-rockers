import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllServices, getServicesByCategory } from "@/data/services";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "All 29 Technology & Engineering Services | Code Rockers",
  description: "Browse our comprehensive directory of 29 software development, AI integration, mobile, cloud infrastructure, and technical advisory services."
};

export default function ServicesPage() {
  const categories = getServicesByCategory();
  const allServices = getAllServices();

  return (
    <div className="bg-white">
      {/* Top Banner & Header */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Services" }]} />
          
          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Comprehensive Service Directory</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              29 Specialized Technology &amp; Engineering Services
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              From full-cycle custom web and mobile development to enterprise AI integration and cloud infrastructure, explore our full spectrum of technology capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grouped by Categories */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
        {categories.map((category, index) => (
          <section key={category.slug} id={category.slug} className="scroll-mt-24">
            <div className="border-b border-slate-200 pb-5 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div>
                <span className="text-xs font-mono font-bold text-blue-600 uppercase tracking-widest block mb-1">
                  Category {String.fromCharCode(65 + index)}
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
                  {category.title}
                </h2>
                <p className="text-sm text-slate-500 mt-1 max-w-2xl">
                  {category.description}
                </p>
              </div>
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 w-fit">
                {category.services.length} Services
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.services.map((service) => (
                <div
                  key={service.slug}
                  className="group bg-white rounded-2xl border border-slate-200/90 p-6 hover:border-blue-400 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[10px] font-mono font-semibold uppercase px-2 py-0.5 rounded bg-blue-50 text-blue-700">
                        /services/{service.slug}
                      </span>
                      {service.featured && (
                        <span className="text-[10px] font-bold text-amber-700 bg-amber-50 px-2 py-0.5 rounded-full border border-amber-200">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                      {service.shortDescription}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors"
                    >
                      <span>Explore Service Details</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}

        {/* Bottom Consultation Callout */}
        <div className="rounded-3xl bg-slate-900 text-white p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center lg:text-left">
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              Unsure which engagement model matches your project?
            </h3>
            <p className="text-slate-400 text-sm max-w-xl">
              Our software architects will review your requirements and outline a tailored roadmap during a 30-minute discovery consultation.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <Link
              href="/start-a-project"
              className="px-6 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm font-bold transition-all shadow-md"
            >
              Start a Project
            </Link>
            <Link
              href="/book-a-meeting"
              className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 text-sm font-semibold transition-all"
            >
              Book Strategy Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
