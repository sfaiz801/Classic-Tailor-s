"use client";

import { useEffect, useRef, useState } from "react";
import { stats } from "@/data/shop";
import styles from "./Stats.module.scss";

export default function Stats() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const targetValues = stats.map((stat) => {
      const num = parseInt(stat.number.replace(/[^0-9]/g, ""));
      return num;
    });

    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setCounts(targetValues.map((target) => Math.floor(target * easeOut)));

      if (step >= steps) {
        clearInterval(timer);
        setCounts(targetValues);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section className={styles.stats} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.statsGrid}>
          {stats.map((stat, index) => (
            <div key={index} className={`${styles.statCard} ${isVisible ? styles.visible : ""}`}>
              <div className={styles.statNumber}>
                {counts[index]}
                {stat.number.includes("+") && "+"}
                {stat.number.includes("%") && "%"}
              </div>
              <div className={styles.statLabel}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
