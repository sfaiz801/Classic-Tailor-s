export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    title: "Sherwani Stitching",
    description: "Handcrafted sherwanis with intricate embroidery and perfect fitting for weddings and special occasions.",
    price: "Starting from ₹3,500",
    icon: "crown",
    features: ["Premium Fabric Selection", "Custom Embroidery", "Perfect Fitting Guarantee", "5-7 Days Delivery"]
  },
  {
    id: 2,
    title: "Kurta Pajama",
    description: "Elegant kurta pajama sets tailored with precision for festivals, functions, and daily wear.",
    price: "Starting from ₹800",
    icon: "shirt",
    features: ["Multiple Style Options", "Cotton & Silk Fabrics", "Traditional & Modern Designs", "3-4 Days Delivery"]
  },
  {
    id: 3,
    title: "Salwar Kameez",
    description: "Beautifully stitched salwar kameez for women with detailed work and comfortable fitting.",
    price: "Starting from ₹1,200",
    icon: "sparkles",
    features: ["Designer Patterns", "Churidar & Patiala Styles", "Dupatta Matching", "4-5 Days Delivery"]
  },
  {
    id: 4,
    title: "Suit & Blazer",
    description: "Professional suit and blazer tailoring for a sharp, sophisticated look.",
    price: "Starting from ₹5,500",
    icon: "briefcase",
    features: ["Italian & Indian Fabrics", "Lapel Customization", "Perfect Shoulder Fit", "5-6 Days Delivery"]
  },
  {
    id: 5,
    title: "Alteration & Repair",
    description: "Expert alteration services to make your existing clothes fit perfectly.",
    price: "Starting from ₹150",
    icon: "scissors",
    features: ["Size Adjustments", "Zip Replacement", "Button Fixing", "Same Day Service"]
  },
  {
    id: 6,
    title: "Wedding Collection",
    description: "Complete wedding attire solutions including lehengas, sherwanis, and family matching outfits.",
    price: "Custom Quote",
    icon: "heart",
    features: ["Bridal Lehengas", "Groom Sherwanis", "Family Coordination", "Premium Packaging"]
  }
];
