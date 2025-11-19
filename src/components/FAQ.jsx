import { useState } from 'react'

const faqs = [
  { q: 'Are messages stored?', a: 'Yes. Encrypted at rest. Access controlled. Audit trails enabled.' },
  { q: 'Which channels are supported?', a: 'WhatsApp, SMS, and Email at launch. Others under evaluation.' },
  { q: 'Is the PDF admissible?', a: 'We generate normalized, timestamped documents designed for dispute contexts.' },
]

function Item({ q, a }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-slate-800 rounded-lg overflow-hidden">
      <button onClick={() => setOpen(!open)} className="w-full text-left px-4 py-3 bg-[#0E1015] text-slate-200 font-mono text-sm flex items-center justify-between">
        <span>[ Q ] {q}</span>
        <span className="text-slate-500">{open ? '-' : '+'}</span>
      </button>
      {open && (
        <div className="px-4 py-3 bg-[#0B0D12] text-slate-300 font-mono text-sm border-t border-slate-800">[ A ] {a}</div>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section className="bg-[#080A0F] py-16 sm:py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="text-white text-2xl font-bold mb-6">FAQ</h3>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <Item key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
