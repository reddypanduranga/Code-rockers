import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Compass, PenTool, Code2, Rocket } from "lucide-react";

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      step: "01",
      title: "Discover",
      subtitle: "Strategy & Constraints",
      description: "We understand your business goals, target users, technical constraints, and key metrics. We establish what success looks like before writing a single line of code.",
      icon: Compass
    },
    {
      step: "02",
      title: "Design",
      subtitle: "Journeys & Prototypes",
      description: "We develop intuitive user journeys, interactive wireframes, and a cohesive design system in Figma. You see and test the flow before development begins.",
      icon: PenTool
    },
    {
      step: "03",
      title: "Build",
      subtitle: "Sprints & Verification",
      description: "We implement the solution in 2-week agile sprints. You receive testable staging links, transparent task progress, and automated test coverage at every step.",
      icon: Code2
    },
    {
      step: "04",
      title: "Launch & Improve",
      subtitle: "Telemetry & Iteration",
      description: "We deploy with zero downtime, configure uptime telemetry, monitor user adoption, and provide continuous updates based on real user feedback.",
      icon: Rocket
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ENGINEERING METHODOLOGY"
          title="Our Structured Four-Step Approach"
          description="A disciplined, repeatable process that replaces guesswork with transparent milestones and predictable releases."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
          {steps.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50/70 border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-300 hover:bg-white hover:shadow-lg transition-all duration-300"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-3xl font-extrabold text-blue-600/30">
                      {item.step}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 block mb-1">
                    {item.subtitle}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
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
