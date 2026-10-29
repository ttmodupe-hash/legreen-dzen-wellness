import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const faqs = [
  {
    q: 'What is Section 21?',
    a: 'Section 21 of the Medicines and Related Substances Act allows a registered doctor to apply to SAHPRA for authorization to prescribe an unregistered medicine — including cannabis — for a specific patient with a qualifying condition. It is per-patient and requires proper medical records.',
  },
  {
    q: 'Who qualifies for medical cannabis?',
    a: 'That decision belongs to the doctor. Patients commonly seek authorization for chronic pain, severe insomnia, anxiety, PTSD, and conditions where conventional treatment has not worked. Book a consultation and Dr. Tupy will assess you properly.',
  },
  {
    q: 'Can anyone just buy from you?',
    a: 'No — and that is the point. We only dispense to patients with a valid Section 21 authorization. We do not sell to the general public, and we do not advertise products outside the patient process. This protects you, us, and the licence.',
  },
  {
    q: 'How long does authorization take?',
    a: 'Timelines depend on SAHPRA processing and the completeness of the application. Our team keeps you updated on WhatsApp at every step. Some authorizations are processed within days; others may take longer depending on SAHPRA workload.',
  },
  {
    q: 'Is my information private?',
    a: 'Yes. Patient records and authorizations are handled confidentially in line with medical records law. Courier packaging is plain and discreet. Your medical information is never shared with third parties.',
  },
  {
    q: 'What is the consultation fee?',
    a: 'Consultation fees are set by Synergy Wellness and confirmed when you book via WhatsApp. We are transparent about all costs upfront — no hidden fees, no surprises.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-32 relative">
      <div className="max-w-3xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-primary mb-6">
            <HelpCircle className="w-3.5 h-3.5" />
            Common Questions
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Questions, <span className="text-gradient">answered</span>
          </h2>
          <p className="text-muted-foreground text-lg">The straight version, no hype.</p>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <AnimatedSection key={i} delay={i * 0.05}>
              <div className="glass rounded-2xl border border-border overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/[0.02] transition-colors"
                >
                  <span className="font-semibold pr-4">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-muted-foreground shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-muted-foreground text-sm leading-relaxed">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
