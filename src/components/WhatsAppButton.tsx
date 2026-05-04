"use client";

import { MessageCircle } from "lucide-react";
import { shopInfo } from "@/data/shop";
import styles from "./WhatsAppButton.module.scss";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${shopInfo.contact.whatsapp.replace(/\D/g, "")}`}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.whatsappBtn}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} fill="currentColor" />
      <span className={styles.tooltip}>Chat on WhatsApp</span>
    </a>
  );
}
