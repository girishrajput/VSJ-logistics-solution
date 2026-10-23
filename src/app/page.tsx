import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Truck, 
  ShieldCheck, 
  Clock, 
  MapPin, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle2, 
  Building2, 
  FileText, 
  Navigation, 
  Award, 
  Star,
  Layers,
  HelpCircle,
  ExternalLink,
  ChevronRight,
  PackageCheck,
  Scale,
  FileCheck2
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { CORE_SERVICES, AHMEDABAD_LOCATIONS, INDUSTRY_SECTORS, shortName } from "@/data/pages";
import { ROUTES } from "@/data/routes";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

const HOMEPAGE_FAQS = [
  {
    question: "Do you provide truck transport from Ahmedabad to Mumbai, Delhi and other cities?",
    answer: "Yes. We run full truckload (FTL) and part load (PTL) transport from Ahmedabad to Mumbai, Delhi NCR, Pune, Bengaluru, Hyderabad, Chennai, Kolkata, Jaipur, Indore, Surat, Vadodara, Rajkot and Mundra Port. See the Routes page for distance and transit time on each lane.",
  },
  {
    question: "Which areas of Ahmedabad do you pick up from?",
    answer: "We load at factories and warehouses across Naroda, Kathwada, Odhav, Vatva, Narol, Isanpur, Aslali, Changodar, Moraiya, Sanand, Bavla, Chhatral, Kalol, Santej and Gandhinagar GIDC.",
  },
  {
    question: "Where is VSJ Logistics Solution's primary dispatch office located?",
    answer: "Our registered operational headquarters and fleet staging depot is situated at FF 06, Madhur Milan Estate, Phase 1, GIDC, Naroda, Ahmedabad - 382330, Gujarat. Customers and industrial shippers are welcome to visit our office from 08:00 AM to 09:00 PM for in-person booking and billing coordination.",
  },
  {
    question: "What types of commercial freight vehicles does VSJ Logistics operate?",
    answer: "We operate a comprehensive fleet including 32-feet Multi-Axle (MXL) and Single-Axle (SXL) closed containers, 20ft/24ft heavy-duty open platforms, 40-feet high-cube container trucks, low-bed hydraulic trailers for heavy machinery, and temperature-controlled reefer vehicles.",
  },
  {
    question: "Do you provide real-time GPS tracking for all consignments?",
    answer: "Yes, 100% of our commercial vehicles are equipped with certified GPS telematics, automated geo-fencing, and live speed monitoring. Shippers receive automated SMS milestones and can track their consignment online using our live tracking portal.",
  },
  {
    question: "Is VSJ Logistics registered under GST for business tax invoicing?",
    answer: "Yes, VSJ Logistics Solution is fully registered under GSTIN: 24ATAPV9051F1ZM. All shipments receive formal GST consignment notes (Bilty), verifiable E-way bill endorsements, and digital proof of delivery (e-POD).",
  },
  {
    question: "How quickly can you position a truck at industrial estates like Vatva, Sanand, or Naroda?",
    answer: "Because our fleet is stationed right inside Naroda GIDC Phase 1, we guarantee 15 to 30-minute vehicle placement for Naroda units, and under 60 minutes for Vatva, Odhav, Kathwada, Changodar, and Sanand industrial estates.",
  },
  {
    question: "Who can I contact directly for emergency freight bookings or rate negotiations?",
    answer: "You can reach our Founder & Operations Director, Vikas Kumar, directly on +91 8660567050 or +91 9035475799. Our dispatch desk operates 24/7 for active road transit support.",
  },
];

export default function HomePage() {
  return (
    <div className="w-full bg-white">
      <JsonLd
        pageTitle="VSJ Logistics Solution Ahmedabad | Industrial Freight Transporter"
        pageDescription={COMPANY_INFO.subTagline}
        faqs={HOMEPAGE_FAQS}
      />

      {/* Hero Section with Generous Breathing Room */}
      <section className="relative bg-gradient-to-b from-brand-navy-dark via-brand-navy to-brand-navy text-white pt-16 pb-24 md:pt-20 md:pb-28 px-4 sm:px-6 lg:px-8 overflow-hidden border-b-4 border-brand-orange">
        {/* Subtle Decorative Ambient Background */}
        <div className="absolute inset-0 bg-[radial-gradient(#ffffff08_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none"></div>
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Left Hero Content */}
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 px-4 py-2 rounded-full text-xs font-semibold text-amber-300">
                <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
                <span>GST Registered: {COMPANY_INFO.gstNumber} • Naroda GIDC Phase 1</span>
              </div>

              {/* Primary Headline */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-black tracking-tight leading-tight sm:leading-tight">
                Trusted Transport &amp; Logistics Company in <span className="text-brand-orange">Ahmedabad</span>
              </h1>

              {/* Subtitle with 16px minimum readable text */}
              <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
                Headquartered at <strong className="text-white">FF 06, Madhur Milan Estate, Naroda GIDC Phase 1</strong>, 
                VSJ Logistics Solution delivers GPS-tracked Full Truckload (FTL), Express PTL, and Heavy Machinery Cargo 
                connecting Gujarat's manufacturing powerhouses with all commercial trade corridors across India.
              </p>

              {/* Key Assurance Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2 text-left">
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>100% GPS Telematics</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>15-Min Hub Dispatch</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Zero Transshipment FTL</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>GST-Compliant Invoicing</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Dedicated 32ft MXL Fleet</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>24/7 Helpline Desk</span>
                </div>
              </div>

              {/* Action Buttons with 48px Touch Targets */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Link
                  href="/get-a-quote"
                  className="w-full sm:w-auto min-h-[48px] bg-brand-orange hover:bg-brand-orange-dark text-white px-8 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-brand-orange/30 hover:scale-[1.02] transition-all flex items-center justify-center gap-2.5"
                >
                  <FileText className="w-4 h-4" />
                  <span>Get Instant Rate Quote</span>
                </Link>

                <a
                  href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                  className="w-full sm:w-auto min-h-[48px] bg-white/10 hover:bg-white/15 text-white border border-white/20 px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2.5"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call {COMPANY_INFO.primaryPhone}</span>
                </a>

                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2.5"
                  title="WhatsApp Instant Rate Inquiry"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Hero: Logistics Fleet Showcase Image */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden border border-white/15 bg-slate-900/40 shadow-2xl shadow-black/40 backdrop-blur-sm group">
                <Image
                  src="/logistics-hero.jpg"
                  alt="VSJ Logistics Solution - Ahmedabad Industrial Fleet & Freight Transport"
                  width={1376}
                  height={768}
                  priority
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />

                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-navy-dark/90 via-transparent to-black/20 pointer-events-none" />

                {/* Floating Top Badge */}
                <div className="absolute top-4 left-4 inline-flex items-center gap-2 bg-brand-navy-dark/85 backdrop-blur-md border border-white/20 px-3.5 py-1.5 rounded-full text-xs font-semibold text-white shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>GPS Tracked • Pan-India Logistics</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 p-3.5 rounded-xl text-white shadow-lg flex items-center justify-between">
                  <div>
                    <div className="text-xs uppercase tracking-wider text-brand-orange font-bold">Naroda GIDC Hub</div>
                    <div className="text-sm font-semibold text-white">Dedicated 32ft MXL Fleet</div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block text-[11px] font-medium bg-brand-orange text-white px-2 py-0.5 rounded">
                      24/7 Dispatch
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges Strip */}
      <TrustBadges />

      {/* 3-Step Logistics Workflow (Requested Core Section) */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Seamless 3-Step Execution
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
              How VSJ Logistics Powers Your Freight
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              From our operational base in Naroda GIDC Phase 1 to factory gate unloading across India, experience precision road haulage without middlemen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center font-black text-lg">
                    01
                  </span>
                  <Scale className="w-6 h-6 text-brand-orange" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">
                  Factory Pickup & Weighment
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Vehicles positioned within 15–30 minutes at your factory in Naroda, Vatva, Sanand, or Changodar. Thorough floor inspection, electronic weighment, and instant digital consignment notes (LR/Bilty).
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-brand-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero Deadhead Charges from Naroda Hub</span>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl border border-brand-orange/40 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-brand-orange text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">
                100% Tracked
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center font-black text-lg">
                    02
                  </span>
                  <Navigation className="w-6 h-6 text-brand-navy" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">
                  GPS-Monitored Linehaul
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Tamper-evident container seal applied. Dual-driver non-stop highway transit along NH-48 and dedicated freight corridors with 24/7 geo-fencing and automated checkpoint telemetry.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-brand-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Real-Time Speed & Toll Tracking</span>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="w-12 h-12 rounded-2xl bg-brand-navy text-white flex items-center justify-center font-black text-lg">
                    03
                  </span>
                  <PackageCheck className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-brand-navy">
                  Doorstep Unloading & e-POD
                </h3>
                <p className="text-base text-slate-600 leading-relaxed">
                  Safe destination delivery at consignee docks in Mumbai, Delhi NCR, Bengaluru, or Pune. Physical stamped receiving copy (POD) scanned and uploaded within 6 hours of unloading.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 text-xs font-semibold text-brand-navy flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Verified GST-Compliant Billing</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Naroda GIDC Phase 1 Physical Hub Spotlight */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-slate-50 rounded-3xl p-8 lg:p-14 border border-slate-200 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-orange/10 text-brand-orange border border-brand-orange/20 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                <span>Base Hub Spotlight</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy tracking-tight leading-snug">
                Located Directly in Naroda GIDC Phase 1: 15-Minute Fleet Positioning
              </h2>

              <p className="text-base text-slate-700 leading-relaxed">
                Most freight portals operate as remote brokers without local infrastructure. 
                <strong className="text-brand-navy"> VSJ Logistics Solution</strong> maintains an established physical fleet yard, parking depot, and operations desk at 
                <strong className="text-brand-navy"> FF 06, Madhur Milan Estate, Phase 1, GIDC, Naroda, Ahmedabad - 382330</strong>.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wide">15–30 Min Truck Placement</h4>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Instant container and open-body positioning across Naroda Phase 1 & 2, Odhav, and Kathwada estates.
                  </p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
                  <h4 className="text-sm font-bold text-brand-navy uppercase tracking-wide">Direct Executive Oversight</h4>
                  <p className="text-sm text-slate-600 mt-1.5 leading-relaxed">
                    Directed by Vikas Kumar. Direct phone access, on-the-spot physical billing, and immediate transit clearances.
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  href="/locations/logistics-services-naroda-gidc"
                  className="min-h-[48px] bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold uppercase tracking-wider px-6 py-3.5 rounded-xl flex items-center gap-2 transition-colors"
                >
                  <span>Explore Naroda Hub Services</span>
                  <ArrowRight className="w-4 h-4 text-brand-orange" />
                </Link>
                <Link
                  href="/contact-us"
                  className="min-h-[48px] text-sm font-bold text-brand-orange hover:text-brand-orange-dark flex items-center gap-1.5 px-4"
                >
                  <span>View Map & Driving Directions</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <GoogleMapEmbed height="h-80 lg:h-96" />
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Grid (6 Core Pages) */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-y border-slate-200" id="core-services">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Commercial Fleet Infrastructure
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
              Enterprise Commercial Transport Services
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Engineered for manufacturers, chemical processors, machine tool fabricators, and commercial distributors across Gujarat.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CORE_SERVICES.map((service) => (
              <div
                key={service.slug}
                className="group p-8 rounded-3xl bg-white border border-slate-200 hover:border-brand-orange/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-3 py-1 rounded-lg font-mono group-hover:bg-brand-orange group-hover:text-white transition-colors">
                      {service.heroBadge}
                    </span>
                    <Truck className="w-5 h-5 text-slate-400 group-hover:text-brand-orange transition-colors" />
                  </div>

                  <h3 className="text-xl font-bold text-brand-navy group-hover:text-brand-orange transition-colors">
                    <Link href={service.url}>
                      {shortName(service)}
                    </Link>
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {service.summary}
                  </p>

                  <ul className="space-y-2 pt-3 border-t border-slate-100 text-xs text-slate-600">
                    {service.keyHighlights.slice(0, 3).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={service.url}
                    className="min-h-[44px] text-xs font-bold text-brand-navy group-hover:text-brand-orange flex items-center gap-1.5 transition-colors"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-4 h-4 text-brand-orange group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/get-a-quote"
                    className="min-h-[44px] text-xs font-bold text-brand-orange hover:underline flex items-center"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hyper-Local Ahmedabad Industrial Hubs Explorer */}
      <section className="py-20 md:py-24 bg-white px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                Hyper-Local Ahmedabad GIDC SEO
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy tracking-tight">
                Dedicated Fleets Across Ahmedabad's Industrial Belts
              </h2>
              <p className="text-base text-slate-600 max-w-2xl leading-relaxed">
                Immediate vehicle placement, factory gate loading, and local dispatch desks tailored to each specialized manufacturing cluster.
              </p>
            </div>

            <Link
              href="/locations"
              className="min-h-[48px] text-sm font-bold text-brand-navy hover:text-brand-orange flex items-center gap-2 shrink-0 px-4 py-2"
            >
              <span>Explore All GIDC Hubs</span>
              <ArrowRight className="w-4 h-4 text-brand-orange" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {AHMEDABAD_LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-navy/30 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-1 rounded-lg">
                      {loc.heroBadge}
                    </span>
                    <MapPin className="w-4 h-4 text-brand-orange" />
                  </div>

                  <h3 className="text-base font-bold text-brand-navy leading-snug">
                    <Link href={loc.url} className="hover:text-brand-orange transition-colors">
                      {shortName(loc)}
                    </Link>
                  </h3>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {loc.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 flex items-center justify-between">
                  <Link
                    href={loc.url}
                    className="min-h-[40px] text-xs font-bold text-brand-orange hover:text-brand-orange-dark flex items-center gap-1"
                  >
                    <span>View Hub</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <span className="text-[11px] font-mono text-slate-500">15-30m Placement</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership & Founder Commitment: Vikas Kumar */}
      <section className="py-20 md:py-24 bg-brand-navy text-white px-4 sm:px-6 lg:px-8 border-y border-brand-navy-light/40">
        <div className="max-w-5xl mx-auto bg-brand-navy-dark rounded-3xl p-8 sm:p-12 lg:p-16 border border-brand-navy-light/50 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            <div className="md:col-span-4 text-center space-y-4">
              <div className="w-36 h-36 mx-auto rounded-3xl bg-gradient-to-tr from-brand-orange to-amber-500 p-1 shadow-xl">
                <div className="w-full h-full rounded-[22px] overflow-hidden relative">
                  <Image
                    src="/vikas-kumar.jpg"
                    alt="Vikas Kumar - Founder & Operations Director, VSJ Logistics Solution"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{COMPANY_INFO.founder}</h3>
                <p className="text-sm text-brand-orange font-semibold">{COMPANY_INFO.title}</p>
                <p className="text-xs text-slate-400 mt-0.5">VSJ Logistics Solution • Naroda Hub</p>
              </div>

              <div className="pt-2 flex flex-col gap-2">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                  className="min-h-[44px] inline-flex items-center justify-center gap-2 bg-brand-navy hover:bg-brand-navy-light border border-slate-700 py-2 px-4 rounded-xl text-xs font-mono text-slate-200 hover:text-brand-orange transition-colors"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>{COMPANY_INFO.primaryPhone}</span>
                </a>
              </div>
            </div>

            <div className="md:col-span-8 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-300 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                Founder's Operating Philosophy
              </span>

              <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white leading-snug">
                "Direct Accountability from Factory Loading to Final Gate Unloading"
              </h3>

              <p className="text-base text-slate-300 leading-relaxed">
                "In industrial freight, the biggest frustration manufacturers face is dealing with unresponsive brokers 
                who vanish the moment an interstate truck encounters a breakdown or toll delay. At VSJ Logistics Solution, 
                our entire operations model is built around local presence at Madhur Milan Estate, Naroda GIDC Phase 1. 
                Whether you are moving a 32-feet container of machinery to Mumbai or express parcel cargo to Delhi, 
                my dispatch desk coordinates directly with you, backed by our GST registration (<strong>{COMPANY_INFO.gstNumber}</strong>) 
                and live GPS telemetry."
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-6 text-sm text-slate-300">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>GSTIN: {COMPANY_INFO.gstNumber}</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Truck className="w-4 h-4 text-brand-orange" />
                  <span>150+ Managed Fleet</span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-amber-400" />
                  <span>99.4% On-Time Delivery</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Routes from Ahmedabad */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="text-center space-y-3">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-navy tracking-tight">
              Popular Truck Transport Routes from Ahmedabad
            </h2>
            <p className="text-base text-slate-600 max-w-2xl mx-auto">
              Direct FTL and PTL trucks from Ahmedabad&apos;s industrial estates to major cities and ports.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {ROUTES.map((r) => (
              <Link
                key={r.slug}
                href={r.url}
                className="bg-white p-4 rounded-xl border border-slate-200 hover:border-brand-orange shadow-sm transition-colors flex flex-col gap-1 min-h-[48px]"
              >
                <span className="text-sm font-bold text-brand-navy">Ahmedabad to {r.destination}</span>
                <span className="text-xs text-slate-500">{r.distanceKm} • {r.transitFtl}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (FAQ) Section */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t border-slate-200" id="faq">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Clear Answers for Shippers
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-brand-navy tracking-tight">
              Frequently Asked Questions (FAQ)
            </h2>
            <p className="text-base text-slate-600">
              Everything you need to know about booking freight, GPS tracking, and GST billing with VSJ Logistics Solution.
            </p>
          </div>

          <div className="space-y-5">
            {HOMEPAGE_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-7 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-2.5"
              >
                <h3 className="text-base sm:text-lg font-bold text-brand-navy flex items-start gap-3">
                  <HelpCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  <span>{faq.question}</span>
                </h3>
                <p className="text-base text-slate-600 leading-relaxed pl-8">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Callout Banner */}
      <section className="bg-gradient-to-r from-brand-orange to-amber-600 text-white py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-orange-100">
              Immediate Vehicle Placement in Naroda & Ahmedabad GIDC
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Need a 32ft Container or Open Trailer Placed Today?
            </h2>
            <p className="text-base text-orange-100">
              Call Vikas Kumar directly on <strong>+91 8660567050</strong> or <strong>+91 9035475799</strong> for instant rates.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
              className="min-h-[48px] bg-brand-navy hover:bg-brand-navy-dark text-white px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-brand-orange" />
              <span>Call Primary: {COMPANY_INFO.primaryPhone}</span>
            </a>
            <Link
              href="/get-a-quote"
              className="min-h-[48px] bg-white hover:bg-slate-100 text-brand-navy px-7 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg flex items-center gap-2.5"
            >
              <FileText className="w-4 h-4 text-brand-orange" />
              <span>Book Online Quote</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
