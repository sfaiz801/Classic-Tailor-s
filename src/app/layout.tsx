import type { Metadata, Viewport } from "next";
import "../styles/globals.css";
import { DataProvider } from "@/context/DataContext";

export const viewport: Viewport = {
  themeColor: "#5C0015",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Classic Tailor's | Traditional Indian Tailoring - Mirganj, Gopalganj, Bihar",
  description: "Classic Tailor's by Massom Ahmad - Men's bespoke tailoring in Mirganj, Gopalganj, Bihar. Suits, Sherwani, Kurta-Pajama, Bandi with Raymond & Siyaram's original fabric.",
  keywords: "tailor, tailoring, Men's tailor, sherwani, kurta pajama, suit, blazer, bandi, Mirganj, Gopalganj, Bihar, Massom Ahmad, Classic Tailors",
  authors: [{ name: "Massom Ahmad" }],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  openGraph: {
    title: "Classic Tailor's | Men's Bespoke Tailoring",
    description: "Premium Men's tailoring services in Mirganj, Gopalganj, Bihar",
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
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js').catch(function(){});
                });
              }
            `,
          }}
        />
      </head>
      <body>
        <DataProvider>{children}</DataProvider>
      </body>
    </html>
  );
}
