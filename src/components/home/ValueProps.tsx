import React from "react";
import { Briefcase, Eye, Code, TrendingUp } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const ValueProps: React.FC = () => {
  const values = [
    {
      icon: Briefcase,
      title: "Business-Focused Development",
      description: "We don't write code for the sake of technology alone. Every architectural decision is rooted in your specific commercial objectives, customer acquisition goals, and bottom-line efficiency."
    },
    {
      icon: Eye,
      title: "Thoughtful User Experiences",
      description: "We combine minimal editorial aesthetics with intuitive user journeys. Interfaces feel fast, natural to navigate, and convert visitors into active customers."
    },
    {
      icon: Code,
      title: "Maintainable Engineering",
      description: "Clean, documented, and strictly type-safe code bases. We build with modular architectures and automated test coverage so your in-house team can easily extend it."
    },
    {
      icon: TrendingUp,
      title: "Scalable Technology Choices",
      description: "We avoid fragile experimental dependencies in favor of robust, industry-standard modern stacks (Next.js, TypeScript, PostgreSQL) that scale without costly rewrites."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="CORE VALUE PROPOSITION"
          title="Engineering Grounded in Practical Business Outcomes"
          description="We partner with growing businesses as a dependable technology ally, delivering software that works predictably in the real world."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {values.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-slate-200/90 shadow-xs hover:shadow-md hover:border-blue-200 transition-all duration-200 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
