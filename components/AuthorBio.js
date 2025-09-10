"use client";

import Image from "next/image";
import { ChevronDown, PenTool, Facebook, Youtube, Linkedin } from "lucide-react";
import { useState } from "react";
import authorImage from "../app/assets/person.jpeg";

export default function AuthorBio() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="rounded-xl p-2 mb-3 lg:mb-6 border border-blue-100 shadow-sm">
      <div className="flex items-start gap-3">
        <Image
          src={authorImage}
          alt="Elisa Rothschild — Principal Lawyer & Director at Australian Credit Solutions"
          width={60}
          height={60}
          className="rounded-full border-2 border-white shadow-md"
        />

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-1">
            <h3 className="text-lg font-semibold text-gray-900">
              Elisa Rothschild
            </h3>
            <span className="px-2 py-0.5 bg-blue-100 text-blue-700 text-xs font-medium rounded-full flex items-center gap-1">
              <PenTool className="w-3 h-3" />
              Principal Lawyer & Director
            </span>
          </div>

          {/* Paragraph only when expanded */}
          {isExpanded && (
            <p className="text-gray-700 text-sm leading-relaxed mt-1">
              Elisa Rothschild is the Principal Lawyer & Director of Australian
              Credit Solutions. A Monash University graduate, Elisa specialises
              in Credit Repair, Credit Law, Family Law, Debt Negotiation, and
              Consumer Finance. With extensive legal expertise and a commitment
              to consumer rights, she leads her team in resolving disputes,
              improving credit files, and empowering Australians to regain
              financial stability.
            </p>
          )}

          {/* Read more / less button */}
          <div className="flex gap-2">
            <button
              className="text-blue-600 hover:text-blue-800 text-xs font-medium mt-1 flex items-center gap-1 group transition-colors"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? "Read less" : "Read more"}
              <ChevronDown
                className={`w-3 h-3 group-hover:translate-y-0.5 transition-transform ${
                  isExpanded ? "rotate-180" : ""
                }`}
              />
            </button>

            <div className="flex items-center gap-2">
              <a
                href="https://www.linkedin.com/in/elisa-rothschild"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-6 h-6 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-200"
                aria-label="Connect with Elisa Rothschild on LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
