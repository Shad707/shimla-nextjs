import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "SHIMLA SARL | Sécurité, Fiabilité, Performance",
  description:
    "Solutions industrielles premium en électricité, construction et équipements en République Démocratique du Congo. Sécurité, fiabilité et performance pour vos projets.",
  openGraph: {
    title: "SHIMLA SARL | Sécurité, Fiabilité, Performance",
    description:
      "Solutions industrielles premium en électricité, construction et équipements en République Démocratique du Congo.",
    url: "https://www.shimlasarl.com",
    siteName: "SHIMLA SARL",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fr" className={manrope.variable}>
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <Navbar />
        <main className="pt-[--nav-height]">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
