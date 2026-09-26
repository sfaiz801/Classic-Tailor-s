"use client";

import { Award, Heart, Users, Clock } from "lucide-react";
import { shopInfo } from "@/data/shop";

export default function About() {
  const features = [
    {
      icon: <Award size={26} className="text-[#D4AF37]" />,
      title: "Premium Quality",
      description: "We use only authentic Raymond & Siyaram's fabrics for lasting royal elegance.",
    },
    {
      icon: <Heart size={26} className="text-[#D4AF37]" />,
      title: "Handcrafted with Precision",
      description: "Every cut and stitch is hand-finished with meticulous attention to detail.",
    },
    {
      icon: <Users size={26} className="text-[#D4AF37]" />,
      title: "Master Craftsmanship",
      description: "Over 31+ years of trusted bespoke men's tailoring excellence in Mirganj.",
    },
    {
      icon: <Clock size={26} className="text-[#D4AF37]" />,
      title: "On-Time Delivery",
      description: "Your time is our priority. Perfectly fitted attire delivered right on schedule.",
    },
  ];

  return (
    <section id="about" className="py-20 bg-[#FFFFF0] relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold text-[#B8941F] tracking-[0.25em] block mb-2">
            About Our Heritage
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
            Our Story of Excellence
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image Column */}
          <div className="lg:col-span-5 relative">
            <div className="relative border-4 border-[#D4AF37] rounded-3xl overflow-hidden shadow-2xl bg-[#2C1810] group">
              <img
                src="/images/owner.jpg"
                alt={`${shopInfo.owner} - Classic Tailor's Mirganj`}
                className="w-full h-[460px] sm:h-[540px] object-cover object-top group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-[#2C1810] via-[#2C1810]/85 to-transparent pt-12 pb-6 px-6 text-white">
                <span className="block font-serif text-2xl font-bold text-[#F4E4BC] leading-tight">
                  {shopInfo.owner}
                </span>
                <span className="text-xs text-white/80 uppercase tracking-wider font-medium mt-1 block">
                  Founder &amp; Master Tailor • Since 1995
                </span>
              </div>
            </div>

            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 z-20 gold-gradient-bg border-4 border-[#FFF8E7] text-[#2C1810] px-5 py-4 sm:px-6 sm:py-5 rounded-2xl shadow-2xl text-center min-w-[130px] sm:min-w-[150px]">
              <span className="block font-serif text-2xl sm:text-3xl font-black leading-none text-[#2C1810]">
                {shopInfo.experience}
              </span>
              <span className="text-[11px] uppercase tracking-wider font-bold text-[#2C1810]/80 mt-1 block">
                of Excellence
              </span>
            </div>
          </div>

          {/* Text Column */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#2C1810] leading-snug mb-4">
              {shopInfo.slogan}
            </h3>

            <p className="text-base text-[#5C4033] leading-relaxed mb-4">
              Welcome to <strong className="text-[#2C1810] font-bold">Classic Tailor&apos;s</strong> — established by{" "}
              <strong className="text-[#800020] font-bold">{shopInfo.owner}</strong> in {shopInfo.established}. For over{" "}
              <strong className="text-[#2C1810] font-bold">{shopInfo.experience}</strong>, we have been Mirganj&apos;s most trusted destination for bespoke gentlemen&apos;s tailoring.
            </p>

            <p className="text-base text-[#5C4033] leading-relaxed mb-4">
              <strong className="text-[#800020] font-semibold">{shopInfo.onlyMens}</strong>: We specialize exclusively in custom men&apos;s attire — from sharp executive suits and royal wedding sherwanis to traditional kurta-pajama, Bandi, and daily wear. We tailor with original <strong className="text-[#2C1810]">Raymond</strong> &amp; <strong className="text-[#2C1810]">Siyaram&apos;s</strong> fabrics.
            </p>

            <div className="inline-flex items-center gap-2 text-sm font-bold text-[#B8941F] bg-[#D4AF37]/10 border border-[#D4AF37]/25 px-4 py-2 rounded-xl mb-8 w-fit">
              <span>✓ {shopInfo.singleBranch}</span>
              <span className="text-gray-400">|</span>
              <span>{shopInfo.address.landmark}</span>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-5 rounded-2xl border border-[#E8DCC8] hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300"
                >
                  <div className="mb-3">{feature.icon}</div>
                  <h4 className="font-bold text-sm text-[#2C1810] mb-1">
                    {feature.title}
                  </h4>
                  <p className="text-xs text-[#8B7355] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
