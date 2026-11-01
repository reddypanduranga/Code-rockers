import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles, Terminal, CheckCircle2, ShieldCheck, Zap, Activity } from "lucide-react";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-32 bg-gradient-to-b from-slate-50/80 via-white to-white">
      {/* Subtle grid pattern background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none" />

      {/* Decorative gradient radial blurs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-blue-400/15 to-indigo-400/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Messaging */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs font-semibold tracking-wider uppercase shadow-xs">
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
              <span>SOFTWARE DEVELOPMENT · AI · DIGITAL INNOVATION</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.12]">
              Technology That Moves Your Business{" "}
              <span className="text-gradient">Forward.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Code Rockers helps ambitious businesses turn ideas into powerful digital products through software engineering, AI solutions, and cloud technology.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base transition-all shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 active:scale-[0.98]"
              >
                <span>Let&apos;s Discuss Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </Link>

              <Link
                href="/services"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-semibold text-base border border-slate-200 hover:border-slate-300 transition-all shadow-xs"
              >
                <span>Explore Our Services</span>
              </Link>
            </div>

            {/* Trust Points */}
            <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Production-Grade Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" />
                <span>100% Code &amp; IP Ownership</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-indigo-600" />
                <span>Agile Sprint Delivery</span>
              </div>
            </div>
          </div>

          {/* Right Column: Layered Software Interface Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Back Card: Code & Architecture Terminal */}
              <div className="rounded-2xl bg-slate-900 border border-slate-800 shadow-2xl p-5 text-slate-200 space-y-4 transform lg:-rotate-1 hover:rotate-0 transition-transform duration-300">
                {/* Terminal Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-blue-400" />
                    <span>coderockers-core.ts</span>
                  </div>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800">
                    PASS
                  </span>
                </div>

                {/* Code snippet */}
                <div className="font-mono text-xs leading-relaxed space-y-1.5 text-slate-300">
                  <p className="text-slate-500">// Initialize mission-critical engineering runtime</p>
                  <p>
                    <span className="text-indigo-400">const</span> app ={" "}
                    <span className="text-blue-400">createProductPipeline</span>&#40;&#123;
                  </p>
                  <p className="pl-4">
                    architecture: <span className="text-emerald-400">&quot;resilient-cloud&quot;</span>,
                  </p>
                  <p className="pl-4">
                    typeSafety: <span className="text-amber-400">true</span>,
                  </p>
                  <p className="pl-4">
                    intelligence: <span className="text-blue-400">deployAIModel</span>&#40;&#123; rag: <span className="text-amber-400">true</span> &#125;&#41;,
                  </p>
                  <p>&#125;&#41;;</p>
                  <p className="text-emerald-400 pt-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 animate-pulse text-emerald-400" />
                    <span>✓ Ready for deployment to global edge nodes</span>
                  </p>
                </div>

                {/* Foreground Layered Dashboard Component */}
                <div className="mt-4 pt-3 border-t border-slate-800/80 grid grid-cols-2 gap-3 text-xs">
                  <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                    <span className="text-slate-400 text-[10px] uppercase font-semibold">Latency Target</span>
                    <p className="text-white font-mono font-bold text-lg mt-0.5">&lt; 45ms</p>
                    <span className="text-[10px] text-emerald-400">P99 Edge Distribution</span>
                  </div>
                  <div className="bg-slate-800/60 p-3 rounded-xl border border-slate-700/60">
                    <span className="text-slate-400 text-[10px] uppercase font-semibold">Uptime SLA</span>
                    <p className="text-white font-mono font-bold text-lg mt-0.5">99.98%</p>
                    <span className="text-[10px] text-blue-400">Automated Self-Healing</span>
                  </div>
                </div>
              </div>

              {/* Floating Accent Card: Agile Product Delivery Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white border border-slate-200/90 shadow-xl rounded-xl p-4 flex items-center gap-3.5 max-w-xs animate-in fade-in slide-in-from-bottom-2">
                <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Modern SaaS Engineering</p>
                  <p className="text-[11px] text-slate-500">From concept to production in weeks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
