import { motion } from 'framer-motion';
import { Calendar, Stethoscope, FileCheck, Package } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const steps = [
  {
    icon: Calendar,
    title: 'Book consultation',
    desc: 'Start on WhatsApp. Book a consultation with Dr. Tupy at Synergy Wellness — in person at Soshanguve or remote.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Stethoscope,
    title: 'Doctor assessment',
    desc: 'Dr. Tupy evaluates your condition and medical history. If you qualify, a Section 21 application is prepared.',
    color: 'from-accent/20 to-accent/5',
  },
  {
    icon: FileCheck,
    title: 'SAHPRA authorization',
    desc: 'The application is submitted to SAHPRA. Once approved, you receive a per-patient authorization document.',
    color: 'from-primary/20 to-primary/5',
  },
  {
    icon: Package,
    title: 'Collect & repeat',
    desc: 'Visit our licenced collection point in Soshanguve with your ID and authorization. Courier available for authorized patients.',
    color: 'from-accent/20 to-accent/5',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-primary mb-6">
            <FileCheck className="w-3.5 h-3.5" />
            The Process
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            How it <span className="text-gradient">works</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Four steps from consultation to collection. No shortcuts, no grey areas — just the legal path.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -8 }}
                className="h-full glass rounded-3xl p-8 border border-border hover:border-primary/20 transition-all group"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <step.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="text-xs text-primary font-bold uppercase tracking-wider mb-2">Step {i + 1}</div>
                <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
