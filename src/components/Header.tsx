"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ChevronDown, 
  Truck, 
  ShieldCheck, 
  Clock, 
  FileText
} from "lucide-react";
import { COMPANY_INFO } from "@/data/company";
import { CORE_SERVICES, AHMEDABAD_LOCATIONS, INDUSTRY_SECTORS, shortName } from "@/data/pages";
import QuickQuoteModal from "./QuickQuoteModal";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [locationsOpen, setLocationsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  // Lock body scroll and listen for Escape key when mobile menu is open (a11y)
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
        setServicesOpen(false);
        setLocationsOpen(false);
        setIndustriesOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header className="w-full bg-white shadow-sm sticky top-0 z-50 border-b border-slate-200">
        {/* Top Notification & Credential Bar */}
        <div className="bg-brand-navy text-white text-xs py-2.5 px-4 border-b border-brand-navy-light/40">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-1 justify-center md:justify-start">
              <span className="flex items-center gap-1.5 text-slate-200">
                <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span>FF 06, Madhur Milan Estate, Phase 1, GIDC, Naroda, Ahmedabad - 382330</span>
              </span>
              <span className="inline-flex items-center gap-1 bg-brand-navy-light/60 px-2.5 py-0.5 rounded text-amber-300 font-semibold border border-amber-400/20">
                <ShieldCheck className="w-3.5 h-3.5" />
                GSTIN: {COMPANY_INFO.gstNumber}
              </span>
            </div>

            <div className="flex items-center gap-4 text-slate-200">
              <a 
                href={`mailto:${COMPANY_INFO.email}`} 
                className="flex items-center gap-1.5 hover:text-brand-orange transition-colors min-h-[36px] py-1"
              >
                <Mail className="w-3.5 h-3.5 text-brand-orange shrink-0" />
                <span className="hidden sm:inline">{COMPANY_INFO.email}</span>
              </a>
              <span className="text-slate-500">|</span>
              <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
                <Clock className="w-3.5 h-3.5" />
                <span>24/7 Dispatch Control</span>
              </span>
            </div>
          </div>
        </div>

        {/* Main Navigation Bar */}
        <nav className="max-w-7xl mx-auto px-4 py-2 sm:py-2.5 flex items-center justify-between" aria-label="Main Navigation">
          {/* Brand Logo with Increased Image Size */}
          <Link href="/" className="flex items-center gap-3.5 group min-h-[48px] py-1">
            <div className="relative h-14 sm:h-18 md:h-20 lg:h-22 w-auto flex items-center">
              <Image 
                src="/logo.png" 
                alt="VSJ Logistics Solution Logo" 
                width={320} 
                height={139} 
                className="h-14 sm:h-18 md:h-20 lg:h-22 w-auto object-contain transition-transform group-hover:scale-105" 
                priority
              />
            </div>
            <div className="hidden sm:block">
              <span className="block text-xl md:text-2xl font-black tracking-tight text-brand-navy leading-none">
                VSJ <span className="text-brand-orange">LOGISTICS</span>
              </span>
              <span className="block text-[10px] md:text-xs font-semibold tracking-wider text-slate-500 uppercase mt-1">
                Solution • Ahmedabad
              </span>
            </div>
          </Link>

          {/* Desktop Menu Links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-4">
            <Link 
              href="/" 
              className="text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors min-h-[48px] flex items-center"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors min-h-[48px]"
                aria-expanded={servicesOpen}
              >
                Services
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-orange transition-transform group-hover:rotate-180" />
              </button>
              
              {servicesOpen && (
                <div className="absolute left-0 top-full w-88 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    Core Freight Solutions
                  </div>
                  {CORE_SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={s.url}
                      className="px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-orange flex items-center justify-between transition-colors min-h-[40px]"
                    >
                      <span className="font-semibold">{shortName(s)}</span>
                      <span className="text-[10px] bg-slate-100 text-slate-600 px-2 py-0.5 rounded font-mono">
                        {s.heroBadge}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Ahmedabad Hubs Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setLocationsOpen(true)}
              onMouseLeave={() => setLocationsOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors min-h-[48px]"
                aria-expanded={locationsOpen}
              >
                Ahmedabad Hubs
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-orange transition-transform group-hover:rotate-180" />
              </button>
              
              {locationsOpen && (
                <div className="absolute left-0 top-full w-92 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 flex items-center justify-between">
                    <span>Industrial GIDC Belts</span>
                    <span className="text-[10px] text-brand-orange font-normal">Hyper-Local</span>
                  </div>
                  {AHMEDABAD_LOCATIONS.map((loc) => (
                    <Link
                      key={loc.slug}
                      href={loc.url}
                      className="px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-orange flex items-center justify-between transition-colors min-h-[40px]"
                    >
                      <span className="font-semibold truncate">{shortName(loc)}</span>
                      <span className="text-[10px] bg-amber-50 text-amber-800 border border-amber-200 px-2 py-0.5 rounded">
                        {loc.heroBadge}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Industries Dropdown */}
            <div 
              className="relative group py-2"
              onMouseEnter={() => setIndustriesOpen(true)}
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              <button 
                type="button"
                className="flex items-center gap-1 text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors min-h-[48px]"
                aria-expanded={industriesOpen}
              >
                Industries
                <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-brand-orange transition-transform group-hover:rotate-180" />
              </button>
              
              {industriesOpen && (
                <div className="absolute left-0 top-full w-84 bg-white rounded-2xl shadow-xl border border-slate-200 p-3 grid gap-1 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  <div className="px-3 py-2 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100">
                    Manufacturing Sectors
                  </div>
                  {INDUSTRY_SECTORS.map((ind) => (
                    <Link
                      key={ind.slug}
                      href={ind.url}
                      className="px-3.5 py-2.5 rounded-xl text-xs font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-orange flex items-center justify-between transition-colors min-h-[40px]"
                    >
                      <span className="font-semibold">{shortName(ind)}</span>
                      <span className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded">
                        {ind.heroBadge}
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/routes"
              className="text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors min-h-[48px] flex items-center"
            >
              Routes
            </Link>

            <Link 
              href="/about-us" 
              className="text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors min-h-[48px] flex items-center"
            >
              About Us
            </Link>
            <Link 
              href="/contact-us" 
              className="text-sm font-semibold text-slate-700 hover:text-brand-orange transition-colors min-h-[48px] flex items-center"
            >
              Contact
            </Link>
          </div>

          {/* Right Action Cluster */}
          <div className="hidden lg:flex items-center">
            {/* Get Quote CTA Button (min 48px) */}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="bg-brand-orange hover:bg-brand-orange-dark text-white px-5 py-3 rounded-xl font-bold text-xs uppercase tracking-wider shadow-md shadow-brand-orange/20 hover:shadow-brand-orange/30 transition-all flex items-center gap-2 min-h-[48px]"
            >
              <FileText className="w-4 h-4" />
              <span>Get Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Button (min 48px target) */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-3 text-slate-700 hover:text-brand-navy rounded-xl hover:bg-slate-100 min-h-[48px] min-w-[48px] flex items-center justify-center"
            aria-label="Toggle Mobile Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6 text-brand-navy" />}
          </button>
        </nav>

        {/* Mobile Smooth Drawer Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-5 pt-4 pb-8 max-h-[85vh] overflow-y-auto animate-in fade-in slide-in-from-top-3 duration-200">
            <div className="grid gap-2 text-base font-semibold text-slate-800">
              <Link 
                href="/" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-3 px-3 rounded-xl hover:bg-slate-50 min-h-[48px] flex items-center"
              >
                Home
              </Link>

              {/* Mobile Services Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button 
                  type="button"
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className="w-full flex items-center justify-between py-3 px-3 rounded-xl hover:bg-slate-50 text-left font-semibold min-h-[48px]"
                >
                  <span>Core Services</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${servicesOpen ? "rotate-180 text-brand-orange" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 pr-2 py-2 grid gap-1.5 bg-slate-50 rounded-xl mt-1">
                    {CORE_SERVICES.map((s) => (
                      <Link
                        key={s.slug}
                        href={s.url}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-2.5 px-2 text-sm text-slate-700 hover:text-brand-orange min-h-[44px] flex items-center"
                      >
                        • {shortName(s)}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Locations Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button 
                  type="button"
                  onClick={() => setLocationsOpen(!locationsOpen)}
                  className="w-full flex items-center justify-between py-3 px-3 rounded-xl hover:bg-slate-50 text-left font-semibold min-h-[48px]"
                >
                  <span>Ahmedabad Industrial Hubs</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${locationsOpen ? "rotate-180 text-brand-orange" : ""}`} />
                </button>
                {locationsOpen && (
                  <div className="pl-4 pr-2 py-2 grid gap-1.5 bg-slate-50 rounded-xl mt-1">
                    {AHMEDABAD_LOCATIONS.map((loc) => (
                      <Link
                        key={loc.slug}
                        href={loc.url}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-2.5 px-2 text-sm text-slate-700 hover:text-brand-orange min-h-[44px] flex items-center"
                      >
                        • {loc.heroBadge} ({shortName(loc)})
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Industries Accordion */}
              <div className="border-b border-slate-100 pb-2">
                <button 
                  type="button"
                  onClick={() => setIndustriesOpen(!industriesOpen)}
                  className="w-full flex items-center justify-between py-3 px-3 rounded-xl hover:bg-slate-50 text-left font-semibold min-h-[48px]"
                >
                  <span>Industry Verticals</span>
                  <ChevronDown className={`w-5 h-5 transition-transform ${industriesOpen ? "rotate-180 text-brand-orange" : ""}`} />
                </button>
                {industriesOpen && (
                  <div className="pl-4 pr-2 py-2 grid gap-1.5 bg-slate-50 rounded-xl mt-1">
                    {INDUSTRY_SECTORS.map((ind) => (
                      <Link
                        key={ind.slug}
                        href={ind.url}
                        onClick={() => setMobileMenuOpen(false)}
                        className="py-2.5 px-2 text-sm text-slate-700 hover:text-brand-orange min-h-[44px] flex items-center"
                      >
                        • {ind.heroBadge}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/routes"
                onClick={() => setMobileMenuOpen(false)}
                className="py-3 px-3 rounded-xl hover:bg-slate-50 min-h-[48px] flex items-center"
              >
                Truck Routes from Ahmedabad
              </Link>
              <Link 
                href="/about-us" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-3 px-3 rounded-xl hover:bg-slate-50 min-h-[48px] flex items-center"
              >
                About Us (Vikas Kumar Leadership)
              </Link>
              <Link 
                href="/contact-us" 
                onClick={() => setMobileMenuOpen(false)} 
                className="py-3 px-3 rounded-xl hover:bg-slate-50 min-h-[48px] flex items-center"
              >
                Contact & Naroda GIDC Map
              </Link>

              {/* Mobile Quick Action Buttons */}
              <div className="pt-4 grid gap-3">
                <button
                  type="button"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setModalOpen(true);
                  }}
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white text-center py-3.5 rounded-xl font-bold text-sm uppercase tracking-wider min-h-[48px] shadow-md shadow-brand-orange/20"
                >
                  Request Instant Freight Quote
                </button>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${COMPANY_INFO.primaryPhoneRaw}`}
                    className="bg-brand-navy text-white text-center py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 min-h-[48px]"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>Call Primary</span>
                  </a>
                  <a
                    href={`tel:${COMPANY_INFO.secondaryPhoneRaw}`}
                    className="bg-slate-100 text-slate-800 text-center py-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 border border-slate-200 min-h-[48px]"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Support</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Modal triggered by header button */}
      <QuickQuoteModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
