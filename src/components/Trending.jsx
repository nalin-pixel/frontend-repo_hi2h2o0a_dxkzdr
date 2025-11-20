import { motion } from 'framer-motion'
import { Star, Flame, Trophy } from 'lucide-react'

const games = [
  {
    title: 'Neon Drift',
    rating: 4.8,
    tags: ['Racing', 'Cyberpunk'],
    cover: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Skyforge Legends',
    rating: 4.7,
    tags: ['Adventure', 'Open World'],
    cover: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop'
  },
  {
    title: 'Quantum Arena',
    rating: 4.9,
    tags: ['Shooter', 'Multiplayer'],
    cover: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1200&auto=format&fit=crop'
  },
]

function GameCard({ game, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 hover:bg-slate-900/80 transition"
    >
      <img src={game.cover} alt="" className="h-56 w-full object-cover opacity-70 group-hover:opacity-90 transition duration-300" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-2 text-amber-400">
          <Star className="w-4 h-4 fill-current" />
          <span className="text-sm font-semibold">{game.rating}</span>
        </div>
        <h3 className="mt-1 text-lg font-semibold text-white">{game.title}</h3>
        <div className="mt-2 flex flex-wrap gap-2">
          {game.tags.map((t) => (
            <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-white/10 text-slate-200">{t}</span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function Trending() {
  return (
    <section id="trending" className="relative py-20">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_0%_20%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-8">
          <Flame className="w-5 h-5 text-fuchsia-400" />
          <h2 className="text-2xl font-bold text-white tracking-tight">Trending now</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((g, i) => (<GameCard key={g.title} game={g} index={i} />))}
        </div>
      </div>
    </section>
  )
}
