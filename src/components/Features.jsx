import { Radar, Clock, Archive, Bell } from 'lucide-react'

const features = [
  { title: 'Automatic capture', icon: Radar, desc: 'Always-on ingestion from connected channels.' },
  { title: 'Timestamped PDF', icon: Clock, desc: 'Every line anchored with UTC timestamps.' },
  { title: 'Secure archive', icon: Archive, desc: 'Encrypted at rest, integrity-checked.' },
  { title: 'Workflow notifications', icon: Bell, desc: 'Status updates when evidence is ready.' },
]

export default function Features() {
  return (
    <section className="bg-[#0E1015] py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-8 tracking-tight">Capabilities</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-[#0E121A] border border-slate-800 rounded-xl p-5 hover:bg-[#101520] transition">
              <div className="flex items-center gap-2 mb-2">
                <f.icon className="h-5 w-5 text-blue-300" />
                <h3 className="text-white font-semibold">{f.title}</h3>
              </div>
              <p className="text-slate-300 text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
