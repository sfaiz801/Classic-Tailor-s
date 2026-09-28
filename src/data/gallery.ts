export interface GalleryItem {
  id: number;
  title: string;
  hindiTitle?: string;
  category: string;
  image: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Royal Wedding Sherwani",
    hindiTitle: "रॉयल शेरवानी",
    category: "Sherwani",
    image: "/images/gallery/sherwani.webp",
    description: "Handcrafted ivory & gold groom sherwani with intricate zardozi embroidery and royal drape."
  },
  {
    id: 2,
    title: "Executive 2-Piece Coat-Pant",
    hindiTitle: "कोट-पैंट सूट",
    category: "Suits",
    image: "/images/gallery/coat-pant.webp",
    description: "Bespoke navy blue Italian cut suit crafted from Raymond pure wool with precision shoulder pad structuring."
  },
  {
    id: 3,
    title: "Royal 3-Piece Suit",
    hindiTitle: "3 पीस सूट",
    category: "3-Piece",
    image: "/images/gallery/three-piece-suit.webp",
    description: "Magnificent 3-piece formal suit with tailored peak-lapel waistcoat, matching trousers, and bespoke silhouette."
  },
  {
    id: 4,
    title: "Traditional Kurta-Pajama",
    hindiTitle: "कुर्ता-पाजामा",
    category: "Kurta",
    image: "/images/gallery/kurta-pajama.webp",
    description: "Tailored festive emerald green silk kurta with intricate gold neckline detailing and churidar pairing."
  },
  {
    id: 5,
    title: "Imperial Jodhpuri Bandhgala",
    hindiTitle: "जोधपुरी सूट / बंदगला",
    category: "Jodhpuri",
    image: "/images/gallery/jodhpuri-suit.webp",
    description: "Midnight blue regal closed mandarin collar Jodhpuri suit with engraved metallic brass buttons."
  },
  {
    id: 6,
    title: "Heritage Silk Bandi / Nehru Jacket",
    hindiTitle: "बंडी / नेहरू जैकेट",
    category: "Bandi",
    image: "/images/gallery/bandi-jacket.webp",
    description: "Rich maroon & gold brocade jacquard Bandi paired elegantly over a pristine white linen kurta."
  },
  {
    id: 7,
    title: "Distinguished Safari Suit",
    hindiTitle: "सफारी सूट",
    category: "Safari",
    image: "/images/gallery/safari-suit.webp",
    description: "Classic four-flap pocket safari suit in premium breathable beige fabric with vintage authority cut."
  },
  {
    id: 8,
    title: "Bespoke Formal Shirt & Trousers",
    hindiTitle: "फॉर्मल पैंट-शर्ट",
    category: "Shirt-Pant",
    image: "/images/gallery/shirt-pant.webp",
    description: "Crisp sky-blue Raymond cotton formal shirt with French cuffs and precision tailored charcoal trousers."
  },
  {
    id: 9,
    title: "Royal Velvet Evening Blazer",
    hindiTitle: "ब्लेज़र",
    category: "Blazer",
    image: "/images/gallery/blazer.webp",
    description: "Luxury deep wine burgundy velvet blazer with satin peak lapels for galas, receptions, and red carpet events."
  }
];

export const categories = [
  "All",
  "Sherwani",
  "Suits",
  "3-Piece",
  "Kurta",
  "Jodhpuri",
  "Bandi",
  "Safari",
  "Shirt-Pant",
  "Blazer"
];
