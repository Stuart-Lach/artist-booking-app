// src/pages/BookingPage.jsx
import { useState } from "react";
import { PrimaryButton } from "../components/Buttons";
import { API_BASE_URL } from "../config";

function BookingPage() {
  const [form, setForm] = useState({
    clientName: "",
    clientEmail: "",
    projectType: "",
    date: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.clientName ||
      !form.clientEmail ||
      !form.projectType ||
      !form.date
    ) {
      setStatus({
        submitting: false,
        success: false,
        error: "Please fill in all required fields.",
      });
      return;
    }

    setStatus({ submitting: true, success: false, error: "" });

    try {
      const res = await fetch(`${API_BASE_URL}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Failed to submit booking");
      }

      const data = await res.json();
      console.log("Created booking:", data.booking);

      setStatus({ submitting: false, success: true, error: "" });

      // optional: clear form
      setForm({
        clientName: "",
        clientEmail: "",
        projectType: "",
        date: "",
        message: "",
      });
    } catch (err) {
      console.error(err);
      setStatus({
        submitting: false,
        success: false,
        error: err.message || "Something went wrong. Please try again.",
      });
    }
  }

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-slate-100">
      <div className="max-w-3xl mx-auto px-6 py-12">
        <h1 className="text-2xl font-semibold mb-2">Booking request</h1>
        <p className="text-sm text-slate-400 mb-8 max-w-lg">
          Share a few details about your project so we can confirm availability,
          fit, and rates. This is a demo form for your portfolio app.
        </p>

        <form
          onSubmit={handleSubmit}
          className="bg-slate-900 border border-slate-800 rounded-2xl p-6 space-y-5"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <FormField
              label="Your name"
              name="clientName"
              value={form.clientName}
              onChange={handleChange}
              required
              placeholder="Brand manager / contact person"
            />
            <FormField
              label="Email"
              name="clientEmail"
              type="email"
              value={form.clientEmail}
              onChange={handleChange}
              required
              placeholder="you@brand.co.za"
            />
          </div>

          <FormField
            label="Project type"
            name="projectType"
            value={form.projectType}
            onChange={handleChange}
            required
            placeholder="e.g. Campaign, event hosting, product launch"
          />

          <FormField
            label="Preferred date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            required
          />

          <FormField
            label="Project details"
            name="message"
            value={form.message}
            onChange={handleChange}
            textarea
            placeholder="Share key details: location, deliverables, budget, links, timelines…"
          />

          {status.error && (
            <p className="text-xs text-red-400 bg-red-500/10 border border-red-500/40 rounded-lg px-3 py-2">
              {status.error}
            </p>
          )}

          {status.success && (
            <p className="text-xs text-emerald-300 bg-emerald-500/10 border border-emerald-500/40 rounded-lg px-3 py-2">
              Booking submitted successfully. In a real app, this would notify
              the creator’s team.
            </p>
          )}

          <div className="flex items-center gap-3 pt-2">
            <PrimaryButton type="submit" disabled={status.submitting}>
              {status.submitting ? "Submitting…" : "Submit booking request"}
            </PrimaryButton>
            <p className="text-[11px] text-slate-500">
              This is a portfolio demo — no real bookings are confirmed.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  value,
  onChange,
  type = "text",
  textarea = false,
  required,
  placeholder,
}) {
  return (
    <div className="space-y-1">
      <label className="text-xs font-medium text-slate-200" htmlFor={name}>
        {label}
        {required && <span className="text-red-400 ml-0.5">*</span>}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={4}
          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     placeholder:text-slate-500"
        />
      ) : (
        <input
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          type={type}
          className="w-full rounded-lg bg-slate-950 border border-slate-700 px-3 py-2 text-sm
                     focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                     placeholder:text-slate-500"
        />
      )}
    </div>
  );
}

export default BookingPage;
