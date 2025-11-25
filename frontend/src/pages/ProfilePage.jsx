import { useEffect, useState } from "react";

function ProfilePage() {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadBookings() {
      try {
        setLoading(true);
        setError("");

        const res = await fetch("http://localhost:4000/bookings");

        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          throw new Error(body.error || "Failed to load bookings");
        }

        const data = await res.json();
        setBookings(data.bookings || []);
      } catch (err) {
        console.error("Error loading bookings:", err);
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    }

    loadBookings();
  }, []);

  const total = bookings.length;
  const pending = bookings.filter((b) => b.status === "pending").length;
  const accepted = bookings.filter((b) => b.status === "accepted").length;
  const declined = bookings.filter((b) => b.status === "declined").length;

  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-slate-100">
      <div className="max-w-6xl mx-auto px-6 py-10 space-y-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div>
            <p className="text-xs text-slate-400 mb-1">Creator dashboard</p>
            <h1 className="text-2xl font-semibold tracking-tight">
              Bookings overview
            </h1>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              All incoming booking requests in one place. This is the view
              you’ll show in your portfolio to prove you can build real
              dashboards.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs">
            <StatPill label="Total" value={total} />
            <StatPill label="Pending" value={pending} tone="amber" />
            <StatPill label="Accepted" value={accepted} tone="emerald" />
            <StatPill label="Declined" value={declined} tone="rose" />
          </div>
        </div>

        {/* Error / loading states */}
        {error && (
          <p className="text-xs text-red-300 bg-red-500/10 border border-red-500/40 rounded-lg px-3 py-2">
            {error}
          </p>
        )}

        {loading ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-sm text-slate-300">
            Loading bookings…
          </div>
        ) : bookings.length === 0 ? (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-sm text-slate-300">
            No bookings yet. Submit one from the{" "}
            <span className="underline underline-offset-2">Booking</span> page
            to see it appear here.
          </div>
        ) : (
          <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden">
            <div className="px-6 py-3 border-b border-slate-800 flex items-center justify-between">
              <h2 className="text-sm font-medium">Recent bookings</h2>
              <span className="text-[11px] text-slate-400">
                Showing {bookings.length} request
                {bookings.length !== 1 ? "s" : ""}
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="min-w-full text-xs">
                <thead className="bg-slate-900/80 border-b border-slate-800">
                  <tr className="text-slate-400 text-[11px] uppercase tracking-wide">
                    <Th>Client</Th>
                    <Th>Email</Th>
                    <Th>Project type</Th>
                    <Th>Date</Th>
                    <Th>Status</Th>
                    <Th>Created</Th>
                  </tr>
                </thead>
                <tbody>
                  {bookings.map((b) => (
                    <tr
                      key={b.id}
                      className="border-b border-slate-850/60 last:border-b-0 hover:bg-slate-900/60 transition-colors"
                    >
                      <Td>{b.clientName}</Td>
                      <Td className="text-slate-300">{b.clientEmail}</Td>
                      <Td className="text-slate-200">{b.projectType}</Td>
                      <Td>{formatDate(b.date)}</Td>
                      <Td>
                        <StatusBadge status={b.status} />
                      </Td>
                      <Td className="text-slate-400">
                        {formatDateTime(b.createdAt)}
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function StatPill({ label, value, tone = "slate" }) {
  const tones = {
    slate: "bg-slate-900 border-slate-700 text-slate-200",
    amber: "bg-amber-500/10 border-amber-500/40 text-amber-200",
    emerald: "bg-emerald-500/10 border-emerald-500/40 text-emerald-200",
    rose: "bg-rose-500/10 border-rose-500/40 text-rose-200",
  };

  return (
    <div
      className={`flex items-center gap-2 rounded-full border px-3 py-1 ${
        tones[tone] || tones.slate
      }`}
    >
      <span className="text-[10px] uppercase tracking-wide">{label}</span>
      <span className="text-sm font-semibold">{value}</span>
    </div>
  );
}

function Th({ children }) {
  return <th className="px-4 py-2 text-left whitespace-nowrap">{children}</th>;
}

function Td({ children, className = "" }) {
  return (
    <td
      className={`px-4 py-2 align-middle whitespace-nowrap text-[11px] text-slate-200 ${className}`}
    >
      {children}
    </td>
  );
}

function StatusBadge({ status }) {
  const s = status?.toLowerCase() || "pending";

  const map = {
    pending: {
      label: "Pending",
      classes: "bg-amber-500/10 text-amber-200 border border-amber-500/40",
    },
    accepted: {
      label: "Accepted",
      classes:
        "bg-emerald-500/10 text-emerald-200 border border-emerald-500/40",
    },
    declined: {
      label: "Declined",
      classes: "bg-rose-500/10 text-rose-200 border border-rose-500/40",
    },
  };

  const cfg = map[s] || map.pending;

  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ${cfg.classes}`}
    >
      {cfg.label}
    </span>
  );
}

function formatDate(value) {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "-";
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function formatDateTime(value) {
  if (!value) return "-";
  const d = new Date(value);
  if (Number.isNaN(d.getTime())) return "-";
  return d.toLocaleString(undefined, {
    year: "numeric",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export default ProfilePage;
