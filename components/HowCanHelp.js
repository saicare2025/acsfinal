import React from "react";
import {
  TrendingDown,
  PiggyBank,
  BadgeCheck,
  ThumbsUp,
  Home,
  Car,
  Banknote,
} from "lucide-react";

/**
 * HowWeHelp.jsx
 * Exact UI component based on the provided screenshot.
 * - Tailwind CSS only
 * - No external design dependencies
 * - Accessible markup
 */

const items = [
  {
    label: "Remove\nFinancial Stress",
    icon: TrendingDown,
    selected: false,
  },
  {
    label: "Save Thousands\n in Interest",
    icon: PiggyBank,
    selected: false,
  },
  {
    label: "Finance\nApproval",
    icon: BadgeCheck,
    selected: true, // preselected as per screenshot
  },
  {
    label: "Become Debt\nFree",
    icon: ThumbsUp,
    selected: false,
  },
  {
    label: "Buy\nA Home",
    icon: Home,
    selected: false,
  },
  {
    label: "Buy\nA Car",
    icon: Car,
    selected: false,
  },
  {
    label: "Refinance",
    icon: Banknote,
    selected: false,
  },
];

function HelpCard({ label, icon: Icon, selected }) {
  return (
    <div className="relative rounded-2xl border border-zinc-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      {/* Checkbox */}
      <div className="absolute left-3 top-3">
        <span
          aria-hidden
          className={`grid h-6 w-6 place-items-center rounded-md border ${
            selected
              ? "border-sky-500 bg-sky-500 text-white"
              : "border-zinc-300 bg-white text-transparent"
          }`}
        >
          {/* check mark */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="h-4 w-4"
          >
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </span>
      </div>

      {/* Content */}
      <div className="flex h-48 w-full flex-col items-center justify-center gap-3 px-6 py-8">
        <Icon className="h-12 w-12 text-teal-600" strokeWidth={2.25} />
        <p className="mt-1 text-center text-base font-medium text-zinc-800 whitespace-pre-line">
          {label}
        </p>
      </div>
    </div>
  );
}

export default function HowWeHelp() {
  return (
    <section className="w-full bg-zinc-50 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4">
        {/* Top pill */}
        <div className="mx-auto w-fit rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-teal-700 shadow-sm">
          Yesterday's Mistakes. Corrected Today.
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-center text-4xl font-extrabold tracking-tight text-zinc-900 sm:text-5xl">
          How Can We Help You?
        </h2>

        {/* Subheading */}
        <p className="mx-auto mt-4 max-w-3xl text-center text-lg text-zinc-600">
          We're a credit repair agency that can help you:
        </p>

        {/* Cards */}
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 xl:gap-4">
          {items.map((item, idx) => (
            <HelpCard key={idx} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Optional: Named export for granular reuse
export { HelpCard };
