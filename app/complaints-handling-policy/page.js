"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import RelatedBlock from "@/app/_seo/RelatedBlock";

export default function ComplaintsHandlingPolicy() {
  const router = useRouter();

  useEffect(() => {
    // Trigger PDF download
    const link = document.createElement("a");
    link.href = "/Complaints.pdf";
    link.download = "Complaints.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Redirect back home (after short delay)
    const timer = setTimeout(() => {
      router.push("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col bg-blue-100 items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Complaints Handling Policy</h1>
      <p className="text-blue">
        Your download should begin shortly. <Link href="/" className="text-blue-600 hover:text-blue-800 underline"></Link> You will be redirected to the home page.
      </p>
    </div>
  );
}
