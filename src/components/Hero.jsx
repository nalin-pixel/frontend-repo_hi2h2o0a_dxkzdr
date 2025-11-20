import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-28 flex items-center overflow-hidden">
      {/* Gradient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(168,85,247,0.25),transparent_60%),radial-gradient(60%_50%_at_100%_20%,rgba(59,130,246,0.25),transparent_60%)] pointer-events-none" />

      {/* Spline 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jQwvQSncGp8maF9S/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]"
          >
            Play beyond limits
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg sm:text-xl text-slate-200/90"
          >
            Discover, track, and play the best games across every platform. Curated lists, live events, and a community built for players.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a href="#trending" className="px-6 py-3 rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-600 text-white font-semibold shadow-lg shadow-fuchsia-500/20 hover:shadow-fuchsia-500/30 transition">
              Explore trending
            </a>
            <a href="#genres" className="px-6 py-3 rounded-xl bg-slate-800/70 border border-white/10 text-slate-200 hover:bg-slate-800/90 transition">
              Browse genres
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
