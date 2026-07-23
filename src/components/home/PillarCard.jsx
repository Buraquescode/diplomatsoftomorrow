import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

function PillarCard({ pillar, index = 0 }) {
  const { id, icon: Icon, title, tagline, gradient } = pillar

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link
        to={`/pillars/${id}`}
        className={`group relative flex flex-col justify-between h-64 rounded-2xl p-6 overflow-hidden border border-gold/15 bg-gradient-to-br ${gradient} hover:border-gold/40 transition-all duration-300 hover:-translate-y-1`}
      >
        <div className="flex items-start justify-between">
          <div className="p-3 rounded-xl bg-white/5 border border-gold/20 backdrop-blur-sm w-fit">
            <Icon className="w-6 h-6 text-gold" />
          </div>
          <ArrowUpRight className="w-5 h-5 text-offwhite/40 group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300" />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-display text-xl font-semibold text-offwhite">
            {title}
          </h3>
          <p className="text-sm text-offwhite/60 leading-relaxed line-clamp-2">
            {tagline}
          </p>
        </div>
      </Link>
    </motion.div>
  )
}

export default PillarCard