import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ArrowRight, BadgeCheck, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react'
import Header from '../components/Header'
import VerificationBadge from '../components/VerificationBadge'
import BatchDetails from '../components/BatchDetails'
import OriginCard from '../components/OriginCard'
import CertificationCard from '../components/CertificationCard'
import CertificationModal from '../components/CertificationModal'
import BatchTimeline from '../components/BatchTimeline'
import BlockchainCard from '../components/BlockchainCard'
import { batches } from '../data/batches'

export default function VerifyBatch() {
  const { batchId } = useParams()
  const batch = batches[batchId]
  const [selectedRecord, setSelectedRecord] = useState(null)

  const certificationCards = useMemo(() => batch?.certifications ?? [], [batch])

  if (!batch) {
    return (
      <div className="min-h-screen bg-[#fffaf3] text-stone-800">
        <Header label="Batch Verification" />
        <main className="mx-auto flex max-w-3xl items-center justify-center px-4 py-16 sm:px-6">
          <div className="w-full rounded-[32px] border border-rose-200 bg-white p-8 text-center shadow-sm">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-rose-100 text-rose-700">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-rose-700">Batch Not Found</p>
            <h1 className="mt-4 text-3xl font-black tracking-tight text-stone-900">We couldn't find a HoneyChain record for this batch.</h1>
            <p className="mt-3 text-stone-600">Batch ID: {batchId || 'UNKNOWN'}</p>
            <a href="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-3 font-semibold text-white">
              Return Home
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </main>
      </div>
    )
  }

  const qualityRecords = [
    { id: 'quality', name: 'Quality Information', status: 'Verified', result: batch.quality.moistureContent, type: 'report', authority: 'Quality Control Lab', issueDate: batch.quality.testDate },
  ]

  return (
    <div className="min-h-screen bg-[#fffaf3] text-stone-800">
      <Header label="Batch Verification" />

      <main className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="mb-6 rounded-[32px] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-emerald-50 p-5 shadow-sm sm:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-amber-700">HoneyChain</p>
              <h1 className="mt-2 text-2xl font-black tracking-tight text-stone-900 sm:text-4xl">HONEY BATCH VERIFICATION</h1>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-700">
              <CheckCircle2 className="h-4 w-4" /> Verified Batch
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-6">
            <VerificationBadge batch={batch} />
            <BatchDetails batch={batch} />
            <OriginCard batch={batch} />

            <section className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-stone-900">📜 Certifications & Quality</h2>
              <p className="mb-5 text-sm text-stone-500">Certification records shown here are simulated demo data for the HoneyChain prototype.</p>
              <div className="grid gap-4 md:grid-cols-2">
                {certificationCards.map((record) => (
                  <CertificationCard key={record.id} record={record} onView={setSelectedRecord} />
                ))}
              </div>
            </section>

            <section className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-stone-900">🧪 Quality Information</h2>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-sm text-stone-500">Moisture Content</p>
                  <p className="mt-2 text-xl font-bold text-stone-900">{batch.quality.moistureContent}</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-sm text-stone-500">Laboratory Test</p>
                  <p className="mt-2 text-xl font-bold text-stone-900">{batch.quality.laboratoryTest}</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-sm text-stone-500">Quality Report</p>
                  <p className="mt-2 text-xl font-bold text-stone-900">{batch.quality.qualityReport}</p>
                </div>
                <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                  <p className="text-sm text-stone-500">Quality Status</p>
                  <p className="mt-2 text-xl font-bold text-stone-900">{batch.quality.qualityStatus}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedRecord(qualityRecords[0])}
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-3 text-sm font-semibold text-white hover:bg-stone-700"
              >
                View Test Report
                <ArrowRight className="h-4 w-4" />
              </button>
            </section>

            <BatchTimeline journey={batch.journey} />
            <BlockchainCard batch={batch} />

            <section className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm sm:p-6">
              <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-stone-900">🔍 Traceability</h2>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center"> 
                {batch.traceability.map((step, index) => (
                  <div key={step} className="flex items-center gap-3">
                    <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold uppercase tracking-[0.12em] text-amber-800">
                      {step}
                    </div>
                    {index < batch.traceability.length - 1 && <ArrowRight className="hidden h-4 w-4 text-amber-500 sm:block" />}
                  </div>
                ))}
              </div>
              <p className="mt-5 text-center text-sm text-stone-600">HoneyChain provides a traceable digital record of the honey batch from harvest through consumer verification.</p>
            </section>

            <section className="rounded-[32px] border border-emerald-200 bg-gradient-to-br from-emerald-50 via-white to-lime-50 p-6 shadow-[0_18px_40px_rgba(16,185,129,0.08)] sm:p-8">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-200">
                  <BadgeCheck className="h-6 w-6" />
                </div>
                <p className="text-lg font-bold tracking-tight text-stone-900">HONEYCHAIN VERIFICATION</p>
              </div>

              <ul className="space-y-3 text-sm text-stone-700">
                <li>✓ Batch identified</li>
                <li>✓ Origin recorded</li>
                <li>✓ Processing history recorded</li>
                <li>✓ Certification records available</li>
                <li>✓ Quality information available</li>
                <li>✓ Blockchain verification simulated</li>
                <li>✓ Record Integrity: MATCH</li>
              </ul>

              <div className="mt-6 rounded-2xl border border-emerald-200 bg-white/80 p-4">
                <p className="text-sm text-stone-500">Verified Batch</p>
                <p className="mt-1 text-xl font-black text-stone-900">{batch.batchId}</p>
              </div>

              <div className="mt-4 flex items-center gap-2 text-sm text-stone-600">
                <Sparkles className="h-4 w-4 text-amber-500" />
                Scan the QR code again anytime to view this batch record.
              </div>
            </section>
          </div>

          <aside className="space-y-6">
            <div className="rounded-[32px] border border-amber-200 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Verification Status</p>
              <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 p-4">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                  <div>
                    <p className="text-xl font-black text-stone-900">VERIFIED BATCH</p>
                    <p className="text-sm text-stone-600">Record Integrity Verified</p>
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <CertificationModal isOpen={Boolean(selectedRecord)} record={selectedRecord} onClose={() => setSelectedRecord(null)} />
    </div>
  )
}
