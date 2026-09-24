import { Flower2 } from 'lucide-react'

export default function Header({ label = 'Batch Verification' }) {
  return (
    <header className="sticky top-0 z-20 border-b border-amber-200/80 bg-[#fffaf1]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 text-white shadow-sm">
            <Flower2 className="h-5 w-5" />
          </div>
          <div>
            <p className="text-lg font-semibold tracking-tight text-stone-900">HoneyChain</p>
            <p className="text-xs text-stone-500">{label}</p>
          </div>
        </div>
        <div className="rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-amber-800">
          {label === 'Batch Verification' ? 'Batch Verification' : 'Demo Console'}
        </div>
      </div>
    </header>
  )
}
