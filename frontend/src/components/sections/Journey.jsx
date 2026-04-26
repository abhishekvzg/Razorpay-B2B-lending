import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2, FileText, Upload, FileSignature, ScanLine, Wallet } from "lucide-react";
import NachForm from "./NachForm";

/* -------------------- STEP MOCK COMPONENTS -------------------- */

const Step1Mock = () => (
  <div
    data-testid="step1-mock"
    className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-7"
  >
    <div className="flex items-center justify-between border-b border-slate-200 pb-4">
      <div>
        <div className="text-xs uppercase tracking-wider text-slate-500">Step 1 of 5</div>
        <div className="text-base font-semibold text-slate-900 font-display">Dealership Application</div>
      </div>
      <div className="text-xs text-slate-500">Auto-saved</div>
    </div>

    <div className="mt-5 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Dealership Name" value="Meridian Motors Pvt Ltd" glow />
        <Field label="OEM Brand" value="Maruti Suzuki — Arena" glow />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="GST Number" value="27AABCM4521R1ZP" glow tooltip />
        <Field label="PAN" value="AABCM4521R" glow />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Field label="Monthly Stock Volume" value="180 vehicles" />
        <Field label="Years of Operation" value="12 years" />
      </div>
    </div>

    <div className="mt-6 flex items-center justify-between">
      <div className="text-xs text-slate-500">Estimated time: under 10 minutes</div>
      <button className="bg-[#2563EB] hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-lg font-medium">
        Continue →
      </button>
    </div>
  </div>
);

const Field = ({ label, value, glow, tooltip }) => (
  <div className="relative">
    <div className="text-[11px] uppercase tracking-wide font-semibold text-slate-500">{label}</div>
    <div
      className={`mt-1 px-3.5 py-2.5 rounded-lg border bg-white text-[14px] font-medium text-slate-800 ${
        glow ? "border-[#2563EB] ring-2 ring-blue-200/60" : "border-slate-200"
      }`}
    >
      {value}
      {glow && <span className="caret ml-0.5 text-[#2563EB]">|</span>}
    </div>
    {tooltip && (
      <div className="absolute -top-3 right-2 translate-y-[-100%] bg-[#2563EB] text-white text-[11px] font-medium px-2.5 py-1 rounded-md shadow-md whitespace-nowrap">
        Auto-filled from your GST data
        <span className="absolute -bottom-1 right-4 w-2 h-2 bg-[#2563EB] rotate-45" />
      </div>
    )}
  </div>
);

const Step2Mock = () => {
  const docs = [
    { name: "Dealer Agreement.pdf", size: "2.4 MB", verified: true },
    { name: "Bank Statement.pdf", size: "8.1 MB", verified: true },
    { name: "PAN Card.jpg", size: "640 KB", verified: true },
  ];
  return (
    <div
      data-testid="step2-mock"
      className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-7"
    >
      <div className="text-xs uppercase tracking-wider text-slate-500">KYC Documents</div>
      <div className="text-base font-semibold text-slate-900 font-display mt-0.5">
        Upload &amp; auto-verify
      </div>

      <div className="mt-5 border-2 border-dashed border-slate-300 rounded-xl p-8 bg-slate-50/60 text-center">
        <div className="mx-auto w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-[#2563EB]">
          <Upload className="h-5 w-5" />
        </div>
        <div className="mt-3 text-sm font-medium text-slate-700">Drag &amp; drop files here</div>
        <div className="text-xs text-slate-500 mt-1">PDF, JPG up to 25 MB</div>
      </div>

      <div className="mt-5 space-y-2.5">
        {docs.map((d) => (
          <div
            key={d.name}
            className="flex items-center justify-between bg-white border border-slate-200 rounded-lg px-3.5 py-2.5"
          >
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-500">
                <FileText className="h-4 w-4" />
              </div>
              <div>
                <div className="text-sm font-medium text-slate-800">{d.name}</div>
                <div className="text-[11px] text-slate-500">{d.size} • Verified instantly</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5 text-[#3DB46D] text-xs font-semibold">
              <CheckCircle2 className="h-4 w-4" />
              Verified
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Step3Mock = () => (
  <div data-testid="step3-mock" className="space-y-6">
    <NachForm />
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-7">
      <div className="text-sm font-semibold text-slate-900 font-display">What you need to do</div>
      <ul className="mt-4 space-y-2.5">
        {[
          "Print the mandate form sent to you",
          "Get signed by all authorized signatories on the account",
          "Affix company stamp",
          "Courier the signed form to Razorpay OR hand to your field agent",
        ].map((t) => (
          <li key={t} className="flex items-start gap-3">
            <span className="mt-0.5 h-5 w-5 rounded-md border-2 border-slate-300 flex items-center justify-center bg-white">
              <CheckCircle2 className="h-3.5 w-3.5 text-slate-300" />
            </span>
            <span className="text-sm text-slate-700">{t}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

const Step4Mock = () => (
  <div
    data-testid="step4-mock"
    className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-7"
  >
    <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
      {/* OCR scanner */}
      <div className="md:col-span-3">
        <div className="text-xs uppercase tracking-wider text-slate-500">OCR Validation</div>
        <div className="text-sm font-semibold text-slate-900 font-display">Scanning your mandate</div>

        <div className="relative mt-4 h-64 rounded-xl overflow-hidden border border-slate-200 bg-slate-50">
          <div className="absolute inset-3 bg-white border border-slate-200 rounded-md p-3 text-[10px] font-mono text-slate-400 leading-relaxed overflow-hidden">
            <div className="font-bold text-slate-600 mb-1">PHYSICAL NACH MANDATE</div>
            <div>UMRN: ████████████</div>
            <div className="mt-1">A/C No: 0123 4567 8901 2345</div>
            <div>IFSC: HDFC0001234</div>
            <div>Amount: ₹50,00,000</div>
            <div>Frequency: WEEKLY ✓</div>
            <div className="mt-1.5">Sponsor Bank: RZRPY00001</div>
            <div className="mt-2 border-t border-dashed border-slate-300 pt-1">
              Signatures: 03 detected
            </div>
            <div>Stamp: detected</div>
          </div>

          {/* Scan line */}
          <div className="absolute left-0 right-0 h-0.5 scan-line bg-gradient-to-r from-transparent via-[#2563EB] to-transparent shadow-[0_0_12px_2px_rgba(37,99,235,0.6)]" />

          <div className="absolute top-2 right-2 flex items-center gap-1.5 bg-blue-600/95 text-white text-[10px] font-semibold px-2 py-1 rounded-md">
            <ScanLine className="h-3 w-3" />
            Scanning
          </div>
        </div>
      </div>

      {/* Status tracker */}
      <div className="md:col-span-2">
        <div className="text-xs uppercase tracking-wider text-slate-500">Activation Status</div>
        <div className="text-sm font-semibold text-slate-900 font-display mb-4">Live tracker</div>

        <ol className="relative border-l-2 border-slate-200 ml-3 space-y-5">
          {[
            { label: "Received", done: true },
            { label: "Validated", done: true },
            { label: "Submitted to NPCI", done: false, current: true },
            { label: "Activated", done: false },
          ].map((s) => (
            <li key={s.label} className="pl-5 relative">
              <span
                className={`absolute -left-[11px] top-0.5 h-5 w-5 rounded-full border-2 flex items-center justify-center ${
                  s.done
                    ? "bg-[#3DB46D] border-[#3DB46D] text-white"
                    : s.current
                    ? "bg-white border-[#2563EB] ring-4 ring-blue-100"
                    : "bg-white border-slate-300"
                }`}
              >
                {s.done && <CheckCircle2 className="h-3 w-3" />}
              </span>
              <div
                className={`text-sm font-medium ${
                  s.done ? "text-slate-900" : s.current ? "text-[#2563EB]" : "text-slate-400"
                }`}
              >
                {s.label}
                {s.current && (
                  <span className="ml-2 text-[10px] uppercase tracking-wide bg-blue-50 text-[#2563EB] border border-blue-200 px-1.5 py-0.5 rounded">
                    Current
                  </span>
                )}
              </div>
              <div className="text-[11px] text-slate-500 mt-0.5">
                {s.label === "Submitted to NPCI"
                  ? "Activation typically completes in 15–20 days"
                  : s.label === "Validated"
                  ? "Signatures, stamp, and account match verified"
                  : s.label === "Received"
                  ? "Form received via courier on 24 Nov"
                  : "Mandate goes live, credit line unlocks"}
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-5 text-[11px] bg-slate-50 border border-slate-200 rounded-lg px-3 py-2 text-slate-600">
          You'll receive SMS &amp; email updates at each stage.
        </div>
      </div>
    </div>
  </div>
);

const Step5Mock = () => (
  <div
    data-testid="step5-mock"
    className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-7"
  >
    <div className="flex items-center justify-between">
      <div>
        <div className="text-xs uppercase tracking-wider text-slate-500">Credit Line Dashboard</div>
        <div className="text-base font-semibold text-slate-900 font-display">
          Meridian Motors • RZP/AUTO/MUM/00428
        </div>
      </div>
      <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-[#3DB46D] border border-emerald-200 text-xs font-semibold px-2.5 py-1 rounded-full">
        <span className="h-2 w-2 rounded-full bg-[#3DB46D] animate-pulse" />
        Mandate Active
      </span>
    </div>

    <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <Stat label="Approved" value="₹8,00,00,000" tone="blue" />
      <Stat label="Drawn" value="₹3,20,00,000" tone="navy" />
      <Stat label="Available" value="₹4,80,00,000" tone="green" />
    </div>

    <div className="mt-5">
      <div className="text-[11px] uppercase tracking-wide font-semibold text-slate-500 mb-2">
        Credit utilization
      </div>
      <div className="h-3 w-full rounded-full bg-slate-100 overflow-hidden">
        <div className="h-full w-[40%] bg-gradient-to-r from-[#2563EB] to-[#3DB46D]" />
      </div>
      <div className="flex justify-between mt-1.5 text-[11px] text-slate-500">
        <span>40% used</span>
        <span>60% available</span>
      </div>
    </div>

    {/* weekly schedule */}
    <div className="mt-7">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-semibold text-slate-900 font-display">Weekly repayment schedule</div>
        <div className="text-xs text-slate-500">Auto-debit every Monday</div>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {[
          { d: "Mon", date: "01", amt: "₹4.2L", paid: true },
          { d: "Mon", date: "08", amt: "₹4.6L", paid: true },
          { d: "Mon", date: "15", amt: "₹5.1L", paid: true },
          { d: "Mon", date: "22", amt: "₹4.8L", next: true },
          { d: "Mon", date: "29", amt: "—" },
          { d: "Mon", date: "06", amt: "—" },
          { d: "Mon", date: "13", amt: "—" },
        ].map((w, i) => (
          <div
            key={i}
            className={`rounded-lg border p-2.5 text-center ${
              w.next
                ? "border-[#2563EB] bg-blue-50 ring-2 ring-blue-200"
                : w.paid
                ? "border-emerald-200 bg-emerald-50"
                : "border-slate-200 bg-white"
            }`}
          >
            <div className="text-[10px] uppercase text-slate-500">{w.d}</div>
            <div className="text-base font-bold text-slate-900 font-display">{w.date}</div>
            <div
              className={`text-[10px] mt-1 font-semibold ${
                w.next ? "text-[#2563EB]" : w.paid ? "text-[#3DB46D]" : "text-slate-400"
              }`}
            >
              {w.amt}
            </div>
            {w.next && <div className="text-[9px] uppercase text-[#2563EB] mt-0.5">Next</div>}
            {w.paid && <div className="text-[9px] uppercase text-[#3DB46D] mt-0.5">Paid</div>}
          </div>
        ))}
      </div>
    </div>

    <div className="mt-6 flex flex-wrap gap-3">
      <button className="bg-[#2563EB] hover:bg-blue-700 text-white text-sm font-medium px-4 py-2.5 rounded-lg flex items-center gap-2">
        <Wallet className="h-4 w-4" /> Draw funds
      </button>
      <button className="border border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium px-4 py-2.5 rounded-lg">
        Download statement
      </button>
    </div>
  </div>
);

const Stat = ({ label, value, tone }) => {
  const tones = {
    blue: "from-blue-50 to-white border-blue-200 text-[#2563EB]",
    navy: "from-slate-50 to-white border-slate-200 text-slate-800",
    green: "from-emerald-50 to-white border-emerald-200 text-[#3DB46D]",
  };
  return (
    <div className={`bg-gradient-to-br ${tones[tone]} border rounded-xl p-4`}>
      <div className="text-[11px] uppercase tracking-wide font-semibold text-slate-500">
        {label}
      </div>
      <div className="text-xl md:text-2xl font-bold mt-1 font-display tracking-tight">
        {value}
      </div>
    </div>
  );
};

/* -------------------- STEPS DATA -------------------- */
const STEPS = [
  {
    n: 1,
    icon: FileText,
    title: "Submit Your Application",
    desc:
      "Fill in your dealership details, OEM brand name, GST number, PAN, and monthly stock volume. Takes less than 10 minutes.",
    mock: <Step1Mock />,
  },
  {
    n: 2,
    icon: Upload,
    title: "Upload Your KYC Documents",
    desc:
      "Upload your OEM dealer agreement, last 12 months bank statements, and business PAN card. Our system verifies them automatically.",
    mock: <Step2Mock />,
  },
  {
    n: 3,
    icon: FileSignature,
    title: "Receive and Sign the NACH Mandate Form",
    desc:
      "We'll send you a pre-filled physical NACH mandate form via WhatsApp, SMS, or email. All your bank account details, dealership name, IFSC, and debit amount cap will already be filled in by us. Your job is simple — print it, get it signed by all authorized signatories, stamp it, and send it back to us via courier or hand it to our field agent.",
    mock: <Step3Mock />,
    highlight: true,
  },
  {
    n: 4,
    icon: ScanLine,
    title: "We Process and Activate Your Mandate",
    desc:
      "Once we receive your signed form, our OCR engine scans and validates it within 24 hours. We check signatures, account number match, IFSC, and stamp. Clean forms are submitted to NPCI via our sponsor bank. Activation takes 15 to 20 days.",
    mock: <Step4Mock />,
  },
  {
    n: 5,
    icon: Wallet,
    title: "Credit Line Activated — Start Drawing Funds",
    desc:
      "Once your mandate is active, your approved credit line is unlocked. Draw funds instantly to pay your OEM for vehicle inventory. Every week, Razorpay auto-debits your repayment amount from your account on the day you choose.",
    mock: <Step5Mock />,
  },
];

/* -------------------- JOURNEY SECTION -------------------- */
export const Journey = () => {
  return (
    <section
      id="journey"
      data-testid="journey-section"
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
            The 5 Step Journey
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 font-display tracking-tight">
            Here's how it works.
          </h2>
          <p className="mt-4 text-lg text-slate-600 leading-relaxed">
            From application to first disbursement — here is every step explained clearly.
          </p>
        </div>

        <div className="mt-16 relative">
          {/* central vertical line */}
          <div
            aria-hidden
            className="hidden lg:block absolute left-[42px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-200 via-slate-200 to-emerald-200"
          />

          <div className="space-y-20 lg:space-y-28">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.n}
                  data-testid={`step-${s.n}`}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.55, delay: 0.05 }}
                  className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
                >
                  {/* Number + title column */}
                  <div className="lg:col-span-4 flex lg:block items-start gap-4">
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`h-[88px] w-[88px] rounded-2xl flex items-center justify-center font-display font-bold text-3xl text-white shadow-lg ${
                          s.highlight
                            ? "bg-gradient-to-br from-[#2563EB] to-blue-700 ring-4 ring-blue-100"
                            : "bg-slate-900"
                        }`}
                      >
                        {String(s.n).padStart(2, "0")}
                      </div>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                        <Icon className="h-3.5 w-3.5" />
                        Step {s.n}
                      </div>
                    </div>
                    <div className="lg:mt-6">
                      <h3 className="text-2xl md:text-3xl font-bold text-slate-900 font-display tracking-tight leading-tight">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-slate-600 leading-relaxed text-[15px]">
                        {s.desc}
                      </p>
                      {s.highlight && (
                        <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200 px-2.5 py-1 rounded-full">
                          ★ Most important step
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Mock column */}
                  <div className="lg:col-span-8 lg:pl-4">{s.mock}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
