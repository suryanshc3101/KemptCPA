import { Award, Layers, Zap, Shield, BarChart } from "lucide-react";

export default function About() {
  return (
    <section className="relative w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 flex items-start justify-between gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              About
            </h2>
            <p className="mt-3 text-slate-600">
              I'm <strong>Suryansh (Sury)</strong>, a B2B sales and business development
              professional focused on cloud infrastructure and cost optimization. I help
              teams modernize storage and accelerate data workloads with clear ROI.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Award className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-slate-900">What I Do</h3>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start gap-2">
                <Layers className="mt-0.5 h-4 w-4 flex-none" />
                <span>Outbound sales playbooks for infra & data teams (AWS, Azure, OCI).</span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="mt-0.5 h-4 w-4 flex-none" />
                <span>Performance-first storage value propositions with measurable impact.</span>
              </li>
              <li className="flex items-start gap-2">
                <BarChart className="mt-0.5 h-4 w-4 flex-none" />
                <span>ROI calculators and simple pricing narratives for quick approvals.</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-200 p-6 shadow-sm">
            <div className="mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5" />
              <h3 className="text-lg font-semibold text-slate-900">Capabilities</h3>
            </div>
            <ul className="space-y-2 text-slate-700">
              <li>
                CRM & automation: HubSpot, Apollo, Lemlist; clean pipelines, sequences, and
                reporting that leadership trusts.
              </li>
              <li>
                Technical acumen: storage basics (IOPS, throughput, latency), database &
                Kubernetes workloads, cost vs. performance trade‑offs.
              </li>
              <li>
                Collateral: one‑pagers, case studies, cold emails, and talk tracks that
                translate engineering wins into business outcomes.
              </li>
            </ul>
          </div>
        </div>

        {/* Experience Strip */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-600">Years in BD/Sales</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">5+ years</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-600">Focus</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">Cloud & Storage</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-5">
            <p className="text-sm font-medium text-slate-600">Tooling</p>
            <p className="mt-1 text-2xl font-semibold text-slate-900">HubSpot, Apollo</p>
          </div>
        </div>
      </div>
    </section>
  );
}