import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://coderockers.in";

  return {
    rules: [
      // ── Primary crawlers: allow everything ────────────────────────────────
      {
        userAgent: ["Googlebot", "Bingbot", "Slurp", "DuckDuckBot", "Baiduspider", "YandexBot", "facebot", "ia_archiver"],
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // ── AI / LLM crawlers (GEO — allow for generative engine indexing) ───
      {
        userAgent: [
          "GPTBot",           // OpenAI
          "ChatGPT-User",     // ChatGPT browse
          "OAI-SearchBot",    // OpenAI search
          "anthropic-ai",     // Claude / Anthropic
          "Claude-Web",
          "ClaudeBot",
          "Googlebot-Extended",
          "Google-Extended",  // Gemini / SGE
          "PerplexityBot",    // Perplexity AI
          "YouBot",           // You.com
          "cohere-ai",        // Cohere
        ],
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // ── Block bad / scraper bots ──────────────────────────────────────────
      {
        userAgent: ["AhrefsBot", "SemrushBot", "MJ12bot", "DotBot", "Screaming Frog SEO Spider"],
        disallow: "/",
      },
      // ── Default fallback: allow all ───────────────────────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
    ],
    sitemap: [
      `${baseUrl}/sitemap.xml`,
      `${baseUrl}/sitemap-images.xml`,
    ],
    host: baseUrl,
  };
}
