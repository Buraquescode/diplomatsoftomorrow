import { motion } from 'framer-motion'

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClasses =
    align === 'left' ? 'items-start text-left' : 'items-center text-center'

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`flex flex-col gap-4 ${alignClasses} ${className}`}
    >
      {eyebrow && (
        <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-gold font-medium">
          {eyebrow}
        </span>
      )}

      <h2 className="font-display text-3xl md:text-5xl font-semibold leading-tight bg-gradient-to-r from-champagne via-gold to-champagne bg-clip-text text-transparent">
        {title}
      </h2>

      {subtitle && (
        <p className="max-w-2xl text-base md:text-lg text-offwhite/70 leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}

export default SectionHeading