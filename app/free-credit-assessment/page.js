import React from 'react'
import MainLayout from '../MainLayout'
import HeroSection from '../../components/homepage/HeroSection4'
import PremiumTestimonialCarousel from '../../components/homepage/Testmonials'
import CTASection from '../../components/homepage/CTA'
import { generateMinimalStructuredData } from '../../utils/generateMinimalStructuredData'

const page = () => {
  // Generate structured data for this page
  const structuredData = generateMinimalStructuredData({
    pathname: "/free-credit-assessment",
    title: "Free Credit Assessment | Australian Credit Solutions",
    description: "Get a free, comprehensive credit assessment from Australian Credit Solutions. Discover how we can help improve your credit score.",
    isService: false
  });

  return (
    <div>
      <MainLayout>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData)
          }}
        />
        <HeroSection/>
        <PremiumTestimonialCarousel/>
        <CTASection/>
      </MainLayout>
    </div>
  )
}

export default page
