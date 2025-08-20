import HeroSection from "./HeroSection2";
import TrustBadge from "./TrustBadge";
import WhyChooseUs from "./WhyChooseUs";
import HelpSection from "./HowCan";
import CompanyCarousel from "./CompanySection";

import CTASection from "./CTA";
import HomeClientSections from "./HomeClientSections";
import CreditRepairSection from "./CreditRepair";
import CreditRepairProcess from "./CreditRepairProcess.js";
import PremiumTestimonialCarousel2 from "./Testmonials";




export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBadge />
      <PremiumTestimonialCarousel2/>
      <WhyChooseUs />
      <HelpSection />
      <CompanyCarousel />
      <CreditRepairSection />
      <CreditRepairProcess/>
      <HomeClientSections />
    </main>
  );
}
