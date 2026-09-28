"use client";

import { Crown, Shirt, Sparkles, Briefcase, Scissors, Heart, ArrowRight, Award, Users } from "lucide-react";
import { services } from "@/data/services";

const iconMap: { [key: string]: React.ReactNode } = {
  crown: <Crown size={24} className="text-[#D4AF37]" />,
  shirt: <Shirt size={24} className="text-[#D4AF37]" />,
  sparkles: <Sparkles size={24} className="text-[#D4AF37]" />,
  briefcase: <Briefcase size={24} className="text-[#D4AF37]" />,
  scissors: <Scissors size={24} className="text-[#D4AF37]" />,
  heart: <Heart size={24} className="text-[#D4AF37]" />,
  award: <Award size={24} className="text-[#D4AF37]" />,
  users: <Users size={24} className="text-[#D4AF37]" />,
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
              className="bg-white rounded-3xl overflow-hidden border border-[#E8DCC8] hover:border-[#D4AF37] shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {service.image && (
                  <div className="relative aspect-[16/11] overflow-hidden bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md flex items-center justify-center shadow-md text-[#2C1810]">
                      {iconMap[service.icon]}
                    </div>
                    <span className="absolute bottom-3 right-4 text-xs font-bold text-white bg-[#800020]/90 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {service.price}
                    </span>
                  </div>
                )}

                <div className="p-6">
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
              </div>

              <div className="px-6 pb-6 pt-0">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#2C1810] hover:text-[#800020] transition-colors pt-4 border-t border-gray-100 w-full justify-between"
                >
                  <span>Book / Enquire</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
