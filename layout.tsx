import type { Metadata } from "next";
import { Bebas_Neue, Cormorant, DM_Mono } from "next/font/google";
import "./globals.css";

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const cormorant = Cormorant({
  weight: ["400", "500", "600"],
  style: ["italic", "normal"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["300", "400", "500"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dmmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piyush Dhauni — Portfolio",
  description:
    "Piyush Dhauni — BCA student and front-end developer building expressive, code-first visual work.",
  metadataBase: new URL("https://piyushdhauni.vercel.app"),
  openGraph: {
    title: "Piyush Dhauni — Portfolio",
    description:
      "BCA student and front-end developer building expressive, code-first visual work.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bebas.variable} ${cormorant.variable} ${dmMono.variable}`}>
      <body className="grain font-mono antialiased">{children}</body>
    </html>
  );
}
