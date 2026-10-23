import React from "react";
import { MapPin, Navigation, ExternalLink, Phone, ShieldCheck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface GoogleMapEmbedProps {
  className?: string;
  height?: string;
}

export default function GoogleMapEmbed({ className = "", height = "h-80 md:h-96" }: GoogleMapEmbedProps) {
  // Google Maps embed URL centered at Naroda GIDC Phase 1 Ahmedabad
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3670.323067425982!2d72.65562507604543!3d23.085289914032906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e80614e7a7505%3A0xbef0b7a840e6c3dc!2sMadhur%20Milan%20Estate%2C%20GIDC%20Naroda%2C%20Ahmedabad%2C%20Gujarat%20382330!5e0!3m2!1sen!2sin!4v1729123456789!5m2!1sen!2sin`;

  return (
    <div className={`relative rounded-2xl overflow-hidden border border-slate-200 shadow-md ${className}`}>
      {/* Map iframe */}
      <iframe
        title="VSJ Logistics Solution - Naroda GIDC Phase 1 Office Location Map"
        src={mapSrc}
        className={`w-full ${height} border-0`}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      ></iframe>

      {/* Floating Info Overlay */}
      <div className="absolute top-4 left-4 right-4 sm:right-auto max-w-sm bg-brand-navy/95 backdrop-blur-md text-white p-4 rounded-xl border border-brand-orange/40 shadow-xl space-y-2">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-brand-orange text-white flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs font-bold leading-tight">VSJ Logistics Solution HQ</h4>
            <span className="text-[10px] text-amber-300 font-mono">GSTIN: {COMPANY_INFO.gstNumber}</span>
          </div>
        </div>

        <p className="text-[11px] text-slate-300 leading-snug">
          {COMPANY_INFO.address.full}
        </p>

        <div className="pt-2 border-t border-slate-700/60 flex items-center justify-between text-[11px]">
          <a
            href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
            className="flex items-center gap-1 text-white hover:text-brand-orange font-bold transition-colors"
          >
            <Phone className="w-3 h-3 text-brand-orange" />
            <span>{COMPANY_INFO.primaryPhone}</span>
          </a>
          <a
            href="https://maps.google.com/?q=Madhur+Milan+Estate+Phase+1+GIDC+Naroda+Ahmedabad"
            target="_blank"
            rel="noopener noreferrer"
            className="text-amber-400 hover:text-white flex items-center gap-1 font-medium transition-colors"
          >
            <span>Directions</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
