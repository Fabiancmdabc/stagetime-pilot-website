import type { Metadata } from "next";
import { Geist, Syne } from "next/font/google";
import { SiteFooter, SiteHeader } from "../components/SiteChrome";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "StageTime-Pilot — Redezeit. Klar. Bühne.",
    template: "%s · StageTime-Pilot",
  },
  description:
    "Kostenlose Redezeituhr für Veranstaltungen: Show/PGM, NDI, Chroma-Key, Remote auf dem iPad — by Tasty-World.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${syne.variable} flex min-h-screen flex-col antialiased`}
      >
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
