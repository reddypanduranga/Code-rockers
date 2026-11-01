import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { ValueProps } from "@/components/home/ValueProps";
import { FeaturedServices } from "@/components/home/FeaturedServices";
import { WhatWeBuild } from "@/components/home/WhatWeBuild";
import { ProcessSection } from "@/components/home/ProcessSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { WhyUsSection } from "@/components/home/WhyUsSection";
import { HomeFaq } from "@/components/home/HomeFaq";
import { FinalCtaSection } from "@/components/home/FinalCtaSection";

export const metadata: Metadata = {
  title: "Code Rockers — Technology That Moves Your Business Forward",
  description: "Code Rockers helps ambitious businesses build high-performance web applications, modern websites, mobile apps, AI integrations, and cloud infrastructure.",
  openGraph: {
    title: "Code Rockers — Technology That Moves Your Business Forward",
    description: "Premium IT services, software development, AI solutions, and cloud engineering.",
    type: "website",
    url: "https://coderockers.in"
  }
};

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Section 1: Hero */}
      <HeroSection />

      {/* Section 2: Trust & Value Proposition */}
      <ValueProps />

      {/* Section 3: Featured Services */}
      <FeaturedServices />

      {/* Section 4: What We Build */}
      <WhatWeBuild />

      {/* Section 5: Our Approach */}
      <ProcessSection />

      {/* Section 6: Industries */}
      <IndustriesSection />

      {/* Section 7: Featured Work / Concept Demonstrations */}
      <PortfolioPreview />

      {/* Section 8: Why Code Rockers */}
      <WhyUsSection />

      {/* Section 9: FAQs */}
      <HomeFaq />

      {/* Section 10: Final CTA */}
      <FinalCtaSection />
    </div>
  );
}
