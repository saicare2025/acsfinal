"use client";
import HeroSection from "@/components/homepage/HeroSection";
import Testimonials3DCarousel from "@/components/homepage/TestmonialHero";
import WhyChooseUs from "@/components/homepage/WhyChooseUs";
import HelpSection from "@/components/homepage/HowCan";
import MainLayout from "../MainLayout";
import CreditRepairProcess from "@/components/homepage/CreditRepairProcess";


export default function HomePage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-blue-100">
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
