import React from "react";
import "@/App.css";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Journey from "@/components/sections/Journey";
import FAQ from "@/components/sections/FAQ";
import RepaymentCycle from "@/components/sections/RepaymentCycle";
import DocumentsChecklist from "@/components/sections/DocumentsChecklist";
import CTAFooter from "@/components/sections/CTAFooter";

export default function App() {
  return (
    <div className="App" data-testid="app-root">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Journey />
        <FAQ />
        <RepaymentCycle />
        <DocumentsChecklist />
        <CTAFooter />
      </main>
    </div>
  );
}
