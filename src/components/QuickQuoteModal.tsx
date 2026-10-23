"use client";

import React, { useState, useEffect } from "react";
import { 
  X, 
  Truck, 
  MapPin, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  ShieldCheck,
  ArrowRight,
  AlertCircle,
  Loader2
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface QuickQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QuickQuoteModal({ isOpen, onClose }: QuickQuoteModalProps) {
  const [origin, setOrigin] = useState("Naroda GIDC Phase 1, Ahmedabad");
  const [destination, setDestination] = useState("Mumbai / Bhiwandi Logistics Hub, Maharashtra");
  const [service, setService] = useState("Full Truckload (32ft Container)");
  const [weight, setWeight] = useState("7.5 MT");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryId, setInquiryId] = useState("");

  // Close modal on Escape key press (a11y)
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!name.trim()) {
      setErrorMessage("Please enter your name or company contact person.");
      return;
    }
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number for dispatch updates.");
      return;
    }

    setIsSubmitting(true);
    // Simulate brief processing for realistic UX and loading feedback
    setTimeout(() => {
      setIsSubmitting(false);
      setInquiryId(`VSJ-REQ-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppLink = () => {
    const text = `*Quick Quote Request - VSJ Logistics*%0A` +
      `*Reference:* ${inquiryId}%0A` +
      `*Shipper:* ${name}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Service:* ${service}%0A` +
      `*From:* ${origin}%0A` +
      `*To:* ${destination}%0A` +
      `*Weight:* ${weight}`;
    return `https://wa.me/918660567050?text=${text}`;
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quick-quote-title"
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-brand-navy p-6 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-orange flex items-center justify-center text-white shrink-0 shadow-md">
              <Truck className="w-5 h-5" />
            </div>
            <div>
              <h3 id="quick-quote-title" className="text-lg font-bold">
                Get a Quick Freight Quote
              </h3>
              <p className="text-xs text-slate-300">Direct Naroda GIDC Phase 1 Operations Desk</p>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-colors min-h-[44px] min-w-[44px]"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <div className="space-y-1">
                <span className="text-xs font-mono font-bold bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                  Ref: {inquiryId}
                </span>
                <h4 className="text-xl font-bold text-slate-800 pt-2">Freight Inquiry Received!</h4>
                <p className="text-sm text-slate-600 leading-relaxed max-w-sm mx-auto">
                  Thank you, <strong>{name}</strong>. Vikas Kumar’s dispatch desk at Naroda GIDC Phase 1 has received your parameters. Our team will contact you within <strong>15 minutes</strong>.
                </p>
              </div>
              <div className="pt-2 flex flex-col gap-2.5">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-emerald-600 hover:bg-emerald-500 text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 min-h-[48px] shadow-md transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Confirm on WhatsApp: +91 8660567050</span>
                </a>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setName("");
                    setPhone("");
                    onClose();
                  }}
                  className="w-full bg-slate-100 hover:bg-slate-200 text-slate-700 py-3 rounded-xl font-semibold text-sm min-h-[44px] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              {/* Accessible Error Message Banner */}
              {errorMessage && (
                <div 
                  role="alert" 
                  className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold flex items-center gap-2"
                >
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-600" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <label htmlFor="modal-service" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                  Transportation Service
                </label>
                <select
                  id="modal-service"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-brand-orange min-h-[48px]"
                >
                  <option value="Full Truckload (32ft Container)">Full Truckload (32ft Container)</option>
                  <option value="Part Truckload (PTL Consolidation)">Part Truckload (PTL Consolidation)</option>
                  <option value="Open-Body Taurus / Platform (20-24ft)">Open-Body Taurus / Platform (20-24ft)</option>
                  <option value="Express Surface Line-Haul">Express Surface Line-Haul</option>
                  <option value="Industrial Heavy Machinery / ODC">Industrial Heavy Machinery / ODC</option>
                  <option value="Chemical & ADR Transport">Chemical & ADR Transport</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-origin" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Origin (Ahmedabad)
                  </label>
                  <input
                    id="modal-origin"
                    type="text"
                    value={origin}
                    onChange={(e) => setOrigin(e.target.value)}
                    placeholder="e.g. Naroda GIDC Phase 1"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-brand-orange min-h-[48px]"
                  />
                </div>
                <div>
                  <label htmlFor="modal-dest" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Destination
                  </label>
                  <input
                    id="modal-dest"
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="e.g. Bhiwandi, Mumbai"
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-brand-orange min-h-[48px]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Your Name *
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                    placeholder="e.g. Rahul Patel"
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-brand-orange min-h-[48px] ${
                      errorMessage && !name.trim() ? "border-red-500 bg-red-50/30" : "border-slate-300"
                    }`}
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                    Mobile Number *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => {
                      setPhone(e.target.value);
                      if (errorMessage) setErrorMessage("");
                    }}
                    placeholder="e.g. 9876543210"
                    className={`w-full bg-slate-50 border rounded-xl px-4 py-3 text-sm font-medium text-slate-800 outline-none focus:ring-2 focus:ring-brand-orange min-h-[48px] ${
                      errorMessage && phone.replace(/[^0-9]/g, "").length < 10 ? "border-red-500 bg-red-50/30" : "border-slate-300"
                    }`}
                  />
                </div>
              </div>

              <div className="pt-3 flex flex-col sm:flex-row gap-2.5">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-brand-orange hover:bg-brand-orange-dark text-white py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-brand-orange/20 min-h-[48px] transition-all disabled:opacity-75"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Checking Fleet...</span>
                    </>
                  ) : (
                    <>
                      <span>Submit For Instant Rate</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
                <a
                  href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                  className="bg-brand-navy hover:bg-brand-navy-light text-white px-5 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 min-h-[48px] transition-all"
                >
                  <Phone className="w-4 h-4 text-brand-orange" />
                  <span>Call {COMPANY_INFO.primaryPhone}</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
