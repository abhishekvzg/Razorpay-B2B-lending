# Razorpay Capital — Auto Dealer Physical NACH Onboarding (Prototype)

## Original Problem Statement
Single-scroll landing page (prototype/explainer) for Razorpay Capital offering inventory financing to auto dealers via Physical NACH mandate. Must include: Hero with showroom + pill badge, 3 feature cards, vertical 5-step journey with rich illustrations (Step 3 = realistic NACH mandate form mock with annotated callouts), FAQ on physical NACH, weekly repayment circular flow diagram, documents checklist, dark navy CTA footer. Razorpay brand: blue #2563EB, green #3DB46D, navy #0F172A, light grey #F8FAFC sections, Inter font (Outfit display). Pure frontend prototype, no backend.

## User Choices
- Pure static frontend prototype (no backend)
- Curated stock images from Unsplash/Pexels
- Follow brief exactly

## Architecture
- Frontend: React 19 + Tailwind + framer-motion + shadcn/ui (Accordion)
- Fonts: Outfit (display) + Inter (body)
- No backend used; FastAPI template untouched

## Core Sections Implemented (2026-12)
- Sticky Navbar with anchor links
- Hero: showroom image, pill badge, headline w/ green underline, dual CTA, trust strip, floating credit-line card
- 3 feature cards (Banknote, Calendar, Shield)
- 5-Step Journey (vertical timeline w/ central gradient line):
  - Step 1: Application form mock with auto-fill tooltip + caret animation
  - Step 2: Drag-drop upload UI with green-checkmark verified docs
  - Step 3: Realistic NACH mandate form (UMRN, digit boxes for A/C, IFSC, amount; signatures, stamp area, frequency checkboxes — Weekly highlighted) + 4 colored callouts + checklist
  - Step 4: Split OCR scanner (animated scan line) + status tracker showing "Submitted to NPCI"
  - Step 5: Credit dashboard mock (₹8 cr/₹3.2 cr/₹4.8 cr stats, utilization bar, weekly schedule cards, action buttons)
- FAQ: Shadcn Accordion with 3 questions
- Weekly Repayment Cycle: SVG dashed circle with animated stroke + 4 positioned node cards
- Documents Checklist: two-column grid with green check icons
- Dark navy CTA footer with two CTAs + compliance line + bottom bar

## What's Implemented ✓
All 7 sections from brief, complete with data-testid coverage and fade-in scroll animations.

## Backlog / Next Tasks
- P1: Hook "Apply Now" / "Talk to Us" CTAs to a lead-capture modal/form (currently anchors)
- P2: Mobile responsiveness fine-tune (desktop-first per brief)
- P2: Print-ready downloadable PDF of NACH form mock
