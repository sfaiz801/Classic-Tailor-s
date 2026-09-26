"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { shopInfo } from "@/data/shop";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#gallery", label: "Gallery" },
    { href: "#testimonials", label: "Reviews" },
    { href: "#contact", label: "Contact" },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Top Bar */}
      <div className="hidden sm:block bg-gradient-to-r from-[#5C0015] via-[#800020] to-[#5C0015] text-[#FFF8E7] py-2 text-xs border-b border-[#D4AF37]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-white/90">
              <Phone size={13} className="text-[#D4AF37]" />
              {shopInfo.contact.phone}
            </span>
            <span className="flex items-center gap-2 text-white/90">
              <MapPin size={13} className="text-[#D4AF37]" />
              {shopInfo.address.city}, {shopInfo.address.state}
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/90">
            <Clock size={13} className="text-[#D4AF37]" />
            <span>Open: {shopInfo.hours.display}</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FFF8E7]/95 backdrop-blur-md shadow-md border-b border-[#E8DCC8] py-3"
            : "bg-[#FFF8E7]/90 backdrop-blur-sm py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="flex items-center gap-3 group"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
          >
            <div className="w-11 h-11 rounded-full gold-gradient-bg flex items-center justify-center font-serif text-xl font-black text-[#2C1810] shadow-sm group-hover:scale-105 transition-transform duration-300 border-2 border-white/50">
              CT
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl font-bold text-[#2C1810] leading-none tracking-tight">
                Classic Tailor&apos;s
              </span>
              <span className="text-[10px] uppercase font-semibold text-[#B8941F] tracking-widest mt-1">
                Estd. 1995 • Men&apos;s Specialist
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="text-sm font-semibold text-[#5C4033] hover:text-[#2C1810] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-gradient-to-r after:from-[#D4AF37] after:to-[#B8941F] hover:after:w-full after:transition-all after:duration-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Call CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={`tel:${shopInfo.contact.phone}`}
              className="gold-gradient-bg text-[#2C1810] font-bold text-xs uppercase tracking-wider px-6 py-2.5 rounded-full flex items-center gap-2 shadow-sm hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 active:translate-y-0"
            >
              <Phone size={15} />
              Call Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#2C1810] hover:text-[#800020] transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-[#FFF8E7] border-b border-[#E8DCC8] px-4 pt-3 pb-6 shadow-xl animate-fade-in">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="block px-4 py-2.5 text-base font-semibold text-[#2C1810] rounded-lg hover:bg-[#D4AF37]/15 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 pt-4 border-t border-[#E8DCC8]">
              <a
                href={`tel:${shopInfo.contact.phone}`}
                className="gold-gradient-bg text-[#2C1810] font-bold text-sm uppercase tracking-wider w-full py-3 rounded-full flex items-center justify-center gap-2 shadow-md"
              >
                <Phone size={16} />
                Call Now ({shopInfo.contact.phone})
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
