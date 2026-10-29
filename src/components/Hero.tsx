import { motion } from 'framer-motion';
import { ArrowRight, Shield, Calendar, User } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Orbital rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 120, repeat: Infinity, ease: 'linear' }}
          className="w-[600px] h-[600px] border border-primary/5 rounded-full absolute"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 180, repeat: Infinity, ease: 'linear' }}
          className="w-[800px] h-[800px] border border-accent/5 rounded-full absolute"
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-primary mb-8"
        >
          <Shield className="w-3.5 h-3.5" />
          SAHPRA-licenced Section 21 collection point
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="text-gradient">LeGreen</span>
          <br />
          <span className="text-foreground">Dzen Wellness</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-4 leading-relaxed"
        >
          Legal, safe, and verified patient access to medical cannabis in Soshanguve.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm text-muted-foreground/70 max-w-xl mx-auto mb-10"
        >
          This is not a dispensary. We are a SAHPRA-licenced collection point operating under Section 21 of the Medicines Act — 
          medicines dispensed only to patients with a valid authorization.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <motion.a
            href="https://wa.me/27660491730?text=Hi%20LeGreen%20Dzen%20Wellness%2C%20I%20would%20like%20to%20book%20a%20consultation."
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-primary/90 transition-colors glow-green"
          >
            Book consultation
            <ArrowRight className="w-4 h-4" />
          </motion.a>
          <motion.a
            href="#patients"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 glass px-8 py-4 rounded-2xl font-semibold text-sm hover:bg-white/5 transition-colors border border-border"
          >
            Already authorized? Re-order
          </motion.a>
        </motion.div>

        {/* Floating licence cards */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
        >
          {[
            { icon: Shield, label: 'Licence', value: '95MC' },
            { icon: Calendar, label: 'Valid until', value: '21 Apr 2028' },
            { icon: User, label: 'Dr.', value: 'Dr. Tupy' },
            { icon: Shield, label: 'Collection', value: '25CM002' },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-4 border border-border hover:border-primary/20 transition-colors"
            >
              <item.icon className="w-5 h-5 text-primary mb-2" />
              <div className="text-xs text-muted-foreground uppercase tracking-wider">{item.label}</div>
              <div className="font-semibold text-sm mt-0.5">{item.value}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
        </motion.div>
      </motion.div>
    </section>
  );
}
