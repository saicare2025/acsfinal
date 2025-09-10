"use client";
import MainLayout from "../MainLayout";
import HeroSection from "@/components/homepage/HeroSection3";
import { generateMinimalStructuredData } from "../../utils/generateMinimalStructuredData";

import RelatedBlock from "@/app/_seo/RelatedBlock";

const ContactPage = () => {
  // Generate structured data for this page
  const structuredData = generateMinimalStructuredData({
    pathname: "/contact-us",
    title: "Contact Us | Australian Credit Solutions",
    description: "Contact Australian Credit Solutions for professional credit repair services. Call, email, or visit our Melbourne office for expert credit help.",
    isService: false
  });

  return (
    <MainLayout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
      />
      <HeroSection/>
    </MainLayout>
  );
};

export default ContactPage;