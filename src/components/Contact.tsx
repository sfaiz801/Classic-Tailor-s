"use client";

import { useEffect, useRef, useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from "lucide-react";
import { shopInfo } from "@/data/shop";
import styles from "./Contact.module.scss";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", phone: "", service: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Visit Us",
      content: shopInfo.address.full,
      link: `https://maps.google.com/?q=${encodeURIComponent(shopInfo.address.full)}`,
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      content: shopInfo.contact.phone,
      link: `tel:${shopInfo.contact.phone}`,
    },
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      content: shopInfo.contact.email,
      link: `mailto:${shopInfo.contact.email}`,
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      content: "Mon-Sat: 9AM - 8PM",
      subContent: "Sunday: 10AM - 6PM",
    },
  ];

  return (
    <section id="contact" className={styles.contact} ref={sectionRef}>
      <div className={styles.container}>
        {/* Section Header */}
        <div className={`${styles.header} ${isVisible ? styles.visible : ""}`}>
          <span className={styles.label}>Contact Us</span>
          <h2 className={styles.title}>Get In Touch</h2>
          <p className={styles.subtitle}>
            Visit our shop in Mirganj or reach out to us for any tailoring needs
          </p>
          <div className={styles.decorativeLine}></div>
        </div>

        <div className={styles.content}>
          {/* Contact Info Cards */}
          <div className={`${styles.infoSection} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.infoGrid}>
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link || "#"}
                  className={styles.infoCard}
                  style={{ transitionDelay: `${index * 0.1}s` }}
                >
                  <div className={styles.infoIcon}>{info.icon}</div>
                  <h3 className={styles.infoTitle}>{info.title}</h3>
                  <p className={styles.infoContent}>{info.content}</p>
                  {info.subContent && (
                    <p className={styles.infoSubContent}>{info.subContent}</p>
                  )}
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className={styles.mapContainer}>
              <div className={styles.mapPlaceholder}>
                <MapPin size={48} />
                <h3>Classic Tailor&apos;s</h3>
                <p>{shopInfo.address.full}</p>
                <a
                  href={`https://maps.google.com/?q=${encodeURIComponent(shopInfo.address.full)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.mapBtn}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${styles.formSection} ${isVisible ? styles.visible : ""}`}>
            <div className={styles.formCard}>
              <h3 className={styles.formTitle}>Book an Appointment</h3>
              <p className={styles.formSubtitle}>
                Fill out the form below and we&apos;ll get back to you shortly
              </p>

              {isSubmitted ? (
                <div className={styles.successMessage}>
                  <CheckCircle size={48} />
                  <h4>Thank You!</h4>
                  <p>We&apos;ll contact you soon.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className={styles.form}>
                  <div className={styles.formGroup}>
                    <label htmlFor="name">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="service">Service Required</label>
                    <select
                      id="service"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      required
                    >
                      <option value="">Select a service</option>
                      <option value="sherwani">Sherwani Stitching</option>
                      <option value="kurta">Kurta Pajama</option>
                      <option value="salwar">Salwar Kameez</option>
                      <option value="suit">Suit & Blazer</option>
                      <option value="alteration">Alteration & Repair</option>
                      <option value="wedding">Wedding Collection</option>
                    </select>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="message">Message (Optional)</label>
                    <textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <Send size={18} />
                    Send Message
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
