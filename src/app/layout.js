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

         <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&family=Montserrat:wght@100..900&family=Roboto:wght@100..900&display=swap"
          rel="stylesheet"
        />



        {/* popins */}

          <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
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
