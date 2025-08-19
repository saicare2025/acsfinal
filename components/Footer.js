"use client";

import Link from "next/link";
import Logo from "./Logo";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Footer() {
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((s) => ({ ...s, [name]: value }));
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
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
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
                  <Phone className="w-5 h-5 text-blue-600" />
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
                  <Mail className="w-5 h-5 text-blue-600" />
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
                  <MapPin className="w-5 h-5 text-blue-600" />
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
          <h4 className="text-lg font-semibold text-gray-900 mb-3">
            We provide services in all states:
          </h4>
          <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 text-sm text-blue">
            <li>
              <Link href="/credit-repair-adelaide" className="hover:underline">
                Credit Repair Adelaide
              </Link>
            </li>
            <li>
              <Link href="/credit-repair-brisbane" className="hover:underline">
                Credit Repair Brisbane
              </Link>
            </li>
            <li>
              <Link href="/credit-repair-canberra" className="hover:underline">
                Credit Repair Canberra
              </Link>
            </li>
            <li>
              <Link href="/credit-repair-darwin" className="hover:underline">
                Credit Repair Darwin
              </Link>
            </li>
            <li>
              <Link href="/credit-repair-hobart" className="hover:underline">
                Credit Repair Hobart
              </Link>
            </li>
            <li>
              <Link href="/credit-repair-melbourne" className="hover:underline">
                Credit Repair Melbourne
              </Link>
            </li>
            <li>
              <Link href="/credit-repair-perth" className="hover:underline">
                Credit Repair Perth
              </Link>
            </li>
            <li>
              <Link href="/credit_repair_sydney" className="hover:underline">
                Credit Repair Sydney
              </Link>
            </li>
          </ul>
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
            <a
              href="/Complaints.pdf"
              download
              className="hover:text-blue hover:underline"
            >
              Complaints Handling Policy
            </a>
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