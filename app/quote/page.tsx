"use client";

import { useState } from "react";

type WorkType = "kitchen" | "bathroom" | "flooring" | "painting" | "other";

export default function QuotePage() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [workType, setWorkType] = useState<WorkType>("kitchen");
  const [details, setDetails] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    // For demo only (later we can send to an API route)
    console.log({ fullName, phone, workType, details });

    setSubmitted(true);
    setFullName("");
    setPhone("");
    setWorkType("kitchen");
    setDetails("");
  }

  return (
    <main className="min-h-screen bg-white text-zinc-900">
      <div className="mx-auto max-w-xl px-4 py-10">
        <h1 className="text-3xl font-semibold tracking-tight">Request a Free Quote</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Fill out the form and we’ll contact you shortly.
        </p>

        {submitted && (
          <div className="mt-6 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800">
            Request submitted. We’ll contact you soon.
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium">Full name</label>
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:ring-2"
              placeholder="e.g., name family"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Phone</label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="mt-1 w-full rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:ring-2"
              placeholder="e.g., 416-555-1234"
              inputMode="tel"
              required
            />
          </div>

          <div>
            <label className="text-sm font-medium">Work type</label>
            <select
              value={workType}
              onChange={(e) => setWorkType(e.target.value as WorkType)}
              className="mt-1 w-full rounded-lg border border-zinc-300 bg-white px-3 py-2 outline-none focus:ring-2"
            >
              <option value="kitchen">Kitchen</option>
              <option value="bathroom">Bathroom</option>
              <option value="flooring">Flooring</option>
              <option value="painting">Painting</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium">Details</label>
            <textarea
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="mt-1 min-h-[120px] w-full resize-y rounded-lg border border-zinc-300 px-3 py-2 outline-none focus:ring-2"
              placeholder="Tell us what you need…"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-zinc-900 px-4 py-2.5 text-sm font-medium text-white hover:opacity-90 active:opacity-80"
          >
            Submit request
          </button>

          <p className="text-center text-xs text-zinc-500">
            This is a demo form (no backend yet).
          </p>
        </form>
      </div>
    </main>
  );
}
