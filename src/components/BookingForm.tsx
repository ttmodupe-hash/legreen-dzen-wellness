import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Calendar, FileText, Video } from 'lucide-react';
import AnimatedSection from './AnimatedSection';

export default function BookingForm() {
  const [form, setForm] = useState({ name: '', id: '', age: '', symptoms: '', mode: 'in-person', check: false });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.check) return alert('Please confirm you are 18+ to proceed.');
    const text = `CONSULTATION BOOKING\nName: ${form.name}\nID: ${form.id}\nAge: ${form.age}\nSymptoms/condition: ${form.symptoms}\nPreferred: ${form.mode}`;
    window.open(`https://wa.me/27660491730?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="book" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-medium text-primary mb-6">
            <Calendar className="w-3.5 h-3.5" />
            Book Consultation
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Start your <span className="text-gradient">journey</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            No online checkout. Book a consultation with Dr. Tupy and we guide you through the Section 21 process on WhatsApp.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <motion.form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto glass rounded-3xl p-8 md:p-10 border border-border"
          >
            <div className="space-y-5">
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Full name *</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-background/50 border border-border rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">ID number *</label>
                  <input
                    required
                    value={form.id}
                    onChange={(e) => setForm({ ...form, id: e.target.value })}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Age *</label>
                  <input
                    required
                    type="number"
                    min="18"
                    value={form.age}
                    onChange={(e) => setForm({ ...form, age: e.target.value })}
                    className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Symptoms or condition *</label>
                <div className="relative">
                  <FileText className="absolute left-4 top-4 w-4 h-4 text-muted-foreground" />
                  <textarea
                    required
                    value={form.symptoms}
                    onChange={(e) => setForm({ ...form, symptoms: e.target.value })}
                    rows={3}
                    className="w-full bg-background/50 border border-border rounded-xl pl-11 pr-4 py-3 text-sm focus:outline-none focus:border-primary/50 transition-colors resize-none"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs text-muted-foreground uppercase tracking-wider mb-2 block">Consultation mode</label>
                <div className="grid grid-cols-2 gap-4">
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, mode: 'in-person' })}
                    className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                      form.mode === 'in-person'
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/30'
                    }`}
                  >
                    <User className="w-5 h-5 text-primary" />
                    <div className="text-left">
                      <div className="text-sm font-medium">In person</div>
                      <div className="text-xs text-muted-foreground">Soshanguve</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setForm({ ...form, mode: 'remote' })}
                    className={`flex items-center gap-3 p-4 rounded-xl border transition-all ${
                      form.mode === 'remote'
                        ? 'border-primary bg-primary/10'
                        : 'border-border hover:border-primary/30'
                    }`}
                  >
                    <Video className="w-5 h-5 text-primary" />
                    <div className="text-left">
                      <div className="text-sm font-medium">Remote</div>
                      <div className="text-xs text-muted-foreground">Video call</div>
                    </div>
                  </button>
                </div>
              </div>
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={form.check}
                  onChange={(e) => setForm({ ...form, check: e.target.checked })}
                  className="mt-1 w-4 h-4 rounded border-border bg-background/50 text-primary focus:ring-primary"
                />
                <span className="text-sm text-muted-foreground">
                  I confirm I am 18+ and understand this is a medical consultation for Section 21 authorization, not a retail purchase.
                </span>
              </label>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 hover:bg-primary/90 transition-colors glow-green"
              >
                <Send className="w-4 h-4" />
                Submit via WhatsApp
              </motion.button>
            </div>
          </motion.form>
        </AnimatedSection>
      </div>
    </section>
  );
}
