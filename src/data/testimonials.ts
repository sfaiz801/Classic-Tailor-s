export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  date: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Kumar",
    location: "Mirganj, Gopalganj",
    rating: 5,
    text: "Classic Tailor's ne meri shaadi ke liye sherwani aur 3-piece suit itna shaandar banaya ki sabhi doston ne tareef ki. Massom bhai ki fitting ka koi jawab nahi!",
    date: "March 2026"
  },
  {
    id: 2,
    name: "Mohammad Imran",
    location: "Siwan, Bihar",
    rating: 5,
    text: "Kurta-pajama aur Bandi ka cut bilkul royal tha. Delivery bhi waqt par hui. Mirganj me purushon ke kapde silwane ke liye sabse behtareen dukaan hai.",
    date: "February 2026"
  },
  {
    id: 3,
    name: "Alok Singh",
    location: "Hathua, Gopalganj",
    rating: 5,
    text: "Raymond ke kapde se coat-pant banwaya tha. Fitting bilkul showroom jaisi custom aayi. 31 saal ka anubhav sach me dikhta hai.",
    date: "January 2026"
  },
  {
    id: 4,
    name: "Dharmendra Yadav",
    location: "Mirganj, Bihar",
    rating: 5,
    text: "Instagram par dekh kar gaya tha, ₹100 ki chhoot bhi mili aur shirt-pant ki silai bhi bahut behtareen hui. Highly recommended!",
    date: "December 2025"
  },
  {
    id: 5,
    name: "Faiz Siddique",
    location: "Gopalganj, Bihar",
    rating: 5,
    text: "Blazer aur Safari suit dono yahan se banwaye. Quality aur stitching dono top-notch hain. Massom Ahmad ji ka vyavhaar bhi bahut accha hai.",
    date: "April 2026"
  }
];
