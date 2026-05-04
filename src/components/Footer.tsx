"use client";

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube, Heart } from "lucide-react";
import { shopInfo } from "@/data/shop";
import styles from "./Footer.module.scss";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  const services = [
    "Sherwani Stitching",
    "Kurta Pajama",
    "Salwar Kameez",
    "Suit & Blazer",
    "Alteration",
    "Wedding Collection",
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Main Footer Content */}
        <div className={styles.footerGrid}>
          {/* Brand Column */}
          <div className={styles.brandColumn}>
            <div className={styles.brand}>
              <div className={styles.logoIcon}>CT</div>
              <div>
                <h3 className={styles.brandName}>Classic Tailor&apos;s</h3>
                <p className={styles.brandTagline}>{shopInfo.tagline}</p>
              </div>
            </div>
            <p className={styles.brandDesc}>
              Premium Indian tailoring services by Masoom Ahmad Siddique. 
              Crafting elegance with every stitch since 1995.
            </p>
            <div className={styles.socialLinks}>
              <a href={shopInfo.social.facebook} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Facebook size={20} />
              </a>
              <a href={shopInfo.social.instagram} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Instagram size={20} />
              </a>
              <a href={shopInfo.social.youtube} target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linksList}>
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className={styles.link}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className={styles.linksColumn}>
            <h4 className={styles.columnTitle}>Our Services</h4>
            <ul className={styles.linksList}>
              {services.map((service, index) => (
                <li key={index}>
                  <span className={styles.link}>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactColumn}>
            <h4 className={styles.columnTitle}>Contact Info</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={18} />
                <span>{shopInfo.address.full}</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={18} />
                <a href={`tel:${shopInfo.contact.phone}`}>{shopInfo.contact.phone}</a>
              </li>
              <li className={styles.contactItem}>
                <Mail size={18} />
                <a href={`mailto:${shopInfo.contact.email}`}>{shopInfo.contact.email}</a>
              </li>
              <li className={styles.contactItem}>
                <Clock size={18} />
                <span>Mon-Sat: 9AM - 8PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Classic Tailor&apos;s. All rights reserved.
          </p>
          <p className={styles.credit}>
            Managed by <Heart size={14} className={styles.heart} />  Faiz Siddique
          </p>
        </div>
      </div>
    </footer>
  );
}
