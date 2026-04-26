import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

const HERO_IMG =
  "https://images.pexels.com/photos/20131971/pexels-photo-20131971.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=900&w=1200";

export const Hero = () => {
  return (
    <section
      id="hero"
      data-testid="hero-section"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/40 to-white"
    >
      <div className="absolute inset-0 bg-grid opacity-60 pointer-events-none" />
      <div className="absolute -top-40 -right-40 h-[480px] w-[480px] rounded-full bg-blue-200/30 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-8 pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="lg:col-span-7"
          >
            <span
              data-testid="hero-pill-badge"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs md:text-sm font-medium bg-blue-50 text-[#2563EB] border border-blue-200"
            >
              <Sparkles className="h-3.5 w-3.5" />
              New: Physical NACH Mandate Support for Dealer Groups
            </span>

            <h1
              data-testid="hero-headline"
              className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 font-display leading-[1.05]"
            >
              Get Your Auto Dealership Credit Line in{" "}
              <span className="relative inline-block">
                <span className="relative z-10">5 Simple Steps</span>
                <span className="absolute -bottom-1.5 left-0 right-0 h-3 bg-[#3DB46D]/25 -z-0 rounded-sm" />
              </span>
              .
            </h1>

            <p className="mt-6 text-lg text-slate-600 max-w-2xl leading-relaxed">
              Razorpay Capital is now offering inventory financing for auto dealers.
              Set up your mandate, get approved, and draw funds within days.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#cta"
                data-testid="hero-cta-primary"
                className="group inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-700 text-white px-6 py-3.5 rounded-lg font-medium transition-all shadow-sm hover:shadow-md"
              >
                Start Your Application
                <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#journey"
                data-testid="hero-cta-secondary"
                className="inline-flex items-center gap-2 border border-slate-300 text-slate-700 hover:border-slate-400 hover:bg-slate-50 px-6 py-3.5 rounded-lg font-medium transition-all"
              >
                See how it works
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#3DB46D]" />
                RBI-licensed NBFC
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#3DB46D]" />
                NPCI-compliant mandates
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#3DB46D]" />
                Trusted by leading OEM dealers
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            className="lg:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#2563EB]/20 to-[#3DB46D]/20 rounded-3xl blur-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-2xl bg-white">
                <img
                  src={HERO_IMG}
                  alt="Auto dealership showroom floor with multiple cars"
                  data-testid="hero-image"
                  className="w-full h-[420px] md:h-[480px] object-cover"
                />
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur rounded-xl border border-slate-200 p-4 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Approved credit line</div>
                      <div className="text-2xl font-bold text-slate-900 font-display">₹8,00,00,000</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-[#3DB46D] font-semibold uppercase tracking-wide">Active</div>
                      <div className="text-xs text-slate-500">Weekly auto-debit</div>
                    </div>
                  </div>
                  <div className="mt-3 h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[40%] bg-gradient-to-r from-[#2563EB] to-[#3DB46D] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
