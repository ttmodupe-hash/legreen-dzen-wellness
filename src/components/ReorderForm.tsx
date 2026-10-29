import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, RefreshCw, Truck, MapPin } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function ReorderForm() {
  const [form, setForm] = useState({ name: '', id: '', auth: '', need: '', ship: 'collect' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `RE-ORDER — Authorized Patient\nName: ${form.name}\nID: ${form.id}\nAuthorization ref: ${form.auth || 'N/A'}\nRequest: ${form.need}\nFulfilment: ${form.ship === 'collect' ? 'Collect — Soshanguve' : 'Courier (authorized patient)'}`;
    window.open(`https://wa.me/27660491730?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="patients" className="py-32 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-accent mb-6">
            <RefreshCw className="w-3.5 h-3.5" />
            Existing Patients
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Already <span className="text-gradient">authorized?</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Already have a Section 21 authorization through Dr. Tupy? Re-order here — 
            we verify every request against your authorization before dispensing.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto glass rounded-3xl p-8 md:p-10 border border-border"
          >
            <div className="space-y-5">
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Full name (as on authorization) *</label>
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">ID number *</label>
                <input
                  required
                  value={form.id}
                  onChange={(e) => setForm({ ...form, id: e.target.value })}
                  placeholder="For verification against your authorization"
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Authorization / patient reference (if known)</label>
                <input
                  value={form.auth}
                  onChange={(e) => setForm({ ...form, auth: e.target.value })}
                  placeholder="Optional"
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">What do you need? *</label>
                <textarea
                  required
                  value={form.need}
                  onChange={(e) => setForm({ ...form, need: e.target.value })}
                  placeholder="Your prescribed product and quantity"
                  rows={3}
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setForm({ ...form, ship: 'collect' })}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                    form.ship === 'collect'
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  <MapPin className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <div className="text-sm font-medium">Collect</div>
                    <div className="text-xs text-muted-foreground">Soshanguve</div>
                  </div>
                </button>
                <button
                  type="button"
                  onClick={() => setForm({ ...form, ship: 'courier' })}
                  className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                    form.ship === 'courier'
                      ? 'border-primary bg-primary/10'
                      : 'border-border hover:border-primary/30'
                  }`}
                >
                  <Truck className="w-5 h-5 text-primary" />
                  <div className="text-left">
                    <div className="text-sm font-medium">Courier</div>
                    <div className="text-xs text-muted-foreground">Authorized patient only</div>
                  </div>
                </button>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-accent text-accent-foreground py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-accent/90 transition-colors glow-gold"
              >
                <Send className="w-4 h-4" />
                Submit re-order via WhatsApp
              </motion.button>
            </div>
          </motion.form>
        </AnimatedSection>
      </div>
    </section>
  );
}
