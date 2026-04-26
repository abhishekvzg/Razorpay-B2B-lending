import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export const CTAFooter = () => {
  return (
    <section
      id="cta"
      data-testid="cta-footer-section"
      className="bg-[#0F172A] relative overflow-hidden"
    >
      <div className="absolute -top-32 -left-32 h-[400px] w-[400px] rounded-full bg-blue-600/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 h-[400px] w-[400px] rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] font-semibold text-blue-300/90 bg-blue-500/10 border border-blue-400/20 px-3 py-1.5 rounded-full">
            Razorpay Capital
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold text-white font-display tracking-tight leading-[1.05]">
            Ready to unlock your<br />dealership's credit line?
          </h2>
          <p className="mt-5 text-lg text-slate-300 max-w-2xl mx-auto">
            Apply in 10 minutes. Our team will reach out within 24 hours.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#hero"
              data-testid="cta-apply-now"
              className="group inline-flex items-center gap-2 bg-[#2563EB] hover:bg-blue-600 text-white px-7 py-3.5 rounded-lg font-medium transition-all shadow-lg shadow-blue-500/25"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#hero"
              data-testid="cta-talk-to-us"
              className="inline-flex items-center gap-2 border border-white/30 text-white hover:bg-white/10 px-7 py-3.5 rounded-lg font-medium transition-all"
            >
              <Phone className="h-4 w-4" />
              Talk to Us
            </a>
          </div>

          <div className="mt-10 text-xs text-slate-400">
            Razorpay Capital | NBFC registered under RBI | Physical NACH powered by NPCI
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-md bg-[#2563EB] text-white flex items-center justify-center font-bold font-display">
              R
            </div>
            <span>© {new Date().getFullYear()} Razorpay Capital. All rights reserved.</span>
          </div>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Grievance</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAFooter;
