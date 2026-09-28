export interface Service {
  id: number;
  title: string;
  hindiTitle: string;
  description: string;
  price: string;
  icon: string;
  image?: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Coat-Pant Suit",
    hindiTitle: "कोट-पैंट सूट",
    description: "Executive two-piece suits tailored with precision, perfect shoulder cut, and premium internal canvas structuring.",
    price: "Custom Quote",
    icon: "briefcase",
    image: "/images/gallery/coat-pant.jpg",
    features: ["Raymond & Siyaram's Fabric", "Custom Lapel Styles", "Precision Fit Guarantee", "Formal & Business Wear"]
  },
  {
    id: 2,
    title: "3 Piece Suit",
    hindiTitle: "3 पीस सूट",
    description: "Royal 3-piece formal suit with tailored waistcoat for grand weddings, receptions, and red-carpet events.",
    price: "Custom Quote",
    icon: "crown",
    image: "/images/gallery/three-piece-suit.jpg",
    features: ["Tailored Waistcoat", "Premium Italian Cut", "Slim & Regular Fitting", "High-Grade Stitching"]
  },
  {
    id: 3,
    title: "Royal Sherwani",
    hindiTitle: "शेरवानी",
    description: "Handcrafted groom and wedding sherwanis designed for a majestic Indian royal look with perfect drape.",
    price: "Custom Quote",
    icon: "crown",
    image: "/images/gallery/sherwani.jpg",
    features: ["Wedding & Groom Specialist", "Custom Embroidery & Cut", "Traditional Royal Fit", "Accessory Coordination"]
  },
  {
    id: 4,
    title: "Kurta-Pajama",
    hindiTitle: "कुर्ता-पाजामा",
    description: "Classic Indian kurta pajama and churidar stitched with ultra-comfortable cotton, linen, or festive silks.",
    price: "Custom Quote",
    icon: "shirt",
    image: "/images/gallery/kurta-pajama.jpg",
    features: ["Pathani & Straight Cuts", "Churidar / Dhoti Pairing", "Festive & Daily Wear", "Breathable Fabrics"]
  },
  {
    id: 5,
    title: "Bandi / Nehru Jacket",
    hindiTitle: "बंडी",
    description: "Traditional sleeveless Nehru jackets and Bandis that add an instant royal touch over any kurta or shirt.",
    price: "Custom Quote",
    icon: "sparkles",
    image: "/images/gallery/bandi-jacket.jpg",
    features: ["Mandarin Collar Cut", "Custom Pocket Styling", "Silk, Tweed & Jacquard", "Festive Occasions"]
  },
  {
    id: 6,
    title: "Shirt-Pant",
    hindiTitle: "शर्ट-पैंट",
    description: "Everyday formal and casual shirts and trousers stitched strictly to your personal body measurements.",
    price: "Custom Quote",
    icon: "scissors",
    image: "/images/gallery/shirt-pant.jpg",
    features: ["Custom Collar & Cuffs", "Pleated or Flat Front Pants", "Wrinkle-Resistant Fit", "Daily & Office Comfort"]
  },
  {
    id: 7,
    title: "Blazer",
    hindiTitle: "ब्लेज़र",
    description: "Sharp casual and semi-formal blazers that pair effortlessly with jeans, chinos, or formal trousers.",
    price: "Custom Quote",
    icon: "award",
    image: "/images/gallery/blazer.jpg",
    features: ["Single & Double Breasted", "Custom Button Accents", "Lightweight Canvas", "Modern Silhouette"]
  },
  {
    id: 8,
    title: "Safari Suit",
    hindiTitle: "सफारी सूट",
    description: "Timeless traditional safari suits designed for comfort, respect, and effortless vintage authority.",
    price: "Custom Quote",
    icon: "shirt",
    image: "/images/gallery/safari-suit.jpg",
    features: ["Classic Safari Pockets", "Belt & Shoulder Flaps", "Durable All-Day Wear", "Distinguished Look"]
  },
  {
    id: 9,
    title: "Jodhpuri / Wedding Wear",
    hindiTitle: "जोधपुरी / वेडिंग वियर",
    description: "Royal imperial Jodhpuri Bandhgala and luxury bespoke wedding tailoring for grooms and family.",
    price: "Custom Quote",
    icon: "heart",
    image: "/images/gallery/jodhpuri-suit.jpg",
    features: ["Regal Mandarin Collar", "Embossed Metallic Buttons", "Priority Delivery", "Final Fitting Sessions"]
  },
  {
    id: 10,
    title: "Casual & Linen Wear",
    hindiTitle: "केजुअल वियर",
    description: "Comfortable and stylish casual shirts, pure linen trousers, and semi-formal men's wear tailored to perfection.",
    price: "Custom Quote",
    icon: "users",
    image: "/images/gallery/shirt-pant.jpg",
    features: ["Relaxed Body Fitting", "Breathable Linens & Cottons", "Trendy Cuts", "Durable Stitching"]
  }
];
