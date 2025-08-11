
import CreditRepairSection from "./CreditRepair";
import CTASection from "./CTA";
import HeroSection from "./HeroSection";
import HelpSection from "./HowCan";
import LoanCalculator from "./LoanCalculator";
import Testimonials3DCarousel from "./Testmonial";
import TransformationalJourney from "./TransformationalJourney";
import TrustBadge from "./TrustBadge";
import VideoServicesSection from "./VideoServicesSection";
import WhyChooseUs from "./WhyChooseUs";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <TrustBadge />
      <Testimonials3DCarousel />
      <WhyChooseUs />
      <TransformationalJourney />
      <VideoServicesSection/>
      <HelpSection/>
      <CreditRepairSection/>
      <CTASection/>
      <LoanCalculator/>
    </main>
  );
}
