import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

function PillarHero({ pillar }) {
  const { icon: Icon, title, tagline, description, gradient } = pillar

  return (
    <section
      className={`relative overflow-hidden bg-gradient-to-br ${gradient} border-b border-gold/15`}
    >
      <div className="absolute inset-0 -z-10 bg-forest-950/40" />
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />      

      <div className="mx-auto max-w-5xl px-6 lg:px-8 py-24 flex flex-col items-center text-center gap-6">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-wider text-offwhite/50">
          <Link to="/" className="hover:text-gold transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3 h-3" />
          <span className="text-gold">{title}</span>
        </nav>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="p-4 rounded-2xl bg-white/5 border border-gold/25 backdrop-blur-sm"
        >
          <Icon className="w-9 h-9 text-gold" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display text-4xl md:text-6xl font-semibold text-offwhite"
        >
          {title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-champagne max-w-xl"
        >
          {tagline}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base text-offwhite/70 max-w-2xl leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}

export default PillarHero