"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Calendar, Clock, Video, CheckCircle2, Loader2, AlertCircle, Globe } from "lucide-react";

export const BookMeetingScheduler: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("2026-11-04");
  const [selectedSlot, setSelectedSlot] = useState<string>("10:00 AM");
  const [topic, setTopic] = useState<string>("New Web / SaaS Product Architecture");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [notes, setNotes] = useState<string>("");
  const [timezone, setTimezone] = useState<string>("America/New_York (EST)");
  const [loading, setLoading] = useState<boolean>(false);
  const [confirmation, setConfirmation] = useState<{
    id: string;
    message: string;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const availableDates = [
    { label: "Wed, Nov 4", value: "2026-11-04" },
    { label: "Thu, Nov 5", value: "2026-11-05" },
    { label: "Fri, Nov 6", value: "2026-11-06" },
    { label: "Mon, Nov 9", value: "2026-11-09" },
    { label: "Tue, Nov 10", value: "2026-11-10" }
  ];

  const timeSlots = [
    "09:00 AM",
    "10:00 AM",
    "11:30 AM",
    "01:30 PM",
    "03:00 PM",
    "04:30 PM"
  ];

  const handleBooking = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) {
      setError("Please provide your name and business email.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/book-meeting", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          topic,
          date: selectedDate,
          timeSlot: selectedSlot,
          timezone,
          notes
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setConfirmation({
          id: data.bookingId,
          message: data.message
        });
      } else {
        setError(data.error || "Failed to book meeting. Please try again.");
      }
    } catch {
      setError("Network error. Please try again or reach out at coderockersgroup@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  if (confirmation) {
    return (
      <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 text-center space-y-6 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-emerald-600 uppercase px-3 py-1 rounded-full bg-emerald-50">
            Booking Confirmed · Ref #{confirmation.id}
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Consultation Confirmed
          </h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed pt-2">
            {confirmation.message}
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto text-left text-xs space-y-2">
          <div className="flex items-center gap-2 text-slate-800 font-semibold">
            <Video className="w-4 h-4 text-blue-600" />
            <span>Google Meet Video Link Provided via Email</span>
          </div>
          <p className="text-slate-500">
            We will also email a pre-meeting agenda checklist to ensure we cover all your technical questions.
          </p>
        </div>

        <div className="pt-4 flex justify-center gap-4">
          <Link
            href="/"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm grid grid-cols-1 lg:grid-cols-12">
      {/* Left Column: Meeting Details Summary */}
      <div className="lg:col-span-4 bg-slate-900 text-white p-8 sm:p-10 space-y-6 flex flex-col justify-between">
        <div className="space-y-6">
          <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center text-white">
            <Video className="w-6 h-6" />
          </div>

          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-blue-400 font-semibold block mb-1">
              Direct Strategy Session
            </span>
            <h2 className="text-2xl font-bold text-white tracking-tight">
              30-Min Engineering Review
            </h2>
            <p className="text-xs text-slate-400 mt-2 leading-relaxed">
              Talk directly with a senior software architect about your product roadmap, tech stack feasibility, and architecture.
            </p>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-800 text-xs text-slate-300">
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>30 minutes duration</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Video className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Web video call (Google Meet / Zoom)</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Timezone: {timezone}</span>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-slate-800 text-[11px] text-slate-400">
          ✓ No sales pressure · Pure engineering advice · Mutual NDA supported
        </div>
      </div>

      {/* Right Column: Interactive Slot Selector & Booking Form */}
      <div className="lg:col-span-8 p-8 sm:p-10">
        <form onSubmit={handleBooking} className="space-y-6">
          {error && (
            <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-2 text-xs">
              <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Date Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              1. Select a Date
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {availableDates.map((d) => (
                <button
                  type="button"
                  key={d.value}
                  onClick={() => setSelectedDate(d.value)}
                  className={`p-3 rounded-xl border text-xs font-bold transition-all ${selectedDate === d.value
                      ? "border-blue-600 bg-blue-50 text-blue-700 ring-2 ring-blue-500/20"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Time Slot Selector */}
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
              2. Select a Time Slot
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {timeSlots.map((slot) => (
                <button
                  type="button"
                  key={slot}
                  onClick={() => setSelectedSlot(slot)}
                  className={`py-2.5 px-4 rounded-xl border text-xs font-semibold transition-all ${selectedSlot === slot
                      ? "border-blue-600 bg-blue-600 text-white shadow-xs"
                      : "border-slate-200 text-slate-700 hover:bg-slate-50"
                    }`}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>

          {/* User Details */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Your Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jane@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Primary Discussion Topic
            </label>
            <select
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 bg-white"
            >
              <option value="New Web / SaaS Product Architecture">New Web / SaaS Product Architecture</option>
              <option value="AI Integration & Automation Feasibility">AI Integration &amp; Automation Feasibility</option>
              <option value="Mobile App Scoping (iOS / Android)">Mobile App Scoping (iOS / Android)</option>
              <option value="Legacy Codebase Modernization Review">Legacy Codebase Modernization Review</option>
              <option value="Fractional CTO Leadership Advisory">Fractional CTO Leadership Advisory</option>
              <option value="General Discovery & Scoping">General Discovery &amp; Scoping</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
              Any Specific Questions or Context? (Optional)
            </label>
            <textarea
              rows={2}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="e.g. Planning a Q1 MVP launch; need advice on Next.js vs React Native..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-2 disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Scheduling Consultation...</span>
              </>
            ) : (
              <>
                <Calendar className="w-4 h-4" />
                <span>Confirm Strategy Session</span>
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
