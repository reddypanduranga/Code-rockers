import React from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MessageSquareCode, Cpu, FileCheck, Code2, Target, HeartHandshake } from "lucide-react";

export const WhyUsSection: React.FC = () => {
  const points = [
    {
      title: "Clear Communication",
      description: "Direct access to the engineers building your software. No layers of non-technical account managers filtering your questions.",
      icon: MessageSquareCode
    },
    {
      title: "Practical Technical Decisions",
      description: "We pick technologies based on reliability, hiring market depth, and maintenance ease—never based on transient online hype.",
      icon: Cpu
    },
    {
      title: "Transparent Project Scope",
      description: "No hidden fees, scope ambiguity, or surprise change orders. Detailed deliverables and milestones documented upfront.",
      icon: FileCheck
    },
    {
      title: "Maintainable Code",
      description: "Strict TypeScript typing, modular architecture, comprehensive documentation, and automated testing standard in every build.",
      icon: Code2
    },
    {
      title: "Focus on Real Business Problems",
      description: "We challenge assumptions and suggest simpler ways to achieve your commercial goals before writing hundreds of lines of code.",
      icon: Target
    },
    {
      title: "Ongoing Support Options",
      description: "Flexible post-launch maintenance, monitoring SLAs, and continuous feature sprints to support your long-term roadmap.",
      icon: HeartHandshake
    }
  ];

  return (
    <section className="py-24 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="THE CODE ROCKERS ADVANTAGE"
          title="Why Choose Us as Your Technology Partner"
          description="We take pride in being straight-talking, highly skilled software engineers who treat your business goals as our own."
          isDark={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <div
                key={idx}
                className="bg-slate-800/70 border border-slate-700/80 rounded-2xl p-7 hover:border-blue-500/50 hover:bg-slate-800 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2.5">
                  {pt.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {pt.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
