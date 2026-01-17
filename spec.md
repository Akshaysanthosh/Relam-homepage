# Relam.ai Landing Page — Single-Page Next.js Spec (Deploy-Ready)

Owner: Ash Pillai  
Target: Antigravity (build + deploy)  
Goal: Ship a polished, single-page landing page that can be deployed immediately (Vercel).

---

## 1) Outcome & Success Criteria

### Primary goal
Generate qualified demo requests for:
- REITs / Asset managers
- Municipalities / City teams
- Retail brands with physical locations

### Success criteria (must-have)
- Looks “world-class” (Stripe / Linear polish) with an enterprise, data-forward feel
- Fully responsive (mobile → 4K)
- Fast: Lighthouse Performance 90+ on mobile (best effort)
- Accessible: semantic structure, keyboard nav, sufficient contrast
- Deployable same day (Vercel)

---

## 2) Tech Requirements

### Stack
- Next.js (App Router) + React (TypeScript)
- TailwindCSS
- No external UI libs required (avoid dependencies for speed)

### File structure (App Router)
- `app/page.tsx` — the entire landing page (single page)
- `app/layout.tsx` — existing layout ok (do not change unless needed for fonts)
- `app/globals.css` — Tailwind base styles

### No backend required
- Demo CTA should link to:
  - Calendly (preferred) OR
  - `mailto:` fallback
- If a form is implemented, use a simple provider (Formspree / Basin / Getform) with env var.

---

## 3) Brand & Visual Direction

### Aesthetic
- Minimal, clean, enterprise, “data product”
- Mostly neutral palette (zinc/gray). Avoid loud gradients.
- Subtle borders, soft shadows, rounded-2xl / rounded-3xl.
- Motion: minimal, tasteful (hover states, small transitions only).

### Logo
- Use a simple text logo “Relam.ai” for now.
- Optional: a small square icon with “R”.

### Typography
- Use system font stack or `next/font` with Inter (optional).
- Strong hierarchy: big hero headline, clean subheads, readable body.

---

## 4) Content & IA (Information Architecture)

The page is a single scrolling page with anchor nav.

### Sections (in this order)

1. **Sticky top nav**
   - Left: Relam.ai logo
   - Right links: Product, Who it’s for, Why Relam, Trust
   - Right CTAs:
     - Secondary: “View sample insight”
     - Primary: “Request demo”

2. **Hero (above the fold)**
   - Badges: “Privacy-first • De-identified signals”, “Built for high-stakes decisions”
   - Headline:
     - “Predict how cities move — before they do.”
   - Subheadline:
     - “AI-powered location intelligence for REITs, municipalities, and brands with physical locations. Forecast footfall, simulate interventions, and make defensible decisions with confidence.”
   - CTAs:
     - Primary: “Request demo”
     - Secondary: “View sample insight” (scrolls to Product)
   - Stats row (3 small cards):
     - “Signals / month” → “10B+”
     - “Use-cases” → “Forecast + Sim”
     - “Output” → “Actions”
   - Right side: **Mock product preview** (no real data needed)
     - A stylized dashboard card with:
       - left filters panel placeholders
       - right chart placeholder
       - 2 insight blocks
     - Must look like a real product (but can be skeleton UI)

3. **Trust strip**
   - Small statement: “Designed for institutions”
   - Placeholder logo tiles (6): “REIT”, “City”, “Transit”, “Retail”, “Planning”, “Ops”
   - Goal: immediate credibility without claiming real partners

4. **Product**
   - Heading: “From raw mobility signals to decisions you can defend.”
   - Subtext: transform noisy signals into forecasts, simulations, recommendations with confidence
   - 3 feature cards:
     - Forecast footfall (confidence intervals, time-shift simulations, exportable outputs)
     - Polygon-based insights (custom geofences, baselines, segment breakdowns)
     - Actionable recommendations (decision summaries, what-if, audit-ready reporting)

5. **Who it’s for (ICP)**
   - Heading: “Built for teams that run real-world systems.”
   - 3 ICP cards:
     - REITs & asset managers (rent uplift, cannibalization, asset scoring)
     - Cities & municipalities (congestion, service planning, event readiness)
     - Retail & brands (expansion, demand forecasting, performance context)

6. **Why Relam**
   - Left column: 3 differentiators (cards)
     - Forecasting + simulation
     - Decision-grade confidence
     - Built for institutions (privacy-first, audit-friendly, clear assumptions)
   - Right column: “Example deliverables” panel (3 rows)
     - Corridor forecast example
     - Asset catchment example
     - Event scenario example
   - Buttons:
     - Primary: “Get a pilot”
     - Secondary: “See methodology” (can be # or placeholder link)

7. **Final CTA**
   - Big card:
     - Heading: “Deploy decision-grade location intelligence in weeks.”
     - CTA buttons:
       - “Request demo”
       - “Email us” → `mailto:hello@relam.ai`
   - Footer micro-links: Privacy / Terms / Security (placeholders ok)

---

## 5) Behavior Requirements

### Navigation
- Anchor links should smoothly scroll to section IDs:
  - `#product`, `#who`, `#why`, `#trust`, `#demo`, `#sample`

### Buttons
- “Request demo”
  - If Calendly exists: open in same tab or new tab (acceptable)
  - Else: `mailto:hello@relam.ai?subject=Relam%20Demo%20Request`
- “View sample insight”: scroll to Product

### Dark mode
- Optional but preferred:
  - Tailwind `dark:` classes
  - Use OS preference (default) and keep it stable (no theme toggle required)

---

## 6) Non-Functional Requirements

### Responsiveness
- Mobile first
- Maintain hero readability, avoid overflow in mock dashboard
- Use max-width container: `max-w-6xl` and padding `px-4`

### Accessibility
- Semantic sections and headings in order (H1 then H2…)
- Visible focus styles
- Buttons are real `<a>` / `<button>` elements
- Avoid low-contrast gray-on-gray

### Performance
- Avoid heavy images
- If using any image, use Next `<Image>` and local static assets

---

## 7) Deliverables

Antigravity should deliver:

1. **Next.js page implementation**
   - `app/page.tsx` containing all sections above
   - Tailwind-based styling only

2. **Config / Run instructions**
   - `npm install`
   - `npm run dev`
   - `npm run build`

3. **Deployment**
   - Vercel deployment (connect repo + deploy)
   - Confirm production URL works

---

## 8) Acceptance Checklist

- [ ] Page matches section order and copy (minor wording tweaks ok)
- [ ] Looks clean & enterprise (not “template-y”)
- [ ] Works on mobile and desktop
- [ ] Buttons/anchors work
- [ ] No console errors
- [ ] Deployed to Vercel successfully

---

## 9) Notes / Constraints

- Do not add claims like “trusted by X” unless we provide real logos.
- Keep it simple. Ship the page first; we’ll add real screenshots + content later.
- Placeholders are fine as long as the layout and polish are excellent.
