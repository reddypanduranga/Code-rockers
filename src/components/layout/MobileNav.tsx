"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { getServicesByCategory } from "@/data/services";
import { X, ChevronDown, ChevronRight, ArrowRight, PhoneCall } from "lucide-react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose }) => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const categories = getServicesByCategory();

  if (!isOpen) return null;

  const toggleCategory = (catTitle: string) => {
    setExpandedCategory(expandedCategory === catTitle ? null : catTitle);
  };

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-2xl flex flex-col z-50 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100">
          <Link href="/" onClick={onClose} className="flex items-center">
            <Image
              src="/logo.png"
              alt="Code Rockers — We Code. We Create. We Rock."
              width={160}
              height={52}
              className="h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
            aria-label="Close navigation menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Nav Links */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          <nav className="space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>

            {/* Services with Nested Accordion */}
            <div className="space-y-1">
              <div className="flex items-center justify-between px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50">
                <Link href="/services" onClick={onClose} className="flex-1 text-slate-800 hover:text-blue-600">
                  Services (29)
                </Link>
              </div>

              <div className="pl-3 space-y-1">
                {categories.map((cat) => {
                  const isExpanded = expandedCategory === cat.title;
                  return (
                    <div key={cat.title} className="rounded-lg border border-slate-100 overflow-hidden mb-1">
                      <button
                        onClick={() => toggleCategory(cat.title)}
                        className="w-full flex items-center justify-between px-3 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700 bg-slate-50/70 hover:bg-slate-100 transition-colors"
                      >
                        <span>{cat.title} ({cat.services.length})</span>
                        {isExpanded ? (
                          <ChevronDown className="w-4 h-4 text-slate-500" />
                        ) : (
                          <ChevronRight className="w-4 h-4 text-slate-500" />
                        )}
                      </button>
                      {isExpanded && (
                        <ul className="px-2 py-2 space-y-1 bg-white">
                          {cat.services.map((svc) => (
                            <li key={svc.slug}>
                              <Link
                                href={`/services/${svc.slug}`}
                                onClick={onClose}
                                className="block px-2.5 py-1.5 text-xs text-slate-600 hover:text-blue-600 hover:bg-blue-50/50 rounded transition-colors"
                              >
                                {svc.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            <Link
              href="/solutions"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Solutions
            </Link>

            <Link
              href="/industries"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Industries
            </Link>

            <Link
              href="/portfolio"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Portfolio &amp; Work
            </Link>

            <Link
              href="/case-studies"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Case Studies
            </Link>

            <Link
              href="/about"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              About Us
            </Link>

            <Link
              href="/insights"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Insights &amp; Blog
            </Link>

            <Link
              href="/faq"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              FAQs
            </Link>

            <Link
              href="/contact"
              onClick={onClose}
              className="block px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>

        {/* Action CTAs in drawer */}
        <div className="p-6 border-t border-slate-100 bg-slate-50 space-y-3">
          <Link
            href="/start-a-project"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold transition-colors shadow-sm"
          >
            Start a Project
            <ArrowRight className="w-4 h-4" />
          </Link>
          <Link
            href="/book-a-meeting"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-800 text-sm font-semibold transition-colors"
          >
            <PhoneCall className="w-4 h-4 text-blue-600" />
            Book a Meeting
          </Link>
        </div>
      </div>
    </div>
  );
};
