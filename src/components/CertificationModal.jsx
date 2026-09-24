import { AlertCircle, BadgeCheck, CalendarClock, FileText, ShieldCheck } from 'lucide-react'

export default function CertificationModal({ isOpen, record, onClose }) {
  if (!isOpen || !record) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/55 p-4 backdrop-blur-sm">
      <div className="w-full max-w-lg rounded-[28px] border border-stone-200 bg-white p-5 shadow-2xl sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-stone-500">Demo Record</p>
            <h3 className="mt-2 text-2xl font-bold text-stone-900">{record.name}</h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-stone-300 px-3 py-1 text-sm font-medium text-stone-600 hover:bg-stone-100"
          >
            Close
          </button>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
            <div className="flex items-center gap-3">
              <BadgeCheck className="h-5 w-5 text-emerald-600" />
              <p className="font-semibold text-emerald-800">{record.status}</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-stone-500">
                <FileText className="h-3.5 w-3.5 text-amber-600" /> Number
              </div>
              <p className="text-sm font-semibold text-stone-900">{record.number || record.result || 'N/A'}</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-stone-500">
                <ShieldCheck className="h-3.5 w-3.5 text-amber-600" /> Authority
              </div>
              <p className="text-sm font-semibold text-stone-900">{record.authority || 'Demo Authority'}</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-stone-500">
                <CalendarClock className="h-3.5 w-3.5 text-amber-600" /> Issue Date
              </div>
              <p className="text-sm font-semibold text-stone-900">{record.issueDate || 'N/A'}</p>
            </div>
            <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-stone-500">
                <CalendarClock className="h-3.5 w-3.5 text-amber-600" /> Expiry Date
              </div>
              <p className="text-sm font-semibold text-stone-900">{record.expiryDate || 'Not Applicable'}</p>
            </div>
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
            <div className="flex items-start gap-2">
              <AlertCircle className="mt-0.5 h-4 w-4" />
              <p>
                This is a simulated certification record for the HoneyChain prototype.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
