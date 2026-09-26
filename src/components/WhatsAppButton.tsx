"use client";

import { MessageCircle } from "lucide-react";
import { shopInfo } from "@/data/shop";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${shopInfo.contact.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] to-[#25D366] text-white flex items-center justify-center shadow-xl hover:shadow-emerald-500/40 hover:scale-110 active:scale-95 transition-all duration-300 group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className="hidden sm:block absolute right-16 px-3 py-1.5 rounded-xl bg-[#2C1810] text-[#FFF8E7] text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none shadow-xl border border-[#D4AF37]/30">
        Chat on WhatsApp
      </span>
    </a>
  );
}
