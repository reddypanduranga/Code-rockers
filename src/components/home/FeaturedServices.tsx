import React from "react";
import Link from "next/link";
import { getFeaturedServices } from "@/data/services";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Globe, LayoutGrid, Layers, TabletSmartphone, Sparkles, Cpu } from "lucide-react";

export const FeaturedServices: React.FC = () => {
  const featuredServices = getFeaturedServices();

  const getIcon = (name: string) => {
    switch (name) {
      case "Globe":
        return Globe;
      case "LayoutGrid":
        return LayoutGrid;
      case "Layers":
        return Layers;
      case "TabletSmartphone":
        return TabletSmartphone;
      case "Sparkles":
        return Sparkles;
      case "Cpu":
      default:
        return Cpu;
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="FEATURED EXPERTISE"
          title="Engineered for Scalability, Security, and Speed"
          description="Explore our primary service engagements designed to turn technical complexity into business advantage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {featuredServices.map((service) => {
            const Icon = getIcon(service.iconName);
            return (
              <div
                key={service.slug}
                className="group relative bg-white rounded-2xl border border-slate-200 p-8 hover:border-blue-400 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 mb-2 block">
                    {service.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 inline-flex items-center gap-2 transition-colors"
                  >
                    <span>Explore Service</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All Services Callout */}
        <div className="mt-16 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg"
          >
            <span>View All 29 Services Directory</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
