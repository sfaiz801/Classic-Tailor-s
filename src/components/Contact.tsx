"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { shopInfo } from "@/data/shop";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", service: "", message: "" });
    }, 4000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={22} className="text-[#D4AF37]" />,
      title: "Visit Us (Location)",
      content: shopInfo.address.full,
      subContent: `Landmark: ${shopInfo.address.landmark}`,
      link: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Classic Tailor's Mirganj Bihar")}`,
    },
    {
      icon: <Phone size={22} className="text-[#D4AF37]" />,
      title: "Call / WhatsApp",
      content: shopInfo.contact.phone,
      subContent: `Alt / WhatsApp: ${shopInfo.contact.altPhone}`,
      link: `tel:${shopInfo.contact.phone}`,
    },
    {
      icon: <Mail size={22} className="text-[#D4AF37]" />,
      title: "Email Us",
      content: shopInfo.contact.email,
      link: `mailto:${shopInfo.contact.email}`,
    },
    {
      icon: <Clock size={22} className="text-[#D4AF37]" />,
      title: "Working Hours",
      content: shopInfo.hours.display,
      subContent: shopInfo.hours.days,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-[#FFFFF0] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-xs uppercase font-bold text-[#B8941F] tracking-[0.25em] block mb-2">
            Connect With Us
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-[#5C4033] mt-3 max-w-xl mx-auto">
            Visit our shop in Mirganj or reach out directly for appointments and custom stitching inquiries.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Left Column: Contact Cards & Map Card */}
          <div className="lg:col-span-6 space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link || "#"}
                  className="bg-white p-5 rounded-2xl border border-[#E8DCC8] hover:border-[#D4AF37] hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/15 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                      {info.icon}
                    </div>
                    <h3 className="font-bold text-sm text-[#2C1810] mb-1">
                      {info.title}
                    </h3>
                    <p className="text-xs text-[#5C4033] font-medium leading-relaxed">
                      {info.content}
                    </p>
                    {info.subContent && (
                      <p className="text-[11px] text-[#8B7355] mt-1 font-normal">
                        {info.subContent}
                      </p>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Map Preview Card */}
            <div className="bg-gradient-to-br from-[#2C1810] to-[#5C0015] rounded-3xl p-8 text-white border-2 border-[#D4AF37]/40 shadow-xl flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-[#D4AF37]/20 text-[#D4AF37] flex items-center justify-center mb-4">
                <MapPin size={32} />
              </div>
              <h3 className="font-serif text-2xl font-bold text-[#F4E4BC] mb-1">
                Classic Tailor&apos;s
              </h3>
              <p className="text-xs sm:text-sm text-white/80 max-w-md leading-relaxed mb-6">
                {shopInfo.address.full}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Classic Tailor's Mirganj Bihar")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="gold-gradient-bg text-[#2C1810] font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-full shadow-md hover:scale-105 transition-transform"
              >
                Open in Google Maps
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Booking Form */}
          <div className="lg:col-span-6">
            <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#E8DCC8] shadow-xl">
              <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-1">
                Book an Appointment
              </h3>
              <p className="text-xs sm:text-sm text-[#8B7355] mb-6">
                Send your measurement or custom tailoring request and we will respond promptly.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12 flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4 animate-bounce">
                    <CheckCircle size={36} />
                  </div>
                  <h4 className="font-serif text-2xl font-bold text-[#2C1810] mb-1">
                    Dhanyawad! (Thank You)
                  </h4>
                  <p className="text-sm text-[#5C4033]">
                    Aapka message mil gaya hai. Massom Ahmad ji jald hi aapse sampark karenge.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1810] mb-1.5">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Apna naam likhein"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DCC8] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-[#2C1810] bg-[#FFF8E7]/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1810] mb-1.5">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Mobile number likhein"
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DCC8] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-[#2C1810] bg-[#FFF8E7]/30 transition-all"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1810] mb-1.5">
                      Service Required
                    </label>
                    <select
                      required
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DCC8] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-[#2C1810] bg-[#FFF8E7]/30 transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="coat-pant">Coat-Pant Suit (कोट-पैंट)</option>
                      <option value="3-piece">3 Piece Suit (3 पीस सूट)</option>
                      <option value="sherwani">Royal Sherwani (शेरवानी)</option>
                      <option value="kurta">Kurta-Pajama (कुर्ता-पाजामा)</option>
                      <option value="bandi">Bandi / Nehru Jacket (बंडी)</option>
                      <option value="shirt-pant">Shirt-Pant (शर्ट-पैंट)</option>
                      <option value="blazer">Blazer (ब्लेज़र)</option>
                      <option value="safari">Safari Suit (सफारी सूट)</option>
                      <option value="wedding">Wedding / Party Wear (वेडिंग वियर)</option>
                      <option value="casual">Casual Wear (केजुअल वियर)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#2C1810] mb-1.5">
                      Message (Optional)
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Koyi khaas zaroorat ya fitting detail..."
                      className="w-full px-4 py-3 rounded-xl border border-[#E8DCC8] focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37]/20 outline-none text-sm text-[#2C1810] bg-[#FFF8E7]/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gold-gradient-bg text-[#2C1810] font-bold text-sm uppercase tracking-wider py-3.5 rounded-full flex items-center justify-center gap-2 shadow-lg hover:shadow-[#D4AF37]/30 hover:scale-[1.01] active:scale-[0.99] transition-all"
                  >
                    <Send size={16} />
                    <span>Send Message</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
