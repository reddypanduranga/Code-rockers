import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Sparkles } from "lucide-react";

export const FinalCtaSection: React.FC = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 text-white overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-semibold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>START YOUR TECHNOLOGY JOURNEY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white max-w-3xl mx-auto leading-tight">
          Have an Idea? Let&apos;s Build Something Great.
        </h2>

        <p className="text-lg sm:text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
          Tell us what you&apos;re planning. We&apos;ll help you identify the right approach, sensible architecture, and concrete next steps.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/start-a-project"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-blue-900 font-bold text-base transition-all shadow-lg hover:shadow-xl active:scale-[0.98]"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-5 h-5 text-blue-700" />
          </Link>

          <Link
            href="/book-a-meeting"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-blue-800/60 hover:bg-blue-800 text-white font-semibold text-base border border-blue-400/40 backdrop-blur-sm transition-all"
          >
            <Calendar className="w-5 h-5" />
            <span>Book a Meeting</span>
          </Link>
        </div>

        <div className="pt-8 border-t border-blue-500/30 flex items-center justify-center gap-6 text-xs text-blue-200">
          <span>✓ Complimentary 30-min strategy review</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ Direct discussion with senior engineers</span>
          <span className="hidden sm:inline">·</span>
          <span>✓ Mutual NDAs honored</span>
        </div>
      </div>
    </section>
  );
};
