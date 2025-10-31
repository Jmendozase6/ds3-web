import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "DS3 Comunicaciones",
  description: "Sitio web de DS3Comunicaciones, líder en soluciones de redes y comunicaciones. Ofrecemos productos para WiFi y extensión de señal",
  authors: [{ name: "DS3 Comunicaciones", url: "https://www.ds3comunicaciones.com/" }],
  keywords: [
    "En Perú",
    "Antena HyperLink",
    "Internet Inalámbrico",
    "Antena para Internet",
    "Antena Omnidireccional",
    "Antena de Panel",
    "Antena 5.8",
    "UAP-AC-EDU",
    "Access Point",
    "Doble Banda 5GHz y 2.4GHz",
    "802.11a/b/g/n/ac",
    "MIMO 3x3",
    "450 Mbps",
    "1300 Mbps",
    "Antenas de Doble Banda",
    "Puerto Ethernet Gigabit",
    "PoE Pasivo 48V",
    "802.3at PoE+",
    "Incluye PoE 48V 0.5A Gige",
    "Software y Kit de Montaje",
    "Marca Ubiquiti"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
