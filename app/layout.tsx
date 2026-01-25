import type { Metadata } from "next";
import { Instrument_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";


const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "UMEED",
  description:
    "Umeed aspires to radically alter the gender mindsets that exist within society and bring about an immediate and lasting difference; one of dignity, security and HOPE for women.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${instrumentSans.variable} ${libreBaskerville.variable} antialiased`}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
