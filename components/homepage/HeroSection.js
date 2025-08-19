'use client';
import Image from 'next/image';
import heroImage from '@/app/assets/hero.webp';
import CreditAssessmentForm from './HeroForm';
import {
  CurrencyDollarIcon,
  ShieldCheckIcon,
  LockClosedIcon,
} from '@heroicons/react/24/solid';
import { MotionFadeUp, MotionScaleIn } from './MotionWrapper';

const FeatureItem = ({ Icon, title, description }) => (
  <li className="flex items-start gap-3">
    <div className="bg-green-100 p-2 rounded-full" aria-hidden="true">
      <Icon className="h-5 w-5 text-green-700" />
    </div>
    <div>
      <h3 className="font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  </li>
);


export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-white to-blue-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col-reverse lg:flex-row items-center relative z-10 gap-8">
          {/* Left Side - Content */}
          <div className="w-full lg:w-3/5 flex flex-col">
            <MotionFadeUp className="mb-8">
              <h1 className="text-3xl text-center lg:text-start sm:text-5xl md:text-6xl font-bold leading-tight mb-4 text-gray-700">
                Get Your <span className="text-blue">Free Credit</span> Assessment Today
              </h1>

              <h2 className="text-xl sm:text-2xl text-center lg:text-start font-semibold text-blue/90 mb-4">
                No Win, No Fee - Terms Apply*
              </h2>

              <MotionFadeUp delay={0.05}>
                <div className="w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                  <CreditAssessmentForm />
                </div>
              </MotionFadeUp>
            </MotionFadeUp>
          </div>

          {/* Right Side - Image and Features */}
          <div className="w-full lg:w-2/5 flex flex-col">
            <MotionScaleIn>
              <div className="relative rounded-2xl overflow-hidden">
                <Image
                  src={heroImage}
                  alt="Financial consultation"
                  width={600}
                  height={600}
                  priority
                  fetchPriority="high"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 80vw, (max-width: 1024px) 50vw, 40vw"
                  className="w-full max-h-[400px] object-contain"
                />
              </div>
            </MotionScaleIn>

            <MotionFadeUp delay={0.1}>
              <div className="bg-white p-4 rounded-2xl shadow-lg border border-gray-100">
                <ul className="space-y-4">
                  <FeatureItem
                    Icon={CurrencyDollarIcon}
                    title="Free Credit Report Review"
                    description="Comprehensive analysis at no cost"
                  />
                  <FeatureItem
                    Icon={ShieldCheckIcon}
                    title="No Win, No Fee * Terms Apply"
                    description="A one-off $330 admin fee applies regardless of outcome."
                  />
                  <FeatureItem
                    Icon={LockClosedIcon}
                    title="100% Confidential & Secure"
                    description="Your data is protected with bank-level security"
                  />
                </ul>
              </div>
            </MotionFadeUp>
          </div>
        </div>
      </section>

      {/* Pricing Disclosure Section */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MotionFadeUp className="max-w-3xl mx-auto text-center">
            <p className="text-gray-600 text-sm md:text-base">
              *. A one-off $330 administration fee applies regardless of the result. In the past year, more than 98% of our disputes have achieved a successful resolution.
            </p>
          </MotionFadeUp>
        </div>
      </section>
    </>
  );
}
