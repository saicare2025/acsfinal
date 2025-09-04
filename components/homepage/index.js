import HeroSection from "./HeroSection2";
import TrustBadge from "./TrustBadge";
import WhyChooseUs from "./WhyChooseUs";
import HelpSection from "./HowCan";
import CompanyCarousel from "./CompanySection";

import CTASection from "./CTA";
import HomeClientSections from "./HomeClientSections";
import CreditRepairSection from "./CreditRepair";
import CreditRepairProcess from "./CreditRepairProcess.js";
import ProductReviewWidget from "./TestmonialProduct"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBadge />
      <ProductReviewWidget
        // brandId can be overridden if needed:
        // brandId="407543ca-1287-43ab-a66b-5f78dfd94a6a"
        className="rounded-2xl border p-4"
        placeholder="Fetching verified reviews…"
      />
      <WhyChooseUs />
      <HelpSection />
      <CompanyCarousel />
      <CreditRepairSection />
      <CreditRepairProcess />
      <HomeClientSections />
    </main>
  );
}
