import HeroSection from "./HeroMain";
import TrustBadge from "./TrustBadge";
import WhyChooseUs from "./WhyChooseUs";
import HelpSection from "./HowCan";
import CompanyCarousel from "./CompanySection";
import HomeClientSections from "./HomeClientSections";
import CreditRepairSection from "./CreditRepair";
import CreditRepairProcess from "./CreditRepairProcess.js";
import ReviewWidget from "../../components/homepage/TestmonialProduct";
import LoanApprovals from "./LoanApprovals";
import TestimonialShowcase from "./VideoTestimonials";
import FAQ from "./Faq";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBadge />
      <TestimonialShowcase />
      <ReviewWidget />

      <WhyChooseUs />
      <CompanyCarousel />
      <HelpSection />
      <CreditRepairSection />
      <CreditRepairProcess />
      <HomeClientSections />
      <LoanApprovals />
      <FAQ />
    </main>
  );
}
