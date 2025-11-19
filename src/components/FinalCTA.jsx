import { Mail, Smartphone, Link2 } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section id="cta" className="relative">
      <div className="absolute inset-0 bg-[#0B0D12]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-3xl mx-auto px-6 py-16 sm:py-20">
        <h3 className="text-white text-3xl font-extrabold text-center mb-8 tracking-tight">Request early access</h3>
        <form className="bg-[#0E1015] border border-slate-800 rounded-xl p-6 space-y-4">
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">[ EMAIL ]</label>
            <div className="flex items-center gap-2 bg-[#0B0D12] border border-slate-800 rounded px-3 py-2">
              <Mail className="h-4 w-4 text-slate-500" />
              <input type="email" required placeholder="you@company.com" className="w-full bg-transparent outline-none text-slate-200 placeholder:text-slate-500" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">[ PHONE ]</label>
            <div className="flex items-center gap-2 bg-[#0B0D12] border border-slate-800 rounded px-3 py-2">
              <Smartphone className="h-4 w-4 text-slate-500" />
              <input type="text" placeholder="Optional" className="w-full bg-transparent outline-none text-slate-200 placeholder:text-slate-500" />
            </div>
          </div>
          <div>
            <label className="block text-xs font-mono text-slate-400 mb-1">[ CHANNELS ]</label>
            <div className="grid sm:grid-cols-3 gap-2">
              {['WhatsApp','SMS','Email'].map((c) => (
                <label key={c} className="flex items-center gap-2 bg-[#0B0D12] border border-slate-800 rounded px-3 py-2 text-slate-300 text-sm">
                  <input type="checkbox" className="accent-blue-500" /> {c}
                </label>
              ))}
            </div>
          </div>
          <button type="submit" className="w-full inline-flex items-center justify-center gap-2 bg-[#3B82F6] hover:bg-blue-500 text-white font-semibold rounded-lg px-5 py-3 transition">
            <Link2 className="h-4 w-4" /> Join the waitlist
          </button>
        </form>
      </div>
    </section>
  )
}
