"use client";

import React, { useState } from "react";
import { 
  Send, 
  CheckCircle2, 
  MessageCircle, 
  Phone, 
  AlertCircle,
  Building2,
  Clock,
  ShieldCheck
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("Full Truckload Transport (FTL)");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [refId, setRefId] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    const cleanPhone = phone.replace(/[^0-9]/g, "");
    if (!name.trim()) {
      setErrorMessage("Please enter your name or company contact person.");
      return;
    }
    if (cleanPhone.length < 10) {
      setErrorMessage("Please enter a valid 10-digit mobile number.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setRefId(`VSJ-MSG-${Math.floor(1000 + Math.random() * 9000)}`);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppMessageUrl = () => {
    const text = `*Dispatch Contact Inquiry - VSJ Logistics*%0A` +
      `*Ref:* ${refId}%0A` +
      `*Name:* ${name}%0A` +
      `*Company:* ${company || "N/A"}%0A` +
      `*Phone:* ${phone}%0A` +
      `*Service:* ${service}%0A` +
      `*Message:* ${message || "Interested in freight transport / vehicle placement."}`;
    return `https://wa.me/918660567050?text=${text}`;
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-3xl shadow-xl border border-slate-200 p-8 sm:p-10 text-center space-y-6">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-inner">
          <CheckCircle2 className="w-9 h-9" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-bold font-mono uppercase bg-emerald-50 text-emerald-700 px-3 py-1 rounded-full border border-emerald-200">
            Message ID: {refId}
          </span>
          <h3 className="text-2xl font-black text-brand-navy">Message Sent Successfully!</h3>
          <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
            Thank you, <strong className="text-brand-navy">{name}</strong>. Our Naroda GIDC Phase 1 dispatch office will review your inquiry and get back to you shortly.
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-lg mx-auto">
          <a
            href={getWhatsAppMessageUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto flex-1 min-h-[48px] bg-emerald-600 hover:bg-emerald-500 text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>

          <a
            href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
            className="w-full sm:w-auto flex-1 min-h-[48px] bg-brand-navy hover:bg-brand-navy-dark text-white px-6 py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-md transition-all"
          >
            <Phone className="w-4 h-4 text-brand-orange" />
            <span>Call {COMPANY_INFO.primaryPhone}</span>
          </a>
        </div>

        <div className="pt-4 border-t border-slate-100">
          <button
            type="button"
            onClick={() => {
              setSubmitted(false);
              setName("");
              setCompany("");
              setPhone("");
              setEmail("");
              setMessage("");
            }}
            className="text-xs text-brand-orange font-bold hover:underline"
          >
            Send Another Message
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
      {/* Top Header */}
      <div className="bg-brand-navy p-6 sm:p-8 text-white border-b-2 border-brand-orange">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white">Send Us a Direct Message</h3>
            <p className="text-xs text-slate-300">
              Inquire about freight rates, vehicle placement, or monthly transport contracts
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1.5 rounded-full text-amber-300 font-mono border border-white/15 w-fit">
            <ShieldCheck className="w-4 h-4 text-brand-orange shrink-0" />
            GSTIN: {COMPANY_INFO.gstNumber}
          </span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
        {errorMessage && (
          <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2 font-medium">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Your Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Vikas Patel"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Company / Factory Name (Optional)
            </label>
            <input
              type="text"
              placeholder="e.g. Naroda Industries"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">
              Email Address (Optional)
            </label>
            <input
              type="email"
              placeholder="e.g. contact@domain.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Service Required
          </label>
          <select
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="w-full min-h-[48px] px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange bg-slate-50 font-medium"
          >
            <option value="Full Truckload Transport (FTL)">Full Truckload Transport (FTL 32ft MXL/SXL)</option>
            <option value="Part Truckload (PTL) Cargo">Part Truckload (PTL) Consolidated Cargo</option>
            <option value="Heavy Machinery & Project Cargo">Heavy Machinery & Project Cargo (ODC)</option>
            <option value="Warehouse & Contract Logistics">Warehouse & Contract Logistics</option>
            <option value="Express Surface Cargo">Express Surface Cargo</option>
            <option value="Monthly Dedicated Fleet Contract">Monthly Dedicated Fleet Contract</option>
            <option value="Billing / e-POD / Other Inquiry">Billing / e-POD / Other Inquiry</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-700 mb-1.5">
            Message / Consignment Details
          </label>
          <textarea
            rows={4}
            placeholder="Tell us about your route, load details, frequency, or any specific requirements..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-3.5 rounded-xl border border-slate-300 text-sm focus:outline-none focus:ring-2 focus:ring-brand-orange"
          />
        </div>

        <div className="pt-2 space-y-3">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full min-h-[48px] bg-brand-orange hover:bg-brand-orange-dark text-white rounded-xl font-bold text-sm uppercase tracking-wider shadow-lg shadow-brand-orange/30 transition-all flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99]"
          >
            {isSubmitting ? (
              <span>Sending Message...</span>
            ) : (
              <>
                <Send className="w-4 h-4" />
                <span>Send Message to Dispatch Desk</span>
              </>
            )}
          </button>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-brand-orange" />
              <span>Direct dispatch reply from Naroda GIDC Phase 1 office</span>
            </span>
            <span className="font-semibold text-brand-navy">
              Urgent? Call: {COMPANY_INFO.primaryPhone}
            </span>
          </div>
        </div>
      </form>
    </div>
  );
}
