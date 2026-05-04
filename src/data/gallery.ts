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
    title: "Royal Sherwani",
    category: "Sherwani",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600",
    description: "Premium cream sherwani with gold embroidery"
  },
  {
    id: 2,
    title: "Elegant Kurta Set",
    category: "Kurta",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
    description: "Traditional white kurta with churidar"
  },
  {
    id: 3,
    title: "Designer Salwar",
    category: "Salwar",
    image: "https://images.unsplash.com/photo-1583391733952-9350a6946e0a?w=600",
    description: "Green salwar kameez with mirror work"
  },
  {
    id: 4,
    title: "Wedding Lehenga",
    category: "Lehenga",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=600",
    description: "Bridal red lehenga with heavy embroidery"
  },
  {
    id: 5,
    title: "Formal Blazer",
    category: "Blazer",
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=600",
    description: "Navy blue tailored blazer"
  },
  {
    id: 6,
    title: "Festive Kurta",
    category: "Kurta",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=600",
    description: "Festive yellow kurta for celebrations"
  }
];

export const categories = ["All", "Sherwani", "Kurta", "Salwar", "Lehenga", "Blazer"];
