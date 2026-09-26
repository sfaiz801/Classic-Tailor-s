export interface GalleryItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 1,
    title: "Royal Wedding Sherwani",
    category: "Sherwani",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600",
    description: "Handcrafted royal sherwani with intricate detailing"
  },
  {
    id: 2,
    title: "Executive 3-Piece Suit",
    category: "Suits",
    image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=600",
    description: "Sharp navy 3-piece suit with tailored waistcoat"
  },
  {
    id: 3,
    title: "Traditional Kurta-Pajama",
    category: "Kurta",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
    description: "Premium pure cotton festive kurta-pajama"
  },
  {
    id: 4,
    title: "Classic Bandi / Nehru Jacket",
    category: "Bandi",
    image: "https://images.unsplash.com/photo-1617137984095-74e4e5e3613f?w=600",
    description: "Elegantly tailored Nehru jacket over kurta"
  },
  {
    id: 5,
    title: "Tailored Formal Blazer",
    category: "Blazer",
    image: "https://images.unsplash.com/photo-1593032465175-481ac7f401a0?w=600",
    description: "Custom tailored blazer with Italian cut lapel"
  },
  {
    id: 6,
    title: "Bespoke Shirt & Trousers",
    category: "Shirt-Pant",
    image: "https://images.unsplash.com/photo-1620012253295-c15c429fcc65?w=600",
    description: "Sharp fit Raymond cotton shirt with tailored trousers"
  }
];

export const categories = ["All", "Suits", "Sherwani", "Kurta", "Bandi", "Blazer", "Shirt-Pant"];
