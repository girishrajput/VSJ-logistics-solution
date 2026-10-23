import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { 
  ShieldCheck, 
  Truck, 
  Award, 
  MapPin, 
  Phone, 
  Mail, 
  CheckCircle2, 
  Clock, 
  Users, 
  Building2,
  FileText,
  Navigation
} from "lucide-react";
import { COMPANY_INFO, SITE_URL } from "@/data/company";
import Breadcrumbs from "@/components/Breadcrumbs";
import TrustBadges from "@/components/TrustBadges";
import JsonLd from "@/components/JsonLd";
import GoogleMapEmbed from "@/components/GoogleMapEmbed";

export const metadata: Metadata = {
  title: "About Us | VSJ Logistics Solution Naroda Ahmedabad",
  description: "Learn about VSJ Logistics Solution, directed by Vikas Kumar at FF 06 Madhur Milan Estate Naroda GIDC Phase 1. GST: 24ATAPV9051F1ZM, 150+ fleet, 99.4% on-time.",
  alternates: {
    canonical: `${SITE_URL}/about-us`,
  },
};

export default function AboutUsPage() {
  return (
    <div className="w-full bg-white">
      <JsonLd
        pageUrl={`${SITE_URL}/about-us`}
        pageTitle="About VSJ Logistics Solution | Ahmedabad Freight Infrastructure"
        pageDescription="Company history, leadership by Vikas Kumar, GST credentials, and fleet strength of VSJ Logistics Solution."
      />

      <Breadcrumbs items={[{ name: "About Us", url: "/about-us" }]} />

      {/* Hero Header with Airy Vertical Padding */}
      <section className="bg-brand-navy text-white py-16 md:py-20 px-4 sm:px-6 lg:px-8 border-b-4 border-brand-orange">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 bg-brand-orange/20 text-brand-orange border border-brand-orange/30 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Company Profile & Credentials</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight">
            Ahmedabad's Benchmark for <span className="text-brand-orange">Industrial Freight</span> Reliability
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed">
            Headquartered at FF 06, Madhur Milan Estate, Phase 1, GIDC, Naroda, Ahmedabad, 
            <strong> VSJ Logistics Solution</strong> bridges Gujarat’s prime manufacturing zones with national industrial consumer markets through a modern, GPS-enabled commercial fleet.
          </p>
        </div>
      </section>

      <TrustBadges />

      {/* Main Corporate Story & Metrics */}
      <section className="py-20 md:py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Operational Heritage & Foundation
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy tracking-tight">
              Rooted in Naroda GIDC, Connected to Every Trade Corridor Across India
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Founded to eliminate the inefficiencies, cargo damages, and lack of transparency endemic in traditional brokerage models, 
              <strong> VSJ Logistics Solution</strong> has emerged as the preferred commercial transportation provider for multinational and domestic enterprises in Gujarat.
            </p>
            <p className="text-base text-slate-600 leading-relaxed">
              Operating under the direct leadership of <strong>Vikas Kumar</strong>, we combine disciplined fleet management with automated GPS telematics. Every truck that leaves our Naroda GIDC Phase 1 depot is pre-inspected for floor integrity, weatherproof security, and driver safety certification.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 pt-4">
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-3xl font-black text-brand-navy">{COMPANY_INFO.metrics.onTimeDeliveryRate}</div>
                <div className="text-xs font-bold text-slate-600 mt-1 uppercase tracking-wide">On-Time SLA Delivery</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-3xl font-black text-brand-navy">{COMPANY_INFO.metrics.monthlyTonnage}</div>
                <div className="text-xs font-bold text-slate-600 mt-1 uppercase tracking-wide">Monthly Freight Handled</div>
              </div>
              <div className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
                <div className="text-3xl font-black text-brand-navy">{COMPANY_INFO.metrics.corporateClients}</div>
                <div className="text-xs font-bold text-slate-600 mt-1 uppercase tracking-wide">Corporate B2B Clients</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-br from-brand-navy to-brand-navy-dark text-white p-8 sm:p-10 rounded-3xl border border-slate-700 shadow-xl space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2.5 border-b border-slate-700 pb-4">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <span>Official Business Credentials</span>
            </h3>

            <div className="space-y-4 text-sm">
              <div>
                <span className="text-slate-400 block text-xs uppercase font-medium">Legal Business Name</span>
                <span className="font-bold text-white text-base">{COMPANY_INFO.legalName}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs uppercase font-medium">GST Identification Number (GSTIN)</span>
                <span className="font-mono font-bold text-amber-300 text-base">{COMPANY_INFO.gstNumber}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs uppercase font-medium">Registered Office & Depot</span>
                <span className="text-slate-200 leading-relaxed block">{COMPANY_INFO.address.full}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs uppercase font-medium">Founder & Operations Director</span>
                <span className="font-bold text-white text-base">{COMPANY_INFO.founder}</span>
              </div>
              <div>
                <span className="text-slate-400 block text-xs uppercase font-medium">Direct Helplines</span>
                <div className="flex flex-col gap-2 mt-1.5 font-mono">
                  <a href={`tel:${COMPANY_INFO.primaryPhoneRaw}`} className="text-brand-orange hover:underline text-sm font-bold flex items-center gap-1.5 min-h-[36px]">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.primaryPhone} (Dispatch Desk)</span>
                  </a>
                  <a href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`} className="text-slate-300 hover:underline text-sm flex items-center gap-1.5 min-h-[36px]">
                    <Phone className="w-3.5 h-3.5" />
                    <span>{COMPANY_INFO.secondaryPhone} (Operations Support)</span>
                  </a>
                </div>
              </div>
              <div>
                <span className="text-slate-400 block text-xs uppercase font-medium">Official Email</span>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-slate-200 hover:text-white underline text-sm">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Spotlight: Vikas Kumar */}
      <section className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-y border-slate-200">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            <div className="w-24 h-24 rounded-2xl bg-brand-navy flex items-center justify-center text-white text-3xl font-black shrink-0 border-2 border-brand-orange">
              VK
            </div>
            <div className="space-y-1.5 text-center sm:text-left">
              <span className="text-xs font-bold text-brand-orange uppercase tracking-wide">Founder & Executive Director</span>
              <h3 className="text-2xl font-black text-brand-navy">{COMPANY_INFO.founder}</h3>
              <p className="text-sm text-slate-500 font-medium">VSJ Logistics Solution • Naroda GIDC Phase 1</p>
              <div className="pt-3 flex flex-wrap items-center justify-center sm:justify-start gap-3">
                <a
                  href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                  className="min-h-[48px] bg-brand-navy hover:bg-brand-navy-light text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call {COMPANY_INFO.primaryPhone}</span>
                </a>
                <a
                  href={COMPANY_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-4 py-2.5 rounded-xl flex items-center gap-2"
                >
                  <Navigation className="w-4 h-4" />
                  <span>WhatsApp Vikas Kumar</span>
                </a>
              </div>
            </div>
          </div>

          <blockquote className="border-l-4 border-brand-orange pl-5 text-sm sm:text-base text-slate-700 leading-relaxed italic">
            "When a manufacturer entrusts their finished goods to a logistics provider, they are placing their brand reputation on the line. We believe in complete transparency: no hidden surcharges, no fake dispatch promises, and no unreachable call centres. You have my personal mobile number, and our operations desk is open 24/7 at Naroda GIDC Phase 1."
          </blockquote>
        </div>
      </section>

      {/* Safety Compliance & Fleet Strength with 48px touch targets */}
      <section id="safety" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 scroll-mt-20">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-brand-navy">
              Safety, Regulatory Compliance & Fleet Specifications
            </h2>
            <p className="text-base text-slate-600">
              Meeting the rigorous transport audits demanded by pharmaceutical, chemical, and automotive manufacturers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center font-bold">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-brand-navy">CMVR & ADR HazChem Standards</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Strict compliance with Central Motor Vehicles Rules (Rule 131–137) for chemical transport in Vatva, Naroda, and Ankleshwar. Vehicles carry spark arrestors, eye-wash kits, and TREM cards.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center font-bold">
                <Navigation className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-brand-navy">100% Active GPS Telematics</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Continuous geo-fencing, speed governor tracking at 60 km/h, automated route deviation alerts, and electronic proof of delivery (e-POD) generated within 6 hours of consignee receipt.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <Award className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-brand-navy">Driver Vetting & Safety Training</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Biometrically verified commercial drivers with zero major interstate fault records, regular medical and breathalyzer checks, and dual-driver shifts for long-haul express lines.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Carrier Terms of Service & Consignment Conditions (Legal / Trust Checkpoint 8) */}
      <section id="terms" className="py-20 bg-slate-50 px-4 sm:px-6 lg:px-8 border-t border-slate-200 scroll-mt-20">
        <div className="max-w-5xl mx-auto space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-wider bg-orange-50 px-3 py-1 rounded-full border border-orange-200">
              Commercial Compliance & Governance
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-brand-navy">
              Carrier Terms & Consignment Conditions
            </h2>
            <p className="text-sm text-slate-600">
              Transparent, professional B2B transport terms governing all Lorry Receipts (LR), bill of lading, and freight contracts executed by VSJ Logistics Solution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-slate-700">
            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2.5">
              <h4 className="font-bold text-brand-navy text-base flex items-center gap-2">
                <FileText className="w-4 h-4 text-brand-orange" />
                1. Documentation & e-Way Bill Compliance
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Shippers are responsible for providing valid tax invoices, e-Way bills matching the designated vehicle number, and declarations. VSJ Logistics Solution ensures strict transit validity monitoring and updates Part-B of e-Way bills during transshipment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2.5">
              <h4 className="font-bold text-brand-navy text-base flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                2. Carrier Liability & Transit Insurance
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                All consignments are transported under standard Goods Carriage rules. Shippers are advised to maintain Marine/Transit Insurance policies. Carrier risk coverage is available on declared value basis upon prior written agreement.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2.5">
              <h4 className="font-bold text-brand-navy text-base flex items-center gap-2">
                <Clock className="w-4 h-4 text-brand-orange" />
                3. Loading & Detention SLA
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Vehicles placed at origin consignor premises are allotted up to 24 hours of free loading time. Detention charges apply beyond free hours as per vehicle tonnage bracket. Real-time GPS timestamps govern entry/exit logs.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-200 space-y-2.5">
              <h4 className="font-bold text-brand-navy text-base flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-orange" />
                4. Proof of Delivery (POD) & Payment
              </h4>
              <p className="text-xs leading-relaxed text-slate-600">
                Digital e-POD with receiver stamp and signature is uploaded to shipper portal within 6 hours of destination unlading. Physical original PODs are dispatched with commercial invoices adhering to contracted B2B credit periods.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Hub Map */}
      <section className="py-16 bg-slate-50 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h3 className="text-2xl font-bold text-brand-navy">Visit Our Naroda GIDC Phase 1 Depot</h3>
            <p className="text-sm text-slate-600">FF 06, Madhur Milan Estate, Phase 1, GIDC, Naroda, Ahmedabad - 382330</p>
          </div>
          <GoogleMapEmbed height="h-80 md:h-96" />
        </div>
      </section>
    </div>
  );
}
