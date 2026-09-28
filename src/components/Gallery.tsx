"use client";

import { useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { useSiteData } from "@/context/DataContext";
import { categories } from "@/data/gallery";

export default function Gallery() {
  const { galleryItems } = useSiteData();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="py-20 bg-[#FFFFF0] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase font-bold text-[#B8941F] tracking-[0.25em] block mb-2">
            Master Creations
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#2C1810]">
            Our Gallery
          </h2>
          <p className="text-sm sm:text-base text-[#5C4033] mt-3 max-w-xl mx-auto">
            Explore our handcrafted bespoke men&apos;s attire — each stitch tailored for distinction.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mx-auto mt-4"></div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                activeCategory === category
                  ? "gold-gradient-bg text-[#2C1810] shadow-md scale-105"
                  : "bg-white text-[#5C4033] border border-[#E8DCC8] hover:border-[#D4AF37]"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setSelectedImage(item.id)}
              className="bg-white rounded-3xl overflow-hidden border border-[#E8DCC8] hover:border-[#D4AF37] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden bg-gray-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-[#2C1810]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 text-[#2C1810] flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ZoomIn size={22} />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <span className="text-[10px] uppercase font-bold tracking-widest text-[#B8941F] bg-[#D4AF37]/15 px-2.5 py-1 rounded-md">
                  {item.category}
                </span>
                <h3 className="font-serif text-lg font-bold text-[#2C1810] mt-3 mb-1">
                  {item.title}
                  {item.hindiTitle && (
                    <span className="block text-xs font-semibold text-[#B8941F] font-hindi">
                      ({item.hindiTitle})
                    </span>
                  )}
                </h3>
                <p className="text-xs text-[#8B7355] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white p-2 rounded-full bg-white/10"
            aria-label="Close"
          >
            <X size={28} />
          </button>
          <div
            className="max-w-3xl w-full bg-[#2C1810] rounded-3xl overflow-hidden border border-[#D4AF37]/50 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryItems.find((i) => i.id === selectedImage)?.image}
              alt={galleryItems.find((i) => i.id === selectedImage)?.title}
              className="w-full max-h-[70vh] object-contain bg-black"
            />
            <div className="p-6 bg-gradient-to-t from-[#1A0E0A] to-[#2C1810] text-white">
              <h3 className="font-serif text-2xl font-bold text-[#F4E4BC] flex items-center gap-2">
                <span>{galleryItems.find((i) => i.id === selectedImage)?.title}</span>
                {galleryItems.find((i) => i.id === selectedImage)?.hindiTitle && (
                  <span className="text-base text-[#D4AF37] font-normal">
                    ({galleryItems.find((i) => i.id === selectedImage)?.hindiTitle})
                  </span>
                )}
              </h3>
              <p className="text-sm text-white/80 mt-1">
                {galleryItems.find((i) => i.id === selectedImage)?.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
