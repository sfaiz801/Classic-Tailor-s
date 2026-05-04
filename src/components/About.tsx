"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Heart, Users, Clock } from "lucide-react";
import { shopInfo } from "@/data/shop";
import styles from "./About.module.scss";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Award size={28} />,
      title: "Premium Quality",
      description: "We use only the finest fabrics and threads for lasting elegance."
    },
    {
      icon: <Heart size={28} />,
      title: "Handcrafted with Love",
      description: "Every stitch is made with care and attention to detail."
    },
    {
      icon: <Users size={28} />,
      title: "Expert Tailors",
      description: "Our team has decades of combined experience in Indian tailoring."
    },
    {
      icon: <Clock size={28} />,
      title: "On-Time Delivery",
      description: "We respect your time and deliver as promised, every single time."
    }
  ];

  return (
    <section id="about" className={styles.about} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.label}>About Us</span>
          <h2 className={styles.title}>Our Story of Excellence</h2>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.content}>
          {/* Image Side */}
          <div className={`${styles.imageSide} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.imageContainer}>
              <div className={styles.imageFrame}>
                <div className={styles.imagePlaceholder}>
                  <span className={styles.imageText}>Classic Tailor&apos;s</span>
                  <span className={styles.imageSubtext}>Since 1995</span>
                </div>
              </div>
              <div className={styles.experienceBadge}>
                <span className={styles.expNumber}>{shopInfo.experience}</span>
                <span className={styles.expText}>of Excellence</span>
              </div>
            </div>
          </div>

          {/* Text Side */}
          <div className={`${styles.textSide} ${isVisible ? styles.visible : ""}`}>
            <h3 className={styles.subtitle}>
              Crafting Tradition with Modern Precision
            </h3>
            <p className={styles.text}>
              Welcome to <strong>Classic Tailor&apos;s</strong>, where tradition meets perfection. 
              Founded by <strong>Masoom Ahmad Siddique</strong> in {shopInfo.established}, our shop 
              in Mirganj, Gopalganj, Bihar has been the trusted destination for premium Indian tailoring.
            </p>
            <p className={styles.text}>
              From royal sherwanis for weddings to elegant salwar suits for festivals, we bring 
              your vision to life with impeccable craftsmanship. Our commitment to quality and 
              customer satisfaction has made us the most beloved tailor in the region.
            </p>

            {/* Features Grid */}
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}>{feature.icon}</div>
                  <h4 className={styles.featureTitle}>{feature.title}</h4>
                  <p className={styles.featureDesc}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
