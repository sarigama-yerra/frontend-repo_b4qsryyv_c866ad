export default function StoryTeam() {
  return (
    <section className="bg-[#0D1422]">
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Story */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-3">Why this exists</h3>
            <p className="text-slate-300 leading-relaxed">
              Repeated client disputes. No clean way to prove what was said. We built an internal script, it spread by word of mouth, and became a product. No glitter—just a tool that ends arguments.
            </p>
          </div>
          {/* Team */}
          <div>
            <h3 className="text-white text-2xl font-bold mb-3">Team</h3>
            <div className="grid sm:grid-cols-2 gap-6">
              {[1,2,3,4].map((i) => (
                <div key={i} className="bg-[#0E1015] border border-slate-800 rounded-lg p-4">
                  <div className="h-28 rounded bg-[linear-gradient(0deg,rgba(255,255,255,0.06),rgba(255,255,255,0.06))]" />
                  <p className="mt-3 text-white font-medium">Member {i}</p>
                  <p className="text-slate-400 text-sm">Security & Engineering</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
