import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Layers, ArrowRight, ShieldCheck, Truck, CheckCircle2 } from "lucide-react";
import { COMPANY_INFO, SITE_URL } from "@/data/company";
import { INDUSTRY_SECTORS, shortName } from "@/data/pages";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Industry Sector Logistics in Ahmedabad | VSJ Logistics Solution",
  description: "Specialized logistics solutions for Textiles, Pharmaceuticals, Heavy Machinery, and FMCG retail distribution by VSJ Logistics Solution.",
  alternates: {
    canonical: `${SITE_URL}/industries`,
  },
};

export default function IndustriesIndexPage() {
  return (
    <div className="w-full bg-white">
      <JsonLd
        pageUrl={`${SITE_URL}/industries`}
        pageTitle="Industry Logistics in Ahmedabad | VSJ Logistics Solution"
        pageDescription="Industry specific transport protocols for manufacturing sectors across Gujarat."
      />

      <Breadcrumbs items={[{ name: "Industries", url: "/industries" }]} />

      <section className="bg-brand-navy text-white py-14 px-4 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-400/20 text-blue-300 border border-blue-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Industrial Sector Solutions</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
            Specialized Manufacturing Logistics
          </h1>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Every industry demands distinct cargo care. We tailor vehicle hygiene, lashing systems, and transit schedules for Gujarat’s high-value manufacturing verticals.
          </p>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {INDUSTRY_SECTORS.map((ind) => (
              <div
                key={ind.slug}
                className="bg-white border border-slate-200 hover:border-blue-400 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
                    <Layers className="w-5 h-5" />
                  </div>

                  <h2 className="text-lg font-bold text-brand-navy">
                    <Link href={ind.url} className="hover:text-brand-orange transition-colors">
                      {shortName(ind)}
                    </Link>
                  </h2>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {ind.summary}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-slate-100 text-[11px] text-slate-600">
                    {ind.keyHighlights.slice(0, 2).map((hl, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={ind.url}
                    className="text-xs font-bold text-brand-navy hover:text-brand-orange flex items-center gap-1.5"
                  >
                    <span>View Protocols</span>
                    <ArrowRight className="w-3.5 h-3.5 text-brand-orange" />
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
