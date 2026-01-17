"use client";
import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export default function Subscribe({
  title = "Get updates from Ash",
  subtitle = "Occasional emails on AI reasoning, open-source projects, and research updates. No spam.",
  source = "blog",
}: {
  title?: string;
  subtitle?: string;
  source?: string;
}) {
  const [state, handleSubmit] = useForm("mzzjdjbz");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  if (state.succeeded) {
    return (
      <div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
          You’re on the list 🎉
        </h3>
        <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          Thanks for subscribing — I’ll send thoughtful, infrequent updates.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900"
    >
      <h3 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{subtitle}</p>

      <input type="hidden" name="source" value={source} />
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

      <div className="mt-4 grid gap-3 sm:grid-cols-3">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="sr-only">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@domain.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-xl border border-neutral-200 bg-white px-3 py-2 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-neutral-400 dark:border-neutral-800 dark:bg-neutral-950 dark:text-neutral-100"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between gap-3">
        <button
          type="submit"
          disabled={state.submitting}
          className="inline-flex h-10 items-center justify-center rounded-xl bg-neutral-900 px-4 text-sm font-medium text-white transition hover:bg-neutral-800 disabled:opacity-60 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
        >
          {state.submitting ? "Subscribing…" : "Subscribe"}
        </button>
        <p className="text-xs text-neutral-500 dark:text-neutral-400">
          By subscribing, you agree to receive emails from Ash.
        </p>
      </div>
    </form>
  );
}