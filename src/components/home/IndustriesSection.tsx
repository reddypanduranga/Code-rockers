import React from "react";
import Link from "next/link";
import { getAllIndustries } from "@/data/industries";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Activity, GraduationCap, ShoppingBag, Factory, Home, Truck, Zap } from "lucide-react";

export const IndustriesSection: React.FC = () => {
  const industries = getAllIndustries();

  const getIcon = (iconName: string) => {
    switch (iconName) {
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
    <section className="py-24 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="INDUSTRY DOMAINS"
          title="Tailored Solutions for Specialized Sectors"
          description="We understand the regulatory, operational, and data complexities unique to each industry vertical."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-16">
          {industries.map((ind) => {
            const Icon = getIcon(ind.iconName);
            return (
              <Link
                key={ind.slug}
                href={`/industries/${ind.slug}`}
                className="group bg-white rounded-2xl border border-slate-200/90 p-6 hover:border-blue-300 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {ind.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {ind.subtitle}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-slate-700 group-hover:text-blue-600 transition-colors">
                  <span>Explore Sector</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
          >
            <span>View All Industry Capabilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
