import { ArrowDown, Check, PackageCheck } from 'lucide-react'

export default function BatchTimeline({ journey }) {
  return (
    <section className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="mb-6 flex items-center gap-2 text-xl font-semibold text-stone-900">📦 Batch Journey</h2>

      <div className="relative mx-auto max-w-4xl">
        <div className="hidden items-center justify-between md:flex">
          {journey.map((step, index) => (
            <div key={step.id} className="flex flex-1 flex-col items-center">
              <div className="flex items-center gap-2 text-amber-600">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-emerald-100 ring-4 ring-white">
                  <Check className="h-4 w-4" />
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{step.name}</p>
                <p className="mt-1 text-sm font-medium text-stone-700">{step.date}</p>
              </div>
              {index < journey.length - 1 && (
                <div className="mt-4 flex items-center justify-center text-amber-400">
                  <ArrowDown className="h-4 w-4" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="space-y-4 md:hidden">
          {journey.map((step) => (
            <div key={step.id} className="relative pl-10">
              <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 ring-4 ring-white">
                <PackageCheck className="h-4 w-4" />
              </div>
              <div className="rounded-2xl border border-stone-200 bg-stone-50 p-3">
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-700">{step.name}</p>
                <p className="mt-1 text-sm font-medium text-stone-800">{step.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
