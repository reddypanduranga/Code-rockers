import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getAllArticles, getArticleBySlug } from "@/data/insights";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Clock, Calendar, ArrowLeft, ArrowRight, Share2, Sparkles } from "lucide-react";
import { formatDate } from "@/lib/utils";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  return {
    title: `${article.title} | Code Rockers Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: "article",
      publishedTime: article.publishedDate,
      authors: [article.author.name],
      url: `https://coderockers.com/insights/${article.slug}`
    }
  };
}

export default async function ArticleDetailPage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 2);

  return (
    <div className="bg-white">
      {/* Top Header */}
      <div className="bg-slate-50 border-b border-slate-200/80 py-12 lg:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <Breadcrumbs
            items={[
              { label: "Insights", href: "/insights" },
              { label: article.category, href: "/insights" },
              { label: article.title }
            ]}
          />

          <div className="space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-semibold uppercase tracking-wider">
              {article.category}
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-slate-600 leading-relaxed font-normal">
              {article.excerpt}
            </p>

            <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
              <div className="flex items-center gap-4">
                <span className="font-semibold text-slate-800">{article.author.name}</span>
                <span>·</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{formatDate(article.publishedDate)}</span>
                </div>
                <span>·</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Body */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-12">
        <div className="prose prose-slate prose-lg max-w-none space-y-8">
          {article.content.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                {section.heading}
              </h2>
              {section.paragraphs.map((p, pIdx) => (
                <p key={pIdx} className="text-slate-700 leading-relaxed text-base sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="pt-8 border-t border-slate-200 flex flex-wrap items-center gap-2">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider mr-2">Tags:</span>
          {article.tags.map((t) => (
            <span key={t} className="text-xs font-mono px-3 py-1 rounded-full bg-slate-100 text-slate-700">
              #{t}
            </span>
          ))}
        </div>

        {/* Author Bio Box */}
        <div className="rounded-2xl bg-slate-50 border border-slate-200 p-6 flex flex-col sm:flex-row items-center gap-6">
          <div className="w-14 h-14 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-mono font-bold text-xl shadow-md flex-shrink-0">
            CR
          </div>
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-bold text-slate-900">{article.author.name}</h4>
            <p className="text-xs font-medium text-blue-600">{article.author.role}</p>
            <p className="text-xs text-slate-600 leading-relaxed pt-1">
              Code Rockers is a modern technology partner building web applications, mobile software, generative AI integrations, and cloud architectures.
            </p>
          </div>
        </div>

        {/* Related Articles */}
        <div className="space-y-6 pt-6 border-t border-slate-200">
          <h3 className="text-xl font-bold text-slate-900">
            More Technical Insights
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {relatedArticles.map((rel) => (
              <Link
                key={rel.slug}
                href={`/insights/${rel.slug}`}
                className="group p-6 rounded-2xl border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <span className="text-xs text-blue-600 font-semibold">{rel.category}</span>
                  <h4 className="text-base font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-1 mb-2">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-slate-600 line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
                <div className="pt-4 flex items-center text-xs font-bold text-blue-600">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
