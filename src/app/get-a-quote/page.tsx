import React from "react";
import type { Metadata } from "next";
import { 
  FileText, 
  ShieldCheck, 
  Truck, 
  Phone, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  MapPin 
} from "lucide-react";
import { COMPANY_INFO, SITE_URL } from "@/data/company";
import Breadcrumbs from "@/components/Breadcrumbs";
import CommercialQuoteForm from "@/components/CommercialQuoteForm";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Get an Instant Freight Quote | VSJ Logistics Solution Ahmedabad",
  description: "Request a commercial freight quote for FTL, PTL, or heavy machinery transport from Ahmedabad. Direct rates from Naroda GIDC Phase 1. Call +91 8660567050.",
  alternates: {
    canonical: `${SITE_URL}/get-a-quote`,
  },
};

export default function GetAQuotePage() {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      <JsonLd
        pageUrl={`${SITE_URL}/get-a-quote`}
        pageTitle="Get a Freight Quote | VSJ Logistics Solution Naroda Ahmedabad"
        pageDescription="Commercial freight quotation form for FTL, PTL, and ODC freight originating from Ahmedabad."
      />

      <Breadcrumbs items={[{ name: "Get a Quote", url: "/get-a-quote" }]} />

      {/* Hero Header with Airy Spacing */}
      <section className="bg-brand-navy text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <FileText className="w-3.5 h-3.5" />
            <span>Commercial Freight Quotations</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Request an Enterprise <span className="text-brand-orange">Freight Quote</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Fill in your shipment origin, destination, cargo weight, and vehicle category to receive transparent, GST-compliant freight quotations directly from our Naroda GIDC operations desk.
          </p>
        </div>
      </section>

      <TrustBadges />

      {/* Main Form Section with Spacious Layout */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">
          <CommercialQuoteForm />

          {/* Value Proposition Callouts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
              <span className="block text-2xl font-black text-brand-navy">15 Min</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Quote Response Time</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
              <span className="block text-2xl font-black text-brand-navy">0%</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">Hidden Broker Fees</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
              <span className="block text-2xl font-black text-brand-navy">100%</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">GST Tax Compliant</span>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center space-y-1">
              <span className="block text-2xl font-black text-brand-navy">99.4%</span>
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-wide">On-Time SLA Delivery</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
