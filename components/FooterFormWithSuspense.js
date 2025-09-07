"use client";
import React, { Suspense } from "react";
import FooterForm from "./FooterForm";

const FooterFormWithSuspense = (props) => {
  return (
    <Suspense fallback={<div className="w-full lg:w-1/3 relative">
      <div className="rounded-xl border border-blue-100 bg-white p-6 shadow-sm">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-2"></div>
          <div className="h-4 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    </div>}>
      <FooterForm {...props} />
    </Suspense>
  );
};

export default FooterFormWithSuspense;
