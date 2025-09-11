"use client";

import MainLayout from "../MainLayout";

import Link from "next/link";
import RelatedBlock from "@/app/_seo/RelatedBlock";

export default function PrivacyPolicyPage() {
  return (
    <MainLayout>
      <div className="bg-blue-50 min-h-screen py-4 lg:py-10 px-2 sm:px-12 lg:px-20 text-blue">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 sm:p-12">
          <h1 className="text-3xl font-bold mb-6 text-blue">
            Privacy Policy
          </h1>
          <div className="space-y-8 text-base leading-relaxed">
            {sectionTitles.map((title, idx) => (
              <section key={idx}>
                <h2 className="text-xl font-semibold text-blue mb-2">
                  {idx + 1}. {title}
                </h2>
                {sectionContent[idx].map((para, pIdx) => (
                  <p key={pIdx} className="mb-2">
                   <Link href="/" className="text-blue-600 hover:text-blue-800 underline"></Link>  {para}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}

const sectionTitles = [
  "We respect your privacy",
  "Collection of personal information",
  "How we collect your personal information",
  "Use of your personal information",
  "Disclosure of your personal information",
  "Security of your personal information",
  "Access to your personal information",
  "Complaints about privacy",
  "Changes to Privacy Policy",
  "Website",
];

const sectionContent = [
  [
    "a. Australian Credit Solutions Pty ltd respects your right to privacy and is committed to safeguarding the privacy of our customers and website visitors. We adhere to the Australian Privacy Principles contained in the Privacy Act 1988 (Cth). This policy sets out how we collect and treat your personal information.",
    "b. 'Personal information' is information we hold which is identifiable as being about you.",
  ],
  [
    "a. Australian Credit Solutions Pty ltd will, from time to time, receive and store personal information you enter onto our website, provided to us directly or given to us in other forms.",
    "b. You may provide basic information such as your name, phone number, address and email address to enable us to send information, provide updates and process your product or service order. We may collect additional information at other times, including but not limited to, when you provide feedback, information about your personal or business affairs, change your preferences, respond to surveys, provide financial or credit card information, or communicate with customer support.",
    "c. Additionally, we may also collect any other information you provide while interacting with us.",
  ],
  [
    "a. We may use personal information collected from you to provide you with information, updates and our services. We may also make you aware of new and additional products, services and opportunities available to you, and to improve our products and services.",
    "b. We may contact you by a variety of measures including telephone, email, SMS or mail.",
  ],
  [
    "a. Australian Credit Solutions Pty ltd may use personal information collected from you to provide you with information, updates and our services. We may also make you aware of new and additional products, services and opportunities available to you.",
    "b. We may contact you by telephone, email, SMS or mail.",
  ],
  [
    "a. We may disclose your personal information to our employees, officers, insurers, professional advisers, agents, suppliers or subcontractors insofar as reasonably necessary for the purposes set out in this Policy.",
    "b. We may disclose personal information to comply with legal requirements.",
    "c. We may use your personal information to protect the rights, property or safety of our company, website, customers or third parties.",
    "d. Information we collect may be stored, processed or transferred between parties outside of Australia, including the Philippines.",
    "e. If there is a change of control in our business, we reserve the right to transfer user databases together with any personal information contained in those databases.",
    "f. By providing personal information, you consent to the terms of this Privacy Policy and disclosure as outlined.",
  ],
  [
    "a. We are committed to ensuring that the information you provide to us is secure, with suitable procedures to safeguard and secure information from misuse, interference, loss, and unauthorised access.",
    "b. The transmission and exchange of information is at your own risk; we cannot guarantee the security of transmitted information.",
  ],
  [
    "a. You may request details of personal information that we hold about you in accordance with the Privacy Act 1988 (Cth). A small administrative fee may apply. If you believe information we hold is inaccurate, outdated, incomplete, irrelevant or misleading, please email us at info@australiancreditsolutions.com.au.",
    "b. We reserve the right to refuse to provide information as set out in the Privacy Act.",
  ],
  [
    "a. If you have complaints about our privacy practices, please send details to Level 8 805/220 Collins Street, Melbourne, Victoria, 3000. We take complaints seriously and will respond shortly after receipt.",
  ],
  [
    "a. We may change this Privacy Policy in the future, with modifications effective immediately upon posting on our website. Please review it periodically.",
  ],
  [
    "When you visit our website, we may collect certain information such as browser type, operating system, and referring website to analyse usage.",
    "Cookies: We may use cookies to identify you and store details about your use of the site. You can choose to reject cookies by changing browser settings, though this may limit functionality.",
    "Third party sites: Our site may have links to other websites for your convenience. We are not responsible for the privacy practices of other websites and encourage you to read their privacy statements.",
  ],
];
