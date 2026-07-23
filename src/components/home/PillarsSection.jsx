import SectionHeading from '../ui/SectionHeading'
import PillarCard from './PillarCard'
import { pillars } from '../../data/pillars'

function PillarsSection() {
  return (
    <section className="relative bg-forest-900 py-24 border-y border-gold/10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col gap-16">
        <SectionHeading
          eyebrow="Our Foundation"
          title="The Five Pillars"
          subtitle="Everything we do at DOT is built on five principles — each shaping a different part of what it means to be a youth diplomat."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.id} pillar={pillar} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PillarsSection