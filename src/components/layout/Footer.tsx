"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, ArrowRight, Globe } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = 2026;
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL || "coderockersgroup@gmail.com";
  const contactPhone = process.env.NEXT_PUBLIC_CONTACT_PHONE || "+91**********";
  const contactAddress = process.env.NEXT_PUBLIC_CONTACT_ADDRESS || "HITEC City, Madhapur, Hyderabad, Telangana 500081, India";

  return (
    <footer className="bg-[#0B1220] text-slate-300 border-t border-slate-800">
      {/* Upper Footer: Brand and Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/" className="inline-flex items-center group">
              <div className="relative group-hover:scale-105 transition-transform duration-200">
                <Image
                  src="/logo-dark-mode.png"
                  alt="Code Rockers — We Code. We Create. We Rock."
                  width={180}
                  height={60}
                  className="h-14 w-auto object-contain brightness-[1.05]"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              Code Rockers is a modern technology partner helping startups, small businesses, and growing enterprises build digital products, automate operations, and scale with confidence.
            </p>

            {/* Direct Contact Details */}
            <div className="space-y-3 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <a href={`mailto:${contactEmail}`} className="hover:text-white transition-colors">
                  {contactEmail}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="hover:text-white transition-colors">
                  {contactPhone}
                </span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span>{contactAddress}</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9h2.77v8.37H6.46v-8.37M7.85 6.45a1.61 1.61 0 1 0 0 3.22 1.61 1.61 0 0 0 0-3.22Z" />
                </svg>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Core Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services/website-development" className="text-slate-400 hover:text-white transition-colors">
                  Website Development
                </Link>
              </li>
              <li>
                <Link href="/services/web-applications" className="text-slate-400 hover:text-white transition-colors">
                  Web Applications
                </Link>
              </li>
              <li>
                <Link href="/services/mobile-app-development" className="text-slate-400 hover:text-white transition-colors">
                  Mobile App Development
                </Link>
              </li>
              <li>
                <Link href="/services/ai-integration" className="text-slate-400 hover:text-white transition-colors">
                  AI Integration
                </Link>
              </li>
              <li>
                <Link href="/services/cloud-solutions" className="text-slate-400 hover:text-white transition-colors">
                  Cloud Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/mvp-development" className="text-slate-400 hover:text-white transition-colors">
                  MVP Development
                </Link>
              </li>
              <li>
                <Link href="/services/saas-product-engineering" className="text-slate-400 hover:text-white transition-colors">
                  SaaS Product Engineering
                </Link>
              </li>
              <li className="pt-1">
                <Link href="/services" className="text-blue-400 hover:text-blue-300 font-medium inline-flex items-center gap-1">
                  All 29 Services Directory <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Industries Column */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Solutions &amp; Sectors
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/solutions/startup-solutions" className="text-slate-400 hover:text-white transition-colors">
                  Startup Solutions
                </Link>
              </li>
              <li>
                <Link href="/solutions/business-websites" className="text-slate-400 hover:text-white transition-colors">
                  Business Websites
                </Link>
              </li>
              <li>
                <Link href="/solutions/digital-transformation" className="text-slate-400 hover:text-white transition-colors">
                  Digital Transformation
                </Link>
              </li>
              <li>
                <Link href="/solutions/ai-business-solutions" className="text-slate-400 hover:text-white transition-colors">
                  AI Business Solutions
                </Link>
              </li>
              <li>
                <Link href="/industries/healthcare" className="text-slate-400 hover:text-white transition-colors">
                  Healthcare Platforms
                </Link>
              </li>
              <li>
                <Link href="/industries/ecommerce" className="text-slate-400 hover:text-white transition-colors">
                  Retail &amp; E-Commerce
                </Link>
              </li>
              <li>
                <Link href="/industries/logistics" className="text-slate-400 hover:text-white transition-colors">
                  Logistics &amp; Supply Chain
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company &amp; Resources
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-slate-400 hover:text-white transition-colors">
                  Portfolio &amp; Work
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-slate-400 hover:text-white transition-colors">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-slate-400 hover:text-white transition-colors">
                  Insights &amp; Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/start-a-project" className="text-blue-400 hover:text-blue-300 font-medium">
                  Start a Project Form
                </Link>
              </li>
              <li>
                <Link href="/book-a-meeting" className="text-blue-400 hover:text-blue-300 font-medium">
                  Book a Consultation Call
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Legal & Copyright */}
      <div className="border-t border-slate-800/80 bg-[#080d17]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            &copy; {currentYear} Code Rockers. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-slate-300 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-slate-300 transition-colors">
              Terms &amp; Conditions
            </Link>
            <Link href="/cookie-policy" className="hover:text-slate-300 transition-colors">
              Cookie Policy
            </Link>
            <Link href="/accessibility" className="hover:text-slate-300 transition-colors">
              Accessibility (WCAG 2.2)
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
