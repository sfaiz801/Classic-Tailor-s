"use client";

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Heart } from "lucide-react";
import { shopInfo } from "@/data/shop";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Coat-Pant Suit (कोट-पैंट)",
    "3 Piece Suit (3 पीस सूट)",
    "Royal Sherwani (शेरवानी)",
    "Kurta-Pajama (कुर्ता-पाजामा)",
    "Bandi / Nehru Jacket (बंडी)",
    "Shirt-Pant (शर्ट-पैंट)",
    "Blazer (ब्लेज़र)",
    "Safari Suit (सफारी सूट)",
  ];

  return (
    <footer className="bg-gradient-to-b from-[#2C1810] to-[#180C07] text-[#FFF8E7] pt-16 pb-8 border-t-2 border-[#D4AF37]/30 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gold-gradient-bg flex items-center justify-center font-serif text-xl font-black text-[#2C1810] shadow-md border-2 border-white/40">
                CT
              </div>
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#F4E4BC] leading-tight">
                  Classic Tailor&apos;s
                </h3>
                <p className="text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold">
                  {shopInfo.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-white/70 leading-relaxed">
              &ldquo;{shopInfo.hindiTagline}&rdquo; — Estd. {shopInfo.established} by {shopInfo.owner}. {shopInfo.onlyMens}.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href={shopInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:bg-[#D4AF37] hover:text-[#2C1810] hover:border-[#D4AF37] transition-all"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={shopInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:bg-[#E1306C] hover:text-white hover:border-[#E1306C] transition-all"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                href={shopInfo.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all"
                aria-label="YouTube"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-base font-bold text-[#F4E4BC] mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-xs sm:text-sm text-white/70 hover:text-[#D4AF37] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Men's Services */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-base font-bold text-[#F4E4BC] mb-4 uppercase tracking-wider">
              Men&apos;s Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((service, index) => (
                <li key={index} className="text-xs sm:text-sm text-white/70">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-serif text-base font-bold text-[#F4E4BC] mb-4 uppercase tracking-wider">
              Contact Info
            </h4>
            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-white/80">
              <MapPin size={16} className="text-[#D4AF37] shrink-0 mt-1" />
              <span>{shopInfo.address.full}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
              <Phone size={16} className="text-[#D4AF37] shrink-0" />
              <a href={`tel:${shopInfo.contact.phone}`} className="hover:text-[#D4AF37] transition-colors">
                {shopInfo.contact.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
              <Mail size={16} className="text-[#D4AF37] shrink-0" />
              <a href={`mailto:${shopInfo.contact.email}`} className="hover:text-[#D4AF37] transition-colors">
                {shopInfo.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-white/80">
              <Clock size={16} className="text-[#D4AF37] shrink-0" />
              <span>Timing: {shopInfo.hours.display}</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© {currentYear} Classic Tailor&apos;s. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href="/admin/login"
              className="inline-flex items-center gap-1.5 text-white/40 hover:text-[#D4AF37] transition-colors py-1 px-2 rounded-md hover:bg-white/5"
            >
              <span>🔐 Admin Portal</span>
            </a>
            <p className="flex items-center gap-1">
              Design &amp; Managed by <Heart size={13} className="text-red-500 fill-red-500" /> Faiz Siddique
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
