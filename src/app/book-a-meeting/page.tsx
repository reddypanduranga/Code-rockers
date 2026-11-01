import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { BookMeetingScheduler } from "@/components/forms/BookMeetingScheduler";
import { Sparkles, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Strategy Meeting | Code Rockers",
  description: "Schedule a direct 30-minute consultation with Code Rockers engineers to discuss software development, AI solutions, or cloud engineering."
};

export default function BookAMeetingPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <Breadcrumbs items={[{ label: "Book a Meeting" }]} />

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Calendar Access</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight">
            Schedule a Strategy Session With Our Engineers
          </h1>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-3xl">
            Choose a date and time that fits your calendar. In 30 minutes, we&apos;ll review your project goals, explore technical feasibility, and discuss practical architectural options.
          </p>
        </div>
      </div>

      {/* Main Scheduler Component */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <BookMeetingScheduler />
      </div>
    </div>
  );
}
