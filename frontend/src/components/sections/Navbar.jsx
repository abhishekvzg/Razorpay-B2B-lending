import React from "react";
import { Sparkles } from "lucide-react";

export const Navbar = () => {
  return (
    <nav
      data-testid="top-navbar"
      className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-2" data-testid="nav-logo">
          <div className="h-8 w-8 rounded-lg bg-[#2563EB] flex items-center justify-center text-white font-bold font-display">
            R
          </div>
          <div className="leading-tight">
            <div className="text-[15px] font-semibold text-slate-900 font-display">Razorpay Capital</div>
            <div className="text-[11px] text-slate-500 -mt-0.5">Auto Dealer Financing</div>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-slate-600">
          <a href="#features" className="hover:text-slate-900 transition-colors" data-testid="nav-features">Overview</a>
          <a href="#journey" className="hover:text-slate-900 transition-colors" data-testid="nav-journey">How it works</a>
          <a href="#documents" className="hover:text-slate-900 transition-colors" data-testid="nav-docs">Documents</a>
        </div>

        <a
          href="#cta"
          data-testid="nav-cta-button"
          className="inline-flex items-center gap-1.5 bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm"
        >
          <Sparkles className="h-4 w-4" />
          Start Application
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
