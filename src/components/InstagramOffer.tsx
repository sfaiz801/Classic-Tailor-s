"use client";

import { Instagram, CheckCircle2, ArrowRight } from "lucide-react";
import { shopInfo } from "@/data/shop";

export default function InstagramOffer() {
  return (
    <section className="py-12 bg-gradient-to-b from-[#FFF8E7] to-[#FFF3D6] px-4">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2C1810] via-[#4A0E17] to-[#2C1810] border-2 border-[#D4AF37] p-6 sm:p-10 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Background Ambient Glow */}
          <div className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-pink-600/20 blur-3xl pointer-events-none"></div>

          {/* Left Discount Badge */}
          <div className="shrink-0">
            <div className="bg-gradient-to-tr from-[#E1306C] via-[#FD1D1D] to-[#F56040] text-white px-7 py-5 rounded-2xl shadow-xl border-2 border-white/30 flex flex-col items-center justify-center -rotate-3 hover:rotate-0 hover:scale-105 transition-all duration-300">
              <span className="text-xs uppercase font-bold tracking-widest text-white/90">
                विशेष ऑफर
              </span>
              <span className="font-serif text-3xl sm:text-4xl font-black text-white leading-none my-1 drop-shadow-md">
                ₹100 OFF
              </span>
              <span className="text-xs font-semibold text-amber-200">
                पहली सिलाई पर
              </span>
            </div>
          </div>

          {/* Center Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-[#E1306C]/40 text-pink-300 px-3.5 py-1 rounded-full text-xs font-semibold mb-3">
              <Instagram size={15} className="text-[#E1306C]" />
              <span>@{shopInfo.social.instagramUsername}</span>
            </div>

            <h2 className="font-serif text-2xl sm:text-3xl font-bold leading-snug mb-3">
              Instagram पर हमें Follow करें और पाएँ{" "}
              <span className="gold-gradient-text">₹100 की विशेष छूट!</span>
            </h2>

            <p className="text-sm text-white/80 leading-relaxed mb-4 max-w-xl mx-auto lg:mx-0">
              दुकान पर सिलाई करवाते समय हमें अपना Follow status दिखाएँ और अपनी पहली सिलाई पर तुरंत ₹100 की छूट पाएँ।
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5 sm:gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-[#F4E4BC] bg-[#D4AF37]/15 px-3 py-1.5 rounded-lg border border-[#D4AF37]/30">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                31 साल पुरानी दुकान (Since 1995)
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#F4E4BC] bg-[#D4AF37]/15 px-3 py-1.5 rounded-lg border border-[#D4AF37]/30">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                सिर्फ पुरुषों का Tailor
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs text-[#F4E4BC] bg-[#D4AF37]/15 px-3 py-1.5 rounded-lg border border-[#D4AF37]/30">
                <CheckCircle2 size={14} className="text-emerald-400 shrink-0" />
                Mirganj में केवल एक ही दुकान
              </span>
            </div>
          </div>

          {/* Right Action Button */}
          <div className="shrink-0 flex flex-col items-center gap-2 w-full sm:w-auto">
            <a
              href={shopInfo.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#405DE6] via-[#C13584] to-[#E1306C] text-white font-bold text-sm px-8 py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-pink-500/40 hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <Instagram size={20} />
              <span>FOLLOW NOW</span>
              <ArrowRight size={16} />
            </a>
            <span className="text-[11px] text-white/60">
              instagram.com/{shopInfo.social.instagramUsername}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
