/**
 * City-to-city route pages ("Ahmedabad to Mumbai truck transport" etc.).
 * Route queries are among the highest-intent searches for Ahmedabad transporters, and they are the
 * main page type used by competitors such as ABC Express and fr8.
 *
 * Distances are approximate road distances; transit times are typical FTL ranges. Review both
 * against your own trip data before publishing, and adjust if they differ.
 */

export interface RouteData {
  slug: string;
  url: string;
  destination: string;
  state: string;
  distanceKm: string;
  transitFtl: string;
  transitPtl: string;
  via: string;
  destinationHubs: string[];
  commonCargo: string[];
  intro: string;
  faqs: { question: string; answer: string }[];
  /** Normalized destination city name */
  calculatorDestination: string;
}

type RouteSeed = Omit<RouteData, "url" | "faqs"> & { extraFaqs?: { question: string; answer: string }[] };

const SEEDS: RouteSeed[] = [
  {
    slug: "ahmedabad-to-mumbai-truck-transport",
    destination: "Mumbai",
    state: "Maharashtra",
    distanceKm: "≈ 530 km",
    transitFtl: "18 – 24 hours",
    transitPtl: "2 – 3 days",
    via: "NH-48 via Vadodara, Bharuch, Surat and Vapi",
    destinationHubs: ["Bhiwandi", "JNPT / Nhava Sheva", "Taloja", "Vasai–Virar", "Andheri MIDC", "Thane"],
    commonCargo: ["Textiles & fabric", "Chemicals & dyes", "Engineering goods", "FMCG", "Export containers to JNPT"],
    intro:
      "Ahmedabad to Mumbai is the busiest freight lane out of Gujarat. Most of our loads go to Bhiwandi warehouses, JNPT for export, and MIDC estates around Thane and Taloja.",
    calculatorDestination: "Mumbai / Bhiwandi Logistics Hub, Maharashtra",
  },
  {
    slug: "ahmedabad-to-delhi-truck-transport",
    destination: "Delhi NCR",
    state: "Delhi / Haryana / UP",
    distanceKm: "≈ 950 km",
    transitFtl: "28 – 36 hours",
    transitPtl: "3 – 5 days",
    via: "NH-48 via Himmatnagar, Udaipur, Ajmer and Jaipur",
    destinationHubs: ["Gurugram", "Manesar", "Faridabad", "Noida", "Okhla", "Kundli", "Bawana"],
    commonCargo: ["Machinery & spares", "Textiles", "Pharma", "Chemicals", "Plastic & packaging"],
    intro:
      "We run Ahmedabad to Delhi NCR loads for manufacturers supplying Gurugram, Manesar, Faridabad and Noida, plus distribution warehouses on the Kundli and Bawana side.",
    calculatorDestination: "Delhi NCR / Gurgaon / Manesar / Faridabad",
  },
  {
    slug: "ahmedabad-to-pune-truck-transport",
    destination: "Pune",
    state: "Maharashtra",
    distanceKm: "≈ 660 km",
    transitFtl: "24 – 30 hours",
    transitPtl: "3 – 4 days",
    via: "NH-48 to Mumbai region, then Mumbai–Pune Expressway / NH-48",
    destinationHubs: ["Chakan", "Talegaon", "Ranjangaon", "Pimpri-Chinchwad", "Bhosari MIDC", "Hinjewadi"],
    commonCargo: ["Auto components", "Engineering goods", "Castings", "Electricals", "Packaging"],
    intro:
      "Ahmedabad to Pune freight is dominated by auto and engineering parts heading to Chakan, Talegaon and Ranjangaon. Sanand and Vatva suppliers use this lane heavily.",
    calculatorDestination: "Pune / Chakan / Bhosari Auto Corridor, Maharashtra",
  },
  {
    slug: "ahmedabad-to-bangalore-truck-transport",
    destination: "Bengaluru",
    state: "Karnataka",
    distanceKm: "≈ 1,500 km",
    transitFtl: "48 – 56 hours",
    transitPtl: "5 – 7 days",
    via: "NH-48 via Mumbai, Pune, Kolhapur, Belagavi and Hubballi",
    destinationHubs: ["Peenya", "Bommasandra", "Hosur", "Nelamangala", "Whitefield", "Doddaballapur"],
    commonCargo: ["Engineering goods", "Electronics", "Textiles", "Pharma", "FMCG"],
    intro:
      "Ahmedabad to Bengaluru is a long-haul lane where a direct FTL saves days over multi-hub parcel networks. We deliver to Peenya, Bommasandra, Hosur and the Nelamangala warehouse belt.",
    calculatorDestination: "Bengaluru / Peenya / Hosur Corridor, Karnataka",
  },
  {
    slug: "ahmedabad-to-hyderabad-truck-transport",
    destination: "Hyderabad",
    state: "Telangana",
    distanceKm: "≈ 1,200 km",
    transitFtl: "40 – 48 hours",
    transitPtl: "4 – 6 days",
    via: "NH-48 to Pune, then NH-65 via Solapur",
    destinationHubs: ["Patancheru", "Jeedimetla", "Medchal", "Shamshabad", "Genome Valley", "Pashamylaram"],
    commonCargo: ["Pharma & APIs", "Chemicals", "Engineering goods", "Packaging"],
    intro:
      "Hyderabad's pharma and chemical belt at Patancheru, Jeedimetla and Pashamylaram is a natural partner for Ahmedabad's pharma and chemical units, and most of our loads on this lane are pharma or chemical cargo.",
    calculatorDestination: "Hyderabad / Cherlapally / Patancheru, Telangana",
  },
  {
    slug: "ahmedabad-to-chennai-truck-transport",
    destination: "Chennai",
    state: "Tamil Nadu",
    distanceKm: "≈ 1,850 km",
    transitFtl: "60 – 72 hours",
    transitPtl: "6 – 8 days",
    via: "NH-48 via Pune and Bengaluru, then NH-48 to Chennai",
    destinationHubs: ["Sriperumbudur", "Oragadam", "Ambattur", "Guindy", "Chennai Port", "Gummidipoondi"],
    commonCargo: ["Auto components", "Engineering goods", "Textiles", "Chemicals"],
    intro:
      "We move Ahmedabad to Chennai FTL loads for automotive suppliers in Sriperumbudur and Oragadam, and for export cargo going to Chennai port.",
    calculatorDestination: "Chennai / Sriperumbudur / Oragadam, Tamil Nadu",
  },
  {
    slug: "ahmedabad-to-kolkata-truck-transport",
    destination: "Kolkata",
    state: "West Bengal",
    distanceKm: "≈ 2,050 km",
    transitFtl: "72 – 90 hours",
    transitPtl: "7 – 10 days",
    via: "Via Indore, Jabalpur and Varanasi, or via Nagpur and Raipur",
    destinationHubs: ["Howrah", "Dankuni", "Kolkata Port", "Uluberia", "Kalyani"],
    commonCargo: ["Textiles", "Engineering goods", "Chemicals", "FMCG"],
    intro:
      "For Ahmedabad to Kolkata, a direct full truck avoids the transshipment and delays of multi-hub parcel networks. Deliveries cover Howrah, Dankuni and the port area.",
    calculatorDestination: "Kolkata / Dankuni Transshipment Hub, West Bengal",
  },
  {
    slug: "ahmedabad-to-jaipur-truck-transport",
    destination: "Jaipur",
    state: "Rajasthan",
    distanceKm: "≈ 670 km",
    transitFtl: "16 – 20 hours",
    transitPtl: "2 – 4 days",
    via: "NH-48 via Himmatnagar, Udaipur and Ajmer",
    destinationHubs: ["Sitapura", "VKIA", "Bagru", "Mahindra World City Jaipur", "Bhiwadi"],
    commonCargo: ["Textiles", "Chemicals", "Engineering goods", "FMCG", "Building material"],
    intro:
      "Ahmedabad to Jaipur is a quick overnight run on NH-48. We deliver to Sitapura, VKIA, Bagru and further north to Bhiwadi.",
    calculatorDestination: "Jaipur / Vishwakarma / Sitapura, Rajasthan",
  },
  {
    slug: "ahmedabad-to-indore-truck-transport",
    destination: "Indore",
    state: "Madhya Pradesh",
    distanceKm: "≈ 400 km",
    transitFtl: "10 – 14 hours",
    transitPtl: "2 – 3 days",
    via: "NH-47 via Godhra, Dahod and Jhabua",
    destinationHubs: ["Pithampur", "Sanwer Road", "Dewas", "Ratlam"],
    commonCargo: ["Auto components", "Pharma", "Chemicals", "FMCG", "Agro products"],
    intro:
      "Indore and the Pithampur auto and pharma cluster are within an overnight drive of Ahmedabad via Godhra and Dahod, which makes this a popular lane for both FTL and PTL.",
    calculatorDestination: "Indore / Pithampur Auto Cluster, Madhya Pradesh",
  },
  {
    slug: "ahmedabad-to-surat-truck-transport",
    destination: "Surat",
    state: "Gujarat",
    distanceKm: "≈ 265 km",
    transitFtl: "6 – 8 hours",
    transitPtl: "1 – 2 days",
    via: "NH-48 / Ahmedabad–Vadodara Expressway via Vadodara and Bharuch",
    destinationHubs: ["Sachin GIDC", "Pandesara", "Hazira", "Kadodara", "Palsana", "Ring Road textile markets"],
    commonCargo: ["Textiles & yarn", "Dyes & chemicals", "Diamond-industry supplies", "Engineering goods"],
    intro:
      "Ahmedabad to Surat is a same-day lane serving Surat's textile markets, Sachin and Pandesara processors, and the Hazira industrial area.",
    calculatorDestination: "Surat / Sachin / Pandesara Textile & Diamond Belt",
  },
  {
    slug: "ahmedabad-to-vadodara-truck-transport",
    destination: "Vadodara",
    state: "Gujarat",
    distanceKm: "≈ 110 km",
    transitFtl: "3 – 4 hours",
    transitPtl: "Next day",
    via: "Ahmedabad–Vadodara Expressway (NE-1) / NH-48",
    destinationHubs: ["Makarpura GIDC", "Por", "Savli", "Manjusar", "Waghodia", "Nandesari"],
    commonCargo: ["Engineering goods", "Chemicals", "Pharma", "Electrical equipment"],
    intro:
      "Vadodara is a short shuttle from Ahmedabad. We run same-day trucks to Makarpura, Savli, Manjusar, Waghodia and the Nandesari chemical estate.",
    calculatorDestination: "Vadodara / Makarpura / Savli, Gujarat",
  },
  {
    slug: "ahmedabad-to-rajkot-truck-transport",
    destination: "Rajkot",
    state: "Gujarat",
    distanceKm: "≈ 215 km",
    transitFtl: "5 – 7 hours",
    transitPtl: "1 – 2 days",
    via: "NH-47 via Bagodara and Limbdi",
    destinationHubs: ["Aji GIDC", "Metoda GIDC", "Shapar–Veraval", "Lodhika", "Morbi (ceramics)"],
    commonCargo: ["Engineering & castings", "Auto parts", "Ceramic supplies", "Machinery"],
    intro:
      "Rajkot's engineering clusters at Metoda, Shapar–Veraval and Aji GIDC, plus nearby Morbi, are regular destinations for Ahmedabad trucks.",
    calculatorDestination: "Rajkot / Metoda / Shapar Veraval Foundry Belt",
  },
  {
    slug: "ahmedabad-to-mundra-port-container-transport",
    destination: "Mundra Port",
    state: "Gujarat (Kutch)",
    distanceKm: "≈ 360 km",
    transitFtl: "8 – 10 hours",
    transitPtl: "Not applicable (FTL / container only)",
    via: "Via Bagodara–Limbdi–Malia–Bhachau (NH-47 / NH-41)",
    destinationHubs: ["Mundra Port CFS", "Kandla / Deendayal Port", "Gandhidham", "Anjar"],
    commonCargo: ["Export cargo to CFS", "Import cargo pick-up", "Textiles", "Chemicals", "Engineering goods"],
    intro:
      "We carry Ahmedabad export cargo to Mundra and Kandla CFS yards and bring import cargo back to GIDC estates, with vehicles timed to vessel cut-offs.",
    calculatorDestination: "Mundra / Kandla Seaport Container Terminals",
    extraFaqs: [
      {
        question: "Can you meet vessel cut-off times at Mundra?",
        answer:
          "Yes. Share the CFS name and cut-off time when booking and we plan loading in Ahmedabad so the truck reaches Mundra or Kandla with time to spare.",
      },
    ],
  },
];

export const ROUTES: RouteData[] = SEEDS.map(({ extraFaqs = [], ...r }) => ({
  ...r,
  url: `/routes/${r.slug}`,
  faqs: [
    {
      question: `How long does truck transport from Ahmedabad to ${r.destination} take?`,
      answer: `A dedicated full truck (FTL) from Ahmedabad to ${r.destination} usually takes ${r.transitFtl} for roughly ${r.distanceKm.replace("≈ ", "")}. Part-load (PTL) consignments typically take ${r.transitPtl}.`,
    },
    {
      question: `What is the route from Ahmedabad to ${r.destination}?`,
      answer: `Our trucks normally run ${r.via}. The driver may change route for traffic, weather or permit reasons, and you can follow the truck on GPS tracking the whole way.`,
    },
    {
      question: `Which vehicles are available for Ahmedabad to ${r.destination}?`,
      answer:
        "We supply 14ft–24ft closed-body trucks, 32ft SXL/MXL containers, open-body trucks and trailers. For oversized machinery we arrange low-bed trailers with the required permits.",
    },
    {
      question: `How do I get a rate for Ahmedabad to ${r.destination} transport?`,
      answer:
        "Call or WhatsApp +91 8660567050 with pickup area, weight, vehicle type and loading date, or use the quote form on this page. Rates depend on vehicle size, cargo and diesel prices, so we confirm a fixed price before loading.",
    },
    ...extraFaqs,
  ],
}));

export function getRouteBySlug(slug: string) {
  return ROUTES.find((r) => r.slug === slug);
}
