import { Hash, ShieldCheck } from 'lucide-react'

export default function BlockchainCard({ batch }) {
  return (
    <section className="rounded-3xl border border-emerald-100 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-stone-900">🔗 Blockchain Verification</h2>

      <div className="rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">Demo Blockchain Verification</p>
        <ul className="space-y-2 text-sm text-stone-700">
          <li>✓ Batch record found</li>
          <li>✓ Blockchain record found</li>
          <li>✓ Hash comparison completed</li>
          <li>✓ Record integrity MATCH</li>
        </ul>
      </div>

      <div className="mt-5 rounded-2xl border border-stone-200 bg-stone-50 p-4">
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-stone-700">
          <ShieldCheck className="h-4 w-4 text-emerald-600" />
          Record Integrity Check
        </div>
        <div className="space-y-3 text-sm text-stone-600">
          <div className="flex items-center justify-between gap-3">
            <span>Batch ID</span>
            <span className="font-semibold text-stone-900">{batch.batchId}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span>Hash</span>
            <span className="font-semibold text-stone-900">{batch.blockchain.hash}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span>Timestamp</span>
            <span className="font-semibold text-stone-900">{batch.blockchain.timestamp}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span>Status</span>
            <span className="font-semibold text-emerald-700">{batch.blockchain.status}</span>
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm text-amber-900">
        <div className="flex items-start gap-2">
          <Hash className="mt-0.5 h-4 w-4" />
          <p>
            Blockchain verification is simulated for this prototype demo. The production architecture is designed to use a SHA-256 batch hash and blockchain-backed record verification.
          </p>
        </div>
      </div>
    </section>
  )
}
