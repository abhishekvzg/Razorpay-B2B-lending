import React from "react";
import { motion } from "framer-motion";
import { Banknote, CalendarCheck, ShieldCheck } from "lucide-react";

const FEATURES = [
  {
    icon: Banknote,
    title: "Large Credit Lines",
    body:
      "Get inventory financing up to ₹15 crore based on your OEM relationship with brands like Maruti, Hero MotoCorp, or Tata Motors.",
    accent: "bg-blue-50 text-[#2563EB] border-blue-200",
    testId: "feature-credit-line",
  },
  {
    icon: CalendarCheck,
    title: "Weekly Repayment",
    body:
      "Repayments are aligned to your weekly vehicle sales cycle. Pay as you sell. No pressure of large monthly EMIs.",
    accent: "bg-emerald-50 text-[#3DB46D] border-emerald-200",
    testId: "feature-weekly-repayment",
  },
  {
    icon: ShieldCheck,
    title: "Secure Physical Mandate",
    body:
      "We use a physical NACH mandate — a signed paper form that authorizes Razorpay to auto-debit your account every week. Simple and fully NPCI compliant.",
    accent: "bg-blue-50 text-[#2563EB] border-blue-200",
    testId: "feature-physical-mandate",
  },
];

export const Features = () => {
  return (
    <section
      id="features"
      data-testid="features-section"
      className="bg-[#F8FAFC] border-y border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
            What you need to know
          </div>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-slate-900 font-display tracking-tight">
            Built for dealer groups, designed for daily inventory cycles.
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.title}
                data-testid={f.testId}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200 p-7 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${f.accent}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-slate-900 font-display">
                  {f.title}
                </h3>
                <p className="mt-2.5 text-slate-600 leading-relaxed text-[15px]">
                  {f.body}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
