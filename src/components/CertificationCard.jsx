import { Award, ChevronRight, FileText, ShieldCheck } from 'lucide-react'

export default function CertificationCard({ record, onView }) {
  const isVerified = record.status === 'Verified'

  return (
    <div className="rounded-2xl border border-amber-100 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700">
            {record.type === 'report' ? <FileText className="h-5 w-5" /> : <Award className="h-5 w-5" />}
          </div>
          <div>
            <p className="font-semibold text-stone-900">{record.name}</p>
            <p className="text-xs text-stone-500">{record.number || record.result || record.reference || 'Demo record'}</p>
          </div>
        </div>
        <span className={`rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] ${isVerified ? 'bg-emerald-100 text-emerald-700' : 'bg-amber-100 text-amber-700'}`}>
          {record.status}
        </span>
      </div>

      <div className="mb-4 flex items-center gap-2 text-xs text-stone-500">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
        Demo record
      </div>

      <button
        type="button"
        onClick={() => onView(record)}
        className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-stone-700"
      >
        {record.type === 'report' ? 'View Report' : 'View Certificate'}
        <ChevronRight className="h-3.5 w-3.5" />
      </button>
    </div>
  )
}
