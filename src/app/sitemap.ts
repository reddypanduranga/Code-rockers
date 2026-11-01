import { MetadataRoute } from "next";
import { getAllServices } from "@/data/services";
import { getAllSolutions } from "@/data/solutions";
import { getAllIndustries } from "@/data/industries";
import { getAllArticles } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://coderockers.com";
  const now = new Date("2026-11-01");

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/services`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/solutions`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${baseUrl}/industries`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/portfolio`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/case-studies`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/insights`, lastModified: now, changeFrequency: "daily", priority: 0.8 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/start-a-project`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/book-a-meeting`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/terms-and-conditions`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/cookie-policy`, lastModified: now, changeFrequency: "yearly", priority: 0.3 },
    { url: `${baseUrl}/accessibility`, lastModified: now, changeFrequency: "yearly", priority: 0.3 }
  ];

  // All 29 Services
  const serviceRoutes: MetadataRoute.Sitemap = getAllServices().map((svc) => ({
    url: `${baseUrl}/services/${svc.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85
  }));

  // All 8 Solutions
  const solutionRoutes: MetadataRoute.Sitemap = getAllSolutions().map((sol) => ({
    url: `${baseUrl}/solutions/${sol.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.85
  }));

  // All 7 Industries
  const industryRoutes: MetadataRoute.Sitemap = getAllIndustries().map((ind) => ({
    url: `${baseUrl}/industries/${ind.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8
  }));

  // Insights Articles
  const articleRoutes: MetadataRoute.Sitemap = getAllArticles().map((art) => ({
    url: `${baseUrl}/insights/${art.slug}`,
    lastModified: new Date(art.publishedDate),
    changeFrequency: "monthly",
    priority: 0.75
  }));

  return [...staticRoutes, ...serviceRoutes, ...solutionRoutes, ...industryRoutes, ...articleRoutes];
}
