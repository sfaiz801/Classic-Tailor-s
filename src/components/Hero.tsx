"use client";

import { useEffect, useRef } from "react";
import { ArrowDown, Phone, Scissors, Award, Users } from "lucide-react";
import { shopInfo } from "@/data/shop";
import styles from "./Hero.module.scss";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        heroRef.current.style.setProperty("--scroll", `${scrollY * 0.5}px`);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="home" className={styles.hero} ref={heroRef}>
      {/* Background Pattern */}
      <div className={styles.heroBg}>
        <div className={styles.pattern}></div>
        <div className={styles.gradientOverlay}></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className={styles.floatingElements}>
        <div className={`${styles.floatItem} ${styles.float1}`}>
          <Scissors size={32} />
        </div>
        <div className={`${styles.floatItem} ${styles.float2}`}>
          <Award size={28} />
        </div>
        <div className={`${styles.floatItem} ${styles.float3}`}>
          <Users size={30} />
        </div>
      </div>

      <div className={styles.heroContent}>
        {/* Badge */}
        <div className={styles.badge}>
          <span className={styles.badgeIcon}>✦</span>
          <span>Trusted Since {shopInfo.established}</span>
          <span className={styles.badgeIcon}>✦</span>
        </div>

        {/* Main Heading */}
        <h1 className={styles.title}>
          <span className={styles.titleLine1}>Classic</span>
          <span className={styles.titleLine2}>Tailor&apos;s</span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>
          Where Tradition Meets Precision
        </p>

        {/* Description */}
        <p className={styles.description}>
          Premium Indian tailoring by <strong>Masoom Ahmad Siddique</strong> in Mirganj, Gopalganj, Bihar. 
          We craft elegance with every stitch — from royal sherwanis to elegant salwar suits.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctaGroup}>
          <a href="#services" className={styles.btnPrimary}>
            Explore Services
          </a>
          <a href={`tel:${shopInfo.contact.phone}`} className={styles.btnOutline}>
            <Phone size={18} />
            Call Now
          </a>
        </div>

        {/* Location Tag */}
        <div className={styles.locationTag}>
          <span className={styles.locationDot}></span>
          <span>Mirganj, Gopalganj, Bihar</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll Down</span>
        <ArrowDown size={20} className={styles.scrollIcon} />
      </a>

      {/* Side Stats */}
      <div className={styles.sideStats}>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>30+</span>
          <span className={styles.statLabel}>Years</span>
        </div>
        <div className={styles.statDivider}></div>
        <div className={styles.statItem}>
          <span className={styles.statNumber}>15K+</span>
          <span className={styles.statLabel}>Customers</span>
        </div>
      </div>
    </section>
  );
}
