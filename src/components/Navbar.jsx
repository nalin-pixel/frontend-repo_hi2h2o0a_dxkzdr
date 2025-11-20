import { useState } from 'react'
import { Menu, X, Gamepad2, Search } from 'lucide-react'

function NavLink({ label }) {
  return (
    <a href="#" className="text-sm text-slate-200/80 hover:text-white transition-colors">
      {label}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur supports-[backdrop-filter]:bg-slate-900/40 bg-slate-900/60 border border-white/10 rounded-2xl shadow-xl">
          <div className="flex items-center justify-between px-6 py-3">
            <a href="/" className="inline-flex items-center gap-2">
              <div className="p-2 rounded-xl bg-gradient-to-br from-fuchsia-500 to-blue-500 shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                <Gamepad2 className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-white text-lg tracking-tight">PlayForge</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              <NavLink label="Discover" />
              <NavLink label="Genres" />
              <NavLink label="News" />
              <NavLink label="Community" />
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-300" />
                <input
                  placeholder="Search games"
                  className="pl-9 pr-3 py-2 rounded-lg bg-slate-800/70 border border-white/10 text-sm text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                />
              </div>
              <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white text-sm font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition-shadow">
                Sign In
              </button>
            </div>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex items-center justify-center p-2 text-white">
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-4 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                {['Discover','Genres','News','Community'].map((label) => (
                  <a key={label} href="#" className="text-slate-200/90 hover:text-white text-sm">{label}</a>
                ))}
              </div>
              <div className="pt-2 flex items-center gap-2">
                <input
                  placeholder="Search games"
                  className="flex-1 px-3 py-2 rounded-lg bg-slate-800/70 border border-white/10 text-sm text-slate-200 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500/40"
                />
                <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white text-sm font-semibold">Sign In</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
