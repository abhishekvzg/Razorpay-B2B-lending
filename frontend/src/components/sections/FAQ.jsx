import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const FAQS = [
  {
    q: "Why can't I just do this digitally like eNACH?",
    a: "Most auto dealer corporate accounts require multiple authorized signatories. eNACH does not support multi-signatory accounts. Physical NACH is the only compliant way to set up mandates for your type of account.",
  },
  {
    q: "Is this safe and RBI compliant?",
    a: "Yes. Physical NACH is fully NPCI-regulated, processed via a sponsor bank, and governed by the same RBI framework as all bank mandates. Razorpay is a licensed NBFC under RBI.",
  },
  {
    q: "How long does the whole process take?",
    a: "From application to first disbursement, the total time is approximately 22 to 30 days. The 15 to 20 day NPCI activation window is the longest step and is outside our control.",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="bg-[#F8FAFC] border-y border-slate-200/70"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
            Why physical NACH
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 font-display tracking-tight">
            Why are we using a physical form and not digital?
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            We know this is a fair question. Here is the honest answer.
          </p>
        </motion.div>

        <Accordion
          type="single"
          collapsible
          defaultValue="q-0"
          className="mt-10 space-y-3"
          data-testid="faq-accordion"
        >
          {FAQS.map((f, i) => (
            <AccordionItem
              key={i}
              value={`q-${i}`}
              data-testid={`faq-item-${i}`}
              className="bg-white border border-slate-200 rounded-xl px-5 md:px-6 [&[data-state=open]]:shadow-sm"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-slate-900 text-base md:text-lg py-5 hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-slate-600 leading-relaxed text-[15px] pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
