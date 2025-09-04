import HeroSection from "./HeroSection2";
import TrustBadge from "./TrustBadge";
import WhyChooseUs from "./WhyChooseUs";
import HelpSection from "./HowCan";
import CompanyCarousel from "./CompanySection";
import HomeClientSections from "./HomeClientSections";
import CreditRepairSection from "./CreditRepair";
import CreditRepairProcess from "./CreditRepairProcess.js";
import Testimonials from "./Testmonials"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBadge />
      <Testimonials />
      <WhyChooseUs />
      <HelpSection />
      <CompanyCarousel />
      <CreditRepairSection />
      <CreditRepairProcess />
      <HomeClientSections />
    </main>
  );
}
