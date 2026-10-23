"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Truck, 
  MapPin, 
  Box, 
  Building2, 
  Phone, 
  Mail, 
  CheckCircle2, 
  ArrowRight, 
  RotateCcw,
  ShieldCheck,
  MessageCircle,
  Clock,
  AlertCircle,
  Loader2
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

const ORIGIN_OPTIONS = [
  "Naroda GIDC Phase 1, Ahmedabad (HQ Hub)",
  "Naroda GIDC Phase 2 & Muthiya, Ahmedabad",
  "Vatva GIDC Phase 1-4, Ahmedabad",
  "Sanand Auto Hub / GIDC 1 & 2, Ahmedabad",
  "Changodar & Moraiya Industrial Zone, Ahmedabad",
  "Odhav & Kathwada GIDC, Ahmedabad",
  "Aslali Highway Transport Corridor, Ahmedabad",
  "Bavla & Dholka Agro/Pharma Zone, Ahmedabad",
  "Narol & Danilimda Textile Belt, Ahmedabad",
  "Chhatral & Kalol GIDC, Gandhinagar District",
  "Gandhinagar GIDC Sectors 25 / 26 / 28"
];

const DEST_OPTIONS = [
  "Mumbai / Bhiwandi Logistics Hub, Maharashtra",
  "Pune / Chakan / Bhosari Auto Corridor, Maharashtra",
  "Delhi NCR / Gurgaon / Manesar / Faridabad",
  "Bengaluru / Peenya / Hosur Corridor, Karnataka",
  "Hyderabad / Cherlapally / Patancheru, Telangana",
  "Chennai / Sriperumbudur / Oragadam, Tamil Nadu",
  "Kolkata / Dankuni Transshipment Hub, West Bengal",
  "Indore / Pithampur Auto Cluster, Madhya Pradesh",
  "Jaipur / Vishwakarma / Sitapura, Rajasthan",
  "Surat / Sachin / Pandesara Textile & Diamond Belt",
  "Vadodara / Makarpura / Savli, Gujarat",
  "Vapi / Umbergaon / Sarigam Industrial Area",
  "Rajkot / Metoda / Shapar Veraval Foundry Belt",
  "Mundra / Kandla Seaport Container Terminals"
];

interface QuoteCalculatorProps {
  initialOrigin?: string;
  initialService?: string;
  initialDestination?: string;
  className?: string;
}

export default function QuoteCalculator({ 
  initialOrigin = "Naroda GIDC Phase 1, Ahmedabad (HQ Hub)", 
  initialService = "Full Truckload (32ft Container)",
  initialDestination = "Mumbai / Bhiwandi Logistics Hub, Maharashtra",
  className = "" 
}: QuoteCalculatorProps) {
  const [step, setStep] = useState(1);
  const [cargoType, setCargoType] = useState(initialService);
  const [origin, setOrigin] = useState(initialOrigin);
  const [destination, setDestination] = useState(initialDestination);
  const [weight, setWeight] = useState("7.5");
  const [weightUnit, setWeightUnit] = useState<"MT" | "KG">("MT");
  const [lengthFt, setLengthFt] = useState("32");
  const [widthFt, setWidthFt] = useState("8");
  const [heightFt, setHeightFt] = useState("8.5");
  const [goodsNature, setGoodsNature] = useState("General Industrial Machinery & Parts");
  
  // Contact details
  const [companyName, setCompanyName] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [inquiryId, setInquiryId] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Estimation calculation
  const getEstimatedMetrics = () => {
    let baseRate = 22000;
    let transitHours = "20 - 24 Hours";

    if (destination.includes("Mumbai") || destination.includes("Bhiwandi") || destination.includes("Surat")) {
      baseRate = 24000;
      transitHours = "18 - 22 Hours";
    } else if (destination.includes("Delhi") || destination.includes("NCR") || destination.includes("Gurgaon")) {
      baseRate = 38000;
      transitHours = "28 - 34 Hours";
    } else if (destination.includes("Bengaluru") || destination.includes("Chennai") || destination.includes("Hyderabad")) {
      baseRate = 62000;
      transitHours = "48 - 56 Hours";
    } else if (destination.includes("Kolkata")) {
      baseRate = 74000;
      transitHours = "60 - 72 Hours";
    } else if (destination.includes("Pune")) {
      baseRate = 28000;
      transitHours = "24 - 28 Hours";
    }

    const weightNum = parseFloat(weight) || 0;
    if (weightNum <= 0) {
      return {
        minCost: 0,
        maxCost: 0,
        transit: "Custom Quotation Required",
        isEmpty: true
      };
    }

    const factor = weightUnit === "MT" ? Math.max(1, weightNum / 5) : Math.max(0.2, weightNum / 2000);
    const estimatedCost = Math.round(baseRate * factor);

    return {
      minCost: Math.round(estimatedCost * 0.9),
      maxCost: Math.round(estimatedCost * 1.15),
      transit: transitHours,
      isEmpty: false
    };
  };

  const metrics = getEstimatedMetrics();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const cleanPhone = mobileNumber.replace(/[^0-9]/g, "");
    if (!contactPerson.trim()) {
      setErrorMessage("Please enter the contact person or dispatcher name.");
      return;
    }
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number for consignment updates.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setInquiryId(`VSJ-LR-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppMessage = () => {
    const text = `*New Freight Rate Inquiry - VSJ Logistics Solution*%0A%0A` +
      `*Shipper:* ${contactPerson} (${companyName || "Industrial Client"})%0A` +
      `*Phone:* ${mobileNumber}%0A` +
      `*Service:* ${cargoType}%0A` +
      `*Origin:* ${origin}%0A` +
      `*Destination:* ${destination}%0A` +
      `*Cargo:* ${goodsNature} (${weight} ${weightUnit})%0A` +
      `*Est. Bracket:* ₹${metrics.minCost.toLocaleString()} - ₹${metrics.maxCost.toLocaleString()}%0A` +
      `*GST:* ${gstNumber || "Not Provided"}`;
    return `https://wa.me/918660567050?text=${text}`;
  };

  return (
    <div className={`bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden ${className}`} id="quote-calculator">
      {/* Top Header */}
      <div className="bg-brand-navy p-6 sm:p-7 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-brand-orange flex items-center justify-center text-white shadow-md shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold">Instant Freight Rate & Capacity Estimator</h3>
              <p className="text-xs text-slate-300">Direct Naroda GIDC Phase 1 Operations Desk • Fast B2B Quotes</p>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1 rounded-full text-amber-300 font-mono">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
            GSTIN: {COMPANY_INFO.gstNumber}
          </span>
        </div>

        {/* Step Indicators */}
        <div className="grid grid-cols-3 gap-2.5 mt-6">
          {[
            { num: 1, label: "1. Route & Service" },
            { num: 2, label: "2. Cargo Details" },
            { num: 3, label: "3. Estimate & Contact" },
          ].map((s) => (
            <div
              key={s.num}
              onClick={() => s.num < step && setStep(s.num)}
              className={`flex items-center justify-center sm:justify-start gap-2 cursor-pointer pb-2 border-b-2 text-xs font-bold transition-all ${
                step === s.num
                  ? "border-brand-orange text-brand-orange"
                  : step > s.num
                  ? "border-emerald-400 text-emerald-300"
                  : "border-white/20 text-white/50"
              }`}
            >
              <span className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                step === s.num ? "bg-brand-orange text-white" : step > s.num ? "bg-emerald-500 text-white" : "bg-white/20 text-white"
              }`}>
                {s.num}
              </span>
              <span className="hidden sm:inline truncate">{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Form Body with Airy Padding */}
      <div className="p-6 sm:p-8">
        {submitted ? (
          <div className="text-center py-8 space-y-5 animate-in fade-in zoom-in-95 duration-300">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                Booking Reference: {inquiryId}
              </span>
              <h4 className="text-2xl font-bold text-slate-800 pt-2">Inquiry Logged Successfully!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you, <strong className="text-slate-800">{contactPerson}</strong>. Vikas Kumar’s dispatch control team at Naroda GIDC Phase 1 has received your freight inquiry for <strong>{origin}</strong> to <strong>{destination}</strong>. Our fleet coordinator will call you within 15 minutes.
              </p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 max-w-md mx-auto text-left text-sm space-y-2.5">
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold text-slate-800">{cargoType}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Indicative Rate:</span>
                <span className="font-bold text-brand-orange text-base">₹{metrics.minCost.toLocaleString()} – ₹{metrics.maxCost.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Estimated Transit:</span>
                <span className="font-semibold text-slate-800">{metrics.transit}</span>
              </div>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={getWhatsAppMessage()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Instant WhatsApp Confirmation</span>
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStep(1);
                  setContactPerson("");
                  setMobileNumber("");
                }}
                className="w-full sm:w-auto min-h-[48px] bg-slate-100 hover:bg-slate-200 text-slate-700 px-5 py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-1.5 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Calculate Another Shipment</span>
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Step 1: Pickup / Drop Locations & Transportation Service */}
            {step === 1 && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="service-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Select Transportation Mode
                  </label>
                  <select
                    id="service-select"
                    value={cargoType}
                    onChange={(e) => setCargoType(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 outline-none focus:ring-2 focus:ring-brand-orange min-h-[48px]"
                  >
                    <option value="Full Truckload (32ft Container)">Full Truckload (32ft Container MXL/SXL)</option>
                    <option value="Part Truckload (PTL / LTL)">Part Truckload (PTL / LTL Scheduled Consolidation)</option>
                    <option value="Open-Body Taurus / Platform (20-24ft)">Open-Body Taurus / Platform (20-24ft Heavy)</option>
                    <option value="Express Surface Line-Haul">Express Surface Line-Haul (Time-Definite Dual-Driver)</option>
                    <option value="Industrial Project ODC / Trailer">Industrial Project ODC / Trailer (Hydraulic Axles)</option>
                    <option value="Chemical & ADR Liquid Logistics">Chemical & ADR Liquid Logistics (CMVR Compliant)</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Origin */}
                  <div>
                    <label htmlFor="origin-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-brand-orange shrink-0" />
                      <span>Origin Hub / Ahmedabad Industrial Estate</span>
                    </label>
                    <select
                      id="origin-select"
                      value={origin}
                      onChange={(e) => setOrigin(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-brand-orange outline-none min-h-[48px]"
                    >
                      {!ORIGIN_OPTIONS.includes(initialOrigin) && <option value={initialOrigin}>{initialOrigin}</option>}
                      {ORIGIN_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <p className="text-xs text-slate-500 mt-1.5">
                      Staged directly from FF 06, Madhur Milan Estate, Naroda Phase 1.
                    </p>
                  </div>

                  {/* Destination */}
                  <div>
                    <label htmlFor="dest-select" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Destination City / Industrial Cluster</span>
                    </label>
                    <select
                      id="dest-select"
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-brand-orange outline-none min-h-[48px]"
                    >
                      {!DEST_OPTIONS.includes(initialDestination) && <option value={initialDestination}>{initialDestination}</option>}
                      {DEST_OPTIONS.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <p className="text-xs text-slate-500 mt-1.5">
                      Full Pan-India route connectivity with GPS telematics.
                    </p>
                  </div>
                </div>

                <div className="pt-3 flex justify-end">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="min-h-[48px] bg-brand-navy hover:bg-brand-navy-light text-white px-7 py-3 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
                  >
                    <span>Next: Cargo Details</span>
                    <ArrowRight className="w-4 h-4 text-brand-orange" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 2: Cargo Weight, Dimensions & Nature */}
            {step === 2 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  {/* Weight */}
                  <div>
                    <label htmlFor="weight-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Cargo Weight
                    </label>
                    <div className="flex rounded-xl overflow-hidden border border-slate-300 min-h-[48px]">
                      <input
                        id="weight-input"
                        type="number"
                        step="0.1"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-full bg-slate-50 px-4 py-3 text-sm text-slate-800 font-semibold outline-none"
                        placeholder="e.g. 7.5"
                      />
                      <select
                        value={weightUnit}
                        onChange={(e) => setWeightUnit(e.target.value as "MT" | "KG")}
                        className="bg-slate-200 text-slate-800 px-3 text-xs font-bold outline-none border-l border-slate-300"
                      >
                        <option value="MT">MT (Tonnes)</option>
                        <option value="KG">KG</option>
                      </select>
                    </div>
                  </div>

                  {/* Goods Description */}
                  <div className="md:col-span-2">
                    <label htmlFor="goods-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                      Description of Commercial Goods
                    </label>
                    <input
                      id="goods-input"
                      type="text"
                      value={goodsNature}
                      onChange={(e) => setGoodsNature(e.target.value)}
                      placeholder="e.g. Textile Denim Rolls, Pharma APIs, CNC Lathe, Packaged Chemicals"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm text-slate-800 font-medium focus:ring-2 focus:ring-brand-orange outline-none min-h-[48px]"
                    />
                  </div>
                </div>

                {/* Dimensions */}
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                    Estimated Dimensions (Length x Width x Height in Feet)
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <span className="block text-xs text-slate-500 mb-1">Length (ft)</span>
                      <input
                        type="number"
                        value={lengthFt}
                        onChange={(e) => setLengthFt(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm font-medium min-h-[44px]"
                      />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 mb-1">Width (ft)</span>
                      <input
                        type="number"
                        value={widthFt}
                        onChange={(e) => setWidthFt(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm font-medium min-h-[44px]"
                      />
                    </div>
                    <div>
                      <span className="block text-xs text-slate-500 mb-1">Height (ft)</span>
                      <input
                        type="number"
                        value={heightFt}
                        onChange={(e) => setHeightFt(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3 py-2.5 text-sm font-medium min-h-[44px]"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex justify-between items-center">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="min-h-[44px] text-sm font-semibold text-slate-600 hover:text-slate-800 px-4"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={() => setStep(3)}
                    className="min-h-[48px] bg-brand-navy hover:bg-brand-navy-light text-white px-7 py-3 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all"
                  >
                    <span>Next: Get Rate Estimate</span>
                    <ArrowRight className="w-4 h-4 text-brand-orange" />
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: Estimate Preview & Shipper Contact Info */}
            {step === 3 && (
              <div className="space-y-6">
                {/* Rate Callout or Empty State */}
                {metrics.isEmpty ? (
                  <div className="bg-amber-50 rounded-2xl p-5 border border-amber-300 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-xs font-bold uppercase tracking-wider text-amber-800 flex items-center gap-1.5">
                        <AlertCircle className="w-4 h-4 text-amber-600" />
                        Custom / Over-Dimensional Freight Assessment Required
                      </span>
                      <p className="text-sm text-slate-700">
                        Zero or non-standard weight specified. For heavy machinery (ODC) or specialized chemical cargo, our operations desk provides tailored vehicle allocation and bridge clearances.
                      </p>
                    </div>
                    <a
                      href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                      className="min-h-[48px] bg-brand-navy hover:bg-brand-navy-light text-white px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 flex items-center gap-2"
                    >
                      <Phone className="w-4 h-4 text-brand-orange" />
                      <span>Speak with Vikas Kumar</span>
                    </a>
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-2xl p-5 border border-brand-orange/30 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-orange">
                        Indicative Freight Bracket (Door-to-Door)
                      </span>
                      <div className="text-2xl font-black text-brand-navy mt-1">
                        ₹{metrics.minCost.toLocaleString()} – ₹{metrics.maxCost.toLocaleString()}*
                      </div>
                      <p className="text-xs text-slate-600 mt-1 flex items-center gap-1.5">
                        <Clock className="w-4 h-4 text-brand-orange shrink-0" />
                        Estimated Transit Time: <strong>{metrics.transit}</strong>
                      </p>
                    </div>

                    <div className="text-right text-xs text-slate-500">
                      <span>*Subject to diesel index & GST</span><br />
                      <span className="font-semibold text-brand-navy">Includes GPS tracking & 24/7 dispatch desk</span>
                    </div>
                  </div>
                )}

                {/* Accessible Error Message Banner */}
                {errorMessage && (
                  <div 
                    role="alert" 
                    className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Shipper Details */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="company-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Company / Shipper Name
                    </label>
                    <input
                      id="company-name"
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="e.g. Gujarat Polymer Industries Ltd."
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-brand-orange outline-none min-h-[48px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="contact-person" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Contact Person *
                    </label>
                    <input
                      id="contact-person"
                      type="text"
                      required
                      value={contactPerson}
                      onChange={(e) => {
                        setContactPerson(e.target.value);
                        if (errorMessage) setErrorMessage("");
                      }}
                      placeholder="e.g. Ramesh Patel"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-brand-orange outline-none min-h-[48px] ${
                        errorMessage && !contactPerson.trim() ? "border-red-500 bg-red-50/30" : "border-slate-300"
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="mobile-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Mobile Number (Click-to-Call) *
                    </label>
                    <input
                      id="mobile-input"
                      type="tel"
                      required
                      value={mobileNumber}
                      onChange={(e) => {
                        setMobileNumber(e.target.value);
                        if (errorMessage) setErrorMessage("");
                      }}
                      placeholder="e.g. 9876543210"
                      className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-brand-orange outline-none min-h-[48px] ${
                        errorMessage && mobileNumber.replace(/[^0-9]/g, "").length < 10 ? "border-red-500 bg-red-50/30" : "border-slate-300"
                      }`}
                    />
                  </div>

                  <div>
                    <label htmlFor="gstin-input" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                      Shipper GST Number (Optional)
                    </label>
                    <input
                      id="gstin-input"
                      type="text"
                      value={gstNumber}
                      onChange={(e) => setGstNumber(e.target.value)}
                      placeholder="e.g. 24XXXXX0000X1Z5"
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium focus:ring-2 focus:ring-brand-orange outline-none uppercase font-mono min-h-[48px]"
                    />
                  </div>
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="min-h-[44px] text-sm font-semibold text-slate-600 hover:text-slate-800"
                  >
                    Back to Cargo Details
                  </button>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <a
                      href={getWhatsAppMessage()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/20 transition-colors"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>WhatsApp Quote</span>
                    </a>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 sm:flex-none min-h-[48px] bg-brand-orange hover:bg-brand-orange-dark text-white px-7 py-3 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-brand-orange/20 transition-all disabled:opacity-75"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          <span>Routing Fleet...</span>
                        </>
                      ) : (
                        <>
                          <Truck className="w-4 h-4" />
                          <span>Submit Inquiry</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
