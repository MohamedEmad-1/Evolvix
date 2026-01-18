import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
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
        className={`${inter.className} bg-gradient-to-b from-darkb-90 from-0% to-darkb-100 to-30% overflow-y-scroll overflow-x-hidden`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
