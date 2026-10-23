// Single source of truth for the live domain. Change it here (or set NEXT_PUBLIC_SITE_URL) and every
// canonical, sitemap, Open Graph and schema URL follows.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://vsjlogistics.com").replace(/\/$/, "");

export const COMPANY_INFO = {
  name: "VSJ Logistics Solution",
  legalName: "VSJ Logistics Solution",
  founder: "Vikas Kumar",
  title: "Founder & Operations Director",
  phones: [
    { display: "+91 8660567050", value: "+918660567050", primary: true, label: "Dispatch & Freight Helpline" },
    { display: "+91 9035475799", value: "+919035475799", primary: false, label: "Booking & Customer Support" },
  ],
  primaryPhone: "+91 8660567050",
  primaryPhoneRaw: "+918660567050",
  secondaryPhone: "+91 9035475799",
  secondaryPhoneRaw: "+919035475799",
  whatsappNumber: "+918660567050",
  whatsappLink: "https://wa.me/918660567050?text=Hello%20VSJ%20Logistics%20Team%2C%20I%20need%20a%20freight%20quote%20for%20my%20shipment%20from%20Ahmedabad.",
  email: "vsj.logistics2026@gmail.com",
  gstNumber: "24ATAPV9051F1ZM",
  address: {
    streetAddress: "FF 06, Madhur Milan Estate, Phase 1, GIDC, Naroda",
    estate: "FF 06, Madhur Milan Estate",
    phase: "Phase 1, GIDC",
    area: "Naroda",
    city: "Ahmedabad",
    pincode: "382330",
    state: "Gujarat",
    country: "India",
    full: "FF 06, Madhur Milan Estate, Phase 1, GIDC, Naroda, Ahmedabad - 382330, Gujarat, India.",
  },
  geo: {
    latitude: 23.0827,
    longitude: 72.6582,
  },
  hours: "Monday to Saturday: 08:00 AM – 09:00 PM (24/7 Vehicle Dispatch & Control Room)",
  fleetStrength: "150+ Dedicated & Managed Commercial Vehicles (32ft MXL/SXL Containers, 20ft/24ft Open Body, Taurus & Trailers)",
  metrics: {
    onTimeDeliveryRate: "99.4%",
    monthlyTonnage: "18,500+ MT",
    activePincodes: "19,200+",
    corporateClients: "450+",
    establishedYear: "2018",
  },
  certifications: [
    "GST Verified (24ATAPV9051F1ZM)",
    "IBA Approved Transporter Network",
    "ISO 9001:2015 Compliant Quality Assurance",
    "100% Real-Time GPS Tracking Enabled Fleet",
    "Hazardous Chemical & ADR Transport Certified",
  ],
  // Paste your real profile URLs here once they exist (Google Business Profile, JustDial, IndiaMART,
  // LinkedIn, Facebook). They are emitted as schema.org "sameAs", which ties the site to those listings.
  sameAs: [] as string[],
  googleMapsUrl: "https://maps.google.com/?q=Madhur+Milan+Estate+Phase+1+GIDC+Naroda+Ahmedabad+382330",
  // Ahmedabad-region localities served; used for schema.org areaServed and on-page "areas we serve" lists.
  serviceAreas: [
    "Naroda GIDC", "Naroda", "Kathwada GIDC", "Odhav GIDC", "Vatva GIDC", "Narol", "Isanpur", "Aslali",
    "Changodar", "Moraiya", "Sanand GIDC", "Bavla", "Dholka", "Chhatral GIDC", "Kalol GIDC", "Santej",
    "Gandhinagar", "Bopal", "SG Highway", "Kuha", "Dehgam", "Mehsana",
  ],
  tagline: "Ahmedabad's Trusted Industrial Freight & Logistics Partner",
  subTagline: "Pan-India Full Truckload (FTL), Express PTL, and Heavy ODC Cargo Originating from Naroda GIDC Hub.",
};

export interface RouteMeta {
  slug: string;
  title: string;
  metaDescription: string;
  category: "core" | "service" | "location" | "industry";
  heading: string;
  subheading: string;
  keywords: string[];
}
