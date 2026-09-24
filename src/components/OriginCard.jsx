import { MapPin, Navigation, Trees } from 'lucide-react'

export default function OriginCard({ batch }) {
  return (
    <section className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-stone-900">📍 Origin & Source</h2>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-4">
          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-stone-500">
              <Navigation className="h-4 w-4 text-amber-600" /> Apiary
            </div>
            <p className="text-base font-semibold text-stone-900">{batch.apiary}</p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-stone-500">
              <MapPin className="h-4 w-4 text-amber-600" /> Location
            </div>
            <p className="text-base font-semibold text-stone-900">{batch.location}</p>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-stone-500">
              <Trees className="h-4 w-4 text-amber-600" /> Flora Source
            </div>
            <p className="text-base font-semibold text-stone-900">{batch.floraSource}</p>
          </div>
        </div>

        <div className="rounded-[28px] border border-amber-200 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 p-5">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-amber-800">Origin Map</p>
          <div className="rounded-2xl border border-dashed border-amber-300 bg-white/70 p-5 text-center">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700">
              <MapPin className="h-5 w-5" />
            </div>
            <p className="text-xl font-bold text-stone-800">{batch.location}</p>
            <p className="mt-2 text-sm text-stone-600">Hive {batch.hiveId} • {batch.harvestDate}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
