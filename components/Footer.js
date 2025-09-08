"use client";

import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ShieldCheck, FacebookIcon, TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import { PinterestIcon, TikTokIcon } from "./Header";
import PlusMinusIcon from "./PlusMinusIcon";
import { stateLinks } from "../lib/stateLinks";

export default function Footer() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openState, setOpenState] = useState(null);
  const stateRefs = useRef({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
  };

  const toggleState = (stateName) => {
    setOpenState(openState === stateName ? null : stateName);
  };

  const handleKeyDown = (e, stateName) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggleState(stateName);
    }
  };

  const handleLinkKeyDown = (e, stateName) => {
    if (e.key === "Escape") {
      setOpenState(null);
      // Focus back to the toggle button
      const button = stateRefs.current[stateName];
      if (button) button.focus();
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const currentIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
      const nextLink = e.target.parentNode.children[currentIndex + 1];
      if (nextLink) nextLink.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const currentIndex = Array.from(e.target.parentNode.children).indexOf(e.target);
      const prevLink = e.target.parentNode.children[currentIndex - 1];
      if (prevLink) prevLink.focus();
    }
  };

  const validateForm = () => {
    const { fullName, email, phone } = formData;
    if (!fullName.trim()) {
      alert("Please enter your full name.");
      return false;
    }
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (!phone.trim()) {
      alert("Please enter your phone number.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    try {
      const payload = {
        name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone, // raw format
      };

      const response = await fetch(
        "https://rest.gohighlevel.com/v1/contacts/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_GHL_API_KEY}`,
            Version: "2021-07-28",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      const result = await response.json();
      console.log("Full API Response:", result);

      if (!response.ok) {
        throw new Error(result.message || "GHL API error");
      }

      const contactId = result.id || result.contact?.id || result.data?.id;
      if (!contactId) {
        console.error("Unexpected API response format:", result);
        throw new Error("No contact ID received. Check console for details.");
      }

      router.push("/booking-confirmation");
    } catch (error) {
      console.error("Submission failed:", error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-blue-50 to-white text-gray-800 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-5"
          >
            <Logo className="h-10 w-auto text-blue-900" />
            <p className="text-gray-600">
              Australian Credit Solutions helps individuals and businesses
              manage their credit profiles and financial opportunities.
            </p>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="bg-blue-100 p-1 rounded-full">
                  <ShieldCheck className="w-4 h-4 text-blue" />
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Verified with AFCA and ASIC Australia
                </span>
              </div>
              <p className="text-xs text-gray-500">
                ABN: 80 650 730 699 | ACN: 650 730 699
                <br />
                AFCA membership: 83546
              </p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com/australiancreditsolutions"
                className="hover:text-blue-200"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/credits_aussie"
                className="hover:text-blue-200"
                aria-label="Twitter"
              >
                <TwitterIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/australian_credit_solution/"
                className="hover:text-blue-200"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/company/australian-credit-solutions/"
                className="hover:text-blue-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://ph.pinterest.com/australiancreditsolutions/"
                className="hover:text-blue-200 hidden lg:block"
                aria-label="Pinterest"
              >
                <PinterestIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.youtube.com/@australiancreditsolutions3719"
                className="hover:text-blue-200 hidden lg:block"
                aria-label="YouTube"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.tiktok.com/@australiancreditrepair"
                className="hover:text-blue-200 hidden lg:block"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5"
          >
            <h3 className="text-xl font-bold text-gray-900">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Phone className="w-5 h-5 text-blue" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Phone</p>
                  <a
                    href="tel:0489265737"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    0489 265 737
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <Mail className="w-5 h-5 text-blue" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Email</p>
                  <a
                    href="mailto:help@australiancreditsolutions.com.au"
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    help@australiancreditsolutions.com.au
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <MapPin className="w-5 h-5 text-blue" />
                </div>
                <div>
                  <p className="font-medium text-gray-700">Address</p>
                  <address className="text-gray-600 not-italic">
                    Level 8, 805/220 Collins Street
                    <br />
                    Melbourne VIC 3000
                  </address>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-3"
          >
            <h3 className="text-xl font-bold text-gray-900">
              Free Credit Assessment
            </h3>
            <p className="text-gray-600">
              Start rebuilding your credit today with our no-obligation
              assessment.
            </p>

            <form onSubmit={handleSubmit} className="space-y-2">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-1 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-1 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-1 rounded-lg border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 w-full rounded-lg bg-blue px-5 py-2 text-sm font-medium uppercase tracking-wider text-white shadow-md transition-all hover:from-blue hover:to-blue-900 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? "Processing..." : "Get Free Assesment"}
              </button>

              {/* Admin fee text */}
              <p className="text-xs text-gray-500 text-center mt-2">
                A one-off $330 admin fee applies regardless of outcome.
              </p>
            </form>
          </motion.div>
        </div>
        {/* Services by State */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-4 lg:mt-12 border-t border-gray-200 pt-8"
        >
          <h4 className="text-lg font-semibold text-gray-900 mb-4">
            We provide services in all states:
          </h4>
          
          {/* States Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-1 mb-6">
            {stateLinks.map((state) => (
              <div key={state.name} className="space-y-2">
                {/* State Toggle Button */}
                <button
                  ref={(el) => (stateRefs.current[state.name] = el)}
                  onClick={() => toggleState(state.name)}
                  onKeyDown={(e) => handleKeyDown(e, state.name)}
                  aria-expanded={openState === state.name}
                  aria-controls={`state-links-${state.name}`}
                  className="flex items-center justify-between w-full p-2 text-left bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  <span className="text-sm font-medium text-gray-900">
                    {state.name} ({state.abbreviation})
                  </span>
                  <PlusMinusIcon isOpen={openState === state.name} />
                </button>

                {/* Collapsible Links */}
                <motion.div
                  id={`state-links-${state.name}`}
                  initial={false}
                  animate={{
                    height: openState === state.name ? "auto" : 0,
                    opacity: openState === state.name ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="border-t border-gray-200 pt-2 space-y-1">
                    {state.links.map((link, index) => (
                      <Link
                        key={index}
                        href={link.href}
                        className="block px-2 py-1 text-sm text-blue hover:text-blue-800 hover:bg-blue-50 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
                        onKeyDown={(e) => handleLinkKeyDown(e, state.name)}
                        tabIndex={openState === state.name ? 0 : -1}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </motion.div>
        {/* Legal & Utility Links */}
        <div className="mt-6 border-t border-gray-200 pt-4">
          <nav
            className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-sm text-gray-600"
            aria-label="Footer links"
          >
            <Link
              href="/terms-conditions"
              className="hover:text-blue hover:underline"
            >
              Terms and Conditions
            </Link>
            <span aria-hidden="true" className="text-gray-300">
              |
            </span>
            <Link
              href="/privacy-policy"
              className="hover:text-blue hover:underline"
            >
              Privacy Policy
            </Link>
            <span aria-hidden="true" className="text-gray-300">
              |
            </span>
            <Link
              href="/testimonial"
              className="hover:text-blue hover:underline"
            >
              Testimonials
            </Link>
            <span aria-hidden="true" className="text-gray-300">
              |
            </span>
            <Link
              href="/complaints-handling-policy"
              className="hover:text-blue hover:underline"
            >
              Complaints Handling Policy
            </Link>
            <span aria-hidden="true" className="text-gray-300">
              |
            </span>
            <Link href="/blogs" className="hover:text-blue hover:underline">
              Blogs
            </Link>
            <span aria-hidden="true" className="text-gray-300">
              |
            </span>
            <Link href="/faq" className="hover:text-blue hover:underline">
              FAQ
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
