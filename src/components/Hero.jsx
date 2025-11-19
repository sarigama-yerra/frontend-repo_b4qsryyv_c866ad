import { FileText, Clock } from 'lucide-react'

function PhonePDFMockup() {
  return (
    <div className="relative mx-auto w-[260px] sm:w-[300px] md:w-[340px]">
      {/* spotlight */}
      <div className="absolute -inset-10 rounded-full blur-2xl opacity-30 bg-[radial-gradient(circle_at_50%_0%,rgba(59,130,246,0.25),transparent_60%)]" />

      {/* phone frame */}
      <div className="relative rounded-[2.2rem] border border-slate-700 bg-slate-900/80 shadow-2xl shadow-black/60 backdrop-blur-sm p-3">
        <div className="mx-auto h-[540px] sm:h-[600px] w-full rounded-[1.6rem] bg-black/60 p-2 border border-slate-800">
          {/* camera notch */}
          <div className="mx-auto h-6 w-28 rounded-b-2xl bg-black/70 mb-2" />
          {/* white PDF */}
          <div className="relative h-full w-full rounded-xl bg-white shadow-[0_30px_60px_-15px_rgba(0,0,0,0.6)]">
            <div className="flex items-center justify-between px-4 py-3 border-b border-slate-200">
              <div className="flex items-center gap-2 text-slate-600">
                <FileText className="h-4 w-4" />
                <span className="text-xs font-medium tracking-tight">Evidence.pdf</span>
              </div>
              <div className="flex items-center gap-1 text-slate-500 font-mono">
                <Clock className="h-4 w-4" />
                <span className="text-[10px]">2025-01-12T14:03:27Z</span>
              </div>
            </div>
            <div className="p-4 space-y-3">
              <div className="h-3 w-1/2 bg-slate-200 rounded" />
              <div className="h-2 w-3/4 bg-slate-100 rounded" />
              <div className="h-2 w-2/3 bg-slate-100 rounded" />
              <div className="h-2 w-4/5 bg-slate-100 rounded" />
              <div className="mt-6 border border-slate-200 rounded-lg p-3">
                <div className="text-[10px] font-mono text-slate-500 tracking-tight mb-2">[ LOG ]
                  <span className="ml-2">WHATSAPP • +33 6 00 00 00</span>
                </div>
                <div className="space-y-2">
                  <div className="h-2 w-11/12 bg-slate-100 rounded" />
                  <div className="h-2 w-9/12 bg-slate-100 rounded" />
                  <div className="h-2 w-10/12 bg-slate-100 rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[#111827]" />
      {/* micro-noise + subtle grid */}
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:3px_3px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-20 sm:py-28 md:py-32 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-300/80 border border-blue-500/30 rounded px-2 py-1 mb-6">
            <span>[ FORENSIC ]</span>
            <span className="text-blue-400">CLIENTPROOF SECURE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white">
            Clean, timestamped, tamper‑resistant conversation proofs
          </h1>
          <p className="mt-5 text-slate-300 text-lg leading-relaxed">
            Capture WhatsApp, SMS and Email automatically. Generate pristine PDFs with exact timestamps—ready to end disputes.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-[#3B82F6] text-white font-semibold shadow hover:bg-blue-500 transition">
              Get early access
            </a>
            <a href="#how" className="inline-flex items-center justify-center px-5 py-3 rounded-lg border border-slate-600 text-slate-200 hover:bg-slate-800/60 transition">
              See how it works
            </a>
          </div>
        </div>
        <div className="flex justify-center md:justify-end">
          <PhonePDFMockup />
        </div>
      </div>
    </section>
  )
}
