
import CompanyCarousel from "./CompanySection";
import CreditRepairSection from "./CreditRepair";
import CreditRepairProcess from "./CreditRepairProcess ";
import CTASection from "./CTA";
import HeroSection from "./HeroSection";
import HelpSection from "./HowCan";
import LoanCalculator from "./LoanCalculator";
import ScrollTestimonials from "./ScrollTestimonials";
import Testimonials3DCarousel from "./Testmonials";
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
      <HelpSection/>
      <TransformationalJourney />
      <CompanyCarousel/>
      <CreditRepairProcess/>
      <VideoServicesSection/>
      <ScrollTestimonials/>
      <CTASection/>
      <LoanCalculator/>
    </main>
  );
}
