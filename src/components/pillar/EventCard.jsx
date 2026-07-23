import { motion } from 'framer-motion'
import { CalendarDays, MapPin } from 'lucide-react'

function EventCard({ event, index = 0 }) {
  const { title, date, location, image, blurb } = event

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-2xl overflow-hidden border border-gold/15 bg-white/[0.03] hover:border-gold/40 hover:-translate-y-1 transition-all duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-forest-950/80 via-transparent to-transparent" />
      </div>

      <div className="p-6 flex flex-col gap-3">
        <h3 className="font-display text-lg font-semibold text-offwhite leading-snug">
          {title}
        </h3>

        <div className="flex flex-col gap-1.5 text-xs text-offwhite/60">
          <span className="flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-gold" />
            {location}
          </span>
        </div>

        <p className="text-sm text-offwhite/60 leading-relaxed pt-2 border-t border-gold/10">
          {blurb}
        </p>
      </div>
    </motion.div>
  )
}

export default EventCard