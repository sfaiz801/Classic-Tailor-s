"use client";

import { ArrowDown, Phone, Scissors, Award, Users } from "lucide-react";
import { shopInfo } from "@/data/shop";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#2C1810] via-[#5C0015] to-[#2C1810] text-[#FFF8E7] px-4 py-20"
    >
      {/* Decorative Radial Background */}
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[#800020]/30 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Decorative Icons (Desktop) */}
      <div className="hidden md:block absolute inset-0 pointer-events-none">
        <div className="absolute top-[18%] left-[12%] text-[#D4AF37]/20 animate-float">
          <Scissors size={36} />
        </div>
        <div
          className="absolute top-[65%] right-[15%] text-[#D4AF37]/20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Award size={34} />
        </div>
        <div
          className="absolute bottom-[20%] left-[20%] text-[#D4AF37]/20 animate-float"
          style={{ animationDelay: "4s" }}
        >
          <Users size={32} />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Top Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#D4AF37] text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md mb-6">
          <span className="text-[#D4AF37]">✦</span>
          <span>{shopInfo.experienceHindi} • {shopInfo.onlyMens}</span>
          <span className="text-[#D4AF37]">✦</span>
        </div>

        {/* Title */}
        <h1 className="mb-4">
          <span className="block font-serif text-3xl sm:text-5xl lg:text-6xl text-[#FFF8E7] font-normal tracking-[0.25em] uppercase">
            Classic
          </span>
          <span className="block font-serif text-5xl sm:text-7xl lg:text-8xl font-black gold-gradient-text tracking-tight -mt-1 sm:-mt-3">
            Tailor&apos;s
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-serif text-lg sm:text-2xl text-white/90 italic tracking-wider mb-2">
          {shopInfo.tagline}
        </p>

        {/* Hindi Slogan */}
        <p className="font-hindi text-base sm:text-xl font-semibold text-[#D4AF37] italic tracking-wide mb-6">
          &ldquo;{shopInfo.hindiTagline}&rdquo;
        </p>

        {/* Description */}
        <p className="text-sm sm:text-lg text-white/80 max-w-2xl leading-relaxed mb-8">
          Mirganj&apos;s premier men&apos;s bespoke tailoring by{" "}
          <strong className="text-[#D4AF37] font-bold">{shopInfo.owner}</strong>.
          Expert craftsmanship in{" "}
          <strong className="text-white font-semibold">
            Coat-Pant, 3-Piece Suits, Royal Sherwanis, Kurta-Pajama &amp; Bandi
          </strong>{" "}
          using original <span className="text-[#D4AF37] font-semibold">Raymond</span> &amp;{" "}
          <span className="text-[#D4AF37] font-semibold">Siyaram&apos;s</span> fabrics.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <a
            href="#services"
            className="gold-gradient-bg text-[#2C1810] font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-105 transition-all duration-300 active:scale-100"
          >
            Explore Men&apos;s Collection
          </a>
          <a
            href={`tel:${shopInfo.contact.phone}`}
            className="border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2C1810] font-bold text-sm uppercase tracking-wider px-8 py-3.5 rounded-full flex items-center gap-2 transition-all duration-300 backdrop-blur-sm"
          >
            <Phone size={17} />
            Call: {shopInfo.contact.phone}
          </a>
        </div>

        {/* Location Tag */}
        <div className="inline-flex items-center gap-2 text-xs sm:text-sm text-white/70">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
          <span>
            {shopInfo.address.landmark}, {shopInfo.address.city}, {shopInfo.address.state}
          </span>
        </div>
      </div>

      {/* Side Stats (Desktop Only) */}
      <div className="hidden xl:flex flex-col gap-6 absolute right-12 top-1/2 -translate-y-1/2 text-center bg-black/20 backdrop-blur-md p-6 rounded-2xl border border-white/10">
        <div>
          <span className="block font-serif text-3xl font-extrabold text-[#D4AF37]">
            31+
          </span>
          <span className="text-xs uppercase tracking-widest text-white/70 font-medium">
            Years
          </span>
        </div>
        <div className="w-8 h-[1px] bg-[#D4AF37]/30 mx-auto"></div>
        <div>
          <span className="block font-serif text-3xl font-extrabold text-[#D4AF37]">
            15K+
          </span>
          <span className="text-xs uppercase tracking-widest text-white/70 font-medium">
            Clients
          </span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/60 hover:text-[#D4AF37] transition-colors"
      >
        <span className="text-[11px] uppercase tracking-widest">Scroll Down</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
