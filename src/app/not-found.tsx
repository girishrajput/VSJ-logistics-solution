import React from "react";
import Link from "next/link";
import { ArrowLeft, Phone, Calculator, MapPin, Truck, HelpCircle, Navigation } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] bg-slate-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-3xl w-full text-center space-y-8 bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-sm">
        {/* 404 Badge */}
        <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 text-brand-orange text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider">
          <HelpCircle className="w-4 h-4" />
          <span>Error 404 • Consignment Route Not Found</span>
        </div>

        {/* Heading */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-black text-brand-navy tracking-tight">
            Looking for a Freight Route or Service?
          </h1>
          <p className="text-base sm:text-lg text-slate-600 max-w-xl mx-auto leading-relaxed">
            The page, industrial hub, or tracking URL you are looking for has been updated or moved.
            Our Naroda GIDC Phase 1 dispatch office is active 24/7 to assist you.
          </p>
        </div>

        {/* Primary CTA Cluster with >= 48px touch targets */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/"
            className="min-h-[48px] bg-brand-navy hover:bg-brand-navy-light text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-all shadow-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Homepage</span>
          </Link>

          <Link
            href="/get-a-quote"
            className="min-h-[48px] bg-brand-orange hover:bg-brand-orange-dark text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-brand-orange/20"
          >
            <Calculator className="w-4 h-4" />
            <span>Request Freight Quote</span>
          </Link>

          <a
            href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
            className="min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center gap-2 transition-all shadow-md shadow-emerald-600/20"
          >
            <Phone className="w-4 h-4" />
            <span>Call Dispatch ({COMPANY_INFO.primaryPhone})</span>
          </a>
        </div>

        {/* Quick Links Grid */}
        <div className="pt-8 border-t border-slate-200 text-left">
          <h2 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-4 text-center sm:text-left">
            Popular Transport Services & Industrial Hubs:
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            <Link
              href="/services/full-truckload-ftl-ahmedabad"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-orange/50 hover:bg-orange-50/30 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-700 min-h-[48px]"
            >
              <Truck className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Full Truckload (FTL) Freight</span>
            </Link>

            <Link
              href="/services/part-truckload-ptl-cargo"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-orange/50 hover:bg-orange-50/30 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-700 min-h-[48px]"
            >
              <Truck className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Part Truckload (PTL) Cargo</span>
            </Link>

            <Link
              href="/locations/logistics-services-naroda-gidc"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-orange/50 hover:bg-orange-50/30 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-700 min-h-[48px]"
            >
              <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Naroda GIDC Phase 1 Base Hub</span>
            </Link>

            <Link
              href="/routes/ahmedabad-to-mumbai-truck-transport"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-orange/50 hover:bg-orange-50/30 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-700 min-h-[48px]"
            >
              <Navigation className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Ahmedabad to Mumbai Linehaul</span>
            </Link>

            <Link
              href="/routes/ahmedabad-to-delhi-truck-transport"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-orange/50 hover:bg-orange-50/30 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-700 min-h-[48px]"
            >
              <Navigation className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Ahmedabad to Delhi Transit</span>
            </Link>

            <Link
              href="/contact-us"
              className="p-3.5 rounded-xl border border-slate-200 hover:border-brand-orange/50 hover:bg-orange-50/30 transition-all flex items-center gap-2.5 text-xs font-semibold text-slate-700 min-h-[48px]"
            >
              <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
              <span>Contact & Naroda GIDC Office</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
