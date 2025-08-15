"use client"
import React from 'react'
import Head from 'next/head'
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
      <Head>
        <title>Credit Repair & Debt Solutions | Our Services | Australian Credit Solutions</title>
        <meta name="description" content="Discover a full suite of expert credit repair and debt resolution services at Australian Credit Solutions. We help Australians improve credit scores, manage debt, and achieve financial freedom." />
        <meta name="keywords" content="credit repair services, debt solutions, credit fix Australia, improve credit score, Australian Credit Solutions, financial help, credit assessment, credit score improvement" />
      </Head>
      <MainLayout>
        <HeroSection />
        <PremiumTestimonialCarousel />
        <VideoServicesSection />
        <HelpSection />
        <CreditRepairSection />
        <WhyChooseUs />
        <HowWorks />
      </MainLayout>
    </div>
  )
}

export default page
