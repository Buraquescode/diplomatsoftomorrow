import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, CalendarCheck, School, Award } from 'lucide-react'

const stats = [
  { icon: Users, value: 1200, suffix: '+', label: 'Delegates Trained' },
  { icon: CalendarCheck, value: 18, suffix: '', label: 'Conferences Hosted' },
  { icon: School, value: 40, suffix: '+', label: 'Partner Schools' },
  { icon: Award, value: 65, suffix: '+', label: 'Awards Presented' },
]

function Counter({ value, suffix }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-40px' })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    const duration = 1400
    const start = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [isInView, value])

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

function StatsSection() {
  return (
    <section className="relative bg-forest-900 py-20 border-y border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map(({ icon: Icon, value, suffix, label }, i) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex flex-col items-center text-center gap-3"
          >
            <div className="p-3 rounded-2xl bg-gold/10 border border-gold/20">
              <Icon className="w-6 h-6 text-gold" />
            </div>
            <span className="font-display text-3xl md:text-4xl font-semibold text-offwhite">
              <Counter value={value} suffix={suffix} />
            </span>
            <span className="text-sm text-offwhite/60 uppercase tracking-wider">
              {label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default StatsSection