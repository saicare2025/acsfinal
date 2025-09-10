"use client";
import HeroSection from "../../components/homepage/HeroSection";
import Testimonials3DCarousel from "../../components/homepage/Testmonials";
import WhyChooseUs from "../../components/homepage/WhyChooseUs";
import HelpSection from "../../components/homepage/HowCan";
import MainLayout from "../MainLayout";
import CreditRepairProcess from "../../components/homepage/CreditRepairProcess";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";

import RelatedBlock from "@/app/_seo/RelatedBlock";

export default function HomePage() {
  // Generate structured data for services overview page
  const structuredData = generateMinimalStructuredData({
    pathname: "/our-services",
    title: "Our Credit Repair Services | Australian Credit Solutions",
    description: "Comprehensive credit repair services including default removal, credit enquiry removal, court judgment assistance, and credit score improvement across Australia.",
    isService: false
  });

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <MainLayout>
        <HeroSection />
        <Testimonials3DCarousel />
        <WhyChooseUs />
        <HelpSection />
        <CreditRepairProcess/>
      </MainLayout>
    </main>
  );
}
