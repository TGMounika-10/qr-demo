import { CalendarDays, Droplets, MapPinned, Package, Warehouse } from 'lucide-react'

export default function BatchDetails({ batch }) {
  const details = [
    { label: 'Batch ID', value: batch.batchId, icon: Warehouse },
    { label: 'Honey Type', value: batch.honeyType, icon: Package },
    { label: 'Harvest Date', value: batch.harvestDate, icon: CalendarDays },
    { label: 'Quantity', value: batch.quantity, icon: Package },
    { label: 'Moisture', value: batch.moisture, icon: Droplets },
    { label: 'Hive ID', value: batch.hiveId, icon: MapPinned },
    { label: 'Flora Source', value: batch.floraSource, icon: MapPinned },
  ]

  return (
    <section className="rounded-3xl border border-amber-100 bg-white p-5 shadow-sm sm:p-6">
      <h2 className="mb-5 flex items-center gap-2 text-xl font-semibold text-stone-900">🍯 Batch Information</h2>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {details.map(({ label, value, icon: Icon }) => (
          <div key={label} className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
            <div className="mb-2 flex items-center gap-2 text-sm font-medium text-stone-500">
              <Icon className="h-4 w-4 text-amber-600" />
              {label}
            </div>
            <p className="text-base font-semibold text-stone-900">{value}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
