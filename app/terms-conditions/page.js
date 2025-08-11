"use client";

import MainLayout from "../MainLayout";

export default function TermsAndConditionsPage() {
  return (
    <MainLayout>
      <div className=" min-h-screen py-4 lg:py-10 px-2 sm:px-12 lg:px-20 text-blue">
        <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-8 sm:p-12">
          <h1 className="text-3xl font-bold mb-6 text-blue">
            Terms and Conditions of Use
          </h1>
          <div className="space-y-8 text-sm leading-relaxed">
            {sectionTitles.map((title, idx) => (
              <section key={idx}>
                <h2 className="text-xl font-semibold text-blue mb-2">
                  {idx + 1}. {title}
                </h2>
                {sectionContent[idx].map((para, pIdx) => (
                  <p key={pIdx} className="mb-2">
                    {para}
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
  "About the Website",
  "Acceptance of the Terms",
  "Registration to use the Services",
  "Your obligations as a Member",
  "Payment",
  "Refund Policy",
  "Copyright and Intellectual Property",
  "Privacy",
  "General Disclaimer",
  "Limitation of liability",
  "Termination of Contract",
  "Indemnity",
  "Dispute Resolution",
  "Venue and Jurisdiction",
  "Governing Law",
  "Independent Legal Advice",
  "Severance",
];

const sectionContent = [
  [
    "a. Welcome to www.australiancreditsolutions.com.au (the 'Website'). The Website Credit Repair & Debt Negotiation (the 'Services').",
    "b. The Website is operated by Australian Credit Solutions Pty ltd (ACN 650730699). Access to and use of the Website, or any of its associated Products or Services, is provided by Australian Credit Solutions Pty ltd. Please read these terms and conditions (the 'Terms') carefully. By using, browsing and/or reading the Website, this signifies that you have read, understood and agree to be bound by the Terms. If you do not agree with the Terms, you must cease usage of the Website, or any of Services, immediately.",
    "c. Australian Credit Solutions Pty ltd reserves the right to review and change any of the Terms by updating this page at its sole discretion. When Australian Credit Solutions Pty ltd updates the Terms, it will use reasonable endeavours to provide you with notice of updates to the Terms. Any changes to the Terms take immediate effect from the date of their publication. Before you continue, we recommend you keep a copy of the Terms for your records.",
  ],
  [
    "a. You accept the Terms by remaining on the Website. You may also accept the Terms by clicking to accept or agree to the Terms where this option is made available to you by Australian Credit Solutions Pty ltd in the user interface.",
  ],
  [
    "a. In order to access the Services, you must first register for an account through the Website (the 'Account').",
    "b. As part of the registration process, or as part of your continued use of the Services, you may be required to provide personal information about yourself...",
    "c. You warrant that any information you give to Australian Credit Solutions Pty ltd...",
    "d. Once you have completed the registration process, you will be a registered member...",
    "e. You may not use the Services and may not accept the Terms if you are not of legal age or barred under law.",
  ],
  [
    "a. As a Member, you agree to comply with the following: use the Services only for permitted purposes, protect your password, no commercial use without approval, no illegal or unauthorised use, no automated use of the Website or its Services.",
  ],
  [
    "a. Where the option is given to you, you may make payment for the Services by EFT, Credit Card, or PayPal.",
    "b. All payments are made using PayAdvantage...",
    "c. You acknowledge and agree that returned or denied payments incur costs.",
    "d. Australian Credit Solutions Pty ltd can vary the Services Fee at any time.",
  ],
  [
    "Australian Credit Solutions Pty ltd will only provide you with a refund in the event they are unable to continue to provide the Services or if deemed reasonable under the circumstances.",
  ],
  [
    "a. The Website, the Services and all related products are subject to copyright...",
    "b. All trademarks and trade names are owned by Australian Credit Solutions Pty ltd, granting you a limited license...",
    "c. No other rights granted; all others reserved.",
    "d. You may not broadcast, republish, upload, transmit, post, distribute, adapt or change the Services without permission.",
  ],
  [
    "a. Australian Credit Solutions Pty ltd takes your privacy seriously and any information provided through your use of the Website and/or Services are subject to its Privacy Policy.",
  ],
  [
    "a. Nothing in the Terms limits or excludes guarantees under Australian law.",
    "b. All non-stated guarantees are excluded and Australian Credit Solutions Pty ltd is not liable for indirect loss or damage.",
    'c. Use of the Website and Services is at your own risk; provided "as is".',
    "d. No unauthorised use or distribution without permission.",
  ],
  [
    "a. Australian Credit Solutions Pty ltd's total liability will not exceed resupply of the Services.",
    "b. They are not liable for any indirect, incidental, special, or consequential damages.",
  ],
  [
    "a. The Terms apply until terminated by either party.",
    "b. You may terminate by providing 5 days' written notice and closing your accounts.",
    "c. Australian Credit Solutions Pty ltd may terminate if you breach the Terms, they are required by law, or service provision is no longer viable.",
    "d. They may discontinue or cancel your membership at any time if your conduct impacts their name or reputation.",
  ],
  [
    "a. You agree to indemnify Australian Credit Solutions Pty ltd and its affiliates against all claims, costs, and damages arising from your content, your use of the Website, or any breach of the Terms.",
  ],
  [
    "a. Compulsory: If a dispute arises, parties must follow the outlined dispute resolution steps before commencing legal proceedings.",
    "b. Notice: Provide written notice detailing the dispute.",
    "c. Resolution: Attempt good faith resolution within 14 days, appoint a mediator if unresolved after 30 days.",
    "d. Confidential: All communications are confidential.",
    "e. Termination of Mediation: Either party may end mediation after 3 months.",
  ],
  [
    "a. The Services are intended for Australian residents; disputes will be resolved in the courts of Victoria, Australia.",
  ],
  [
    "a. The Terms are governed by the laws of Victoria, Australia, and bind successors and assigns.",
  ],
  [
    "a. Both parties confirm the Terms are fair and reasonable and declare they are not against public policy.",
  ],
  [
    "a. If any part of these Terms is void or unenforceable, the remainder will remain in force.",
  ],
];
