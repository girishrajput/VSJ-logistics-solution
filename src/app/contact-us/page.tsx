import React from "react";
import type { Metadata } from "next";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ShieldCheck, 
  MessageCircle, 
  FileText,
  Building2,
  Navigation,
  ExternalLink
} from "lucide-react";
import { COMPANY_INFO, SITE_URL } from "@/data/company";
import Breadcrumbs from "@/components/Breadcrumbs";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";
import ContactForm from "@/components/ContactForm";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  title: "Contact Us & Naroda GIDC Office Map | VSJ Logistics Solution",
  description: "Contact VSJ Logistics Solution at FF 06, Madhur Milan Estate, Phase 1, GIDC, Naroda, Ahmedabad - 382330. Call +91 8660567050 or email vsj.logistics2026@gmail.com.",
  alternates: {
    canonical: `${SITE_URL}/contact-us`,
  },
};

export default function ContactUsPage() {
  return (
    <div className="w-full bg-white">
      <JsonLd
        pageUrl={`${SITE_URL}/contact-us`}
        pageTitle="Contact VSJ Logistics Solution | Naroda GIDC Phase 1 Ahmedabad"
        pageDescription="Official contact information, telephone helplines, email, and Google Map directions for VSJ Logistics Solution."
      />

      <Breadcrumbs items={[{ name: "Contact Us", url: "/contact-us" }]} />

      {/* Hero Header with Breathable Spacing */}
      <section className="bg-brand-navy text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <MapPin className="w-3.5 h-3.5" />
            <span>Naroda GIDC Phase 1 Base</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Contact <span className="text-brand-orange">VSJ Logistics Solution</span> Ahmedabad
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
            Reach out to our operations control room at FF 06, Madhur Milan Estate, Naroda GIDC Phase 1 for freight bookings, vehicle placement, and commercial quotations.
          </p>
        </div>
      </section>

      {/* Main Contact Grid with Generous Gap */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Official Contact Directory & Visiting Card */}
          <div className="lg:col-span-5 space-y-8">
            <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 space-y-8 shadow-sm">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-orange text-white flex items-center justify-center font-bold shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-brand-navy">{COMPANY_INFO.name}</h3>
                  <span className="text-xs text-amber-700 bg-amber-100 font-mono font-bold px-2.5 py-1 rounded-md border border-amber-200">
                    GSTIN: {COMPANY_INFO.gstNumber}
                  </span>
                </div>
              </div>

              {/* Physical Address */}
              <div className="space-y-1.5 text-sm">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">Office & Fleet Hub Address</span>
                <p className="text-slate-800 font-semibold leading-relaxed text-base">
                  {COMPANY_INFO.address.full}
                </p>
                <p className="text-slate-500 text-xs pt-1 leading-relaxed">
                  Located near Naroda GIDC Phase 1 Industrial Association, with easy access to the Sardar Patel Ring Road and NH-48.
                </p>
              </div>

              {/* Telephone Contacts with 48px touch targets */}
              <div className="space-y-3 pt-2 border-t border-slate-200">
                <span className="text-slate-400 font-bold uppercase tracking-wider text-xs">Direct Phone Helplines</span>
                
                <a
                  href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-orange flex items-center justify-between transition-colors group min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-orange-100 text-brand-orange flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-semibold block">Primary Dispatch Desk</span>
                      <span className="text-sm font-bold text-brand-navy group-hover:text-brand-orange">{COMPANY_INFO.primaryPhone}</span>
                    </div>
                  </div>
                  <span className="text-xs text-brand-orange font-bold font-mono">CALL</span>
                </a>

                <a
                  href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                  className="p-4 rounded-2xl bg-white border border-slate-200 hover:border-brand-blue flex items-center justify-between transition-colors group min-h-[48px]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-blue-100 text-brand-blue flex items-center justify-center shrink-0">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-500 uppercase font-semibold block">Customer Support & Invoicing</span>
                      <span className="text-sm font-bold text-brand-navy group-hover:text-brand-blue">{COMPANY_INFO.secondaryPhone}</span>
                    </div>
                  </div>
                  <span className="text-xs text-blue-600 font-bold font-mono">CALL</span>
                </a>
              </div>

              {/* WhatsApp Quick Link */}
              <div className="pt-2 border-t border-slate-200">
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white p-4 rounded-2xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2.5 shadow-sm transition-colors min-h-[48px]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Chat on WhatsApp: +91 8660567050</span>
                </a>
              </div>

              {/* Email & Operating Hours */}
              <div className="pt-2 border-t border-slate-200 space-y-3 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Official Email:</span>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-navy font-bold hover:underline">
                    {COMPANY_INFO.email}
                  </a>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Control Desk Hours:</span>
                  <span className="text-slate-800 font-semibold">08:00 AM – 09:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Road Dispatch Helpline:</span>
                  <span className="text-emerald-600 font-bold">24/7 Monitored</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-500">Executive In-Charge:</span>
                  <span className="text-brand-navy font-bold">{COMPANY_INFO.founder}</span>
                </div>
              </div>

              {/* Grievance & Escalation Desk Anchor (Checkpoint 8) */}
              <div id="grievance" className="pt-4 border-t border-slate-200 space-y-2 scroll-mt-24">
                <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
                  Grievance & Escalation Officer
                </span>
                <p className="text-xs text-slate-600 leading-relaxed">
                  For formal POD disputes, demurrage reconciliations, or urgent cargo escalation, reach out directly to <strong>{COMPANY_INFO.founder}</strong> (Operations Director) at <a href={`tel:${COMPANY_INFO.primaryPhoneRaw}`} className="text-brand-navy font-semibold hover:underline">{COMPANY_INFO.primaryPhone}</a> or via email at <a href={`mailto:${COMPANY_INFO.email}`} className="text-brand-navy font-semibold hover:underline">{COMPANY_INFO.email}</a>.
                </p>
              </div>
            </div>

            {/* Interactive Map */}
            <div className="space-y-3">
              <span className="text-sm font-bold text-brand-navy uppercase tracking-wider block">
                Office & Vehicle Staging Location Map
              </span>
              <GoogleMapEmbed height="h-80" />
            </div>
          </div>

          {/* Right Column: Direct Dispatch Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
