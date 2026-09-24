import { CheckCircle2, ShieldCheck } from 'lucide-react'

export default function VerificationBadge({ batch }) {
  return (
    <section className="rounded-3xl border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-6 shadow-[0_16px_40px_rgba(16,185,129,0.1)]">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-200">
          <CheckCircle2 className="h-6 w-6" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">Verified batch</p>
          <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-stone-500">Record Integrity Verified</p>
        </div>
      </div>

      <div className="space-y-2">
        <p className="text-sm font-medium text-stone-500">Batch ID</p>
        <p className="text-2xl font-bold tracking-tight text-stone-900">{batch.batchId}</p>
        <p className="text-lg text-stone-700">{batch.honeyType}</p>
      </div>

      <div className="mt-6 rounded-2xl border border-emerald-200 bg-white/80 p-4">
        <div className="flex items-start gap-3">
          <ShieldCheck className="mt-0.5 h-5 w-5 text-emerald-600" />
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Blockchain Record Verified</p>
            <p className="mt-1 text-sm text-stone-600">Record Integrity: MATCH</p>
          </div>
        </div>
      </div>
    </section>
  )
}
