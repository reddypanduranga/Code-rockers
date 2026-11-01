"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, AlertCircle, Loader2, Send } from "lucide-react";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    phone: "",
    service: "Website Development",
    budget: "$10,000 - $25,000",
    timeline: "1 - 2 Months",
    message: "",
    consent: false,
    honeypot: ""
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "idle" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const { checked } = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });
      const data = await res.json();

      if (res.ok && data.success) {
        setStatus({ type: "success", message: data.message });
        setFormData({
          fullName: "",
          email: "",
          company: "",
          phone: "",
          service: "Website Development",
          budget: "$10,000 - $25,000",
          timeline: "1 - 2 Months",
          message: "",
          consent: false,
          honeypot: ""
        });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Failed to submit enquiry. Please verify the fields."
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again or email us directly at coderockersgroup@gmail.com."
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm">
      {/* Honeypot field (hidden from users, traps bots) */}
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange}
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />

      {status.type === "success" && (
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 flex items-start gap-3 text-sm">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
          <p>{status.message}</p>
        </div>
      )}

      {status.type === "error" && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-start gap-3 text-sm">
          <AlertCircle className="w-5 h-5 text-rose-600 mt-0.5 flex-shrink-0" />
          <p>{status.message}</p>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            id="fullName"
            name="fullName"
            type="text"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="Jane Doe"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Business Email <span className="text-red-500">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@company.com"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Company Name
          </label>
          <input
            id="company"
            name="company"
            type="text"
            value={formData.company}
            onChange={handleChange}
            placeholder="Acme Corp"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 outline-none transition-all"
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Phone Number (Optional)
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div>
          <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Primary Interest
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 outline-none transition-all bg-white"
          >
            <option value="Website Development">Website Development</option>
            <option value="Web Applications">Web Applications</option>
            <option value="Full-Stack Development">Full-Stack Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="AI Integration">AI Integration</option>
            <option value="SaaS Product Engineering">SaaS Product Engineering</option>
            <option value="Cloud Solutions">Cloud Solutions</option>
            <option value="Fractional CTO Leadership">Fractional CTO Leadership</option>
            <option value="Other / General Advisory">Other / General Advisory</option>
          </select>
        </div>

        <div>
          <label htmlFor="budget" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Approximate Budget
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 outline-none transition-all bg-white"
          >
            <option value="Under $10,000">Under $10,000</option>
            <option value="$10,000 - $25,000">$10,000 - $25,000</option>
            <option value="$25,000 - $50,000">$25,000 - $50,000</option>
            <option value="$50,000 - $100,000">$50,000 - $100,000</option>
            <option value="$100,000+">$100,000+</option>
          </select>
        </div>

        <div>
          <label htmlFor="timeline" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
            Expected Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 outline-none transition-all bg-white"
          >
            <option value="Immediate (< 1 Month)">Immediate (&lt; 1 Month)</option>
            <option value="1 - 2 Months">1 - 2 Months</option>
            <option value="3 - 6 Months">3 - 6 Months</option>
            <option value="Flexible / Exploring">Flexible / Exploring</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
          Project Description <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us about the product goals, target audience, technical challenges, or existing code..."
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 text-sm text-slate-900 outline-none transition-all"
        />
      </div>

      {/* Consent Checkbox */}
      <div className="flex items-start gap-3">
        <input
          id="consent"
          name="consent"
          type="checkbox"
          required
          checked={formData.consent}
          onChange={handleChange}
          className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 mt-1 cursor-pointer"
        />
        <label htmlFor="consent" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
          I consent to Code Rockers storing my contact information to reply to this enquiry in accordance with the{" "}
          <Link href="/privacy-policy" className="text-blue-600 underline">
            Privacy Policy
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-sm transition-all shadow-md shadow-blue-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Transmitting Enquiry...</span>
          </>
        ) : (
          <>
            <Send className="w-4 h-4" />
            <span>Send Project Enquiry</span>
          </>
        )}
      </button>
    </form>
  );
};
