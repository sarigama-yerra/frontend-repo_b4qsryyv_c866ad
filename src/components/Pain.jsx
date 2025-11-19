import { AlertTriangle, MessageCircleOff, History, Search } from 'lucide-react'

export default function Pain() {
  const items = [
    { icon: AlertTriangle, text: 'Client denies prior agreement' },
    { icon: MessageCircleOff, text: 'Messages lost in WhatsApp/SMS' },
    { icon: History, text: 'Screenshots unverified / messy' },
    { icon: Search, text: 'Searching manually for proof' },
    { icon: AlertTriangle, text: 'Conflict escalation due to lack of evidence' },
  ]

  return (
    <section className="bg-[#0B0D12] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">The Problem</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-start gap-3 bg-[#0E1015] border border-slate-800 rounded-lg p-5">
              <Icon className="h-5 w-5 text-slate-300" />
              <p className="text-slate-200">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-[#0E1015] border border-slate-800 rounded-lg p-4">
          <p className="font-mono text-xs text-slate-200">
            [ EVIDENCE GAP ] <span className="text-slate-400">Lost time. Lost credibility. Endless disputes.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
