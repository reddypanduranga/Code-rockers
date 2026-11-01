import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { getAllArticles } from "@/data/insights";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { ArrowRight, Sparkles, Clock, Calendar, Tag } from "lucide-react";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Insights & Technical Blog | Code Rockers",
  description: "Read practical software engineering essays, AI implementation guides, and cloud architecture strategies written by the Code Rockers team."
};

export default function InsightsPage() {
  const articles = getAllArticles();

  return (
    <div className="bg-white">
      {/* Top Banner */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Insights" }]} />
          
          <div className="mt-4 max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Engineering Insights &amp; Articles</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight">
              Thoughts on Software Architecture, AI, and Product Engineering
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              In-depth essays, architectural decision records, and practical guides drawn directly from our day-to-day engineering practice.
            </p>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-blue-400 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div className="p-7 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed">
                  {article.excerpt}
                </p>

                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((t) => (
                    <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & Read Link */}
              <div className="p-7 pt-0 border-t border-slate-100 flex items-center justify-between mt-4">
                <div className="text-xs text-slate-500 pt-4">
                  <span className="font-semibold text-slate-800 block">{article.author.name}</span>
                  <span>{formatDate(article.publishedDate)}</span>
                </div>
                <Link
                  href={`/insights/${article.slug}`}
                  className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 transition-colors pt-4"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
