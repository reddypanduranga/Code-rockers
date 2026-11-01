import React from "react";
import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ContactForm } from "@/components/forms/ContactForm";
import { Mail, Phone, MapPin, Clock, Calendar, Sparkles, ShieldCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us & Project Enquiries | Code Rockers",
  description: "Get in touch with Code Rockers to discuss software development, AI solutions, web applications, or to book a strategy consultation."
};

export default function ContactPage() {
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "coderockersgroup@gmail.com";
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+1 (555) 019-2834";
  const contactAddress = process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "HITEC City, Madhapur, Hyderabad, Telangana 500081, India";

  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Contact" }]} />

          <div className="mt-4 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Start a Conversation With Our Engineering Team
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              Tell us about what you want to build. Our senior software architects will analyze your requirements and follow up within 24 business hours.
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Form */}
          <div className="lg:col-span-8">
            <div className="space-y-4 mb-6">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Project Inquiry Details
              </h2>
              <p className="text-sm text-slate-600">
                Please complete the form below. All inquiries are reviewed under strict confidentiality.
              </p>
            </div>
            <ContactForm />
          </div>

          {/* Right Column: Direct Info & Quick Booking */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Meeting Booking Card */}
            <div className="rounded-3xl bg-blue-600 text-white p-8 space-y-4 shadow-lg shadow-blue-500/15">
              <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                <Calendar className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-bold text-white">
                Prefer a Direct Video Call?
              </h3>
              <p className="text-xs text-blue-100 leading-relaxed">
                Skip the back-and-forth emails. Select a 30-minute time slot directly on our engineers&apos; calendar for a free discovery review.
              </p>
              <div className="pt-2">
                <Link
                  href="/book-a-meeting"
                  className="w-full inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white text-blue-900 font-bold text-xs hover:bg-slate-50 transition-all shadow-xs"
                >
                  Book 30-Min Strategy Call
                </Link>
              </div>
            </div>

            {/* Direct Contact Information */}
            <div className="rounded-2xl border border-slate-200 p-6 space-y-6 bg-slate-50/60">
              <h3 className="text-base font-bold text-slate-900">
                Official Business Channels
              </h3>
              <div className="space-y-4 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <Mail className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-slate-900">Email</span>
                    <a href={`mailto:${contactEmail}`} className="text-blue-600 hover:underline">
                      {contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-slate-900">Phone</span>
                    <span>{contactPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-slate-900">Location</span>
                    <span>{contactAddress}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold block text-slate-900">Response SLA</span>
                    <span>Within 24 business hours</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200 flex items-center gap-2 text-xs text-slate-600">
                <ShieldCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                <span>Mutual NDAs signed upon request</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
