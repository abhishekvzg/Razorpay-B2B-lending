import React from "react";
import { motion } from "framer-motion";
import { Banknote, Truck, Coins, RefreshCw } from "lucide-react";

const NODES = [
  {
    icon: Banknote,
    title: "Razorpay disburses funds",
    sub: "to your dealership account",
    color: "bg-[#2563EB]",
  },
  {
    icon: Truck,
    title: "You pay OEM",
    sub: "and stock vehicles",
    color: "bg-slate-900",
  },
  {
    icon: Coins,
    title: "You sell vehicles",
    sub: "and collect payments",
    color: "bg-[#3DB46D]",
  },
  {
    icon: RefreshCw,
    title: "Razorpay auto-debits",
    sub: "weekly repayment",
    color: "bg-[#2563EB]",
  },
];

export const RepaymentCycle = () => {
  return (
    <section
      id="cycle"
      data-testid="cycle-section"
      className="bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-20 md:py-28">
        <div className="max-w-2xl">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-[#2563EB]">
            What happens every week
          </div>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold text-slate-900 font-display tracking-tight">
            Your weekly repayment cycle.
          </h2>
        </div>

        <div className="mt-14 relative">
          {/* Circular SVG */}
          <div className="relative mx-auto w-full max-w-2xl aspect-square min-h-[520px]">
            <svg
              viewBox="0 0 400 400"
              className="absolute inset-0 w-full h-full"
              aria-hidden
            >
              <defs>
                <marker
                  id="arrow"
                  viewBox="0 0 10 10"
                  refX="8"
                  refY="5"
                  markerWidth="6"
                  markerHeight="6"
                  orient="auto-start-reverse"
                >
                  <path d="M 0 0 L 10 5 L 0 10 z" fill="#2563EB" />
                </marker>
              </defs>
              <circle
                cx="200"
                cy="200"
                r="150"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2"
                className="dash-anim"
                markerEnd="url(#arrow)"
              />
            </svg>

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <div className="text-[11px] uppercase tracking-[0.2em] text-slate-500 font-semibold">
                  Weekly cycle
                </div>
                <div className="mt-1 font-display text-2xl md:text-3xl font-bold text-slate-900">
                  ₹ flows<br />both ways
                </div>
              </div>
            </div>

            {/* Nodes positioned around the circle */}
            {NODES.map((n, i) => {
              const Icon = n.icon;
              const positions = [
                "top-0 left-1/2 -translate-x-1/2 -translate-y-1/2",       // top
                "right-0 top-1/2 -translate-y-1/2 translate-x-1/2",        // right
                "bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2",      // bottom
                "left-0 top-1/2 -translate-y-1/2 -translate-x-1/2",        // left
              ];
              return (
                <motion.div
                  key={i}
                  data-testid={`cycle-node-${i + 1}`}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`absolute ${positions[i]} w-44 md:w-52`}
                >
                  <div className="bg-white border border-slate-200 rounded-2xl shadow-md p-4 text-center hover:shadow-lg transition-shadow">
                    <div
                      className={`mx-auto h-11 w-11 rounded-xl text-white flex items-center justify-center ${n.color}`}
                    >
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="mt-3 text-xs uppercase tracking-wide text-slate-500 font-semibold">
                      Node {i + 1}
                    </div>
                    <div className="mt-1 text-sm font-semibold text-slate-900 font-display leading-tight">
                      {n.title}
                    </div>
                    <div className="text-[12px] text-slate-500 mt-0.5">{n.sub}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-sm text-slate-500 max-w-xl mx-auto">
            Unused credit is always available for your next inventory cycle.
          </div>
        </div>
      </div>
    </section>
  );
};

export default RepaymentCycle;
