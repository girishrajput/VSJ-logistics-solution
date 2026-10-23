import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingMobileBar from "@/components/FloatingMobileBar";
import JsonLd from "@/components/JsonLd";
import { COMPANY_INFO, SITE_URL } from "@/data/company";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    // Leads with the highest-volume local queries: "transport company in Ahmedabad", "logistics company in Ahmedabad".
    default: "Transport & Logistics Company in Ahmedabad | VSJ Logistics, Naroda GIDC",
    template: "%s",
  },
  description:
    "VSJ Logistics Solution is a GST-registered transport company in Naroda GIDC, Ahmedabad. FTL & PTL truck transport, ODC, chemical cargo and warehousing from Vatva, Sanand, Changodar to all India. Call +91 8660567050.",
  keywords: [
    "transport company in Ahmedabad",
    "logistics company in Ahmedabad",
    "transporter in Ahmedabad",
    "truck transport services Ahmedabad",
    "goods transport Ahmedabad",
    "transport company in Naroda GIDC",
    "transporter in Vatva GIDC",
    "logistics Sanand GIDC",
    "transport Changodar",
    "Ahmedabad to Mumbai truck transport",
    "Ahmedabad to Delhi transport",
    "FTL PTL transport Gujarat",
  ],
  authors: [{ name: "Vikas Kumar", url: SITE_URL }],
  creator: COMPANY_INFO.name,
  publisher: COMPANY_INFO.name,
  category: "Logistics",
  formatDetection: { email: true, address: true, telephone: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_URL,
    siteName: COMPANY_INFO.name,
    title: "VSJ Logistics Solution | Transport & Logistics Company in Ahmedabad",
    description:
      "Naroda GIDC, Ahmedabad based truck transport: FTL, PTL, ODC & chemical cargo across Gujarat and pan-India. GSTIN 24ATAPV9051F1ZM.",
  },
  twitter: {
    card: "summary_large_image",
    title: "VSJ Logistics Solution | Transport Company in Ahmedabad",
    description: "Truck transport & logistics from Naroda GIDC, Ahmedabad. Call +91 8660567050.",
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
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  // Set NEXT_PUBLIC_GSC_VERIFICATION to the code from Google Search Console (HTML tag method).
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { verification: { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } }
    : {}),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" className="scroll-smooth">
      <head>
        <meta name="geo.region" content="IN-GJ" />
        <meta name="geo.placename" content="Naroda GIDC, Ahmedabad, Gujarat" />
        <meta name="geo.position" content="23.0827;72.6582" />
        <meta name="ICBM" content="23.0827, 72.6582" />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-800 antialiased selection:bg-brand-orange selection:text-white">
        {/* Skip to Main Content Link for Keyboard Accessibility (a11y) */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2.5 focus:bg-brand-orange focus:text-white focus:rounded-xl focus:shadow-xl focus:font-bold focus:outline-none"
        >
          Skip to main content
        </a>
        <JsonLd sitewide />
        <Header />
        <main id="main-content" tabIndex={-1} className="flex-grow focus:outline-none">
          {children}
        </main>
        <Footer />
        <FloatingMobileBar />
      </body>
    </html>
  );
}
