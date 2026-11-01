"use client";

import React from "react";
import Link from "next/link";
import { getServicesByCategory } from "@/data/services";
import { ArrowRight, Sparkles, Code2, Globe, Cpu, Smartphone, Layers, Server } from "lucide-react";

interface ServicesMegaMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ServicesMegaMenu: React.FC<ServicesMegaMenuProps> = ({ isOpen, onClose }) => {
  const categories = getServicesByCategory();

  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Services Mega Menu"
      className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-slate-200 shadow-2xl transition-all duration-200 z-50 animate-in fade-in slide-in-from-top-2"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div key={category.slug} className="space-y-3">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <span className="w-2 h-2 rounded-full bg-blue-600 inline-block" />
                <h3 className="text-sm font-semibold text-slate-900 uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {category.services.map((service) => (
                  <li key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      onClick={onClose}
                      className="group flex flex-col p-2 rounded-lg hover:bg-slate-50 transition-colors"
                    >
                      <span className="text-sm font-medium text-slate-800 group-hover:text-blue-600 flex items-center justify-between">
                        {service.title}
                        <ArrowRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-blue-600" />
                      </span>
                      <span className="text-xs text-slate-500 line-clamp-1 mt-0.5">
                        {service.shortDescription}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Featured bottom CTA bar */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50/70 p-4 rounded-xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-blue-600/10 flex items-center justify-center text-blue-600">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Need a tailored engineering architecture?
              </p>
              <p className="text-xs text-slate-500">
                Explore all 29 services or consult directly with our senior technology team.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/services"
              onClick={onClose}
              className="text-xs font-semibold text-slate-700 hover:text-blue-600 transition-colors px-3 py-2 rounded-lg hover:bg-white"
            >
              Browse All Services Directory →
            </Link>
            <Link
              href="/book-a-meeting"
              onClick={onClose}
              className="text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-colors px-4 py-2 rounded-lg shadow-sm"
            >
              Book a Strategy Call
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
