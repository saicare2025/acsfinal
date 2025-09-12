// app/page.js

import Header from "../components/Header";
import HomePage from "../components/homepage";
import { CookieConsent } from "../components/CookieConsent";
import Footer from "../components/Footer";

// Enable static generation for better TTFB
export const revalidate = 3600; // Revalidate every hour

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col">
        <Header />
        <HomePage/>
        <Footer/>
        <CookieConsent />
      </main>
    </>
  );
}