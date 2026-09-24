import { useNavigate } from 'react-router-dom'
import { ArrowRight, CalendarDays, MapPin, Package, ShieldCheck } from 'lucide-react'
import Header from '../components/Header'
import QRCodeCard from '../components/QRCodeCard'
import { batches } from '../data/batches'

export default function Home() {
  const navigate = useNavigate()
  const batch = batches.HC001

  return (
    <div className="min-h-screen bg-[#fffaf3] text-stone-800">
      <Header label="Demo Console" />

      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8 rounded-[32px] border border-amber-200 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 shadow-sm sm:p-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.26em] text-amber-700">HoneyChain</p>
              <h1 className="mt-3 text-3xl font-black tracking-tight text-stone-900 sm:text-5xl">Honey Batch QR Verification Demo</h1>
            </div>
            <div className="rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
              <span className="inline-flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> Verified Demo</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[32px] border border-stone-200 bg-white p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Batch ID</p>
                <p className="mt-2 text-2xl font-black text-stone-900">{batch.batchId}</p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Honey Type</p>
                <p className="mt-2 text-xl font-bold text-stone-900">{batch.honeyType}</p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-stone-500"><CalendarDays className="h-4 w-4 text-amber-600" /> Harvest Date</div>
                <p className="mt-2 text-lg font-semibold text-stone-900">{batch.harvestDate}</p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
                <div className="flex items-center gap-2 text-sm font-medium text-stone-500"><MapPin className="h-4 w-4 text-amber-600" /> Origin</div>
                <p className="mt-2 text-lg font-semibold text-stone-900">{batch.apiary}</p>
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4 sm:col-span-2">
                <div className="flex items-center gap-2 text-sm font-medium text-stone-500"><Package className="h-4 w-4 text-amber-600" /> Quantity</div>
                <p className="mt-2 text-lg font-semibold text-stone-900">{batch.quantity}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => navigate(`/verify/${batch.batchId}`)}
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-stone-900 px-4 py-3 text-sm font-semibold text-white hover:bg-stone-700"
            >
              Open Verification Page
              <ArrowRight className="h-4 w-4" />
            </button>
          </section>

          <QRCodeCard batchId={batch.batchId} />
        </div>
      </main>
    </div>
  )
}
