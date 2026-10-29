import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function Contact() {
  const wa = (text: string) => `https://wa.me/27660491730?text=${encodeURIComponent(text)}`;

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-primary mb-6">
            <MapPin className="w-3.5 h-3.5" />
            Visit & Contact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Come <span className="text-gradient">see us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Collection point open for authorized patients — confirm your slot on WhatsApp first.
          </p>
        </AnimatedSection>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: MapPin,
              title: 'Collection Point',
              desc: 'Moshate Gardens, Klipfontein, Molotlegi Road, Soshanguve. Exact unit shared on WhatsApp after confirmation. Bring your ID.',
              action: 'Get directions',
              href: 'https://maps.google.com/?q=Soshanguve+Moshate+Gardens',
            },
            {
              icon: Phone,
              title: 'WhatsApp',
              desc: 'Fastest way to reach us — bookings, patient queries, authorization status. We respond during business hours.',
              action: 'Open WhatsApp',
              href: wa('Hi LeGreen Dzen Wellness, I have a question.'),
            },
            {
              icon: Clock,
              title: 'Consultations',
              desc: 'Dr. Tupy — Synergy Wellness. In person at Soshanguve or remote. Book via WhatsApp to confirm availability.',
              action: 'Book now',
              href: wa('Hi, I would like to book a consultation with Dr. Tupy.'),
            },
          ].map((card, i) => (
            <AnimatedSection key={i} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6 }}
                className="h-full glass rounded-3xl p-8 border border-border hover:border-primary/30 transition-colors flex flex-col"
              >
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <card.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{card.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{card.desc}</p>
                <a
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:text-primary/80 transition-colors"
                >
                  {card.action}
                  <ExternalLink className="w-4 h-4" />
                </a>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
