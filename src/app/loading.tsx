import React from "react";
import { Truck } from "lucide-react";

export default function Loading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[60vh] bg-white flex flex-col items-center justify-center px-4 py-16"
    >
      <div className="relative flex items-center justify-center mb-6">
        {/* Outer glowing pulsing ring */}
        <div className="w-20 h-20 rounded-full border-4 border-slate-100 border-t-brand-orange animate-spin"></div>
        {/* Central icon */}
        <div className="absolute w-12 h-12 rounded-xl bg-brand-navy flex items-center justify-center text-brand-orange shadow-md">
          <Truck className="w-6 h-6 animate-pulse" />
        </div>
      </div>

      <div className="text-center space-y-2">
        <h2 className="text-base font-bold text-brand-navy tracking-tight">
          Loading Freight Intelligence & Fleet Status
        </h2>
        <p className="text-xs text-slate-500 font-medium">
          VSJ Logistics Solution • Naroda GIDC Phase 1, Ahmedabad
        </p>
      </div>

      <span className="sr-only">Loading page content, please wait...</span>
    </div>
  );
}
