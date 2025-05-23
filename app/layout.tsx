import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import { FaMobileAlt } from "react-icons/fa";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dheeraj Portfolio",
  description: "This is my portfolio",
  icons: {
    icon: [
      { url: "/dkphoto.jpg" },
    ],
    apple: [
      { url: "/dkphoto.jpg" },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}
      >
        <LoadingScreen />
        <StarsCanvas />
        <Navbar />
        {children}
        <Footer />
        
        {/* Mobile orientation notice */}
        <div className="rotate-device-notice">
          <FaMobileAlt className="mr-2 animate-pulse" />
          <span>Rotate your device for better experience</span>
        </div>
      </body>
    </html>
  );
}
