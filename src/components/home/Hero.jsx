import { motion } from 'framer-motion'
import { Globe2, ArrowRight, PlayCircle } from 'lucide-react'
import Button from '../ui/Button'
import Badge from '../ui/Badge'

function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Background mesh */}
      <div className="absolute inset-0 -z-10 bg-forest-950">
        <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-gold/10 blur-[120px]" />
        <div className="absolute top-1/3 -right-32 w-[450px] h-[450px] rounded-full bg-champagne/10 blur-[130px]" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full bg-forest-700/30 blur-[110px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="flex flex-col gap-6"
        >
          <Badge>
            <Globe2 className="w-3.5 h-3.5" />
            Based in Sindh, Pakistan
          </Badge>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold leading-[1.1] text-offwhite">
            Where young voices learn to{' '}
            <span className="bg-gradient-to-r from-gold via-champagne to-gold bg-clip-text text-transparent">
              shape the world
            </span>
          </h1>

          <p className="text-lg text-offwhite/70 max-w-xl leading-relaxed">
            Diplomats of Tomorrow trains the next generation of negotiators,
            leaders, and changemakers through immersive Model UN conferences
            built on rigor, respect, and real diplomatic craft.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <Button to="/about" variant="outline" size="lg">
              <PlayCircle className="w-4 h-4" />
              Learn Our Story
            </Button>
          </div>

          <div className="flex items-center gap-6 pt-8 border-t border-gold/10 mt-4">
            <div className="flex flex-col">
              <span className="font-display text-2xl font-semibold text-gold">1,200+</span>
              <span className="text-xs uppercase tracking-wider text-offwhite/50">Delegates Trained</span>
            </div>
            <div className="w-px h-10 bg-gold/20" />
            <div className="flex flex-col">
              <span className="font-display text-2xl font-semibold text-gold">18</span>
              <span className="text-xs uppercase tracking-wider text-offwhite/50">Conferences Hosted</span>
            </div>
            <div className="w-px h-10 bg-gold/20" />
            <div className="flex flex-col">
              <span className="font-display text-2xl font-semibold text-gold">40+</span>
              <span className="text-xs uppercase tracking-wider text-offwhite/50">Partner Schools</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
          className="relative hidden lg:block"
        >
          <div className="relative rounded-3xl border border-gold/20 bg-white/5 backdrop-blur-md p-2 shadow-2xl shadow-black/40">
            <img
              src="https://i.pinimg.com/1200x/22/19/11/221911e521f752260dfa32c2665c7258.jpg"
              alt="DOT delegates in committee session"
              className="rounded-2xl w-full h-[460px] object-cover"
            />
            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-gold/30 bg-forest-900/90 backdrop-blur-md px-5 py-4 shadow-xl">
              <p className="text-xs uppercase tracking-wider text-gold mb-1">Global Summit</p>
              <p className="font-display text-lg font-semibold text-offwhite">Leadership Development</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero