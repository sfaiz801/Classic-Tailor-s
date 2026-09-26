"use client";

import { Crown, Shirt, Sparkles, Briefcase, Scissors, Heart, ArrowRight, Award, Users } from "lucide-react";
import { services } from "@/data/services";

const iconMap: { [key: string]: React.ReactNode } = {
  crown: <Crown size={28} className="text-[#D4AF37]" />,
  shirt: <Shirt size={28} className="text-[#D4AF37]" />,
  sparkles: <Sparkles size={28} className="text-[#D4AF37]" />,
  briefcase: <Briefcase size={28} className="text-[#D4AF37]" />,
  scissors: <Scissors size={28} className="text-[#D4AF37]" />,
  heart: <Heart size={28} className="text-[#D4AF37]" />,
  award: <Award size={28} className="text-[#D4AF37]" />,
  users: <Users size={28} className="text-[#D4AF37]" />,
};

export default function Services() {
  return (
    <section id="services" className="py-20 bg-[#FFF8E7] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold text-[#B8941F] tracking-[0.25em] block mb-2">
            Exclusive Men&apos;s Tailoring
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
            Bespoke Services
          </h2>
          <p className="text-sm sm:text-base text-[#5C4033] mt-3 max-w-xl mx-auto">
            From regal wedding sherwanis to executive suits, crafted strictly to your personal silhouette.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-7 border border-[#E8DCC8] hover:border-[#D4AF37] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4AF37]/15 flex items-center justify-center group-hover:bg-[#D4AF37] group-hover:text-[#2C1810] transition-colors duration-300">
                    {iconMap[service.icon]}
                  </div>
                  <span className="text-xs font-bold text-[#800020] bg-[#800020]/10 px-3 py-1 rounded-full">
                    {service.price}
                  </span>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#2C1810] mb-1">
                  {service.title}
                  {service.hindiTitle && (
                    <span className="block text-sm font-hindi font-semibold text-[#B8941F] mt-0.5">
                      ({service.hindiTitle})
                    </span>
                  )}
                </h3>

                <p className="text-xs sm:text-sm text-[#5C4033] leading-relaxed mt-2 mb-5">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-xs text-[#8B7355]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2C1810] hover:text-[#800020] transition-colors pt-4 border-t border-gray-100"
              >
                <span>Book / Enquire</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
