import { QRCodeSVG } from 'qrcode.react'
import { ArrowRight, QrCode } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

export default function QRCodeCard({ batchId }) {
  const navigate = useNavigate()
  const verificationUrl = `${window.location.origin}/verify/${batchId}`

  return (
    <div className="rounded-[32px] border border-amber-200 bg-white p-5 shadow-[0_18px_40px_rgba(251,146,60,0.12)] sm:p-6">
      <div className="mb-5 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-100 text-amber-700">
          <QrCode className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-stone-500">Batch QR</p>
          <p className="text-lg font-semibold text-stone-900">Honey Batch QR Verification Demo</p>
        </div>
      </div>

      <div className="mx-auto flex max-w-[260px] items-center justify-center rounded-[28px] border border-stone-200 bg-white p-4 shadow-inner">
        <QRCodeSVG value={verificationUrl} size={220} bgColor="#ffffff" fgColor="#1f2937" level="H" includeMargin />
      </div>

      <p className="mt-5 text-center text-sm text-stone-600">{verificationUrl}</p>

      <button
        type="button"
        onClick={() => navigate(`/verify/${batchId}`)}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-200 transition hover:brightness-105"
      >
        Open Verification Page
        <ArrowRight className="h-4 w-4" />
      </button>

      <p className="mt-4 text-center text-sm text-stone-500">Scan this QR code with your phone to view the HoneyChain batch verification page.</p>
    </div>
  )
}
