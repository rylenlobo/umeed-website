import type { Metadata } from "next";
import { Instrument_Sans, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";


const instrumentSans = Instrument_Sans({
  variable: "--font-instrument-sans",
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://umeed.org"), // TODO: Update with actual production domain
  title: {
    default: "UMEED - An ongoing journey of love, hope and courage",
    template: "%s | UMEED",
  },
  description:
    "Umeed aspires to radically alter the gender mindsets that exist within society and bring about an immediate and lasting difference; one of dignity, security and HOPE for women.",
  keywords: [
    "women empowerment",
    "NGO",
    "gender equality",
    "social impact",
    "community",
    "Umeed",
  ],
  authors: [{ name: "Umeed" }],
  creator: "Umeed",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://umeed.org",
    title: "UMEED - Empowering Women, Transforming Lives",
    description:
      "Umeed aspires to radically alter the gender mindsets that exist within society and bring about an immediate and lasting difference.",
    siteName: "UMEED",
    images: [
      {
        url: "/assets/og-image.webp", // Ensure this image exists or update path
        width: 1200,
        height: 630,
        alt: "UMEED - An ongoing journey of love, hope and courage",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UMEED - An ongoing journey of love, hope and courage",
    description:
      "Umeed aspires to radically alter the gender mindsets that exist within society.",
    images: ["/assets/og-image.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "UMEED",
  url: "https://umeed.org",
  logo: "https://umeed.org/assets/logo.svg",
  sameAs: [
    "https://facebook.com/umeed",
    "https://twitter.com/umeed",
    "https://instagram.com/umeed",
    "https://linkedin.com/company/umeed",
  ],
  description:
    "Umeed aspires to radically alter the gender mindsets that exist within society and bring about an immediate and lasting difference; one of dignity, security and HOPE for women.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Hyderabad",
    addressRegion: "Telangana",
    addressCountry: "IN",
  },
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
