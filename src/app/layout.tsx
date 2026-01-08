import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "SANAA Global Ltd. | Japanese Car Import Bangladesh",
  description:
    "Premium Japanese car imports to Bangladesh. Direct from Japan auctions. Toyota, Honda, Nissan, Mazda and more. Trusted quality, competitive prices.",
  keywords: [
    "Japanese cars Bangladesh",
    "car import Bangladesh",
    "Japan auction cars",
    "Toyota Bangladesh",
    "Honda Bangladesh",
    "used cars Japan",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrainsMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
