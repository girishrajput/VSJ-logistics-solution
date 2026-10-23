"use client";

import React, { useState } from "react";
import { Phone, MessageCircle, FileText } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import QuickQuoteModal from "./QuickQuoteModal";

export default function FloatingMobileBar() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl px-3 py-2.5">
        <div className="grid grid-cols-3 gap-2.5 max-w-md mx-auto">
          {/* Direct Call Button (min 48px height) */}
          <a
            href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
            className="min-h-[48px] flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-slate-100 hover:bg-slate-200 text-brand-navy transition-colors border border-slate-200 active:scale-95"
            aria-label="Call Vikas Kumar at VSJ Logistics"
          >
            <Phone className="w-4 h-4 text-brand-orange mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-tight">Call Now</span>
          </a>

          {/* WhatsApp Chat Button (min 48px height) */}
          <a
            href={COMPANY_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[48px] flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors shadow-sm active:scale-95"
            aria-label="WhatsApp VSJ Logistics"
          >
            <MessageCircle className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-tight">WhatsApp</span>
          </a>

          {/* Quick Quote Overlay Trigger (min 48px height) */}
          <button
            type="button"
            onClick={() => setModalOpen(true)}
            className="min-h-[48px] flex flex-col items-center justify-center py-2 px-1 rounded-xl bg-brand-orange hover:bg-brand-orange-dark text-white transition-colors shadow-sm active:scale-95"
            aria-label="Open Quick Quote Modal"
          >
            <FileText className="w-4 h-4 text-white mb-0.5" />
            <span className="text-[11px] font-bold uppercase tracking-tight">Get Quote</span>
          </button>
        </div>
      </div>

      {/* Airy Overlay Modal */}
      <QuickQuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
