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
    location: "Gopalganj, Bihar",
    rating: 5,
    text: "Classic Tailors ne meri shaadi ke liye sherwani itni khoobsurat banayi. Har kisi ne taarif ki. Masoom bhai ka kaam lajawab hai!",
    date: "March 2026"
  },
  {
    id: 2,
    name: "Priya Sharma",
    location: "Patna, Bihar",
    rating: 5,
    text: "Mere salwar kameez ka fitting bilkul perfect tha. Fabric quality aur stitching dono bahut acchi thi. Highly recommended!",
    date: "February 2026"
  },
  {
    id: 3,
    name: "Mohammad Imran",
    location: "Siwan, Bihar",
    rating: 5,
    text: "Kurta pajama ka design aur fitting dono zabardast thi. Time par delivery bhi ho gayi. Bahut hi professional service.",
    date: "January 2026"
  },
  {
    id: 4,
    name: "Sunita Devi",
    location: "Mirganj, Gopalganj",
    rating: 5,
    text: "Meri beti ki shaadi ke liye lehenga stitch karwaya. Itni sundar embroidery thi ki sab log dekh kar hairan reh gaye.",
    date: "December 2025"
  },
  {
    id: 5,
    name: "Faiz Siddique",
    location: "Chapra, Bihar",
    rating: 4,
    text: "Blazer ka fitting aur fabric quality dono acchi thi. Price bhi reasonable hai. Next time bhi yahin se banwaunga.",
    date: "April 2026"
  }
];
