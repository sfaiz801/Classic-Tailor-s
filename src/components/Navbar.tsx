"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MapPin, Clock } from "lucide-react";
import { shopInfo } from "@/data/shop";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
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
      <div className={styles.topBar}>
        <div className={styles.topBarContent}>
          <div className={styles.topBarLeft}>
            <span className={styles.topBarItem}>
              <Phone size={14} />
              {shopInfo.contact.phone}
            </span>
            <span className={styles.topBarItem}>
              <MapPin size={14} />
              {shopInfo.address.city}, {shopInfo.address.state}
            </span>
          </div>
          <div className={styles.topBarRight}>
            <span className={styles.topBarItem}>
              <Clock size={14} />
              Open Today: {shopInfo.hours.monday}
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ""}`}>
        <div className={styles.navContainer}>
          {/* Logo */}
          <a href="#home" className={styles.logo} onClick={() => scrollToSection("#home")}>
            <div className={styles.logoIcon}>CT</div>
            <div className={styles.logoText}>
              <span className={styles.logoTitle}>Classic Tailor&apos;s</span>
              <span className={styles.logoSubtitle}>Since 1995</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <ul className={styles.navLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={styles.navLink}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href={`tel:${shopInfo.contact.phone}`}
            className={styles.ctaButton}
          >
            <Phone size={18} />
            Call Now
          </a>

          {/* Mobile Menu Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isMobileMenuOpen ? styles.open : ""}`}>
          <ul className={styles.mobileNavLinks}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={styles.mobileNavLink}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a href={`tel:${shopInfo.contact.phone}`} className={styles.mobileCta}>
            <Phone size={20} />
            Call Now
          </a>
        </div>
      </nav>
    </>
  );
}
