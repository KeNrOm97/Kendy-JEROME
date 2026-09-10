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

export const metadata = {
  title: "Kendy Jerome — Ingénieur systèmes & infrastructure",
  description:
    "Infrastructures FreeBSD et Linux, téléphonie Asterisk, réseaux chiffrés, déploiements automatisés. Portfolio de Kendy Jerome, ingénieur systèmes et infrastructure à Fort-de-France, Martinique.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${familjenGrotesk.variable} ${fragmentMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
