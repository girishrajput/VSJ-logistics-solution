import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Truck, Phone, MessageCircle, ArrowRight, Clock, HelpCircle, MapPin, Route as RouteIcon, Package } from "lucide-react";
import { COMPANY_INFO, SITE_URL } from "@/data/company";
import { ROUTES, getRouteBySlug } from "@/data/routes";
import { AHMEDABAD_LOCATIONS, CORE_SERVICES, shortName } from "@/data/pages";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import QuoteCalculator from "@/components/QuoteCalculator";
import JsonLd from "@/components/JsonLd";

interface PageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return ROUTES.map((r) => ({ slug: r.slug }));
}

function titleFor(destination: string) {
  return `Ahmedabad to ${destination} Truck Transport | FTL & PTL – VSJ Logistics`;
}

function descriptionFor(r: NonNullable<ReturnType<typeof getRouteBySlug>>) {
  return `Ahmedabad to ${r.destination} truck transport from Naroda GIDC: ${r.distanceKm.replace("≈ ", "~")}, ${r.transitFtl} FTL transit, 32ft containers & open trucks, GPS tracked. Call ${COMPANY_INFO.primaryPhone}.`;
}

export function generateMetadata({ params }: PageProps): Metadata {
  const r = getRouteBySlug(params.slug);
  if (!r) return {};
  const url = `${SITE_URL}${r.url}`;
  return {
    title: titleFor(r.destination),
    description: descriptionFor(r),
    alternates: { canonical: url },
    openGraph: {
      images: ["/opengraph-image"], title: titleFor(r.destination), description: descriptionFor(r), url, type: "website" },
  };
}

export default function RouteDetailPage({ params }: PageProps) {
  const r = getRouteBySlug(params.slug);
  if (!r) notFound();

  const url = `${SITE_URL}${r.url}`;
  const others = ROUTES.filter((x) => x.slug !== r.slug);
  const pickupAreas = AHMEDABAD_LOCATIONS.slice(0, 8);
  const services = CORE_SERVICES.filter((s) =>
    ["full-truckload-ftl-ahmedabad", "part-truckload-ptl-cargo", "industrial-project-cargo-transport", "express-surface-cargo"].includes(s.slug),
  );

  const specs = [
    { label: "Road distance", value: r.distanceKm },
    { label: "FTL transit time", value: r.transitFtl },
    { label: "PTL transit time", value: r.transitPtl },
    { label: "Typical route", value: r.via },
    { label: "Pickup from", value: "All Ahmedabad GIDC estates (Naroda, Vatva, Odhav, Sanand, Changodar, Aslali…)" },
    { label: "Vehicles", value: "14ft–24ft closed body, 32ft SXL/MXL container, open body, trailer / low-bed" },
  ];

  return (
    <div className="w-full bg-white">
      <JsonLd
        pageUrl={url}
        pageTitle={titleFor(r.destination)}
        pageDescription={descriptionFor(r)}
        faqs={r.faqs}
        service={{
          name: `Ahmedabad to ${r.destination} truck transport`,
          description: `Full truckload and part truckload road freight from Ahmedabad, Gujarat to ${r.destination}, ${r.state}.`,
          areaServed: ["Ahmedabad", r.destination],
          destination: r.destination,
        }}
      />

      <Breadcrumbs
        items={[
          { name: "Routes", url: "/routes" },
          { name: `Ahmedabad to ${r.destination}`, url: r.url },
        ]}
      />

      <section className="bg-brand-navy text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <RouteIcon className="w-3.5 h-3.5" />
            <span>Ahmedabad → {r.destination} • {r.distanceKm}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Ahmedabad to {r.destination} Truck Transport Services
          </h1>
          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Full truckload (FTL) and part load (PTL) freight from Naroda GIDC and every Ahmedabad industrial estate to{" "}
            {r.destination}, {r.state}. Typical FTL transit: <strong className="text-white">{r.transitFtl}</strong>.
          </p>
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
              className="min-h-[48px] bg-brand-orange hover:bg-brand-orange-dark text-white px-7 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-md transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call for Rate: {COMPANY_INFO.primaryPhone}</span>
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsappNumber.replace("+", "")}?text=${encodeURIComponent(
                `Hello VSJ Logistics, I need a truck from Ahmedabad to ${r.destination}.`,
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white px-7 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center gap-2.5 shadow-md transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>WhatsApp for {r.destination} Rate</span>
            </a>
          </div>
        </div>
      </section>

      <TrustBadges />

      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-brand-navy">
                Ahmedabad to {r.destination} Freight Overview
              </h2>
              <p className="text-base text-slate-700 leading-relaxed">{r.intro}</p>
              <p className="text-base text-slate-700 leading-relaxed">
                Every truck is booked from our office at {COMPANY_INFO.address.estate}, {COMPANY_INFO.address.phase},{" "}
                {COMPANY_INFO.address.area}, Ahmedabad. You get a GST invoice (GSTIN {COMPANY_INFO.gstNumber}), LR/bilty,
                e-way bill support and live GPS tracking until delivery in {r.destination}.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-orange" />
                <span>Distance, Transit Time & Vehicles</span>
              </h2>
              <div className="border border-slate-200 rounded-2xl overflow-hidden shadow-sm overflow-x-auto">
                <table className="w-full text-left min-w-[480px]">
                  <tbody className="divide-y divide-slate-100 text-sm">
                    {specs.map((s, i) => (
                      <tr key={s.label} className={i % 2 === 0 ? "bg-white" : "bg-slate-50/50"}>
                        <th scope="row" className="p-4 font-bold text-brand-navy w-44 align-top">{s.label}</th>
                        <td className="p-4 text-slate-700">{s.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-slate-500">
                Distances are approximate road distances. Transit times are typical and depend on loading time, traffic,
                weather and checkpoints.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-amber-50/50 border border-amber-200/60 rounded-3xl p-6 space-y-3">
                <h3 className="text-sm font-bold text-amber-950 uppercase tracking-wider flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-brand-orange" />
                  <span>Delivery areas in {r.destination}</span>
                </h3>
                <ul className="text-sm text-slate-700 space-y-1.5 list-disc pl-5">
                  {r.destinationHubs.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </div>
              <div className="bg-blue-50/60 border border-blue-200/80 rounded-3xl p-6 space-y-3">
                <h3 className="text-sm font-bold text-blue-950 uppercase tracking-wider flex items-center gap-2">
                  <Package className="w-4 h-4 text-blue-600" />
                  <span>Common cargo on this route</span>
                </h3>
                <ul className="text-sm text-slate-700 space-y-1.5 list-disc pl-5">
                  {r.commonCargo.map((c) => (
                    <li key={c}>{c}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy">Pickup Anywhere in Ahmedabad</h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                We load {r.destination}-bound trucks directly at your factory or warehouse in these Ahmedabad areas:
              </p>
              <div className="flex flex-wrap gap-2.5">
                {pickupAreas.map((l) => (
                  <Link
                    key={l.slug}
                    href={l.url}
                    className="min-h-[44px] bg-white hover:bg-brand-navy hover:text-white text-slate-800 text-xs font-semibold px-4 py-2.5 rounded-xl border border-slate-200 shadow-sm transition-colors flex items-center gap-2"
                  >
                    <span>Transport from {shortName(l)}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-brand-navy flex items-center gap-2">
                <Truck className="w-5 h-5 text-brand-orange" />
                <span>Services Available on this Route</span>
              </h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={s.url}
                    className="p-4 rounded-xl border border-slate-200 hover:border-brand-orange text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors flex items-center justify-between min-h-[48px]"
                  >
                    <span>{shortName(s)}</span>
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-6 pt-6 border-t border-slate-200">
              <h2 className="text-2xl font-bold text-brand-navy flex items-center gap-2.5">
                <HelpCircle className="w-6 h-6 text-brand-orange" />
                <span>Ahmedabad to {r.destination} Transport FAQs</span>
              </h2>
              <div className="space-y-4">
                {r.faqs.map((f) => (
                  <div key={f.question} className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                    <h3 className="text-base font-bold text-slate-800">{f.question}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{f.answer}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-200">
              <h2 className="text-base font-bold text-slate-800 uppercase tracking-wider">Other Routes from Ahmedabad</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {others.map((o) => (
                  <Link
                    key={o.slug}
                    href={o.url}
                    className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-orange text-xs font-medium text-slate-700 hover:text-brand-orange transition-colors flex items-center justify-between min-h-[48px]"
                  >
                    <span className="truncate">Ahmedabad to {o.destination}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="sticky top-24">
              <QuoteCalculator initialDestination={r.calculatorDestination} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
