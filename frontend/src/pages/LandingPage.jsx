// src/pages/LandingPage.jsx
import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/Buttons";
import { CheckCircleIcon, CalendarIcon, MessageSquareIcon } from "../components/Icons";

function LandingPage() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-slate-950 text-slate-100">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-3 py-1 text-xs mb-4">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Booking made effortless for creators
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4">
            Manage your bookings <span className="text-indigo-400">without the chaos.</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base mb-6 max-w-md">
            ArtistBook gives influencers and managers one clean place to receive, review, and confirm
            collaborations — without digging through DMs and emails.
          </p>

          <div className="flex flex-wrap items-center gap-3 mb-6">
            <PrimaryButton as={Link} to="/book">
              Book this creator
            </PrimaryButton>
            <SecondaryButton as={Link} to="/login">
              Creator / Manager Login
            </SecondaryButton>
          </div>

          <div className="flex flex-wrap gap-6 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="h-4 w-4 text-emerald-400" />
              <span>No more lost WhatsApp requests</span>
            </div>
            <div className="flex items-center gap-2">
              <CalendarIcon className="h-4 w-4 text-indigo-400" />
              <span>Central calendar & approvals</span>
            </div>
          </div>
        </div>

        {/* Hero Card */}
        <div className="md:justify-self-end w-full">
          <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 shadow-xl shadow-black/40">
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs text-slate-400">Featured Creator</p>
                <p className="font-semibold text-sm">@TheInfluencer</p>
              </div>
              <span className="rounded-full bg-emerald-500/10 text-emerald-300 text-[10px] px-2 py-1 border border-emerald-500/40">
                Accepting bookings
              </span>
            </div>

            <div className="space-y-3 text-xs">
              <InfoRow label="Typical projects" value="Brand collabs · Events · Social campaigns" />
              <InfoRow label="Starting rate" value="From R4 500 per activation" />
              <InfoRow label="Response time" value="< 24 hours on weekdays" />
            </div>

            <div className="mt-5 border-t border-slate-800 pt-4">
              <p className="text-[11px] text-slate-400 mb-2">Quick booking preview</p>
              <div className="bg-slate-900 border border-slate-800 rounded-xl p-3 space-y-2 text-[11px]">
                <div className="flex justify-between">
                  <span className="text-slate-400">Brand</span>
                  <span className="font-medium">Local Fashion Label</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Campaign date</span>
                  <span className="font-medium">12 Feb 2026</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Status</span>
                  <span className="rounded-full bg-amber-500/10 text-amber-300 px-2 py-0.5 text-[10px] border border-amber-500/40">
                    Pending review
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-t border-slate-800 bg-slate-950/70">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <h2 className="text-lg font-semibold mb-6">How ArtistBook works</h2>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <StepCard
              icon={<MessageSquareIcon className="h-5 w-5" />}
              title="1. Brands submit a request"
              text="They fill in a booking form with dates, budget, and campaign details — no more messy DMs."
            />
            <StepCard
              icon={<CalendarIcon className="h-5 w-5" />}
              title="2. Creator reviews & confirms"
              text="The creator or their manager accepts, declines, or negotiates from one dashboard."
            />
            <StepCard
              icon={<CheckCircleIcon className="h-5 w-5" />}
              title="3. Everything is stored in one place"
              text="Track what’s confirmed, pending, or declined — with a simple calendar and history."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950">
        <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold mb-1">Ready to stop losing bookings?</h3>
            <p className="text-xs text-slate-400 max-w-md">
              Use this demo to show brands how serious you are about managing your collaborations professionally.
            </p>
          </div>
          <div className="flex gap-3">
            <PrimaryButton as={Link} to="/book">
              Start a booking
            </PrimaryButton>
            <SecondaryButton as={Link} to="/login">
              Creator login
            </SecondaryButton>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 text-[11px] text-slate-500">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>© {new Date().getFullYear()} ArtistBook · Demo platform</span>
          <span className="text-slate-600">
            Built with React & Node · Portfolio showcase
          </span>
        </div>
      </footer>
    </div>
  );
}

function InfoRow({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-slate-400">{label}</span>
      <span className="font-medium text-right">{value}</span>
    </div>
  );
}

function StepCard({ icon, title, text }) {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
      <div className="inline-flex items-center justify-center rounded-full bg-slate-800 text-indigo-300 mb-3 h-8 w-8">
        {icon}
      </div>
      <h3 className="font-semibold mb-1 text-sm">{title}</h3>
      <p className="text-slate-400 text-xs leading-relaxed">{text}</p>
    </div>
  );
}

export default LandingPage;
