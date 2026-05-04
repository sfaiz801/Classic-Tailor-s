"use client";

import { useEffect, useRef, useState } from "react";
import { Crown, Shirt, Sparkles, Briefcase, Scissors, Heart, ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import styles from "./Services.module.scss";

const iconMap: { [key: string]: React.ReactNode } = {
  crown: <Crown size={32} />,
  shirt: <Shirt size={32} />,
  sparkles: <Sparkles size={32} />,
  briefcase: <Briefcase size={32} />,
  scissors: <Scissors size={32} />,
  heart: <Heart size={32} />,
};

export default function Services() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className={styles.services} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.label}>Our Services</span>
          <h2 className={styles.title}>What We Offer</h2>
          <p className={styles.subtitle}>
            From traditional sherwanis to modern suits, we stitch perfection for every occasion
          </p>
          <div className={styles.decorativeLine}></div>
        </div>

        {/* Services Grid */}
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`${styles.serviceCard} ${isVisible ? styles.visible : ""}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconWrapper}>{iconMap[service.icon]}</div>
                <span className={styles.price}>{service.price}</span>
              </div>

              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>

              <ul className={styles.featuresList}>
                {service.features.map((feature, idx) => (
                  <li key={idx} className={styles.featureItem}>
                    <span className={styles.featureDot}></span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className={styles.cardLink}>
                Book Now
                <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
