"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/shop";

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetValues = stats.map((stat) => {
      const num = parseInt(stat.number.replace(/[^0-9]/g, ""));
      return num;
    });

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(targetValues.map((target) => Math.floor(target * easeOut)));

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targetValues);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section
      ref={sectionRef}
      className="py-16 bg-gradient-to-r from-[#2C1810] via-[#5C0015] to-[#2C1810] text-[#FFF8E7] px-4 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 sm:p-8 bg-white/5 border border-[#D4AF37]/20 rounded-2xl backdrop-blur-md hover:border-[#D4AF37]/60 hover:-translate-y-1 transition-all duration-300 shadow-xl"
            >
              <div className="font-serif text-3xl sm:text-5xl font-black text-[#D4AF37] leading-none mb-2">
                {counts[index]}
                {stat.number.includes("+") && "+"}
                {stat.number.includes("%") && "%"}
              </div>
              <div className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/80">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
