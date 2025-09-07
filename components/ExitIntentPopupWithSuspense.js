"use client";
import React, { Suspense } from "react";
import ExitIntentPopup from "./ExitIntentPopup";

const ExitIntentPopupWithSuspense = () => {
  return (
    <Suspense fallback={null}>
      <ExitIntentPopup />
    </Suspense>
  );
};

export default ExitIntentPopupWithSuspense;
