"use client"
import React from 'react'
import MainLayout from '../MainLayout'
import HeroSection from '@/components/homepage/HeroSection'
import PremiumTestimonialCarousel from '@/components/homepage/Testmonials'
import VideoServicesSection from '@/components/homepage/VideoServicesSection'
import HelpSection from '@/components/homepage/HowCan'
import CreditRepairSection from '@/components/homepage/CreditRepair'
import WhyChooseUs from '@/components/homepage/WhyChooseUs'
import HowWorks from '@/components/HowWork'

const page = () => {
  return (
    <div className='bg-blue-50'>
      <MainLayout>
        <HeroSection/>
        <PremiumTestimonialCarousel/>
        <VideoServicesSection/>
        <HelpSection/>
        <CreditRepairSection/>
        <WhyChooseUs/>
        <HowWorks/>
      </MainLayout>
    </div>
  )
}

export default page
