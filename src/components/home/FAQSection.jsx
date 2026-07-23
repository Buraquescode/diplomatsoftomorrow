import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import SectionHeading from '../ui/SectionHeading'

const faqs = [
  {
    question: 'Do I need prior Model UN experience to join?',
    answer:
      'No. Our First-Timer Delegate Camp and onboarding sessions are designed specifically for delegates with zero prior MUN experience. We pair new delegates with experienced mentors for their first conference.',
  },
  {
    question: 'What committees does DOT typically run?',
    answer:
      'We run a mix of General Assembly committees, Security Council simulations, and crisis committees, rotating topics each conference cycle to keep research fresh and relevant.',
  },
  {
    question: 'How do I apply to join the Secretariat team?',
    answer:
      'Head to the "Join Our Team" page and fill out the application, selecting your preferred designation. Applications are reviewed on a rolling basis ahead of each conference cycle.',
  },
  {
    question: 'Is there a cost to attend a DOT conference?',
    answer:
      'Conference fees vary by event and cover venue, materials, and delegate resources. Fee details are shared directly with accepted delegates after the application stage.',
  },
  {
    question: 'Can schools outside Sindh partner with DOT?',
    answer:
      'Yes — we actively welcome partnerships with schools and youth organizations across Pakistan and beyond. Reach out through our contact details in the footer to start a conversation.',
  },
]

function FAQItem({ faq, isOpen, onToggle }) {
  return (
    <div className="border-b border-gold/10">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 py-6 text-left"
      >
        <span className="font-display text-base md:text-lg font-medium text-offwhite">
          {faq.question}
        </span>
        <ChevronDown
          className={`w-5 h-5 text-gold shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-sm text-offwhite/60 leading-relaxed max-w-3xl">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative bg-forest-900 py-24 border-y border-gold/10">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 flex flex-col gap-16">
        <SectionHeading
          eyebrow="Questions"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know before applying."
        />

        <div>
          {faqs.map((faq, i) => (
            <FAQItem
              key={faq.question}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQSection