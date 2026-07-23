import { motion } from "framer-motion";
import TimelineSection from "../components/about/TimelineSection";
import TeamSection from "../components/about/TeamSection";
import Badge from "../components/ui/Badge";

export default function About() {
  return (
    <main className="overflow-hidden">
      <section className="relative pt-40 pb-24 px-6 bg-gradient-to-b from-forest-950 to-forest-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>Our Story</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-serif text-4xl md:text-6xl text-offwhite"
          >
            About <span className="text-gold-400">Diplomats of Tomorrow</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-offwhite/70 text-lg leading-relaxed max-w-2xl mx-auto"
          >
            From a small student initiative in Sindh to a growing network of young diplomats —
            here's how we got here, and who's building what comes next.
          </motion.p>
        </div>
      </section>

      <TimelineSection />
      <TeamSection />
    </main>
  );
}