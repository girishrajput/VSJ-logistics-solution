import React from "react";
import { ShieldCheck, Navigation, Clock, Award, CheckCircle2, Truck } from "lucide-react";
import { COMPANY_INFO } from "@/data/company";

interface TrustBadgesProps {
  className?: string;
  variant?: "horizontal" | "grid";
}

export default function TrustBadges({ className = "", variant = "horizontal" }: TrustBadgesProps) {
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
      <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 ${className}`}>
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
    );
  }

  return (
    <div className={`w-full bg-slate-50 border-y border-slate-200 py-4 px-4 ${className}`}>
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
  );
}
