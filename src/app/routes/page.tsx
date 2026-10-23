import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Route as RouteIcon, Clock } from "lucide-react";
import { SITE_URL } from "@/data/company";
import { ROUTES } from "@/data/routes";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";

const TITLE = "Truck Transport Routes from Ahmedabad | VSJ Logistics";
const DESCRIPTION =
  "Truck transport from Ahmedabad to Mumbai, Delhi NCR, Pune, Bengaluru, Hyderabad, Chennai, Kolkata, Jaipur, Indore, Surat, Vadodara, Rajkot and Mundra Port, with distance and transit times.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/routes` },
};

export default function RoutesIndexPage() {
  const gujarat = ROUTES.filter((r) => r.state.startsWith("Gujarat"));
  const national = ROUTES.filter((r) => !r.state.startsWith("Gujarat"));

  const Card = ({ r }: { r: (typeof ROUTES)[number] }) => (
    <Link
      href={r.url}
      className="bg-white border border-slate-200 hover:border-brand-orange/50 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col gap-3"
    >
      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500">{r.state}</span>
      <h2 className="text-lg font-bold text-brand-navy">Ahmedabad to {r.destination}</h2>
      <p className="text-xs text-slate-600 flex items-center gap-1.5">
        <Clock className="w-3.5 h-3.5 text-brand-orange" />
        {r.distanceKm} • FTL {r.transitFtl}
      </p>
      <span className="text-xs font-bold text-brand-orange flex items-center gap-1 mt-auto">
        View route & get rate <ArrowRight className="w-3.5 h-3.5" />
      </span>
    </Link>
  );

  return (
    <div className="w-full bg-white">
      <JsonLd pageUrl={`${SITE_URL}/routes`} pageTitle={TITLE} pageDescription={DESCRIPTION} />
      <Breadcrumbs items={[{ name: "Routes", url: "/routes" }]} />

      <section className="bg-brand-navy text-white py-14 px-4 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            <RouteIcon className="w-3.5 h-3.5" />
            <span>Pan-India Lanes from Ahmedabad</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">Truck Transport Routes from Ahmedabad</h1>
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            Full truckload and part load freight from Naroda GIDC and every Ahmedabad industrial estate to major cities and
            ports across India.
          </p>
        </div>
      </section>

      <TrustBadges />

      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-brand-navy">Interstate Routes</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {national.map((r) => (
                <Card key={r.slug} r={r} />
              ))}
            </div>
          </div>
          <div className="space-y-5">
            <h2 className="text-2xl font-bold text-brand-navy">Within Gujarat & Ports</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {gujarat.map((r) => (
                <Card key={r.slug} r={r} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
