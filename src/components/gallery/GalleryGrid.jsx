import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { gallery } from "../../data/gallery";

export default function GalleryGrid() {
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);
  const showNext = (e) => {
    e.stopPropagation();
    setActiveIndex((i) => (i + 1) % gallery.length);
  };
  const showPrev = (e) => {
    e.stopPropagation();
    setActiveIndex((i) => (i - 1 + gallery.length) % gallery.length);
  };

  return (
    <>
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {gallery.map((item, index) => (
          <motion.button
            key={item.id}
            onClick={() => openLightbox(index)}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
            className="group relative w-full break-inside-avoid overflow-hidden rounded-2xl border border-gold-500/15 bg-white/5 backdrop-blur-md text-left"
          >
            <img
              src={item.image}
              alt={item.caption}
              loading="lazy"
              className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-950/90 via-forest-950/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
              <p className="text-xs uppercase tracking-wide text-gold-400 mb-1">
                {item.event}
              </p>
              <p className="text-sm text-offwhite font-medium">{item.caption}</p>
            </div>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-50 flex items-center justify-center bg-forest-950/90 backdrop-blur-sm p-4"
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-offwhite/70 hover:text-gold-400 transition-colors"
              aria-label="Close"
            >
              <X size={28} />
            </button>

            <button
              onClick={showPrev}
              className="absolute left-4 md:left-8 text-offwhite/70 hover:text-gold-400 transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>

            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-3xl w-full rounded-2xl overflow-hidden border border-gold-500/20"
            >
              <img
                src={gallery[activeIndex].image}
                alt={gallery[activeIndex].caption}
                className="w-full max-h-[75vh] object-contain bg-forest-900"
              />
              <div className="p-4 bg-forest-900/80 backdrop-blur-md">
                <p className="text-xs uppercase tracking-wide text-gold-400 mb-1">
                  {gallery[activeIndex].event}
                </p>
                <p className="text-sm text-offwhite">{gallery[activeIndex].caption}</p>
              </div>
            </motion.div>

            <button
              onClick={showNext}
              className="absolute right-4 md:right-8 text-offwhite/70 hover:text-gold-400 transition-colors"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}