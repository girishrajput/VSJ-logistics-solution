import React from "react";
import { COMPANY_INFO, SITE_URL } from "@/data/company";

/**
 * Structured data.
 *
 * - `<JsonLd sitewide />` is rendered ONCE in the root layout and emits the LocalBusiness + WebSite
 *   entities (with stable @ids).
 * - Every page renders `<JsonLd pageUrl=… />` which emits only page-level data (WebPage, FAQPage,
 *   optional Service) that *references* the business by @id. This avoids the duplicate, conflicting
 *   LocalBusiness blocks Google was previously seeing on every URL.
 */

const BUSINESS_ID = `${SITE_URL}/#localbusiness`;
const WEBSITE_ID = `${SITE_URL}/#website`;

interface ServiceSchema {
  name: string;
  description?: string;
  /** Locality names, e.g. ["Vatva GIDC", "Ahmedabad"] */
  areaServed?: string[];
  /** For route pages: destination city */
  destination?: string;
}

interface JsonLdProps {
  sitewide?: boolean;
  pageUrl?: string;
  pageTitle?: string;
  pageDescription?: string;
  faqs?: { question: string; answer: string }[];
  service?: ServiceSchema;
}

function businessSchema() {
  return {
    // schema.org has no "LogisticsService" type, so Google ignored the old block as a local business.
    // LocalBusiness is the type Google's local results understand.
    "@type": "LocalBusiness",
    "@id": BUSINESS_ID,
    additionalType: "https://www.wikidata.org/wiki/Q7590", // freight transport
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    alternateName: ["VSJ Logistics", "VSJ Logistics Ahmedabad", "VSJ Transport Naroda"],
    description:
      "Transport and logistics company in Naroda GIDC, Ahmedabad offering full truckload (FTL), part truckload (PTL), project/ODC cargo, chemical transport and warehousing across Gujarat and pan-India.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    image: [`${SITE_URL}/opengraph-image`, `${SITE_URL}/logo.png`],
    telephone: COMPANY_INFO.primaryPhoneRaw,
    email: COMPANY_INFO.email,
    taxID: COMPANY_INFO.gstNumber,
    vatID: COMPANY_INFO.gstNumber,
    priceRange: "₹₹",
    currenciesAccepted: "INR",
    paymentAccepted: "Cash, Bank Transfer, UPI, Cheque",
    foundingDate: COMPANY_INFO.metrics.establishedYear,
    founder: { "@type": "Person", name: COMPANY_INFO.founder, jobTitle: COMPANY_INFO.title },
    address: {
      "@type": "PostalAddress",
      streetAddress: COMPANY_INFO.address.streetAddress,
      addressLocality: COMPANY_INFO.address.city,
      addressRegion: COMPANY_INFO.address.state,
      postalCode: COMPANY_INFO.address.pincode,
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: COMPANY_INFO.geo.latitude,
      longitude: COMPANY_INFO.geo.longitude,
    },
    hasMap: COMPANY_INFO.googleMapsUrl,
    contactPoint: COMPANY_INFO.phones.map((p) => ({
      "@type": "ContactPoint",
      telephone: p.value,
      contactType: p.label,
      areaServed: "IN",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "21:00",
      },
    ],
    areaServed: [
      { "@type": "City", name: "Ahmedabad", containedInPlace: { "@type": "State", name: "Gujarat" } },
      ...COMPANY_INFO.serviceAreas.map((a) => ({ "@type": "Place", name: `${a}, Ahmedabad region` })),
      { "@type": "State", name: "Gujarat" },
      { "@type": "Country", name: "India" },
    ],
    knowsLanguage: ["en", "hi", "gu"],
    ...(COMPANY_INFO.sameAs.length > 0 ? { sameAs: COMPANY_INFO.sameAs } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Transport & Logistics Services in Ahmedabad",
      itemListElement: [
        "Full Truckload (FTL) Transport",
        "Part Truckload (PTL) Cargo",
        "Warehousing & 3PL",
        "Project Cargo & ODC Transport",
        "Express Surface Cargo",
        "Chemical & Liquid Transport",
      ].map((name) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name, provider: { "@id": BUSINESS_ID } },
      })),
    },
  };
}

export default function JsonLd({
  sitewide = false,
  pageUrl = SITE_URL,
  pageTitle,
  pageDescription,
  faqs,
  service,
}: JsonLdProps) {
  const graph: Record<string, unknown>[] = [];

  if (sitewide) {
    graph.push(businessSchema());
    graph.push({
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_URL,
      name: COMPANY_INFO.name,
      inLanguage: "en-IN",
      publisher: { "@id": BUSINESS_ID },
    });
  } else {
    graph.push({
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      ...(pageTitle ? { name: pageTitle } : {}),
      ...(pageDescription ? { description: pageDescription } : {}),
      inLanguage: "en-IN",
      isPartOf: { "@id": WEBSITE_ID },
      about: { "@id": BUSINESS_ID },
    });

    if (service) {
      graph.push({
        "@type": "Service",
        "@id": `${pageUrl}#service`,
        name: service.name,
        serviceType: "Freight transport",
        ...(service.description ? { description: service.description } : {}),
        provider: { "@id": BUSINESS_ID },
        areaServed: (service.areaServed || ["Ahmedabad"]).map((name) => ({ "@type": "Place", name })),
        ...(service.destination
          ? {
              availableChannel: {
                "@type": "ServiceChannel",
                servicePhone: { "@type": "ContactPoint", telephone: COMPANY_INFO.primaryPhoneRaw },
              },
            }
          : {}),
        url: pageUrl,
      });
    }

    if (faqs && faqs.length > 0) {
      graph.push({
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      });
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({ "@context": "https://schema.org", "@graph": graph }),
      }}
    />
  );
}
