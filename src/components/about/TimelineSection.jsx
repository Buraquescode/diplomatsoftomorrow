import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'

const milestones = [
  {
    year: '2019',
    title: 'DOT Founded',
    text: 'A small group of students in Nawabshah hosted their first informal committee session with 30 delegates.',
  },
  {
    year: '2020',
    title: 'First Official Conference',
    text: 'DOT hosted its first registered conference with two committees and a formal Secretariat structure.',
  },
  {
    year: '2022',
    title: 'Regional Expansion',
    text: 'Partnerships formed with schools across Hyderabad and Karachi, growing delegate turnout past 400.',
  },
  {
    year: '2024',
    title: 'Crisis Committee Debut',
    text: 'DOT introduced its first live crisis committee format, raising the bar for procedural complexity.',
  },
  {
    year: '2026',
    title: '1,200+ Delegates Trained',
    text: 'DOT crosses a major milestone, with alumni now serving on Secretariats at conferences across Pakistan.',
  },
]

function TimelineSection() {
  return (
    <section className="relative bg-forest-950 py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col gap-16">
        <SectionHeading
          eyebrow="Our Journey"
          title="How We Got Here"
          subtitle="From a single committee room to a region-wide diplomacy program."
        />

        <div className="relative pl-8 md:pl-0">
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold/60 via-gold/30 to-transparent md:-translate-x-1/2" />

          <div className="flex flex-col gap-12">
            {milestones.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className={`relative md:grid md:grid-cols-2 md:gap-10 ${
                    isLeft ? '' : ''
                  }`}
                >
                  <span className="absolute left-8 md:left-1/2 top-1 w-3 h-3 -translate-x-1/2 rounded-full bg-gold border-4 border-forest-950 ring-1 ring-gold/40" />

                  <div
                    className={`pl-14 md:pl-0 ${
                      isLeft
                        ? 'md:col-start-1 md:pr-14 md:text-right'
                        : 'md:col-start-2 md:pl-14'
                    }`}
                  >
                    <span className="font-display text-2xl font-semibold text-gold">
                      {item.year}
                    </span>
                    <h3 className="font-display text-lg font-semibold text-offwhite mt-1">
                      {item.title}
                    </h3>
                    <p className="text-sm text-offwhite/60 leading-relaxed mt-2">
                      {item.text}
                    </p>
                  </div>

                  <div className={isLeft ? 'hidden md:block' : 'hidden md:block'} />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection