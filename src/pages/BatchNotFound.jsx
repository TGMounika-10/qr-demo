import { ArrowRight, ShieldAlert } from 'lucide-react'

export default function BatchNotFound({ batchId }) {
  return (
    <div className="min-h-screen bg-[#fffaf3] p-4">
      <div className="mx-auto flex min-h-screen max-w-3xl items-center justify-center">
        <div className="w-full rounded-[32px] border border-rose-200 bg-white p-8 text-center shadow-sm">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-700">
            <ShieldAlert className="h-8 w-8" />
          </div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-rose-700">Batch Not Found</p>
          <h1 className="mt-4 text-3xl font-black tracking-tight text-stone-900">We couldn't find a HoneyChain record for this batch.</h1>
          <p className="mt-3 text-stone-600">Batch ID: {batchId || 'UNKNOWN'}</p>
          <a href="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 font-semibold text-white">
            Return Home
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  )
}
