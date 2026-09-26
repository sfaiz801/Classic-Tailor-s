"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import ScrollToTop from "@/components/ScrollToTop";
import InstagramOffer from "@/components/InstagramOffer";
import InstallAppBanner from "@/components/InstallAppBanner";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#2C1810] via-[#4A0E17] to-[#2C1810] flex items-center justify-center">
        <div className="text-center flex flex-col items-center">
          <div className="w-20 h-20 rounded-full gold-gradient-bg flex items-center justify-center font-serif text-3xl font-black text-[#2C1810] shadow-2xl mb-4 animate-bounce">
            CT
          </div>
          <div className="font-serif text-2xl font-bold text-[#F4E4BC] tracking-widest mb-4">
            Classic Tailor&apos;s
          </div>
          <div className="w-48 h-1 bg-[#D4AF37]/20 rounded-full overflow-hidden">
            <div className="w-full h-full gold-gradient-bg animate-pulse"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-[#FFF8E7] text-[#2C1810]">
      <Navbar />
      <Hero />
      <InstagramOffer />
      <About />
      <Stats />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
      <InstallAppBanner />
    </main>
  );
}
