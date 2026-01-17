"use client";

import Link from "next/link";
import React, { useState, useEffect } from 'react';

// --- Components ---

const ContactModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [step, setStep] = useState<'form' | 'success'>('form');

  // Reset state when opening
  useEffect(() => {
    if (isOpen) setStep('form');
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg transform overflow-hidden rounded-2xl bg-white shadow-2xl transition-all dark:bg-slate-900">
        <div className="p-6 sm:p-8">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold leading-6 text-slate-900 dark:text-white">
              {step === 'form' ? 'Request a demo' : 'Request sent'}
            </h3>
            <button onClick={onClose} className="rounded-lg p-1 text-slate-400 hover:bg-slate-100 hover:text-slate-500 dark:hover:bg-slate-800">
              <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>

          {step === 'form' ? (
            <form
              className="mt-6 space-y-4"
              onSubmit={async (e) => {
                e.preventDefault();
                const form = e.currentTarget as HTMLFormElement;
                const submitBtn = form.querySelector('button[type="submit"]') as HTMLButtonElement;
                if (submitBtn) submitBtn.disabled = true;

                try {
                  const formData = new FormData(form);
                  const response = await fetch("https://formspree.io/f/xnjjjknr", {
                    method: "POST",
                    body: formData,
                    headers: {
                      'Accept': 'application/json'
                    }
                  });

                  if (response.ok) {
                    setStep('success');
                  } else {
                    alert('There was a problem submitting your form');
                  }
                } catch (error) {
                  alert('There was a problem submitting your form');
                } finally {
                  if (submitBtn) submitBtn.disabled = false;
                }
              }}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Name</label>
                <input required type="text" id="name" name="name" className="mt-1 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="Jane Doe" />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Work Email</label>
                <input required type="email" id="email" name="email" className="mt-1 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="jane@company.com" />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Company</label>
                <input required type="text" id="company" name="company" className="mt-1 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="Acme Inc." />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-slate-700 dark:text-slate-300">Role</label>
                <input required type="text" id="role" name="role" className="mt-1 block w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-2.5 text-slate-900 placeholder:text-slate-400 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 dark:border-slate-700 dark:bg-slate-800 dark:text-white" placeholder="Director of Planning" />
              </div>

              <div className="pt-2">
                <button type="submit" className="flex w-full justify-center rounded-xl bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 hover:bg-indigo-500 hover:-translate-y-0.5 transition-all">
                  Contact Sales
                </button>
              </div>
              <p className="text-center text-xs text-slate-500">
                We'll get back to you within 24 hours.
              </p>
            </form>
          ) : (
            <div className="mt-6 flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/20 dark:text-emerald-400">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h4 className="mt-4 text-lg font-medium text-slate-900 dark:text-white">Thanks for reaching out!</h4>
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
                We've received your request and will be in touch shortly to schedule your demo.
              </p>
              <button onClick={onClose} className="mt-6 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                Close
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

const Nav = ({ onContact }: { onContact: () => void }) => {
  return (
    <header className="sticky top-0 z-50 border-b border-transparent bg-slate-900 text-white shadow-lg dark:border-slate-800">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="leading-tight">
            <div className="text-sm font-semibold tracking-tight text-white">Relam.ai</div>
            <div className="text-[11px] font-medium text-slate-400">Location Intelligence</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 md:flex">
          <a href="#product" className="hover:text-white transition-colors">Product</a>
          <a href="#who" className="hover:text-white transition-colors">Who it’s for</a>
          <a href="#why" className="hover:text-white transition-colors">Why Relam</a>
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={onContact}
            className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-indigo-500/30 hover:bg-indigo-500 hover:-translate-y-0.5 transition-all"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};

const Badge = ({ children }: { children: React.ReactNode }) => (
  <span className="inline-flex items-center rounded-full border border-indigo-200/50 bg-indigo-50/50 px-3 py-1 text-xs font-medium text-indigo-700 shadow-sm backdrop-blur-sm dark:border-indigo-500/20 dark:bg-indigo-500/10 dark:text-indigo-300">
    {children}
  </span>
);

const Stat = ({ label, value }: { label: string; value: string }) => (
  <div className="rounded-2xl border border-slate-200 bg-white/50 p-4 shadow-sm backdrop-blur-sm dark:border-white/5 dark:bg-slate-900/50">
    <div className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</div>
    <div className="mt-1 text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">{value}</div>
  </div>
);

const Card = ({
  title,
  desc,
  bullets,
}: {
  title: string;
  desc: string;
  bullets?: string[];
}) => (
  <div className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-200/50 transition-all hover:shadow-md hover:shadow-indigo-500/5 dark:border-white/10 dark:bg-slate-950 dark:shadow-none dark:hover:border-white/20">
    <div className="flex items-start justify-between gap-3">
      <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{title}</h3>
      <div className="h-10 w-10 rounded-xl border border-slate-100 bg-slate-50 dark:border-slate-800 dark:bg-slate-900" />
    </div>
    <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{desc}</p>
    {bullets?.length ? (
      <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-indigo-400 dark:bg-indigo-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
    ) : null}
  </div>
);

const MockDashboard = () => {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-950 dark:shadow-black/50">
      {/* chrome */}
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/50 px-4 py-3 dark:border-white/5 dark:bg-white/5">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
          <div className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
        </div>
        <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Relam Insight • King Street Corridor</div>
        <div className="h-6 w-20 rounded-lg bg-slate-200/50 dark:bg-white/5" />
      </div>

      <div className="grid gap-4 p-4 md:grid-cols-5 bg-slate-50/30 dark:bg-black/20">
        {/* sidebar */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/5 dark:bg-slate-900">
            <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Parameters</div>
            <div className="mt-3 space-y-3">
              <div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Corridor</div>
                <div className="mt-1 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
                  <span>King St. W</span>
                  <span className="text-slate-400">▼</span>
                </div>
              </div>
              <div>
                <div className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Analysis Mode</div>
                <div className="mt-1 flex items-center justify-between rounded-lg border border-slate-200 px-3 py-2 text-xs font-medium text-slate-700 dark:border-slate-700 dark:text-slate-200">
                  <span>Peak Flow Sim</span>
                  <span className="text-slate-400">▼</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/5 dark:bg-slate-900">
              <div className="text-xs text-slate-500 dark:text-slate-400">Peak Flow</div>
              <div className="mt-1 text-lg font-bold text-slate-900 dark:text-white">14,203 <span className="text-xs font-normal text-slate-400">/hr</span></div>
              <div className="mt-1 text-[10px] font-medium text-emerald-600 dark:text-emerald-400">▲ 12.4% vs baseline</div>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/5 dark:bg-slate-900">
              <div className="text-xs text-slate-500 dark:text-slate-400">Confidence</div>
              <div className="mt-1 text-lg font-bold text-slate-900 dark:text-white">High <span className="text-lg text-slate-300 dark:text-slate-600">/ 0.89</span></div>
            </div>
          </div>
        </div>

        {/* main */}
        <div className="md:col-span-3 flex flex-col gap-4">
          <div className="flex-1 rounded-2xl border border-slate-200 bg-white p-4 dark:border-white/5 dark:bg-slate-900">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">Simulation Results</div>
                <div className="text-[11px] text-slate-500 dark:text-slate-400">Based on Q3 movement data</div>
              </div>
            </div>

            {/* chart placeholder */}
            <div className="mt-4 h-48 rounded-xl border border-slate-100 bg-gradient-to-b from-slate-50 to-white p-3 dark:border-white/5 dark:from-white/5 dark:to-transparent">
              <div className="flex h-full items-end gap-1.5">
                {[40, 65, 45, 80, 55, 90, 70, 85, 60, 75, 50, 60, 45, 80, 95, 70].map((h, i) => (
                  <div
                    key={i}
                    className={`w-full rounded-sm ${i > 10 ? 'bg-indigo-500 dark:bg-indigo-500' : 'bg-slate-200 dark:bg-slate-700'}`}
                    style={{ height: `${h}%` }}
                  />
                ))}
              </div>
            </div>
            <div className="mt-3 flex items-center gap-4 text-[10px]">
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-slate-300 dark:bg-slate-700" />
                <span className="text-slate-500 dark:text-slate-400">Historical</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="h-2 w-2 rounded-full bg-indigo-500" />
                <span className="font-medium text-slate-700 dark:text-slate-300">Projected</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Glow effect */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl dark:bg-indigo-500/20" />
    </div>
  );
};

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-white">
      <Nav onContact={() => setIsModalOpen(true)} />

      <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/2 -ml-[50%] h-[500px] w-full rounded-full bg-indigo-500/5 blur-3xl dark:bg-indigo-500/10" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 pb-8 pt-8 md:pb-12 md:pt-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-10">
            <div className="md:w-[48%]">
              <div className="flex flex-wrap items-center gap-2">
                <Badge>Privacy-first • De-identified signals</Badge>
                <Badge>Built for high-stakes decisions</Badge>
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-slate-900 md:text-5xl lg:text-[3.5rem] lg:leading-[1.1] dark:text-white">
                Predict how cities <span className="text-indigo-600 dark:text-indigo-400">move</span>
                <span className="block text-slate-400 dark:text-slate-500">before they do.</span>
              </h1>

              <p className="mt-5 max-w-lg text-base leading-relaxed text-slate-600 md:text-lg dark:text-slate-300">
                AI-powered location intelligence for <span className="font-medium text-slate-900 dark:text-white">REITs</span>,{" "}
                <span className="font-medium text-slate-900 dark:text-white">municipalities</span>, and{" "}
                <span className="font-medium text-slate-900 dark:text-white">brands</span>. Forecast footfall,
                simulate interventions, and make defensible decisions with confidence.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/20 hover:bg-slate-800 hover:-translate-y-0.5 transition-all dark:bg-indigo-600 dark:hover:bg-indigo-500 dark:text-white"
                >
                  Contact Us
                </button>
                {/* Removed 'View sample insight' button as requested */}
              </div>

              <div className="mt-8 grid grid-cols-3 gap-3 border-t border-slate-200 pt-6 dark:border-white/10">
                <div>
                  <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">10B+</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Signals / mo</div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">99.8%</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Uptime</div>
                </div>
                <div>
                  <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">35ms</div>
                  <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Query latency</div>
                </div>
              </div>
            </div>

            <div className="md:w-[52%] perspective-1000">
              <MockDashboard />
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip removed as requested */}

      {/* PRODUCT */}
      <section id="product" className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="max-w-2xl">
          <div className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Product</div>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl dark:text-white">
            From raw mobility signals to <span className="text-slate-400">decisions you can defend.</span>
          </h2>
          <p className="mt-4 text-bases leading-relaxed text-slate-600 dark:text-slate-300">
            Relam turns noisy, large-scale location signals into forecasts, simulations, and clear recommendations —
            with confidence measures for each output.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Card
            title="Forecast footfall"
            desc="Predict demand by corridor, block, or custom polygon. Model seasonality, events, and interventions."
            bullets={["Confidence intervals", "Time-shift simulations", "Exportable outputs"]}
          />
          <Card
            title="Polygon-based insights"
            desc="Draw or upload polygons for assets, districts, stations, and catchments — analyze instantly."
            bullets={["Custom geofences", "Comparative baselines", "Segment breakdowns"]}
          />
          <Card
            title="Actionable recommendations"
            desc="Move from analytics to actions: staffing, leasing, transit routing, and campaign planning."
            bullets={["Decision summaries", "What-if scenarios", "Audit-ready reporting"]}
          />
        </div>
      </section>

      {/* WHO IT'S FOR */}
      <section id="who" className="bg-slate-50 dark:bg-white/5">
        <div className="mx-auto max-w-6xl px-4 py-8 md:py-12">
          <div className="max-w-2xl">
            <div className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Who it’s for</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl dark:text-white">
              Built for teams that run real-world systems.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Relam serves public and private stakeholders who need reliable forecasts, not just dashboards.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card
              title="REITs & asset managers"
              desc="Improve leasing strategy, tenant mix, and site selection with predictive catchment insights."
              bullets={["Rent uplift opportunities", "Cannibalization checks", "Asset-level scoring"]}
            />
            <Card
              title="Cities & municipalities"
              desc="Plan safer, smoother, more efficient streets with corridor-level forecasting and simulations."
              bullets={["Congestion mitigation", "Service planning", "Event readiness"]}
            />
            <Card
              title="Retail & brands"
              desc="Choose locations, time campaigns, and optimize staffing with confidence-backed forecasts."
              bullets={["Expansion strategy", "Demand forecasting", "Store performance context"]}
            />
          </div>
        </div>
      </section>

      {/* WHY RELAM */}
      <section id="why" className="mx-auto max-w-6xl px-4 py-8 md:py-12">
        <div className="grid gap-8 md:grid-cols-2 md:items-start">
          <div className="max-w-xl">
            <div className="text-sm font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400">Why Relam</div>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl dark:text-white">
              Predictive, not just descriptive.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-300">
              Most tools show what happened. Relam helps you decide what to do next — with quantified uncertainty,
              scenario simulation, and outputs aligned to operational decisions.
            </p>

            <div className="mt-8 space-y-4">
              {[
                {
                  t: "Forecasting + simulation",
                  d: "Run “what-if” scenarios (events, transit changes, new tenants) and see projected impact.",
                },
                {
                  t: "Decision-grade confidence",
                  d: "Every output includes confidence, so teams can defend decisions and manage risk.",
                },
                {
                  t: "Built for institutions",
                  d: "Privacy-first, audit-friendly reporting, and clear assumptions you can communicate.",
                },
              ].map((x) => (
                <div
                  key={x.t}
                  className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-white/10 dark:bg-slate-900"
                >
                  <div className="text-sm font-semibold text-slate-900 dark:text-white">{x.t}</div>
                  <div className="mt-2 text-sm text-slate-600 dark:text-slate-400">{x.d}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/50 dark:border-white/10 dark:bg-slate-950 dark:shadow-black/50">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold tracking-tight text-slate-900 dark:text-white">Example deliverables</div>
                <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  Export directly to PDF / CSV
                </div>
              </div>
              <Badge>Export-ready</Badge>
            </div>

            <div className="mt-8 grid gap-4">
              {[
                {
                  k: "Corridor forecast",
                  v: "Peak hour flow +14% on King St. after intervention; confidence 0.79",
                },
                {
                  k: "Asset catchment",
                  v: "Top 3 feeder regions contribute 62% of visits; stable across seasons",
                },
                {
                  k: "Event scenario",
                  v: "Festival increases district footfall; localized spillover to adjacent blocks",
                },
              ].map((row) => (
                <div
                  key={row.k}
                  className="rounded-2xl border border-slate-100 bg-slate-50 p-5 dark:border-white/5 dark:bg-white/5"
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">{row.k}</div>
                  <div className="mt-2 text-sm font-medium text-slate-700 dark:text-slate-200">{row.v}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => setIsModalOpen(true)}
                className="inline-flex flex-1 items-center justify-center rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/10 hover:bg-slate-800 hover:-translate-y-0.5 transition-all dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-50"
              >
                Get a pilot
              </button>
              <button
                onClick={() => setIsModalOpen(true)} // Methodology could also just open contact or scroll somewhere, but sticking to contact for now as 'view samples' was removed
                className="inline-flex flex-1 items-center justify-center rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all dark:border-slate-700 dark:bg-transparent dark:text-slate-200 dark:hover:bg-white/5"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA - using dark distinct footer style */}
      <footer className="bg-slate-950 py-16 text-white md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-10 shadow-2xl md:px-12 md:py-16">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <h3 className="text-2xl font-semibold tracking-tight md:text-3xl text-white">
                  Deploy decision-grade location intelligence in weeks.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-400 md:text-base">
                  If you’re a REIT, city team, or multi-location brand, we’ll tailor a pilot around your polygons,
                  corridors, and decisions.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="inline-flex items-center justify-center rounded-2xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-xl shadow-indigo-500/20 hover:bg-indigo-500 hover:-translate-y-0.5 transition-all"
                >
                  Request demo
                </button>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 text-xs text-slate-500 md:flex-row md:items-center">
              <div>© {new Date().getFullYear()} Relam.ai • Privacy-first • De-identified analytics</div>
              <div className="flex gap-6">
                <a href="#" className="hover:text-white transition-colors">Privacy</a>
                <a href="#" className="hover:text-white transition-colors">Terms</a>
                <a href="#" className="hover:text-white transition-colors">Security</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
