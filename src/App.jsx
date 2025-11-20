import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Trending from './components/Trending'
import Genres from './components/Genres'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 relative">
      {/* Pattern and stars */}
      <div className="absolute inset-0 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(15,23,42,0)_0%,rgba(15,23,42,1)_60%),url('data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3Ccircle cx='40' cy='80' r='1'/%3E%3Ccircle cx='90' cy='20' r='1'/%3E%3Ccircle cx='70' cy='60' r='1'/%3E%3C/g%3E%3C/svg%3E')]" />

      <Navbar />
      <main>
        <Hero />
        <Trending />
        <Genres />

        {/* CTA */}
        <section className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-8 sm:p-12">
              <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_100%_0%,rgba(168,85,247,0.25),transparent_60%)]" />
              <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">Join the community</h3>
                  <p className="mt-2 text-slate-300/90 max-w-xl">Create your profile, track your library, and squad up with players who love the same games you do.</p>
                </div>
                <a href="#" className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition">Get started</a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-10 border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-slate-400 text-sm">© {new Date().getFullYear()} PlayForge. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
