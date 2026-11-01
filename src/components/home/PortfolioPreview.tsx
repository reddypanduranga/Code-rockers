import React from "react";
import Link from "next/link";
import { getAllProjects } from "@/data/portfolio";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ArrowRight, Sparkles, Code2, ArrowUpRight } from "lucide-react";

export const PortfolioPreview: React.FC = () => {
  const projects = getAllProjects().slice(0, 3);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="ENGINEERING PROOFS OF CONCEPT"
          title="Featured Architectural Demonstrations"
          description="Explore our reference projects and architectural case studies demonstrating production engineering standards."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Visual Header / Mockup Banner */}
                <div className={`h-44 bg-gradient-to-br ${project.gradient} p-6 flex flex-col justify-between relative overflow-hidden text-white`}>
                  <div className="flex items-center justify-between z-10">
                    <span className="text-[10px] font-mono uppercase px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white font-semibold">
                      Concept Demo
                    </span>
                    <span className="text-xs text-white/90 font-medium">
                      {project.industry}
                    </span>
                  </div>

                  <div className="z-10">
                    <h3 className="text-xl font-black tracking-tight text-white">
                      {project.title}
                    </h3>
                  </div>

                  {/* Decorative backdrop shapes */}
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-xl pointer-events-none" />
                </div>

                {/* Content Body */}
                <div className="p-6 space-y-4">
                  <div className="text-xs text-blue-600 font-semibold uppercase tracking-wider">
                    {project.category}
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <Link
                  href={`/case-studies`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors pt-4"
                >
                  <span>Review Case Study Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-sm transition-all shadow-sm"
          >
            <span>View All Portfolio Demonstrations</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
};
