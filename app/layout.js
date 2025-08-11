import FloatingHelpline from "@/components/FloatingHelpline";
import "./globals.css";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Australian Credit Solutions",
  description: "Dinar Exchange User Panel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-right" />
        <FloatingHelpline/>
      </body>
    </html>
  );
}
