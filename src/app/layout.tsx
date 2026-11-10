import type { Metadata } from "next";
import type { ReactNode } from "react";

import {
  Playfair_Display,
  Inter,
  Cormorant_Garamond,
  Manrope,
  DM_Serif_Display,
  DM_Sans,
} from "next/font/google";

import "./globals.css";

/* Primary editorial pairing */

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* Refined editorial pairing */

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

/* Contemporary editorial pairing */

const dmSerif = DM_Serif_Display({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

/* Website metadata */

export const metadata: Metadata = {
  title: {
    default: "The Lagos Journal | Lagos Real Estate Investment in Focus",
    template: "%s | The Lagos Journal",
  },
  description:
    "Discover premium Lagos properties, shortlets, real estate investment insights and the people shaping the city's property market.",
  applicationName: "The Lagos Journal",
  keywords: [
    "The Lagos Journal",
    "Lagos real estate",
    "Lagos property",
    "Lagos luxury properties",
    "Lagos shortlets",
    "Nigeria real estate investment",
  ],
  openGraph: {
    title: "The Lagos Journal",
    description: "Lagos Real Estate Investment in Focus.",
    type: "website",
    locale: "en_NG",
    siteName: "The Lagos Journal",
  },
};

/* Root application layout */

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={[
        playfair.variable,
        inter.variable,
        cormorant.variable,
        manrope.variable,
        dmSerif.variable,
        dmSans.variable,
        "h-full antialiased",
      ].join(" ")}
    >
      <body className="flex min-h-screen flex-col">
        {children}
      </body>
    </html>
  );
}
