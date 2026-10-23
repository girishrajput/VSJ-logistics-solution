import React from "react";
import Link from "next/link";
import { 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  Truck, 
  Clock, 
  ExternalLink,
  ChevronRight,
  Award,
  Navigation
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { CORE_SERVICES, AHMEDABAD_LOCATIONS, INDUSTRY_SECTORS, shortName } from "@/data/pages";
import { ROUTES } from "@/data/routes";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-slate-300 border-t-4 border-brand-orange">
      {/* Enterprise Credential & Trust Strip */}
      <div className="bg-brand-navy-dark py-8 px-4 border-b border-brand-navy-light/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-brand-orange/15 text-brand-orange flex items-center justify-center shrink-0 border border-brand-orange/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider">GST Registered Entity</h4>
              <p className="text-xs text-amber-300 font-mono mt-0.5">GSTIN: {COMPANY_INFO.gstNumber}</p>
              <p className="text-[11px] text-slate-400 mt-1">100% Tax Compliant & E-Way Bill Verified Logistics</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-blue-500/15 text-blue-400 flex items-center justify-center shrink-0 border border-blue-500/20">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider">Naroda GIDC Hub Base</h4>
              <p className="text-xs text-slate-300 mt-0.5">FF 06, Madhur Milan Estate, Phase 1</p>
              <p className="text-[11px] text-slate-400 mt-1">15-Min Positioning across Ahmedabad Industrial Estates</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider">24/7 Dispatch Control</h4>
              <p className="text-xs text-slate-300 mt-0.5">Active Fleet Tracking & Helpline</p>
              <p className="text-[11px] text-slate-400 mt-1">99.4% On-Time Scheduled Line-Haul Delivery</p>
            </div>
          </div>

          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center shrink-0 border border-amber-500/20">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-white text-sm font-bold uppercase tracking-wider">Leadership Oversight</h4>
              <p className="text-xs text-slate-300 mt-0.5">Directed by Vikas Kumar</p>
              <p className="text-[11px] text-slate-400 mt-1">Direct Commercial Accountability & Escalations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Directory */}
      <div className="max-w-7xl mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Company Profile & Visiting Card Details */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-brand-orange to-amber-600 flex items-center justify-center text-white shadow-md">
                <Truck className="w-5 h-5" />
              </div>
              <div>
                <span className="block text-xl font-black tracking-tight text-white leading-none">
                  VSJ <span className="text-brand-orange">LOGISTICS</span>
                </span>
                <span className="block text-xs font-semibold text-slate-400 uppercase mt-0.5">
                  Solution • Ahmedabad
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-md">
              VSJ Logistics Solution is Ahmedabad’s premier industrial road freight and supply chain provider. 
              Originating from our primary operational base in Naroda GIDC Phase 1, we deploy containerized 32ft MXL fleets, 
              heavy ODC hydraulic trailers, express surface cargo, and temperature-controlled logistics connecting 
              Gujarat’s manufacturing powerhouses with all commercial trade corridors across India.
            </p>

            {/* Direct Official Contact Card */}
            <div className="bg-brand-navy-dark/90 rounded-xl p-4 border border-brand-navy-light/40 space-y-3">
              <div className="flex items-start gap-2.5 text-xs">
                <MapPin className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
                <address className="not-italic text-slate-300">
                  <strong className="text-white">Registered Hub & Office:</strong><br />
                  {COMPANY_INFO.address.full}
                </address>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-brand-navy-light/30">
                <a 
                  href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                  className="flex items-center gap-2 text-xs text-slate-200 hover:text-brand-orange transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                  <span>{COMPANY_INFO.primaryPhone}</span>
                </a>
                <a 
                  href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                  className="flex items-center gap-2 text-xs text-slate-200 hover:text-brand-orange transition-colors"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span>{COMPANY_INFO.secondaryPhone}</span>
                </a>
              </div>

              <div className="pt-1 border-t border-brand-navy-light/30 flex items-center justify-between text-xs">
                <a 
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="flex items-center gap-1.5 text-slate-300 hover:text-brand-orange transition-colors"
                >
                  <Mail className="w-3.5 h-3.5 text-brand-orange" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
                <span className="text-amber-400 font-mono text-[11px] font-bold">
                  GST: {COMPANY_INFO.gstNumber}
                </span>
              </div>
            </div>
          </div>

          {/* Column 2: Core Freight Services (6 pages) */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-brand-navy-light pb-2 flex items-center justify-between">
              <span>Core Services</span>
              <span className="text-[10px] text-brand-orange">6 Offerings</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {CORE_SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link 
                    href={s.url}
                    className="hover:text-brand-orange transition-colors flex items-center gap-1.5 py-0.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-brand-orange/60 group-hover:translate-x-0.5 transition-transform" />
                    <span className="truncate">{shortName(s)}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white text-sm font-bold uppercase tracking-wider mt-6 mb-3 border-b border-brand-navy-light pb-2">
              Essential Tools
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/get-a-quote" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange/60" />
                  <span>Freight Rate Inquiry Form</span>
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange/60" />
                  <span>About Us & Fleet Profile</span>
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-brand-orange transition-colors flex items-center gap-1.5 py-0.5">
                  <ChevronRight className="w-3 h-3 text-brand-orange/60" />
                  <span>Contact & Naroda GIDC Map</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Ahmedabad GIDC Industrial Hubs (7 pages) */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-brand-navy-light pb-2 flex items-center justify-between">
              <span>Ahmedabad GIDC Hubs</span>
              <span className="text-[10px] text-amber-400">Hyper-Local</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {AHMEDABAD_LOCATIONS.map((loc) => (
                <li key={loc.slug}>
                  <Link 
                    href={loc.url}
                    className="hover:text-brand-orange transition-colors flex items-center gap-1.5 py-0.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-amber-400/60 group-hover:translate-x-0.5 transition-transform" />
                    <span className="truncate">{loc.heroBadge} ({shortName(loc)})</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Specialized Industry Sectors (4 pages) */}
          <div>
            <h4 className="text-white text-sm font-bold uppercase tracking-wider mb-4 border-b border-brand-navy-light pb-2 flex items-center justify-between">
              <span>Industry Verticals</span>
              <span className="text-[10px] text-blue-400">Enterprise</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {INDUSTRY_SECTORS.map((ind) => (
                <li key={ind.slug}>
                  <Link 
                    href={ind.url}
                    className="hover:text-brand-orange transition-colors flex items-center gap-1.5 py-0.5 group"
                  >
                    <ChevronRight className="w-3 h-3 text-blue-400/60 group-hover:translate-x-0.5 transition-transform" />
                    <span className="truncate">{shortName(ind)}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-white text-sm font-bold uppercase tracking-wider mt-8 mb-3 border-b border-brand-navy-light pb-2 flex items-center gap-1.5">
              <Navigation className="w-3.5 h-3.5 text-brand-orange" />
              <span>Popular Routes</span>
            </h4>
            <ul className="space-y-2 text-xs">
              {ROUTES.slice(0, 8).map((r) => (
                <li key={r.slug}>
                  <Link href={r.url} className="hover:text-brand-orange transition-colors flex items-center gap-1.5 py-0.5 group">
                    <ChevronRight className="w-3 h-3 text-amber-400/60 group-hover:translate-x-0.5 transition-transform" />
                    <span className="truncate">Ahmedabad to {r.destination}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/routes" className="text-brand-orange font-semibold hover:underline py-0.5 inline-block">
                  All routes →
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Areas we serve: plain-text locality list for local relevance */}
      <div className="border-t border-brand-navy-light/30 py-5 px-4">
        <p className="max-w-7xl mx-auto text-[11px] leading-relaxed text-slate-400">
          <strong className="text-slate-200">Areas we serve in and around Ahmedabad:</strong>{" "}
          {COMPANY_INFO.serviceAreas.join(" • ")}
        </p>
      </div>

      {/* Bottom Legal & Compliance Strip */}
      <div className="bg-brand-navy-dark py-5 px-4 border-t border-brand-navy-light/30 text-xs text-slate-400">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <p>
              © {new Date().getFullYear()} <strong className="text-white">VSJ Logistics Solution</strong>. All Rights Reserved. 
              Proprietorship / Enterprise Entity • GSTIN: <span className="text-amber-400 font-mono font-semibold">{COMPANY_INFO.gstNumber}</span>.
            </p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              Office: FF 06, Madhur Milan Estate, Phase 1, GIDC, Naroda, Ahmedabad - 382330, Gujarat, India.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-400">
            <Link href="/about-us#safety" className="hover:text-slate-200 transition-colors">Safety Standards</Link>
            <span>•</span>
            <Link href="/about-us#terms" className="hover:text-slate-200 transition-colors">Carrier Terms</Link>
            <span>•</span>
            <Link href="/contact-us#grievance" className="hover:text-slate-200 transition-colors">Grievance Officer: Vikas Kumar</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
