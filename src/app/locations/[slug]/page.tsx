import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  MapPin, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  Clock, 
  HelpCircle,
  Building2,
  Navigation,
  FileText
} from "lucide-react";
import { COMPANY_INFO, SITE_URL } from "@/data/company";
import { ROUTES } from "@/data/routes";
import { AHMEDABAD_LOCATIONS, getPageBySlug, CORE_SERVICES, INDUSTRY_SECTORS, shortName } from "@/data/pages";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return AHMEDABAD_LOCATIONS.map((loc) => ({
    slug: loc.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const page = getPageBySlug(params.slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.metaDescription,
    alternates: {
      canonical: `${SITE_URL}${page.url}`,
    },
    openGraph: {
      images: ["/opengraph-image"],
      title: page.title,
      description: page.metaDescription,
      url: `${SITE_URL}${page.url}`,
      type: "article",
    },
  };
}

export default function LocationDetailPage({ params }: PageProps) {
  const page = getPageBySlug(params.slug);
  if (!page || page.category !== "location") {
    notFound();
  }

  const relatedServices = (page.relatedServices || [])
    .map((slug) => CORE_SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);

  const otherHubs = AHMEDABAD_LOCATIONS.filter((l) => l.slug !== page.slug);

  return (
    <div className="w-full bg-white">
      <JsonLd
        pageUrl={`${SITE_URL}${page.url}`}
        pageTitle={page.title}
        pageDescription={page.metaDescription}
        faqs={page.faqs}
        service={{
          name: `Truck transport & logistics in ${shortName(page)}, Ahmedabad`,
          description: page.metaDescription,
          areaServed: [shortName(page), "Ahmedabad"],
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Ahmedabad Hubs", url: "/locations" },
          { name: shortName(page), url: page.url },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 border border-amber-400/30 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-brand-orange" />
            <span>Hyper-Local Hub Spotlight • {page.heroBadge}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            {page.h1}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            {page.h2}
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
              className="min-h-[48px] bg-brand-orange hover:bg-brand-orange-dark text-white px-7 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-md transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call Dispatch Desk: {COMPANY_INFO.primaryPhone}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Vikas Kumar</span>
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Main Content & Specs Grid */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column */}
          <div className="lg:col-span-7 space-y-12">
            {/* Overview */}
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                Industrial Cluster Transport Profile
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {page.summary}
              </p>
            </div>

            {/* Headquarters Cross-Link Banner */}
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 space-y-3">
              <div className="flex items-center gap-2.5 text-sm font-bold text-brand-navy uppercase tracking-wider">
                <Building2 className="w-5 h-5 text-brand-orange" />
                <span>Central Operations Control & Consolidation Hub</span>
              </div>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Shipments servicing this industrial estate are staged, inspected, and manifested directly through our primary headquarters at{" "}
                <Link href="/locations/logistics-services-naroda-gidc" className="font-semibold text-brand-orange hover:underline">
                  FF 06, Madhur Milan Estate, Phase 1, GIDC, Naroda, Ahmedabad - 382330
                </Link>
                , guaranteeing fast transit clearances and zero deadhead billing.
              </p>
            </div>

            {/* Key Highlights */}
            <div className="bg-amber-50/50 border border-amber-200/60 rounded-3xl p-8 space-y-5">
              <h3 className="text-base font-bold text-amber-950 uppercase tracking-wider flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-brand-orange" />
                <span>Dedicated Services for this Estate</span>
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-slate-700">
                {page.keyHighlights.map((hl, idx) => (
                  <li key={idx} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                    <span>{hl}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications Table */}
            {page.specs && page.specs.length > 0 && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-brand-navy uppercase tracking-wide">
                  Hub Operating Specifications & Coverage
                </h3>
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm overflow-x-auto">
                  <table className="w-full text-left min-w-[500px]">
                    <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-xs">
                      <tr>
                        <th className="p-4 border-b border-slate-200">Parameter</th>
                        <th className="p-4 border-b border-slate-200">Estate Coverage</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100 text-sm">
                      {page.specs.map((s, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                          <td className="p-4 font-bold text-brand-navy">{s.label}</td>
                          <td className="p-4 text-slate-700 font-mono text-xs">{s.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Content Sections */}
            <div className="space-y-10">
              {page.contentSections.map((sec, idx) => (
                <div key={idx} className="space-y-3.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">{sec.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {sec.description}
                  </p>
                  {sec.points && (
                    <ul className="space-y-2 pl-4 pt-1 list-disc text-sm sm:text-base text-slate-600">
                      {sec.points.map((pt, pIdx) => (
                        <li key={pIdx} className="leading-relaxed">{pt}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Related Freight Services */}
            {relatedServices.length > 0 && (
              <div className="bg-blue-50/60 border border-blue-200/80 rounded-3xl p-8 space-y-4">
                <h3 className="text-base font-bold text-blue-950 uppercase tracking-wider flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>Fleet Services Commonly Dispatched from this Hub</span>
                </h3>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {relatedServices.map((srv) => srv && (
                    <Link
                      key={srv.slug}
                      href={srv.url}
                      className="min-h-[44px] bg-white hover:bg-brand-navy hover:text-white text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-xl border border-blue-200 shadow-sm transition-colors flex items-center gap-2"
                    >
                      <span>{srv.heroBadge}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Popular routes from this locality */}
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <h3 className="text-base font-bold text-slate-800 uppercase tracking-wider">
                Popular Truck Routes from {shortName(page)}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ROUTES.slice(0, 9).map((r) => (
                  <Link
                    key={r.slug}
                    href={r.url}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-orange text-xs font-medium text-slate-700 hover:text-brand-orange transition-colors flex items-center justify-between min-h-[48px]"
                  >
                    <span className="truncate">{shortName(page)} to {r.destination}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Nearby Hubs */}
            <div className="space-y-4 pt-6 border-t border-slate-200">
              <h3 className="text-base font-bold text-slate-800 uppercase tracking-wider">
                Explore Other Ahmedabad Industrial Transporter Desks
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {otherHubs.map((hub) => (
                  <Link
                    key={hub.slug}
                    href={hub.url}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-orange text-xs font-medium text-slate-700 hover:text-brand-orange transition-colors flex items-center justify-between min-h-[48px]"
                  >
                    <span className="truncate">{hub.heroBadge}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            {/* FAQs */}
            <div className="space-y-6 pt-6 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-brand-navy flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-brand-orange" />
                <span>Frequently Asked Questions for this Location</span>
              </h3>
              <div className="space-y-4">
                {page.faqs.map((faq, idx) => (
                  <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <h4 className="text-base font-bold text-slate-800">{faq.question}</h4>
                    <p className="text-sm text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Local Dispatch & Hub Information */}
          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Rapid Placement Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                    <Truck className="w-3.5 h-3.5" />
                    <span>Direct Factory Gate Dispatch</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">
                    {shortName(page)} Transport Hub
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Dedicated commercial freight service for industrial shippers, factories, and warehouses across {shortName(page)}.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>15–30 Min</strong> truck placement for Naroda & Odhav</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Direct Transit</strong> to Mumbai, Delhi, Bengaluru</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Full Fleet:</strong> 32ft MXL, SXL & Open Trailers</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>GST & e-Way Bill</strong> complete documentation</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/get-a-quote"
                    className="w-full min-h-[48px] bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Get Freight Quotation</span>
                  </Link>

                  <a
                    href={`https://wa.me/918660567050?text=Hi%20VSJ%20Logistics,%20I%20need%20a%20truck%20placement%20in%20${encodeURIComponent(shortName(page))}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp {shortName(page)} Desk</span>
                  </a>

                  <a
                    href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                    className="w-full min-h-[48px] bg-brand-navy hover:bg-brand-navy-dark text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>Call: {COMPANY_INFO.primaryPhone}</span>
                  </a>
                </div>
              </div>

              {/* Head Office Map Widget */}
              <div className="bg-slate-50 rounded-3xl p-6 border border-slate-200 space-y-3">
                <h4 className="text-sm font-bold text-brand-navy uppercase flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  <span>Naroda GIDC Headquarters Hub</span>
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {COMPANY_INFO.address.full}
                </p>
                <div className="pt-2">
                  <GoogleMapEmbed height="h-64" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
