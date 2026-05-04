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

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="loading-screen">
        <div className="loading-content">
          <div className="loading-logo">CT</div>
          <div className="loading-text">Classic Tailor&apos;s</div>
          <div className="loading-bar">
            <div className="loading-progress"></div>
          </div>
        </div>
        <style jsx>{`
          .loading-screen {
            position: fixed;
            inset: 0;
            background: linear-gradient(135deg, #2C1810 0%, #5C0015 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 9999;
          }
          .loading-content {
            text-align: center;
          }
          .loading-logo {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #D4AF37, #B8941F);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-family: 'Playfair Display', serif;
            font-size: 2rem;
            font-weight: 800;
            color: #2C1810;
            margin: 0 auto 1rem;
            animation: pulse 1.5s ease infinite;
          }
          .loading-text {
            font-family: 'Playfair Display', serif;
            font-size: 1.5rem;
            color: #D4AF37;
            margin-bottom: 1.5rem;
            letter-spacing: 2px;
          }
          .loading-bar {
            width: 200px;
            height: 3px;
            background: rgba(212, 175, 55, 0.2);
            border-radius: 3px;
            overflow: hidden;
            margin: 0 auto;
          }
          .loading-progress {
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, #D4AF37, #F4E4BC);
            animation: loading 1.5s ease-in-out forwards;
          }
          @keyframes loading {
            from { transform: translateX(-100%); }
            to { transform: translateX(0); }
          }
          @keyframes pulse {
            0%, 100% { transform: scale(1); }
            50% { transform: scale(1.1); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Stats />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <ScrollToTop />
    </main>
  );
}
