import { motion } from 'framer-motion'
import { ArrowRight, UserPlus } from 'lucide-react'
import Button from '../ui/Button'

function CTASection() {
  return (
    <section className="relative overflow-hidden bg-forest-950 py-24">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full bg-gold/10 blur-[120px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-4xl px-6 lg:px-8 text-center flex flex-col items-center gap-8"
      >
        <h2 className="font-display text-3xl md:text-5xl font-semibold text-offwhite leading-tight">
          Ready to find your{' '}
          <span className="bg-gradient-to-r from-gold via-champagne to-gold bg-clip-text text-transparent">
            voice on the floor?
          </span>
        </h2>
        <p className="text-lg text-offwhite/70 max-w-xl">
          Whether you want to debate as a delegate or help run the show behind
          the scenes, there's a place for you at Diplomats of Tomorrow.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <Button to="/join/delegate" variant="primary" size="lg">
            Join as Delegate
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button to="/join/team" variant="outline" size="lg">
            <UserPlus className="w-4 h-4" />
            Join Our Team
          </Button>
        </div>
      </motion.div>
    </section>
  )
}

export default CTASection