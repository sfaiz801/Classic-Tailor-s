import type { Metadata } from "next";
import "../styles/globals.scss";

export const metadata: Metadata = {
  title: "Classic Tailor's | Traditional Indian Tailoring - Mirganj, Gopalganj, Bihar",
  description: "Classic Tailor's by Masoom Ahmad Siddique - Premium Indian tailoring services in Mirganj, Gopalganj, Bihar. Sherwani, Kurta, Salwar, Lehenga stitching with 30+ years experience.",
  keywords: "tailor, tailoring, Indian tailor, sherwani, kurta, salwar, lehenga, Mirganj, Gopalganj, Bihar, Masoom Ahmad Siddique",
  authors: [{ name: "Masoom Ahmad Siddique" }],
  openGraph: {
    title: "Classic Tailor's | Traditional Indian Tailoring",
    description: "Premium Indian tailoring services in Mirganj, Gopalganj, Bihar",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
