import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/main/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import MobileOrientationNotice from "@/components/MobileOrientationNotice";

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
  // Add viewport configuration for better mobile handling
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
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
        <main className="flex flex-col min-h-screen">
          {children}
        </main>
        <Footer />
        
        {/* Client component for mobile orientation detection */}
        <MobileOrientationNotice />
      </body>
    </html>
  );
}
