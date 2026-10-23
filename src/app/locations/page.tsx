import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight, ShieldCheck, Truck, Building2 } from "lucide-react";
import { COMPANY_INFO, SITE_URL } from "@/data/company";
import { AHMEDABAD_LOCATIONS, shortName } from "@/data/pages";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

export const metadata: Metadata = {
  title: "Ahmedabad Industrial Transport Hubs & GIDC Directory | VSJ Logistics",
  description: "Transport company serving every Ahmedabad industrial area: Naroda GIDC, Vatva, Narol, Odhav/Kathwada, Sanand, Changodar, Aslali, Bavla, Chhatral/Kalol and Gandhinagar GIDC.",
  alternates: {
    canonical: `${SITE_URL}/locations`,
  },
};

export default function LocationsIndexPage() {
  return (
    <div className="w-full bg-white">
      <JsonLd
        pageUrl={`${SITE_URL}/locations`}
        pageTitle="Ahmedabad Industrial Transport Hubs | VSJ Logistics Solution"
        pageDescription="Hyper-local transport desks across Ahmedabad's manufacturing and chemical estates."
      />

      <Breadcrumbs items={[{ name: "Ahmedabad Hubs", url: "/locations" }]} />

      <section className="bg-brand-navy text-white py-14 px-4 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Hyper-Local Ahmedabad GIDC Desks</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Ahmedabad Industrial Transport Hubs
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Headquartered at FF 06, Madhur Milan Estate, Naroda GIDC Phase 1, we deploy dedicated commercial fleets across Ahmedabad's key industrial development zones.
          </p>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {AHMEDABAD_LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className="bg-white border border-slate-200 hover:border-brand-orange/50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded font-mono">
                      {loc.heroBadge}
                    </span>
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>

                  <h2 className="text-lg font-bold text-brand-navy">
                    <Link href={loc.url} className="hover:text-brand-orange transition-colors">
                      {shortName(loc)}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {loc.summary}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                    {loc.keyHighlights.slice(0, 3).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <span className="text-brand-orange font-bold">•</span>
                        <span className="line-clamp-1">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={loc.url}
                    className="text-xs font-bold text-brand-navy hover:text-brand-orange flex items-center gap-1.5"
                  >
                    <span>View Hub & Fleet Details</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-4 pt-6">
            <h3 className="text-lg font-bold text-brand-navy">Operations Headquarters Map</h3>
            <GoogleMapEmbed height="h-80" />
          </div>
        </div>
      </section>
    </div>
  );
}
