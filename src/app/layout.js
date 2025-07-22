import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Header/Navbar";
import Footer from "@/components/Footer/Footer";
import { CountryProvider } from "@/components/context/CountryContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "MVM Business Services",
  image: "https://mvmbs.com/images/logo.webp",
  "@id": "https://mvmbs.com/",
  url: "https://mvmbs.com/",
  address: {
    "@type": "PostalAddress",
    streetAddress: "I Thum I.T. Park",
    addressLocality: "Sector 62 Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201309",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.6280,
    longitude: 77.3649
  },
  openingHours: "Mo-Fr 10:00-19:00",
  sameAs: [
    "https://www.facebook.com/mvmbs/",
    "https://in.linkedin.com/company/mvm-business-services",
    "https://www.instagram.com/mvmbs_official/"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/favicon.ico" type="image/x-icon" sizes="16x16" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CountryProvider>
        <Navbar />
        {children}
        <Footer />
        </CountryProvider>
      </body>
    </html>
  );
}
