import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import { testimonials } from "../../data/testimonials";

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 px-6 bg-forest-900 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,175,55,0.06),transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Delegates Say"
          subtitle="Real voices from the committee floor — students who found their footing, their voice, and their people through DOT."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-gold-500/15 hover:border-gold-400/40 hover:-translate-y-1 transition-all duration-300"
            >
              <Quote size={28} className="text-gold-400/40 mb-4" />
              <p className="text-offwhite/80 leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-gold-500/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center text-forest-950 font-serif font-semibold shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-offwhite font-medium text-sm">{t.name}</p>
                  <p className="text-offwhite/50 text-xs">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}