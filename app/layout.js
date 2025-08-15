import FloatingHelpline from "@/components/FloatingHelpline";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Improve Your Credit Score with Australian Credit Solutions",
  description:
    "Take control of your financial future. Australian Credit Solutions offers expert credit repair and tailored strategies to help you improve your credit score quickly and effectively.",
  keywords: [
    "improve your credit score",
    "Australian Credit Solutions",
    "credit repair",
    "credit score help",
    "credit solutions Australia",
    "fix bad credit",
    "financial recovery services"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
        <FloatingHelpline />
      </body>
    </html>
  );
}
