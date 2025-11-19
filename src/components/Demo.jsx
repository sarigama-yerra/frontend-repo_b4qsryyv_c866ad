export default function Demo() {
  return (
    <section className="">
      {/* Before */}
      <div className="bg-[#F3F4F6]">
        <div className="max-w-6xl mx-auto px-6 py-14">
          <h3 className="text-gray-900 text-xl font-bold mb-6">Before</h3>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="h-40 bg-gray-100 rounded mb-3" />
              <p className="text-gray-700 text-sm">Chaotic WhatsApp galleries</p>
            </div>
            <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
              <div className="h-40 bg-gray-100 rounded mb-3" />
              <p className="text-gray-700 text-sm">Disordered screenshots</p>
            </div>
          </div>
        </div>
      </div>
      {/* After */}
      <div className="relative bg-[#0E1015]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-10%,rgba(59,130,246,0.18),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 py-14 relative">
          <h3 className="text-white text-xl font-bold mb-6">After</h3>
          <div className="mx-auto max-w-md">
            <div className="relative rounded-2xl border border-slate-700 bg-slate-900/60 p-4 shadow-xl">
              <div className="rounded-lg bg-white h-80 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.6)]" />
            </div>
            <p className="text-slate-300 text-sm mt-4 text-center">Clean PDF spotlight — evidence you can rely on</p>
          </div>
        </div>
      </div>
    </section>
  )
}
