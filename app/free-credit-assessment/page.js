import React from 'react'
import MainLayout from '../MainLayout'
import HeroSection from '../../components/homepage/HeroSection4'
import PremiumTestimonialCarousel from '../../components/homepage/Testmonials'
import CTASection from '../../components/homepage/CTA'

const page = () => {
  return (
    <div>
      <MainLayout>
        <HeroSection/>
        <PremiumTestimonialCarousel/>
        <CTASection/>
      </MainLayout>
    </div>
  )
}

export default page
