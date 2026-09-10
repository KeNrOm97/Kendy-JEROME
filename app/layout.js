import { Familjen_Grotesk, Fragment_Mono } from "next/font/google";
import "./globals.css";

const familjenGrotesk = Familjen_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-familjen-grotesk",
  display: "swap",
});

const fragmentMono = Fragment_Mono({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-fragment-mono",
  display: "swap",
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");

const description =
  "Infrastructures FreeBSD et Linux, téléphonie Asterisk, réseaux chiffrés, déploiements automatisés. Portfolio de Kendy Jerome, ingénieur systèmes et infrastructure à Fort-de-France, Martinique.";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Kendy Jerome — Ingénieur systèmes & infrastructure",
  description,
  keywords: [
    "Kendy Jerome",
    "ingénieur systèmes",
    "infrastructure",
    "FreeBSD",
    "Linux",
    "Asterisk",
    "VoIP",
    "WebRTC",
    "Ansible",
    "Cisco CCNA",
    "Martinique",
  ],
  authors: [{ name: "Kendy Jerome" }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "/",
    siteName: "Kendy Jerome",
    title: "Kendy Jerome — Ingénieur systèmes & infrastructure",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Kendy Jerome — Ingénieur systèmes & infrastructure",
    description,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${familjenGrotesk.variable} ${fragmentMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
