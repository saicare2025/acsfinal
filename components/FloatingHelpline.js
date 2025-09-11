"use client";

import { PhoneIcon } from "@heroicons/react/24/outline";

export default function FloatingHelpline() {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <a
        href="tel:0489265737"
        className="bg-gradient-to-r from-cyan-800 via-blue-700 to-indigo-800 hover:from-cyan-900 hover:via-blue-800 hover:to-indigo-900 text-white px-4 py-2 rounded-md text-base font-medium transition-all duration-200 shadow-lg flex items-center gap-2"
      >
        <PhoneIcon className="w-5 h-5" />
        0489 265 737
      </a>
    </div>
  );
}
