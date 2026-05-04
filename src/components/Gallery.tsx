"use client";

import { useEffect, useRef, useState } from "react";
import { X, ZoomIn } from "lucide-react";
import { galleryItems, categories } from "@/data/gallery";
import styles from "./Gallery.module.scss";

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section id="gallery" className={styles.gallery} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.label}>Portfolio</span>
          <h2 className={styles.title}>Our Gallery</h2>
          <p className={styles.subtitle}>
            Explore our finest creations — each piece tells a story of craftsmanship
          </p>
          <div className={styles.decorativeLine}></div>
        </div>

        {/* Category Filter */}
        <div className={`${styles.filterContainer} ${isVisible ? styles.visible : ""}`}>
          {categories.map((category) => (
            <button
              key={category}
              className={`${styles.filterBtn} ${activeCategory === category ? styles.active : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`${styles.galleryItem} ${isVisible ? styles.visible : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(item.id)}
            >
              <div className={styles.imageWrapper}>
                <img 
                  src={item.image} 
                  alt={item.title}
                  className={styles.image}
                  loading="lazy"
                />
                <div className={styles.overlay}>
                  <ZoomIn size={24} />
                </div>
              </div>
              <div className={styles.itemInfo}>
                <span className={styles.itemCategory}>{item.category}</span>
                <h3 className={styles.itemTitle}>{item.title}</h3>
                <p className={styles.itemDesc}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className={styles.lightbox} onClick={() => setSelectedImage(null)}>
          <button className={styles.closeBtn} onClick={() => setSelectedImage(null)}>
            <X size={28} />
          </button>
          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img 
              src={galleryItems.find(i => i.id === selectedImage)?.image} 
              alt={galleryItems.find(i => i.id === selectedImage)?.title}
              className={styles.lightboxImage}
            />
            <div className={styles.lightboxInfo}>
              <h3>{galleryItems.find(i => i.id === selectedImage)?.title}</h3>
              <p>{galleryItems.find(i => i.id === selectedImage)?.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
