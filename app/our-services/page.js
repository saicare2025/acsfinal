"use client";
import HeroSection2 from "@/components/homepage/HeroSection2";
import Testimonials3DCarousel from "@/components/homepage/TestmonialHero";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import HelpSection from "@/components/homepage/HowCan";
import CTASection from "@/components/homepage/CTA";
import MainLayout from "../MainLayout";
import CreditRepairProcess from "@/components/homepage/CreditRepairProcess ";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-100">
      <MainLayout>
        <HeroSection2 />
        <Testimonials3DCarousel />
        <WhyChooseUs />
        <HelpSection />
        <CreditRepairProcess/>
      </MainLayout>
    </main>
  );
}
