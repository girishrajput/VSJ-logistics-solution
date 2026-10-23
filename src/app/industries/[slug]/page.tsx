import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Layers, 
  Truck, 
  ShieldCheck, 
  CheckCircle2, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  HelpCircle,
  MapPin,
  FileText
} from "lucide-react";
import { COMPANY_INFO, SITE_URL } from "@/data/company";
import { INDUSTRY_SECTORS, getPageBySlug, CORE_SERVICES, AHMEDABAD_LOCATIONS, shortName } from "@/data/pages";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return INDUSTRY_SECTORS.map((sector) => ({
    slug: sector.slug,
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

export default function IndustryDetailPage({ params }: PageProps) {
  const page = getPageBySlug(params.slug);
  if (!page || page.category !== "industry") {
    notFound();
  }

  const relatedServices = (page.relatedServices || [])
    .map((slug) => CORE_SERVICES.find((s) => s.slug === slug))
    .filter(Boolean);

  const relatedLocations = (page.relatedLocations || [])
    .map((slug) => AHMEDABAD_LOCATIONS.find((l) => l.slug === slug))
    .filter(Boolean);

  return (
    <div className="w-full bg-white">
      <JsonLd
        pageUrl={`${SITE_URL}${page.url}`}
        pageTitle={page.title}
        pageDescription={page.metaDescription}
        faqs={page.faqs}
      />

      <Breadcrumbs
        items={[
          { name: "Industries", url: "/industries" },
          { name: shortName(page), url: page.url },
        ]}
      />

      {/* Hero Header */}
      <section className="bg-brand-navy text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-400/20 text-blue-300 border border-blue-400/30 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5 text-brand-orange" />
            <span>Target Vertical • {page.heroBadge}</span>
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
              <span>Call Vikas Kumar: {COMPANY_INFO.primaryPhone}</span>
            </a>
            <a
              href={COMPANY_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp Industry Inquiry</span>
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />

      {/* Main Content */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                Specialized Sector Logistics Strategy
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">
                {page.summary}
              </p>
            </div>

            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 space-y-5">
              <h3 className="text-base font-bold text-brand-navy uppercase tracking-wider flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span>Sector Handling Protocols & Quality Guarantees</span>
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

            {page.specs && (
              <div className="space-y-4">
                <h3 className="text-lg font-bold text-brand-navy uppercase tracking-wide">
                  Handling Specifications & Equipment
                </h3>
                <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm overflow-x-auto">
                  <table className="w-full text-left min-w-[500px]">
                    <thead className="bg-slate-100 text-slate-700 font-bold uppercase text-xs">
                      <tr>
                        <th className="p-4 border-b border-slate-200">Specification</th>
                        <th className="p-4 border-b border-slate-200">Standard Provided</th>
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

            <div className="space-y-10">
              {page.contentSections.map((sec, idx) => (
                <div key={idx} className="space-y-3.5">
                  <h3 className="text-xl sm:text-2xl font-bold text-brand-navy">{sec.title}</h3>
                  <p className="text-base text-slate-600 leading-relaxed">
                    {sec.description}
                  </p>
                </div>
              ))}
            </div>

            {relatedLocations.length > 0 && (
              <div className="bg-amber-50/60 border border-amber-200/80 rounded-3xl p-8 space-y-4">
                <h3 className="text-base font-bold text-amber-950 uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  <span>Primary Ahmedabad Manufacturing Estates Servicing This Vertical</span>
                </h3>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {relatedLocations.map((loc) => loc && (
                    <Link
                      key={loc.slug}
                      href={loc.url}
                      className="min-h-[44px] bg-white hover:bg-brand-navy hover:text-white text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-xl border border-amber-200 shadow-sm transition-colors flex items-center gap-2"
                    >
                      <span>{loc.heroBadge}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {relatedServices.length > 0 && (
              <div className="bg-blue-50/60 border border-blue-200/80 rounded-3xl p-8 space-y-4">
                <h3 className="text-base font-bold text-blue-950 uppercase tracking-wider flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-600" />
                  <span>Recommended Fleet Services for this Industry</span>
                </h3>
                <div className="flex flex-wrap gap-2.5 pt-1">
                  {relatedServices.map((srv) => srv && (
                    <Link
                      key={srv.slug}
                      href={srv.url}
                      className="min-h-[44px] bg-white hover:bg-brand-blue hover:text-white text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-xl border border-blue-200 shadow-sm transition-colors flex items-center gap-2"
                    >
                      <span>{srv.heroBadge}</span>
                      <ArrowRight className="w-3.5 h-3.5 text-blue-500" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-6 pt-6 border-t border-slate-200">
              <h3 className="text-2xl font-bold text-brand-navy flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-brand-orange" />
                <span>Frequently Asked Questions</span>
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

          <div className="lg:col-span-5 space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Industry Transport Booking Card */}
              <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl space-y-6">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-orange uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Industry Contract Logistics</span>
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy">
                    {page.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Custom monthly contracts, dedicated vehicles, and immediate spot placements from our Naroda GIDC Phase 1 fleet depot.
                  </p>
                </div>

                <div className="space-y-3 text-xs text-slate-700 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>100% Weatherproof</strong> 32ft MXL closed containers</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Real-Time GPS</strong> telematics & speed monitoring</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Formal GST Bilty</strong> & tamper-proof digital e-POD</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span><strong>Monthly Contracts</strong> with dedicated drivers</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/get-a-quote"
                    className="w-full min-h-[48px] bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
                  >
                    <FileText className="w-4 h-4" />
                    <span>Request Industry Quotation</span>
                  </Link>

                  <a
                    href={`https://wa.me/918660567050?text=Hi%20VSJ%20Logistics,%20I%20need%20transport%20services%20for%20${encodeURIComponent(page.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 transition-all"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp Sector Lead</span>
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
