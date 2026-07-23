import { motion } from 'framer-motion'
import { Target, Eye, Compass } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const cards = [
  {
    icon: Target,
    title: 'Mission',
    text: 'To equip young people across Sindh with the negotiation skills, cultural fluency, and civic confidence to engage meaningfully with global issues.',
  },
  {
    icon: Eye,
    title: 'Vision',
    text: 'A generation of youth diplomats who see disagreement as an opportunity for dialogue, not division — ready to lead in classrooms, careers, and communities.',
  },
  {
    icon: Compass,
    title: 'Approach',
    text: 'Rigorous preparation, real procedural discipline, and mentorship from experienced delegates — conferences designed to challenge, not just simulate.',
  },
]

function AboutSection() {
  return (
    <section className="relative bg-forest-950 py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-16">
        <SectionHeading
          eyebrow="Who We Are"
          title="Diplomacy is a skill. We teach it seriously."
          subtitle="Diplomats of Tomorrow is a youth-led Model UN organization built on the belief that young people, given the right structure, can debate global issues with the same rigor as seasoned diplomats."
        />

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map(({ icon: Icon, title, text }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="glass rounded-2xl p-8 flex flex-col gap-4 hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="p-3 rounded-xl bg-gold/10 border border-gold/20 w-fit">
                <Icon className="w-6 h-6 text-gold" />
              </div>
              <h3 className="font-display text-xl font-semibold text-champagne">
                {title}
              </h3>
              <p className="text-sm text-offwhite/70 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutSection