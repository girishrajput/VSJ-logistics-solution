import React from "react";
import { ShieldCheck, Navigation, Clock, Award, MapPin, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface TrustBadgesProps {
  className?: string;
  variant?: "horizontal" | "grid";
  showCredentialBar?: boolean;
}

export default function TrustBadges({ 
  className = "", 
  variant = "horizontal",
  showCredentialBar = true
}: TrustBadgesProps) {
  const badges = [
    {
      icon: ShieldCheck,
      title: "GST Verified Entity",
      subtitle: `GSTIN: ${COMPANY_INFO.gstNumber}`,
      color: "text-amber-500",
      bgColor: "bg-amber-50",
      borderColor: "border-amber-200",
    },
    {
      icon: Navigation,
      title: "100% GPS Enabled Fleet",
      subtitle: "Live Telematics & Geofencing",
      color: "text-blue-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Clock,
      title: "24/7 Dispatch Helpline",
      subtitle: "+91 8660567050 Operations",
      color: "text-emerald-500",
      bgColor: "bg-emerald-50",
      borderColor: "border-emerald-200",
    },
    {
      icon: Award,
      title: "99.4% On-Time SLA Guarantee",
      subtitle: "Zero Transshipment Damage",
      color: "text-brand-orange",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
  ];

  if (variant === "grid") {
    return (
      <div className={`space-y-4 ${className}`}>
        {showCredentialBar && (
          <div className="bg-brand-navy text-white text-xs py-3 px-4 rounded-2xl shadow-sm border border-brand-navy-light/40">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left">
              <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-5 gap-y-1.5">
                <span className="flex items-center gap-1.5 text-slate-200">
                  <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>FF 06, Madhur Milan Estate, Phase 1, GIDC, Naroda, Ahmedabad - 382330</span>
                </span>
                <span className="inline-flex items-center gap-1 bg-brand-navy-light/60 px-2.5 py-0.5 rounded text-amber-300 font-semibold border border-amber-400/20">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  GSTIN: {COMPANY_INFO.gstNumber}
                </span>
              </div>
              <div className="flex items-center justify-center gap-4 text-slate-200">
                <a 
                  href={`mailto:${COMPANY_INFO.email}`} 
                  className="flex items-center gap-1.5 hover:text-brand-orange transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <span className="text-slate-500">|</span>
                <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                  <Clock className="w-3.5 h-3.5" />
                  <span>24/7 Dispatch Control</span>
                </span>
              </div>
            </div>
          </div>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className={`p-4 rounded-xl border ${b.borderColor} ${b.bgColor} flex items-start gap-3.5 shadow-sm transition-all hover:shadow-md`}
              >
                <div className={`w-10 h-10 rounded-lg bg-white ${b.color} flex items-center justify-center shrink-0 shadow-sm border border-slate-100`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-800 uppercase tracking-tight">{b.title}</h4>
                  <p className="text-xs font-semibold text-slate-600 mt-0.5">{b.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className={`w-full ${className}`}>
      {/* Official Registered Credentials Strip (Relocated from Header) */}
      {showCredentialBar && (
        <div className="bg-brand-navy text-white text-xs py-2.5 px-4 border-b border-brand-navy-light/40">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 text-center md:text-left">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-6 gap-y-1.5">
              <span className="flex items-center gap-1.5 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>FF 06, Madhur Milan Estate, Phase 1, GIDC, Naroda, Ahmedabad - 382330</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-brand-navy-light/60 px-2.5 py-0.5 rounded text-amber-300 font-semibold border border-amber-400/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                GSTIN: {COMPANY_INFO.gstNumber}
              </span>
            </div>

            <div className="flex items-center justify-center gap-4 text-slate-200">
              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="flex items-center gap-1.5 hover:text-brand-orange transition-colors min-h-[36px] py-1"
              >
                <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>{COMPANY_INFO.email}</span>
              </a>
              <span className="text-slate-500">|</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>24/7 Dispatch Control</span>
              </span>
            </div>
          </div>
        </div>
      )}

      {/* Trust Badges Strip */}
      <div className="w-full bg-slate-50 border-b border-slate-200 py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-around gap-4 md:gap-8">
          {badges.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div key={idx} className="flex items-center gap-2.5">
                <div className={`w-8 h-8 rounded-full ${b.bgColor} ${b.color} flex items-center justify-center shrink-0 border ${b.borderColor}`}>
                  <Icon className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <span className="block text-xs font-bold text-slate-800 leading-tight">{b.title}</span>
                  <span className="block text-[11px] text-slate-500 font-medium">{b.subtitle}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
