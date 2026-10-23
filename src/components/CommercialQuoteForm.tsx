"use client";

import React, { useState } from "react";
import { 
  Truck, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck,
  Send,
  Building2,
  FileText,
  Clock,
  AlertCircle
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface CommercialQuoteFormProps {
  initialOrigin?: string;
  initialService?: string;
  initialDestination?: string;
  className?: string;
}

const FLEET_SERVICES = [
  "Full Truckload (32ft MXL Container)",
  "Full Truckload (32ft SXL Container)",
  "20ft / 24ft Heavy Open Platform",
  "Part Truckload (PTL) Consolidated Cargo",
  "Heavy Machinery & Project Cargo (ODC)",
  "Warehouse & Contract Logistics",
  "Express Surface Cargo (Time-Critical)"
];

const AHMEDABAD_PICKUP_ZONES = [
  "Naroda GIDC Phase 1 (HQ Depot)",
  "Kathwada GIDC",
  "Odhav Industrial Estate",
  "Vatva GIDC (Chemical & Engineering)",
  "Narol Textile Cluster",
  "Changodar / Moraiya Logistics Corridor",
  "Sanand GIDC (Automotive Belt)",
  "Aslali Transport Hub (NH-48)",
  "Bavla / Dholka Industrial Zone",
  "Chhatral / Kalol GIDC",
  "Santej / Gandhinagar GIDC"
];

const MAJOR_DESTINATIONS = [
  "Mumbai / Bhiwandi Logistics Hub, Maharashtra",
  "Delhi NCR / Gurgaon / Faridabad Belt",
  "Pune / Chakan / Bhosari Industrial Belt",
  "Bengaluru / Peenya / Hosur Industrial Hub",
  "Hyderabad / Medchal / Shamshabad Corridor",
  "Chennai / Sriperumbudur Automotive Corridor",
  "Kolkata / Dankuni Eastern Regional Hub",
  "Jaipur / Vishwakarma Industrial Area",
  "Indore / Pithampur Auto Cluster",
  "Surat / Sachin / Hazira Industrial Belt",
  "Vadodara / Makarpura / Nandesari Belt",
  "Rajkot / Metoda / Shapar Veraval Foundry Belt",
  "Mundra / Kandla Seaport Container Terminals"
];

export default function CommercialQuoteForm({
  initialOrigin = "Naroda GIDC Phase 1 (HQ Depot)",
  initialService = "Full Truckload (32ft MXL Container)",
  initialDestination = "Mumbai / Bhiwandi Logistics Hub, Maharashtra",
  className = ""
}: CommercialQuoteFormProps) {
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [origin, setOrigin] = useState(initialOrigin);
  const [destination, setDestination] = useState(initialDestination);
  const [service, setService] = useState(initialService);
  const [weight, setWeight] = useState("");
  const [goodsNature, setGoodsNature] = useState("");
  const [notes, setNotes] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const cleanPhone = mobileNumber.replace(/[^0-9]/g, "");
    if (!contactPerson.trim()) {
      setErrorMessage("Please enter your name or contact person.");
      return;
    }
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number for dispatch updates.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setInquiryId(`VSJ-QT-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppMessageUrl = () => {
    const text = `*Commercial Freight Quotation Request - VSJ Logistics*%0A` +
      `*Inquiry Ref:* ${inquiryId}%0A` +
      `*Company:* ${companyName || "N/A"}%0A` +
      `*Contact Person:* ${contactPerson}%0A` +
      `*Mobile:* ${mobileNumber}%0A` +
      `*Email:* ${email || "N/A"}%0A` +
      `*Pickup Hub:* ${origin}%0A` +
      `*Delivery Hub:* ${destination}%0A` +
      `*Vehicle / Service:* ${service}%0A` +
      `*Weight / Volume:* ${weight || "To be discussed"}%0A` +
      `*Cargo Nature:* ${goodsNature || "General Commercial Freight"}%0A` +
      `*Notes:* ${notes || "None"}%0A` +
      `*Origin Desk:* Naroda GIDC Phase 1, Ahmedabad`;
    return `https://wa.me/918660567050?text=${text}`;
  };

  if (submitted) {
    return (
      <div className={`bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-10 text-center space-y-6 ${className}`}>
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold font-mono uppercase bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
            Inquiry Ref: {inquiryId}
          </span>
          <h3 className="text-2xl font-black text-brand-navy">Quotation Request Received!</h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Thank you, <strong className="text-brand-navy">{contactPerson}</strong>. Our Naroda GIDC Phase 1 operations desk has received your freight requirements for <strong className="text-brand-navy">{origin} to {destination}</strong>.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-5 text-left text-xs space-y-2 max-w-lg mx-auto">
          <div className="flex justify-between">
            <span className="text-slate-500 font-medium">Service / Fleet:</span>
            <span className="font-bold text-brand-navy">{service}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 font-medium">Contact Number:</span>
            <span className="font-bold text-brand-navy">{mobileNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500 font-medium">Response SLA:</span>
            <span className="font-bold text-emerald-600">Within 15 Minutes</span>
          </div>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
          <a
            href={getWhatsAppMessageUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Forward on WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
            className="w-full sm:w-auto flex-1 min-h-[48px] bg-brand-navy hover:bg-brand-navy-dark text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>Call Vikas Kumar</span>
          </a>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setCompanyName("");
              setContactPerson("");
              setMobileNumber("");
              setEmail("");
              setWeight("");
              setGoodsNature("");
              setNotes("");
            }}
            className="text-xs text-brand-orange font-bold hover:underline"
          >
            Submit Another Freight Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden ${className}`}>
      {/* Top Header */}
      <div className="bg-brand-navy p-6 sm:p-8 text-white border-b-2 border-brand-orange">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-brand-orange flex items-center justify-center text-white shadow-md shrink-0">
              <FileText className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Commercial Freight Quotation</h3>
              <p className="text-xs text-slate-300">Direct Naroda GIDC Phase 1 Dispatch Desk • Response in 15 Minutes</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5 rounded-full text-amber-300 font-mono border border-white/15 w-fit">
            <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
            GSTIN: {COMPANY_INFO.gstNumber}
          </span>
        </div>
      </div>

      {/* Form Content */}
      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Route Details */}
        <div className="space-y-4">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
            1. Shipment Route & Vehicle
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Pickup Location (Ahmedabad & Gujarat)
              </label>
              <select
                value={origin}
                onChange={(e) => setOrigin(e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange bg-slate-50 font-medium"
              >
                {AHMEDABAD_PICKUP_ZONES.map((zone) => (
                  <option key={zone} value={zone}>{zone}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Delivery Destination
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange bg-slate-50 font-medium"
              >
                {MAJOR_DESTINATIONS.map((dest) => (
                  <option key={dest} value={dest}>{dest}</option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Required Vehicle Type / Freight Service
            </label>
            <select
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange bg-slate-50 font-medium"
            >
              {FLEET_SERVICES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Cargo Details */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
            2. Cargo Specifications
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Approximate Weight / Volume
              </label>
              <input
                type="text"
                placeholder="e.g. 7.5 MT / 15 Tonnes / 500 Boxes"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Nature of Goods / Material
              </label>
              <input
                type="text"
                placeholder="e.g. Machinery, Textile Rolls, Chemicals, FMCG"
                value={goodsNature}
                onChange={(e) => setGoodsNature(e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>
          </div>
        </div>

        {/* Contact Details */}
        <div className="space-y-4 pt-4 border-t border-slate-200">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-wider block">
            3. Shipper & Dispatch Contact Details
          </span>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Company / Factory Name (Optional)
              </label>
              <input
                type="text"
                placeholder="e.g. Gujarat Engineering Ltd."
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Contact Person Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Rajesh Patel"
                value={contactPerson}
                onChange={(e) => setContactPerson(e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                required
                placeholder="e.g. 9876543210"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1.5">
                Email Address (Optional)
              </label>
              <input
                type="email"
                placeholder="e.g. logistics@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Specific Instructions / Date of Loading (Optional)
            </label>
            <textarea
              rows={2}
              placeholder="e.g. Urgent loading required tomorrow morning, need waterproof container."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full p-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
        </div>

        {/* Submit Button & Direct Call Bar */}
        <div className="pt-2 space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full min-h-[48px] bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-brand-orange/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
          >
            {isSubmitting ? (
              <span>Submitting Inquiry...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Submit Freight Quote Request</span>
              </>
            )}
          </button>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>Quotes provided in 15 mins during 08:00 AM – 09:00 PM</span>
            </span>
            <div className="flex items-center gap-3">
              <a
                href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                className="font-bold text-brand-navy hover:text-brand-orange"
              >
                Call: {COMPANY_INFO.primaryPhone}
              </a>
              <span>•</span>
              <a
                href={COMPANY_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-emerald-600 hover:underline"
              >
                WhatsApp Desk
              </a>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
