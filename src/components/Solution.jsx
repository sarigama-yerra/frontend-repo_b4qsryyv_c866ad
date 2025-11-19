import { Link2, Download, ShieldCheck, FileText } from 'lucide-react'

const steps = [
  {
    title: 'Connect your channels',
    desc: 'WhatsApp • SMS • Email',
    icon: Link2,
  },
  {
    title: 'Auto‑capture messages',
    desc: 'Background capture without noise',
    icon: Download,
  },
  {
    title: 'Generate clean PDFs',
    desc: 'Timestamped, normalized layout',
    icon: FileText,
  },
  {
    title: 'Secure archive in‑app',
    desc: 'Encrypted, searchable, immutable',
    icon: ShieldCheck,
  },
]

export default function Solution() {
  return (
    <section id="how" className="bg-[#1F2937] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-8 tracking-tight">How it works</h2>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className="group bg-[#111827] border border-slate-700 rounded-xl p-5 hover:border-slate-500 transition shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)]"
            >
              <div className="flex items-center gap-2 text-blue-300/90 font-mono text-[11px] mb-3">
                <span>[{String(i + 1).padStart(2, '0')}]</span>
                <span>STEP</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <s.icon className="h-5 w-5 text-blue-300" />
                <h3 className="text-white font-semibold">{s.title}</h3>
              </div>
              <p className="text-slate-300 text-sm">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
