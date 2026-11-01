import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllIndustries } from "@/data/industries";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArrowRight, Sparkles, Activity, GraduationCap, ShoppingBag, Factory, Home, Truck, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "Industry Domains & Specialized Software Engineering | Code Rockers",
  description: "Custom software engineering and digital transformation solutions tailored to healthcare, education, retail, manufacturing, logistics, and proptech."
};

export default function IndustriesPage() {
  const industries = getAllIndustries();

  const getIcon = (name: string) => {
    switch (name) {
      case "Activity":
        return Activity;
      case "GraduationCap":
        return GraduationCap;
      case "ShoppingBag":
        return ShoppingBag;
      case "Factory":
        return Factory;
      case "Home":
        return Home;
      case "Truck":
        return Truck;
      case "Zap":
      default:
        return Zap;
    }
  };

  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Industries" }]} />
          
          <div className="mt-4 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Specialized Domain Experience</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Software Solutions for Specialized Industry Sectors
            </h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              We design software architectures that account for domain-specific constraints—from HIPAA encryption in healthcare and edge computer vision on factory floors, to sub-second headless e-commerce.
            </p>
          </div>
        </div>
      </div>

      {/* Industries Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind) => {
            const Icon = getIcon(ind.iconName);
            return (
              <div
                key={ind.slug}
                className="bg-white rounded-2xl border border-slate-200 p-8 hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-semibold mb-3 inline-block">
                    /industries/{ind.slug}
                  </span>

                  <h2 className="text-2xl font-bold text-slate-900 mb-2">
                    {ind.title}
                  </h2>
                  <p className="text-sm font-medium text-blue-600 mb-3">
                    {ind.subtitle}
                  </p>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {ind.heroDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    href={`/industries/${ind.slug}`}
                    className="text-sm font-semibold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Industry Capabilities</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
