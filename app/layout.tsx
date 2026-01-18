import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import Particles from "@/components/Particles";

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
        className={`${inter.className} bg-gradient-to-b from-[#090201] from-0% to-darkb-100 to-30% overflow-y-scroll overflow-x-hidden`}
      >
        <div className="relative">
          <div className="fixed inset-0 z-10 pointer-events-none">
          <Particles
              className={undefined}
              particleCount={30}
              particleSpread={3}
              speed={0.1}
              particleColors={["#fff9d9", "#eea83e", "#c95508"]}
              moveParticlesOnHover={false}
              particleHoverFactor={0}
              alphaParticles={false}
              particleBaseSize={80}
              sizeRandomness={1}
              cameraDistance={5}
              disableRotation={false}/>
        </div>
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
