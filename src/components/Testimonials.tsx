"use client";

import { useEffect, useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import styles from "./Testimonials.module.scss";

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className={styles.testimonials} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.label}>Testimonials</span>
          <h2 className={styles.title}>What Our Customers Say</h2>
          <p className={styles.subtitle}>
            Real stories from real customers who trusted us with their special moments
          </p>
          <div className={styles.decorativeLine}></div>
        </div>

        {/* Testimonials Slider */}
        <div className={`${styles.sliderContainer} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.slider}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`${styles.testimonialCard} ${index === currentIndex ? styles.active : ""}`}
              >
                <div className={styles.quoteIcon}>
                  <Quote size={40} />
                </div>

                <div className={styles.rating}>
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={20}
                      className={i < testimonial.rating ? styles.starFilled : styles.starEmpty}
                      fill={i < testimonial.rating ? "currentColor" : "none"}
                    />
                  ))}
                </div>

                <p className={styles.text}>{testimonial.text}</p>

                <div className={styles.author}>
                  <div className={styles.avatar}>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <span className={styles.authorLocation}>{testimonial.location}</span>
                  </div>
                </div>

                <span className={styles.date}>{testimonial.date}</span>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className={styles.navigation}>
            <button className={styles.navBtn} onClick={prevSlide} aria-label="Previous testimonial">
              <ChevronLeft size={24} />
            </button>

            <div className={styles.dots}>
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`${styles.dot} ${index === currentIndex ? styles.active : ""}`}
                  onClick={() => setCurrentIndex(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button className={styles.navBtn} onClick={nextSlide} aria-label="Next testimonial">
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
