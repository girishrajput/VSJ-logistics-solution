import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Truck, CheckCircle2, ArrowRight, ShieldCheck, Phone, FileText } from "lucide-react";
import { COMPANY_INFO, SITE_URL } from "@/data/company";
import { CORE_SERVICES, shortName } from "@/data/pages";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Commercial Freight Services in Ahmedabad | VSJ Logistics Solution",
  description: "Explore enterprise logistics services by VSJ Logistics Solution: Full Truckload (FTL), Express PTL, Warehousing, Heavy ODC, and Chemical ADR transport.",
  alternates: {
    canonical: `${SITE_URL}/services`,
  },
};

export default function ServicesIndexPage() {
  return (
    <div className="w-full bg-white">
      <JsonLd
        pageUrl={`${SITE_URL}/services`}
        pageTitle="Commercial Freight Services in Ahmedabad | VSJ Logistics"
        pageDescription="Catalog of commercial road freight, container fleets, and specialized transport services offered by VSJ Logistics Solution."
      />

      <Breadcrumbs items={[{ name: "Services", url: "/services" }]} />

      <section className="bg-brand-navy text-white py-14 px-4 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Truck className="w-3.5 h-3.5" />
            <span>Enterprise Road Freight Fleet</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Commercial Logistics & Transport Services
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Operating from our primary consolidation depot at FF 06, Madhur Milan Estate, Naroda GIDC Phase 1, we provide high-reliability logistics for Gujarat's industrial sectors.
          </p>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((s) => (
              <div
                key={s.slug}
                className="bg-white border border-slate-200 hover:border-brand-orange/50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-700 px-2.5 py-1 rounded-md font-mono">
                      {s.heroBadge}
                    </span>
                    <Truck className="w-5 h-5 text-slate-400" />
                  </div>

                  <h2 className="text-lg font-bold text-brand-navy">
                    <Link href={s.url} className="hover:text-brand-orange transition-colors">
                      {shortName(s)}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {s.summary}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                    {s.keyHighlights.slice(0, 3).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={s.url}
                    className="text-xs font-bold text-brand-navy hover:text-brand-orange flex items-center gap-1.5"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
                  </Link>
                  <Link
                    href="/get-a-quote"
                    className="text-[11px] font-semibold text-brand-orange hover:underline"
                  >
                    Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
