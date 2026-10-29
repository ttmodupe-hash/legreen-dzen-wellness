import { motion } from 'framer-motion';
import { Shield, Building2, Calendar, User, AlertTriangle } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

const licences = [
  {
    icon: Shield,
    title: 'SAHPRA Cultivation Licence',
    detail: '0000000095MC',
    meta: 's22C(1)(b) · Medicines Act 1965',
    valid: '21 April 2023 — 21 April 2028',
    status: 'Active',
  },
  {
    icon: Building2,
    title: 'Section 21 Collection Point',
    detail: 'UID 25CM002',
    meta: 'Synergy Wellness',
    valid: 'Valid to 14 October 2027',
    status: 'Active',
  },
  {
    icon: User,
    title: 'Dispensing Doctor',
    detail: 'Dr. Tupy',
    meta: 'Synergy Wellness',
    valid: 'Registered practitioner',
    status: 'Active',
  },
  {
    icon: Calendar,
    title: 'Collection Point Address',
    detail: 'Moshate Gardens',
    meta: 'Klipfontein, Molotlegi Rd',
    valid: 'Soshanguve, South Africa',
    status: 'Active',
  },
];

export default function Licences() {
  return (
    <section id="licences" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-accent mb-6">
            <Shield className="w-3.5 h-3.5" />
            Verified & Licenced
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Licence <span className="text-gradient">credentials</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We do not hide our paperwork. Every credential is displayed for patient verification.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-2 gap-6">
          {licences.map((lic, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -4, borderColor: 'rgba(34, 197, 94, 0.3)' }}
                className="glass rounded-3xl p-8 border border-border transition-all"
              >
                <div className="flex items-start gap-5">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
                    <lic.icon className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="font-semibold text-lg">{lic.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                        {lic.status}
                      </span>
                    </div>
                    <div className="text-2xl font-bold text-gradient mb-1">{lic.detail}</div>
                    <div className="text-sm text-muted-foreground">{lic.meta}</div>
                    <div className="text-xs text-muted-foreground/70 mt-1">{lic.valid}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 p-6 rounded-2xl bg-accent/5 border border-accent/10 flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-accent shrink-0 mt-0.5" />
            <div>
              <h4 className="font-semibold mb-1">Verification notice</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                These licences are public records. If you have concerns about validity, you can verify directly with SAHPRA 
                or request documentation via WhatsApp. We encourage patient verification — transparency is how we operate.
              </p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
