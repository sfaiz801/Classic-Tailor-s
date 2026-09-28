export interface Service {
  id: number;
  title: string;
  hindiTitle?: string;
  description: string;
  price: string;
  icon: string;
  image?: string;
  features: string[];
}

export interface GalleryItem {
  id: number;
  title: string;
  hindiTitle?: string;
  category: string;
  image: string;
  description: string;
}

export interface Inquiry {
  id: string;
  name: string;
  phone: string;
  service: string;
  date: string;
  status: 'New' | 'Contacted' | 'Completed';
  notes?: string;
}

export interface ShopOffer {
  badge: string;
  discount: string;
  title: string;
  subtitle: string;
  condition: string;
  buttonText: string;
  link: string;
}

export interface ShopAddress {
  street: string;
  landmark: string;
  city: string;
  district: string;
  state: string;
  pincode: string;
  full: string;
  mapQuery: string;
}

export interface ShopContact {
  phone: string;
  whatsapp: string;
  altPhone: string;
  email: string;
}

export interface ShopHours {
  display: string;
  days: string;
  [key: string]: string;
}

export interface ShopInfo {
  name: string;
  tagline: string;
  hindiTagline: string;
  slogan: string;
  owner: string;
  fullOwnerName: string;
  address: ShopAddress;
  contact: ShopContact;
  hours: ShopHours;
  social: {
    instagram: string;
    instagramUsername: string;
    facebook: string;
    youtube: string;
  };
  offer: ShopOffer;
  fabrics: Array<{ name: string; tagline: string }>;
  usps: Array<{ title: string; hindi: string; desc: string }>;
  established: number;
  experience: string;
  experienceHindi: string;
  onlyMens: string;
  singleBranch: string;
  managedBy: string;
}

export interface AdminUser {
  email: string;
  role: 'superadmin';
  name: string;
  shop: string;
}
