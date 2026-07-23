function Badge({ children, className = '' }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-3 py-1 text-xs font-medium uppercase tracking-wider text-champagne backdrop-blur-sm ${className}`}
    >
      {children}
    </span>
  )
}

export default Badge