"use client";

import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section id="testimonials" className="py-20 bg-[#FFF8E7] px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold text-[#B8941F] tracking-[0.25em] block mb-2">
            Client Appreciation
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
            What Our Customers Say
          </h2>
          <p className="text-sm sm:text-base text-[#5C4033] mt-3 max-w-xl mx-auto">
            Honest feedback from gentlemen who trust Classic Tailor&apos;s for their finest moments.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Card */}
        <div className="relative bg-white rounded-3xl p-8 sm:p-14 border border-[#E8DCC8] shadow-xl text-center">
          <div className="w-14 h-14 rounded-full bg-[#D4AF37]/15 text-[#D4AF37] flex items-center justify-center mx-auto mb-6 shadow-sm">
            <Quote size={28} />
          </div>

          {/* Rating */}
          <div className="flex items-center justify-center gap-1.5 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={20}
                className={i < current.rating ? "text-[#D4AF37] fill-[#D4AF37]" : "text-gray-300"}
              />
            ))}
          </div>

          {/* Quote Text */}
          <p className="font-serif text-lg sm:text-2xl text-[#2C1810] italic leading-relaxed mb-8">
            &ldquo;{current.text}&rdquo;
          </p>

          {/* Author */}
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full gold-gradient-bg text-[#2C1810] font-serif font-black text-lg flex items-center justify-center shadow-md mb-2">
              {current.name.charAt(0)}
            </div>
            <h4 className="font-bold text-base text-[#2C1810]">{current.name}</h4>
            <span className="text-xs text-[#8B7355]">{current.location} • {current.date}</span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E8DCC8]">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white border border-[#E8DCC8] text-[#2C1810] hover:bg-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous review"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "w-8 bg-[#D4AF37]" : "w-2.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white border border-[#E8DCC8] text-[#2C1810] hover:bg-[#D4AF37] hover:border-[#D4AF37] flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next review"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
