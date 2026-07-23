import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import PillarHero from "../components/pillar/PillarHero";
import EventCard from "../components/pillar/EventCard";
import Button from "../components/ui/Button"; // Make sure to verify this import path
import { getPillarById, pillars } from "../data/pillars";
import { getEventsByPillar } from "../data/events";

export default function PillarDetail() {
  const { id } = useParams();
  const pillar = getPillarById(id);

  if (!pillar) return <Navigate to="/404" replace />;

  const events = getEventsByPillar(id);
  const otherPillars = pillars.filter((p) => p.id !== id);

  return (
    <main className="overflow-hidden">
      <PillarHero pillar={pillar} />

      <section className="px-6 py-24 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl md:text-4xl text-offwhite mb-10"
        >
          Related <span className="text-gold-400">Events</span>
        </motion.h2>

        {events.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <EventCard key={event.title} event={event} index={index} />
            ))}
          </div>
        ) : (
          <p className="text-offwhite/50">No events listed for this pillar yet.</p>
        )}        
      </section>

      <section className="px-6 pb-24 max-w-7xl mx-auto">
        {/* Header container aligned to push buttons to the right on desktop */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-serif text-2xl text-offwhite">
            Explore Other <span className="text-gold-400">Pillars</span>
          </h3>

          <div className="hidden md:flex items-center gap-3">
            <Button to="/join/delegate" variant="ghost" className="text-sm">
              Join as Delegate
            </Button>
            <Button to="/join/team" variant="primary" className="text-sm">
              Join Our Team
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {otherPillars.map((p) => (
            <Link
              key={p.id}
              to={`/pillars/${p.id}`}
              className="px-5 py-2.5 rounded-full border border-gold-500/25 bg-white/5 backdrop-blur-md text-offwhite/80 text-sm hover:border-gold-400 hover:text-gold-400 transition-colors duration-300"
            >
              {p.title}
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}