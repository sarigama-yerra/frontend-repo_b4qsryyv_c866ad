import Hero from './components/Hero'
import Pain from './components/Pain'
import Solution from './components/Solution'
import Features from './components/Features'
import Demo from './components/Demo'
import StoryTeam from './components/StoryTeam'
import FAQ from './components/FAQ'
import FinalCTA from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-screen bg-[#0E1015] text-slate-200">
      {/* Top subtle texture */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[radial-gradient(circle_at_50%_50%,white_1px,transparent_1px)] bg-[length:4px_4px]" />

      {/* NAV */}
      <header className="relative z-10 border-b border-slate-800/80 bg-[#0E1015]/70 backdrop-blur supports-[backdrop-filter]:bg-[#0E1015]/60">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.9)]" />
            <span className="font-semibold tracking-tight">ClientProof Secure</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-300">
            <a href="#how" className="hover:text-white">How it works</a>
            <a href="#features" className="hover:text-white">Capabilities</a>
            <a href="#cta" className="hover:text-white">Get access</a>
          </nav>
        </div>
      </header>

      <main className="relative z-0">
        <Hero />
        <div id="problem"><Pain /></div>
        <div id="how"><Solution /></div>
        <div id="features"><Features /></div>
        <Demo />
        <StoryTeam />
        <FAQ />
        <FinalCTA />
      </main>

      <footer className="border-t border-slate-800 text-sm text-slate-400 py-6 text-center">
        © {new Date().getFullYear()} ClientProof Secure — Forensic conversation evidence
      </footer>
    </div>
  )
}

export default App
