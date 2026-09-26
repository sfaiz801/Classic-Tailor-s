"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 w-12 h-12 rounded-full gold-gradient-bg text-[#2C1810] flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white/60 animate-fade-in"
      aria-label="Scroll to top"
    >
      <ArrowUp size={20} />
    </button>
  );
}
