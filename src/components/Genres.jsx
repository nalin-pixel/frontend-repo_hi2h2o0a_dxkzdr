import { motion } from 'framer-motion'
import { Gamepad2, Rocket, Sword, Music2, Joystick } from 'lucide-react'

const categories = [
  { name: 'Action', icon: Sword, color: 'from-fuchsia-500 to-pink-500' },
  { name: 'Adventure', icon: Rocket, color: 'from-blue-500 to-cyan-500' },
  { name: 'Indie', icon: Joystick, color: 'from-emerald-500 to-lime-500' },
  { name: 'Rhythm', icon: Music2, color: 'from-amber-500 to-orange-500' },
  { name: 'Arcade', icon: Gamepad2, color: 'from-purple-500 to-indigo-500' },
]

function GenreCard({ name, icon: Icon, color, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-5 hover:translate-y-[-2px] transition"
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20`} />
      <div className="relative z-10 flex items-center gap-4">
        <div className={`p-2.5 rounded-xl bg-gradient-to-br ${color} shadow-[0_0_20px_rgba(168,85,247,0.4)]`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-white font-semibold">{name}</h3>
          <p className="text-sm text-slate-300/80">Top picks curated for you</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Genres() {
  return (
    <section id="genres" className="relative py-20">
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white tracking-tight mb-8">Browse by genre</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
          {categories.map((c, i) => (<GenreCard key={c.name} {...c} index={i} />))}
        </div>
      </div>
    </section>
  )
}
