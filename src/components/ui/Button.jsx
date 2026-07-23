import { Link } from 'react-router-dom'

const variantClasses = {
  primary:
    'bg-gold text-forest-950 border border-gold hover:bg-champagne hover:border-champagne',
  outline:
    'bg-transparent text-champagne border border-gold/50 hover:border-gold hover:bg-gold/10',
  ghost:
    'bg-transparent text-offwhite border border-transparent hover:bg-white/5',
}

const sizeClasses = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
}

function Button({
  children,
  to,
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  size = 'md',
  className = '',
  ...rest
}) {
  const base =
    'group relative inline-flex items-center justify-center gap-2 rounded-2xl font-medium tracking-wide overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest-950'

  const classes = `${base} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const shimmer = (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/25 to-transparent"
    />
  )

  const content = (
    <>
      {shimmer}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
        {...rest}
      >
        {content}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...rest}>
      {content}
    </button>
  )
}

export default Button