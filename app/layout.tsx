import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import dynamic from "next/dynamic";
const StarsCanvas = dynamic(() => import("@/components/Galaxy"), { ssr: false });
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Evolvix - Strategic Technology Solutions",
  description: "Evolvix delivers expert web development, reliable IT support, and strategic consulting to help businesses thrive.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-darkb-90 overflow-y-scroll overflow-x-hidden`}
      >
        <StarsCanvas
          className="fixed inset-0 w-full h-screen pointer-events-none"
          style={{ zIndex: -10 }}
          starSpeed={0.5}
          density={1}
          hueShift={340}
          speed={0.4}
          glowIntensity={0.1}
          saturation={0.4}
          mouseRepulsion
          repulsionStrength={0}
          twinkleIntensity={0}
          rotationSpeed={0.1}
          transparent
        />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
