import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://coderockers.com"),
  title: {
    default: "Code Rockers — Premium IT Services & Software Development",
    template: "%s | Code Rockers"
  },
  description: "Code Rockers builds digital products, modern web applications, AI integrations, and cloud infrastructure for ambitious startups and growing enterprises.",
  keywords: [
    "software development",
    "web application development",
    "IT services company",
    "AI solutions",
    "cloud engineering",
    "Next.js development",
    "custom software",
    "mobile app development"
  ],
  authors: [{ name: "Code Rockers Team" }],
  creator: "Code Rockers",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://coderockers.com",
    siteName: "Code Rockers",
    title: "Code Rockers — Technology That Moves Your Business Forward",
    description: "Premium IT services, software development, AI solutions, and cloud engineering."
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Rockers — Technology That Moves Your Business Forward",
    description: "Premium IT services, software development, AI solutions, and cloud engineering."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationStructuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Code Rockers",
    "url": "https://coderockers.com",
    "logo": "https://coderockers.com/logo.png",
    "description": "Premium IT services, software development, AI solutions, and cloud engineering.",
    "slogan": "We Code. We Create. We Rock.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "coderockersgroup@gmail.com"
    }
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased h-full`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationStructuredData) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white text-slate-900 font-sans" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
