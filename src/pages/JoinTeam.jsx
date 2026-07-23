import { motion } from "framer-motion";
import TeamForm from "../components/forms/TeamForm";
import Badge from "../components/ui/Badge";

export default function JoinTeam() {
  return (
    <main className="overflow-hidden">
      <section className="relative pt-40 pb-16 px-6 bg-gradient-to-b from-forest-950 to-forest-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(212,175,55,0.08),transparent_60%)]" />
        <div className="relative max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge>Join Us</Badge>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 font-serif text-4xl md:text-6xl text-offwhite"
          >
            Join Our <span className="text-gold-400">Team</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-offwhite/70 text-lg leading-relaxed"
          >
            Help build the conferences, the committees, and the community behind DOT.
          </motion.p>
        </div>
      </section>

      <section className="px-6 pb-24 pt-12 md:pt-20">
        <TeamForm />
      </section>
    </main>
  );
}