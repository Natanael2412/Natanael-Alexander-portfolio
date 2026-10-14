import type { Metadata } from "next";
import { fontPrimary, fontSecondary, fontAccent } from "./fonts";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Natanael Alexander Gani | Technical Engineer & Creative Technologist",
  description: "Engineering High-Impact Systems. Bridging robust architecture with interactive visual craft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fontPrimary.variable} ${fontSecondary.variable} ${fontAccent.variable}`}>
      <body className="antialiased min-h-screen flex flex-col bg-oled-black text-primary-off-white selection:bg-white/20 selection:text-white">
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
