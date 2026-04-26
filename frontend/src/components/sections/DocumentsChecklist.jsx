import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Briefcase, FileSignature } from "lucide-react";

const BUSINESS = [
  "GST Certificate",
  "Business PAN Card",
  "OEM Dealer Agreement (latest)",
  "Last 12 months bank statements",
];
const NACH = [
  "Corporate current account details (account number and IFSC)",
  "List of all authorized signatories on the account",
  "Company seal / stamp",
  "Courier address or field agent contact",
];

const Column = ({ icon: Icon, title, items, testId }) => (
  <div
    data-testid={testId}
    className="bg-white border border-slate-200 rounded-2xl p-7 shadow-sm"
  >
    <div className="flex items-center gap-3">
      <div className="h-11 w-11 rounded-xl bg-blue-50 text-[#2563EB] border border-blue-200 flex items-center justify-center">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900 font-display">
        {title}
      </h3>
    </div>
    <ul className="mt-5 space-y-3">
      {items.map((it) => (
        <li key={it} className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-[#3DB46D] flex-shrink-0 mt-0.5" />
          <span className="text-[15px] text-slate-700 leading-relaxed">{it}</span>
        </li>
      ))}
    </ul>
  </div>
);

export const DocumentsChecklist = () => {
  return (
    <section
      id="documents"
      data-testid="documents-section"
      className="bg-[#F8FAFC] border-y border-slate-200/70"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
            Documents checklist
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 font-display tracking-tight">
            Keep these ready before you start.
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Column
            icon={Briefcase}
            title="Business Documents"
            items={BUSINESS}
            testId="docs-business-column"
          />
          <Column
            icon={FileSignature}
            title="For NACH Mandate"
            items={NACH}
            testId="docs-nach-column"
          />
        </div>
      </div>
    </section>
  );
};

export default DocumentsChecklist;
