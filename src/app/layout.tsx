import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://coderockers.in";

// ─── Root Metadata ──────────────────────────────────────────────────────────
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Code Rockers — Premium IT Services & Software Development | Hyderabad",
    template: "%s | Code Rockers",
  },
  description:
    "Code Rockers is a Hyderabad-based IT services & software development company. We build custom web apps, mobile apps, AI integrations, SaaS products, and cloud infrastructure. We Code. We Create. We Rock.",
  keywords: [
    "IT services company Hyderabad",
    "software development Hyderabad",
    "custom software development India",
    "web application development",
    "mobile app development",
    "AI integration services",
    "cloud solutions India",
    "Next.js development company",
    "SaaS product engineering",
    "MVP development startup",
    "digital transformation Hyderabad",
    "Code Rockers",
  ],
  authors: [{ name: "Code Rockers", url: BASE_URL }],
  creator: "Code Rockers",
  publisher: "Code Rockers",
  alternates: {
    canonical: BASE_URL,
    languages: { "en-IN": BASE_URL },
  },
  category: "Technology",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: BASE_URL,
    siteName: "Code Rockers",
    title: "Code Rockers — We Code. We Create. We Rock.",
    description:
      "Premium IT services, custom software development, AI solutions, cloud engineering, and SaaS product development — Hyderabad, India.",
    images: [
      {
        url: `${BASE_URL}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Code Rockers — Premium IT Services & Software Development",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@CodeRockers",
    creator: "@CodeRockers",
    title: "Code Rockers — We Code. We Create. We Rock.",
    description:
      "Hyderabad's premium IT services & software development company — custom web apps, AI, cloud, SaaS.",
    images: [`${BASE_URL}/og-image.png`],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/site.webmanifest",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Code Rockers",
  },
  verification: {
    // google: "PASTE_GOOGLE_SEARCH_CONSOLE_CODE_HERE",
    // yandex: "PASTE_YANDEX_CODE_HERE",
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// ─── JSON-LD: Organization + LocalBusiness ─────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${BASE_URL}/#organization`,
  name: "Code Rockers",
  alternateName: "Code Rockers Group",
  url: BASE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${BASE_URL}/logo.png`,
    width: 400,
    height: 133,
  },
  image: `${BASE_URL}/og-image.png`,
  description:
    "Code Rockers is a premium IT services and software development company in Hyderabad, India. We specialise in custom web applications, mobile apps, AI integration, cloud solutions, SaaS product engineering, and digital transformation.",
  slogan: "We Code. We Create. We Rock.",
  foundingDate: "2020",
  address: {
    "@type": "PostalAddress",
    streetAddress: "HITEC City, Madhapur",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    postalCode: "500081",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 17.4435,
    longitude: 78.3772,
  },
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "coderockersgroup@gmail.com",
      telephone: "+91-40-4852-9100",
      areaServed: ["IN", "US", "GB", "AU", "CA"],
      availableLanguage: ["English", "Telugu", "Hindi"],
    },
  ],
  sameAs: [
    "https://linkedin.com/company/code-rockers",
    "https://github.com/code-rockers",
    "https://twitter.com/CodeRockers",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Services & Software Development",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Web Application Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mobile App Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Integration & Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud Solutions & DevOps" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Product Engineering" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "MVP Development" } },
    ],
  },
  openingHours: "Mo-Fr 09:00-19:00",
  priceRange: "₹₹",
};

// ─── JSON-LD: WebSite + Sitelinks SearchBox ────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${BASE_URL}/#website`,
  url: BASE_URL,
  name: "Code Rockers",
  description: "Premium IT services & software development — Hyderabad, India.",
  publisher: { "@id": `${BASE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${BASE_URL}/services?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
  inLanguage: "en-IN",
};

// ─── JSON-LD: Sitewide Breadcrumb ──────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: BASE_URL },
    { "@type": "ListItem", position: 2, name: "Services", item: `${BASE_URL}/services` },
    { "@type": "ListItem", position: 3, name: "Solutions", item: `${BASE_URL}/solutions` },
    { "@type": "ListItem", position: 4, name: "Portfolio", item: `${BASE_URL}/portfolio` },
    { "@type": "ListItem", position: 5, name: "About", item: `${BASE_URL}/about` },
    { "@type": "ListItem", position: 6, name: "Contact", item: `${BASE_URL}/contact` },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-IN"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased h-full`}
      suppressHydrationWarning
    >
      <head>
        {/* ── JSON-LD Structured Data ── */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

        {/* ── Geo / Local SEO ── */}
        <meta name="geo.region" content="IN-TG" />
        <meta name="geo.placename" content="Hyderabad, Telangana, India" />
        <meta name="geo.position" content="17.4435;78.3772" />
        <meta name="ICBM" content="17.4435, 78.3772" />

        {/* ── PWA / Theme ── */}
        <meta name="theme-color" content="#2563eb" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="application-name" content="Code Rockers" />
        <meta name="msapplication-TileColor" content="#2563eb" />

        {/* ── Content / AEO Entity Hints ── */}
        <meta httpEquiv="content-language" content="en-IN" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content="English" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="global" />
        <meta name="subject" content="IT Services and Software Development" />
        <meta name="classification" content="Business, Technology, Software" />
        <meta name="category" content="Software Development, IT Services" />
        <meta name="abstract" content="Code Rockers builds custom software, web and mobile applications, AI integrations, and cloud infrastructure for businesses worldwide from Hyderabad, India." />

        {/* ── Performance Preconnects (Core Web Vitals) ── */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* ── Google Tag Manager — add your GTM-XXXXXXX ID below ── */}
        {/*
        <script dangerouslySetInnerHTML={{ __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-XXXXXXX');` }} />
        */}

        {/* ── Google Analytics (GA4) — add your G-XXXXXXXXXX ID below ── */}
        {/*
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX" />
        <script dangerouslySetInnerHTML={{ __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','G-XXXXXXXXXX');` }} />
        */}
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans" suppressHydrationWarning>
        {/* GTM noscript — uncomment with your GTM ID */}
        {/* <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX" height="0" width="0" style={{display:"none",visibility:"hidden"}} /></noscript> */}
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

