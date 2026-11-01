"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, ArrowLeft, Loader2, Sparkles, AlertCircle } from "lucide-react";

export const StartProjectWizard: React.FC = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    // Step 1: Contact Info
    fullName: "",
    email: "",
    company: "",
    phone: "",
    // Step 2: Requirements
    projectType: "Web Application",
    serviceCategories: ["Frontend & Backend Development"],
    projectDescription: "",
    hasDesigns: "Wireframes / In Progress",
    // Step 3: Budget & Timeline
    budget: "$25,000 - $50,000",
    timeline: "2 - 3 Months",
    targetLaunchDate: "",
    // Step 4: Consent
    consent: false,
    honeypot: ""
  });

  const handleTextChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (category: string) => {
    setFormData((prev) => {
      const exists = prev.serviceCategories.includes(category);
      return {
        ...prev,
        serviceCategories: exists
          ? prev.serviceCategories.filter((c) => c !== category)
          : [...prev.serviceCategories, category]
      };
    });
  };

  const validateStep = (currentStep: number): boolean => {
    setError(null);
    if (currentStep === 1) {
      if (!formData.fullName.trim()) {
        setError("Please enter your full name.");
        return false;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!formData.email.trim() || !emailRegex.test(formData.email)) {
        setError("Please enter a valid business email address.");
        return false;
      }
    }
    if (currentStep === 2) {
      if (!formData.projectDescription.trim() || formData.projectDescription.length < 15) {
        setError("Please provide a short summary of what you are planning to build (at least 15 characters).");
        return false;
      }
    }
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const prevStep = () => {
    setError(null);
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.consent) {
      setError("Please consent to our privacy policy to submit your project specification.");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/enquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: formData.fullName,
          email: formData.email,
          company: formData.company,
          phone: formData.phone,
          service: `${formData.projectType} (${formData.serviceCategories.join(", ")})`,
          budget: formData.budget,
          timeline: formData.timeline,
          message: `Project Type: ${formData.projectType}\nDesign State: ${formData.hasDesigns}\nCategories: ${formData.serviceCategories.join(", ")}\nTarget Date: ${formData.targetLaunchDate || "Not specified"}\n\nDescription: ${formData.projectDescription}`,
          consent: formData.consent,
          honeypot: formData.honeypot
        })
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
      } else {
        setError(data.error || "Failed to submit project inquiry.");
      }
    } catch {
      setError("Network error. Please try again or reach out to us at coderockersgroup@gmail.com.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 text-center space-y-6 shadow-sm">
        <div className="w-16 h-16 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Project Specification Received
        </h3>
        <p className="text-slate-600 text-sm max-w-lg mx-auto leading-relaxed">
          Thank you, <span className="font-semibold text-slate-900">{formData.fullName}</span>! Our engineering team has received your project outline. We will review your requirements and reach out within 24 business hours to coordinate an initial technical discovery session.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/services"
            className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs transition-colors"
          >
            Explore Services Directory
          </Link>
          <Link
            href="/"
            className="px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 font-semibold text-xs transition-colors"
          >
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-12 shadow-sm space-y-8">
      {/* Progress Steps Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-6">
        {[
          { num: 1, label: "Contact Info" },
          { num: 2, label: "Requirements" },
          { num: 3, label: "Budget & Time" },
          { num: 4, label: "Review & Submit" }
        ].map((s) => {
          const isActive = step === s.num;
          const isDone = step > s.num;
          return (
            <div key={s.num} className="flex items-center gap-2">
              <span
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${isDone
                    ? "bg-emerald-600 text-white"
                    : isActive
                      ? "bg-blue-600 text-white ring-4 ring-blue-500/10"
                      : "bg-slate-100 text-slate-500"
                  }`}
              >
                {isDone ? "✓" : s.num}
              </span>
              <span
                className={`text-xs font-semibold hidden md:inline ${isActive ? "text-slate-900" : "text-slate-500"
                  }`}
              >
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      {error && (
        <div className="p-4 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 flex items-center gap-2 text-xs">
          <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Step 1: Contact Info */}
      {step === 1 && (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Step 1: Your Contact Information</h3>
            <p className="text-xs text-slate-500 mt-1">Tell us who we will be speaking with.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleTextChange}
                placeholder="Alex Morgan"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                Business Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleTextChange}
                placeholder="alex@company.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                Company / Project Name
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleTextChange}
                placeholder="Innovate Tech LLC"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                Phone Number (Optional)
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleTextChange}
                placeholder="+1 (555) 123-4567"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
              />
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Project Requirements */}
      {step === 2 && (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Step 2: Project Requirements</h3>
            <p className="text-xs text-slate-500 mt-1">What are you looking to engineer?</p>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
              Product Format
            </label>
            <select
              name="projectType"
              value={formData.projectType}
              onChange={handleTextChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 bg-white"
            >
              <option value="Web Application">Custom Web Application</option>
              <option value="Mobile Application">iOS &amp; Android Mobile App</option>
              <option value="SaaS Platform">Multi-Tenant SaaS Platform</option>
              <option value="MVP Build">Early-Stage MVP Build</option>
              <option value="AI / Automation Solution">AI Integration &amp; Automation</option>
              <option value="Corporate Website">High-Performance Corporate Website</option>
              <option value="Internal Tooling">Internal Operations Tooling</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
              Required Disciplines (Select all that apply)
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Frontend & Backend Development",
                "UI/UX Design & Prototyping",
                "Cloud & DevOps Architecture",
                "AI / LLM Integration (RAG)",
                "Payment & Stripe Billing",
                "Security & Code Review"
              ].map((cat) => {
                const checked = formData.serviceCategories.includes(cat);
                return (
                  <button
                    type="button"
                    key={cat}
                    onClick={() => handleCheckboxChange(cat)}
                    className={`p-3 rounded-xl border text-left text-xs font-semibold transition-all flex items-center justify-between ${checked
                        ? "border-blue-500 bg-blue-50/60 text-blue-800"
                        : "border-slate-200 text-slate-700 hover:bg-slate-50"
                      }`}
                  >
                    <span>{cat}</span>
                    {checked && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
              Project Description <span className="text-red-500">*</span>
            </label>
            <textarea
              name="projectDescription"
              rows={4}
              value={formData.projectDescription}
              onChange={handleTextChange}
              placeholder="Describe the problem, target audience, key workflows, or existing code..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500"
            />
          </div>
        </div>
      )}

      {/* Step 3: Budget and Timeline */}
      {step === 3 && (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Step 3: Budget &amp; Target Timeline</h3>
            <p className="text-xs text-slate-500 mt-1">Help us calibrate the initial technical scope.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                Allocated Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleTextChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 bg-white"
              >
                <option value="Under $15,000">Under $15,000</option>
                <option value="$15,000 - $30,000">$15,000 - $30,000</option>
                <option value="$30,000 - $60,000">$30,000 - $60,000</option>
                <option value="$60,000 - $120,000">$60,000 - $120,000</option>
                <option value="$120,000+">$120,000+</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
                Expected Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleTextChange}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500 bg-white"
              >
                <option value="1 - 2 Months">1 - 2 Months (Rapid MVP)</option>
                <option value="2 - 3 Months">2 - 3 Months</option>
                <option value="3 - 6 Months">3 - 6 Months (Enterprise/SaaS)</option>
                <option value="Flexible / Ongoing">Flexible / Ongoing Retainer</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold uppercase text-slate-700 mb-2">
              Target Launch Date (Optional)
            </label>
            <input
              type="text"
              name="targetLaunchDate"
              value={formData.targetLaunchDate}
              onChange={handleTextChange}
              placeholder="e.g. Q1 2027 or by December"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm outline-none focus:border-blue-500"
            />
          </div>
        </div>
      )}

      {/* Step 4: Review and Submit */}
      {step === 4 && (
        <div className="space-y-6 animate-in fade-in">
          <div>
            <h3 className="text-xl font-bold text-slate-900">Step 4: Review &amp; Submit</h3>
            <p className="text-xs text-slate-500 mt-1">Confirm your project details before transmitting.</p>
          </div>

          <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200 space-y-4 text-xs">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <span className="text-slate-400 uppercase font-semibold">Contact</span>
                <p className="font-bold text-slate-900 text-sm mt-0.5">{formData.fullName}</p>
                <p className="text-slate-600">{formData.email}</p>
              </div>
              <div>
                <span className="text-slate-400 uppercase font-semibold">Company</span>
                <p className="font-bold text-slate-900 text-sm mt-0.5">{formData.company || "Not specified"}</p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-3 grid grid-cols-2 gap-4">
              <div>
                <span className="text-slate-400 uppercase font-semibold">Product Format</span>
                <p className="font-bold text-slate-900 mt-0.5">{formData.projectType}</p>
              </div>
              <div>
                <span className="text-slate-400 uppercase font-semibold">Budget &amp; Timeline</span>
                <p className="font-bold text-slate-900 mt-0.5">{formData.budget} · {formData.timeline}</p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-3">
              <span className="text-slate-400 uppercase font-semibold">Summary</span>
              <p className="text-slate-700 mt-1 leading-relaxed">{formData.projectDescription}</p>
            </div>
          </div>

          {/* Privacy Consent */}
          <div className="flex items-start gap-3 pt-2">
            <input
              type="checkbox"
              id="wizardConsent"
              checked={formData.consent}
              onChange={(e) => setFormData((prev) => ({ ...prev, consent: e.target.checked }))}
              className="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 mt-1 cursor-pointer"
            />
            <label htmlFor="wizardConsent" className="text-xs text-slate-600 leading-relaxed cursor-pointer">
              I agree to Code Rockers storing my project details to prepare a technical proposal in accordance with the{" "}
              <Link href="/privacy-policy" className="text-blue-600 underline">
                Privacy Policy
              </Link>
              .
            </label>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      <div className="flex items-center justify-between border-t border-slate-100 pt-6">
        {step > 1 ? (
          <button
            type="button"
            onClick={prevStep}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Previous</span>
          </button>
        ) : (
          <div />
        )}

        {step < 4 ? (
          <button
            type="button"
            onClick={nextStep}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold transition-all shadow-sm"
          >
            <span>Next Step</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        ) : (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={loading}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md disabled:opacity-70"
          >
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Transmitting Specification...</span>
              </>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Submit Project Specification</span>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
};
