import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";

const DigitBox = ({ value = "", filled = false }) => (
  <div
    className={`w-7 h-9 sm:w-8 sm:h-10 border border-slate-400 flex items-center justify-center font-bold text-[13px] ${
      filled ? "bg-emerald-50 text-emerald-800 border-emerald-300" : "bg-white text-slate-800"
    }`}
  >
    {value}
  </div>
);

const Row = ({ label, children, className = "" }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <div className="text-[10px] sm:text-[11px] font-semibold uppercase tracking-wide text-slate-700 min-w-[110px]">
      {label}
    </div>
    {children}
  </div>
);

export const NachForm = () => {
  const acct = "0123456789012345".split("");
  const ifsc = ["H", "D", "F", "C", "0", "0", "0", "1", "2", "3", "4"];
  const amount = "0050000000".split("");

  return (
    <div className="relative">
      {/* Form */}
      <div
        data-testid="nach-mandate-form"
        className="relative bg-white border-2 border-slate-300 rounded-xl p-5 sm:p-7 shadow-sm font-mono text-slate-800"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-dashed border-slate-300 pb-3">
          <div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-slate-500 font-sans">
              NPCI / NACH Debit Mandate
            </div>
            <div className="text-sm font-bold text-slate-900 font-sans">
              Physical Mandate Authorization Form
            </div>
          </div>
          <div className="text-right">
            <div className="text-[10px] uppercase text-slate-500 font-sans">UMRN</div>
            <div className="flex gap-0.5 mt-1">
              {"XXXXXXXXXX".split("").map((c, i) => (
                <DigitBox key={i} value={c} />
              ))}
            </div>
          </div>
        </div>

        {/* Sponsor / Date */}
        <div className="mt-4 grid grid-cols-2 gap-4 text-[11px]">
          <div>
            <div className="text-slate-500 font-sans">Sponsor Bank Code</div>
            <div className="mt-1 font-bold tracking-wider text-slate-800 bg-emerald-50/60 border border-emerald-200 rounded px-2 py-1 inline-block">
              RZRPY00001
            </div>
          </div>
          <div>
            <div className="text-slate-500 font-sans">Date</div>
            <div className="mt-1 flex gap-0.5">
              {"DDMMYYYY".split("").map((c, i) => (
                <DigitBox key={i} value={c} />
              ))}
            </div>
          </div>
        </div>

        {/* Tick boxes */}
        <div className="mt-5 flex items-center gap-6 text-[11px] font-sans">
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 border border-slate-400 inline-flex items-center justify-center bg-emerald-50">
              <CheckCircle2 className="h-3 w-3 text-emerald-600" />
            </span>
            <span className="font-semibold text-slate-700">CREATE</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 border border-slate-400" />
            <span className="text-slate-500">MODIFY</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-4 w-4 border border-slate-400" />
            <span className="text-slate-500">CANCEL</span>
          </div>
        </div>

        <div className="mt-5 space-y-3">
          <Row label="I/We hereby authorize">
            <div className="flex-1 border-b border-slate-400 pb-0.5 text-[12px] font-bold tracking-wide text-slate-900 bg-emerald-50/60 px-2">
              RAZORPAY CAPITAL PRIVATE LIMITED
            </div>
          </Row>

          <Row label="Bank A/c No.">
            <div className="flex gap-0.5 flex-wrap">
              {acct.map((d, i) => (
                <DigitBox key={i} value={d} filled />
              ))}
            </div>
          </Row>

          <Row label="With Bank">
            <div className="flex-1 border-b border-slate-400 pb-0.5 text-[12px] font-bold text-slate-800 bg-emerald-50/60 px-2">
              HDFC BANK — ANDHERI EAST BRANCH
            </div>
            <div className="flex gap-0.5 ml-2">
              <span className="text-[10px] text-slate-500 font-sans self-center mr-1">IFSC</span>
              {ifsc.map((c, i) => (
                <DigitBox key={i} value={c} filled />
              ))}
            </div>
          </Row>

          <Row label="An amount of">
            <div className="flex items-center gap-2">
              <span className="text-[12px] font-bold">₹</span>
              <div className="flex gap-0.5">
                {amount.map((d, i) => (
                  <DigitBox key={i} value={d} filled />
                ))}
              </div>
              <span className="text-[10px] text-slate-500 font-sans">(₹50,00,000 weekly cap)</span>
            </div>
          </Row>

          <Row label="Frequency">
            <div className="flex items-center gap-3 text-[11px] font-sans">
              <label className="flex items-center gap-1.5">
                <span className="h-4 w-4 border border-slate-400" /> Mthly
              </label>
              <label className="flex items-center gap-1.5">
                <span className="h-4 w-4 border border-slate-400" /> Qtly
              </label>
              <label className="flex items-center gap-1.5">
                <span className="h-4 w-4 border border-slate-400" /> H-Yrly
              </label>
              <label className="flex items-center gap-1.5">
                <span className="h-4 w-4 border border-slate-400" /> Yrly
              </label>
              <label className="flex items-center gap-1.5">
                <span className="h-5 w-5 border-2 border-red-500 inline-flex items-center justify-center bg-red-50 ring-2 ring-red-200">
                  <CheckCircle2 className="h-3.5 w-3.5 text-red-600" />
                </span>
                <span className="font-bold text-red-600">WEEKLY</span>
              </label>
            </div>
          </Row>

          <Row label="Reference 1">
            <div className="flex-1 border-b border-slate-400 pb-0.5 text-[12px] font-semibold text-slate-800 bg-emerald-50/60 px-2">
              DEALER-CODE: RZP/AUTO/MUM/00428
            </div>
          </Row>
          <Row label="Reference 2">
            <div className="flex-1 border-b border-slate-400 pb-0.5 text-[12px] text-slate-800 bg-emerald-50/60 px-2">
              MERIDIAN MOTORS PVT LTD — MARUTI ARENA
            </div>
          </Row>
        </div>

        {/* Period */}
        <div className="mt-5 grid grid-cols-3 gap-4 text-[11px]">
          <div>
            <div className="text-slate-500 font-sans">Period — From</div>
            <div className="mt-1 flex gap-0.5">
              {"01122025".split("").map((c, i) => (
                <DigitBox key={i} value={c} filled />
              ))}
            </div>
          </div>
          <div>
            <div className="text-slate-500 font-sans">To</div>
            <div className="mt-1 flex gap-0.5">
              {"01122030".split("").map((c, i) => (
                <DigitBox key={i} value={c} filled />
              ))}
            </div>
          </div>
          <div>
            <div className="text-slate-500 font-sans">Until Cancelled</div>
            <div className="mt-1 h-4 w-4 border border-slate-400" />
          </div>
        </div>

        {/* Signatures */}
        <div className="mt-7 grid grid-cols-3 gap-4">
          {["Primary Holder", "Secondary Holder", "Tertiary Holder"].map((s, i) => (
            <div key={s}>
              <div className="h-16 border border-dashed border-slate-400 rounded-md flex items-end justify-end p-2 bg-slate-50/40">
                <span className="text-[10px] text-slate-400 font-sans">Sign here</span>
              </div>
              <div className="text-[10px] mt-1 text-slate-600 font-sans font-semibold">
                {i + 1}. {s} — Signature
              </div>
              <div className="text-[10px] text-slate-500 font-sans">Name & PAN</div>
            </div>
          ))}
        </div>

        {/* Stamp area */}
        <div className="mt-5 flex items-end justify-between">
          <div className="text-[10px] text-slate-500 font-sans max-w-md leading-relaxed">
            I agree for the debit of mandate processing charges by the bank whom I am authorizing
            to debit my account as per latest schedule of charges.
          </div>
          <div className="h-20 w-32 border-2 border-dashed border-orange-400 rounded-md bg-orange-50/40 flex items-center justify-center text-[10px] text-orange-600 font-sans font-semibold text-center px-2">
            Affix Company<br />Seal / Stamp
          </div>
        </div>

        {/* Callouts (absolute) */}
        <div
          data-testid="callout-prefilled"
          className="hidden md:flex absolute -left-3 top-[170px] -translate-x-full bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-md shadow border border-emerald-200 font-sans text-xs font-semibold items-center gap-1.5 z-10"
        >
          Pre-filled by Razorpay
          <ArrowRight className="h-3.5 w-3.5" />
        </div>

        <div
          data-testid="callout-weekly"
          className="hidden md:flex absolute right-2 top-[295px] translate-x-[105%] bg-red-100 text-red-700 px-3 py-1.5 rounded-md shadow border border-red-200 font-sans text-xs font-semibold items-center gap-1.5 z-10"
        >
          <ArrowRight className="h-3.5 w-3.5 rotate-180" />
          Weekly — aligned to your sales cycle
        </div>

        <div
          data-testid="callout-signature"
          className="hidden md:flex absolute -left-3 bottom-[110px] -translate-x-full bg-blue-100 text-blue-700 px-3 py-1.5 rounded-md shadow border border-blue-200 font-sans text-xs font-semibold items-center gap-1.5 z-10"
        >
          Sign here — all authorized signatories
          <ArrowRight className="h-3.5 w-3.5" />
        </div>

        <div
          data-testid="callout-stamp"
          className="hidden md:flex absolute right-2 bottom-2 translate-x-[105%] bg-orange-100 text-orange-700 px-3 py-1.5 rounded-md shadow border border-orange-200 font-sans text-xs font-semibold items-center gap-1.5 z-10"
        >
          <ArrowRight className="h-3.5 w-3.5 rotate-180" />
          Company stamp required
        </div>
      </div>
    </div>
  );
};

export default NachForm;
