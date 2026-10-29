import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Send, Shield, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ACCESS_CODE = 'DZEN21';
const WHATSAPP_NUMBER = '27660491730';

const strains = [
  ["Afghani","Indica","17% THC","Strong body calm","Pain, Insomnia, G.I. issues"],
  ["AK-47","Sativa dominant hybrid","19-25% THC","Intensely creative buzz","Pain, appetite, upset stomach"],
  ["Blueberry","Indica","15% THC","Gently stimulating calm","Anxiety, inflammation, stress"],
  ["Blue Dream","Sativa dominant hybrid","19-25% THC","Stimulating cerebral energy","Mood, G.I. issues, sedation"],
  ["Bubba Kush","Indica","16-20% THC","Deeply relaxed ease","Pain, sadness, depression"],
  ["Bubblegum","Indica","17% THC","Long-lasting body relaxation","Inflammation, muscle ease, stress"],
  ["Candyland","Sativa dominant hybrid","20% THC","Cerebral euphoria","I.B.D., arthritis, stress"],
  ["Cheese","Hybrid","17% THC","Stimulating functional bliss","Pain, mood, inflammation"],
  ["Durban Poison","Sativa","17% THC","Electric energizing stimulant","I.B.S., pain, mood"],
  ["Dutch Treat","Indica dominant hybrid","15-18% THC","Upbeat relaxing high","Pain, migraines, anxiety"],
  ["G13","Indica dominant hybrid","20% THC","Potent cerebral sensation","Migraines, pain, inflammation"],
  ["Girl Scout Cookies","Indica dominant hybrid","25% THC","Cerebral creative euphoria","Inflammation, muscle ease, mood"],
  ["Gorilla Glue #4","Indica dominant hybrid","25% THC","Intense body and head effects","Crohn's disease, arthritis, O.C.D."],
  ["Grape Ape","Indica","20% THC","Heavy relaxing stone","P.T.S.D., nausea, insomnia"],
  ["Haze","Sativa","20% THC","Stimulating psychedelic effect","A.D.H.D., focus, appetite"],
  ["Headband","Indica dominant hybrid","25% THC","Intensely stimulating & psychoactive","Chronic pain, inflammation, mood"],
  ["Hindu Kush","Indica","20% THC","Couch-lock level stone","Back pain, sleep, appetite"],
  ["Jack Herer","Sativa dominant hybrid","18-22% THC","Energetic persistent euphoria","Pain, nausea, mood"],
  ["Kryptonite","Indica dominant hybrid","20% THC","Very psychoactive focus","Inflammation, injury pain, mood"],
  ["L.A. Confidential","Indica dominant hybrid","22% THC","Intensely clear psychoactive","Pain, seizures, migraines"],
  ["Northern Lights","Indica","17-20% THC","Potential humbling body high","Pain, insomnia, muscle aches"],
  ["OG Kush","Indica dominant hybrid","20-25% THC","Heavy euphoric stone","Chronic & neuropathic pain, mood"],
  ["Pineapple","Hybrid","14-19% THC","Giggly & stimulating","Pain, nausea, appetite"],
  ["Skunk #1","Indica dominant hybrid","20% THC","Potent functional high","Headaches, nausea, muscle spasm"],
  ["Sour Diesel","Sativa dominant","20-24% THC","Invigorating creative stimulant","Mood elevation, pain, fatigue"],
  ["Tangerine","Sativa dominant hybrid","15% THC","Relaxing mood elevator","Pain, depression, muscle spasms"],
  ["Tangie","Sativa dominant hybrid","18-20% THC","Intensely stimulating","Chronic pain, appetite, A.D.H.D."],
  ["Trainwreck","Sativa dominant hybrid","15-19% THC","Energetic cerebral stimulus","A.D.H.D., pain, P.T.S.D."],
  ["White Widow","Indica dominant hybrid","15-24% THC","Social cerebral high","Anxiety, neuropathy, nausea"],
  ["Zkittlez","Indica dominant hybrid","18% THC","Heavy euphoric stimulant","Inflammation, nausea, stress"]
];

export default function PatientMenuPage() {
  const [code, setCode] = useState('');
  const [unlocked, setUnlocked] = useState(false);
  const [error, setError] = useState(false);
  const [selected, setSelected] = useState<Set<number>>(new Set());

  const checkCode = () => {
    if (code.trim().toUpperCase() === ACCESS_CODE) {
      setUnlocked(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  const toggleStrain = (i: number) => {
    const next = new Set(selected);
    next.has(i) ? next.delete(i) : next.add(i);
    setSelected(next);
  };

  const order = () => {
    if (!selected.size) return;
    const names = [...selected].map(i => strains[i][0]).join(', ');
    const text = `DISPENSING REQUEST — Authorized Patient\nCultivars: ${names}\n\nPlease verify my Section 21 authorization and confirm availability, price and fulfilment.`;
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const wa = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence mode="wait">
        {!unlocked ? (
          <motion.div
            key="gate"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-md w-full"
            >
              <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 text-sm">
                <ChevronRight className="w-4 h-4 rotate-180" />
                Back to main site
              </Link>

              <div className="glass rounded-3xl p-8 md:p-10 border border-border text-center">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                  <Lock className="w-8 h-8 text-primary" />
                </div>
                <h1 className="text-2xl font-bold mb-3">Authorized patients only</h1>
                <p className="text-muted-foreground text-sm mb-8 leading-relaxed">
                  Enter the access code you received via WhatsApp after your Section 21 authorization was confirmed.
                </p>
                <input
                  value={code}
                  onChange={(e) => { setCode(e.target.value); setError(false); }}
                  onKeyDown={(e) => e.key === 'Enter' && checkCode()}
                  placeholder="ACCESS CODE"
                  maxLength={12}
                  autoComplete="off"
                  className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-sm text-center tracking-[4px] uppercase focus:outline-none focus:border-primary/50 transition-colors mb-4"
                />
                {error && (
                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-sm mb-4"
                  >
                    Incorrect code. Request it on WhatsApp.
                  </motion.p>
                )}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={checkCode}
                  className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors mb-4"
                >
                  Enter
                </motion.button>
                <a
                  href={wa("Hi, I'm an authorized patient and need the access code for the patient menu.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:text-primary/80 transition-colors"
                >
                  Don't have a code? Request one on WhatsApp →
                </a>
              </div>
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="pb-32"
          >
            {/* Header */}
            <header className="border-b border-border sticky top-0 bg-background/95 backdrop-blur-xl z-40">
              <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <ChevronRight className="w-4 h-4 rotate-180" />
                  LeGreen Dzen
                </Link>
                <div className="flex items-center gap-3">
                  <span className="hidden sm:inline text-xs text-muted-foreground uppercase tracking-wider">Patient Menu</span>
                  <a
                    href={wa("Hi, I'd like to place a patient order.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-accent text-accent-foreground px-4 py-2 rounded-full text-xs font-semibold hover:bg-accent/90 transition-colors"
                  >
                    Order via WhatsApp
                  </a>
                </div>
              </div>
            </header>

            <div className="max-w-7xl mx-auto px-6 pt-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-primary">
                    <Shield className="w-3.5 h-3.5" />
                    Authorized Access
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">Current cultivars</h1>
                <p className="text-muted-foreground text-sm mb-6">
                  Availability varies. Dispensing is subject to your Section 21 authorization and Dr. Tupy's prescription.
                </p>
                <div className="p-4 rounded-xl bg-accent/10 border border-accent/20 mb-8">
                  <p className="text-xs text-accent/90 leading-relaxed">
                    ⚠️ This page is for authorized patients only. Do not share the access code. 
                    Medicines are dispensed solely against a valid Section 21 authorization — no authorization, no dispensing.
                  </p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {strains.map((s, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.03 }}
                    whileHover={{ y: -4 }}
                    onClick={() => toggleStrain(i)}
                    className={`cursor-pointer glass rounded-2xl p-5 border transition-all ${
                      selected.has(i) ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/20'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-semibold text-sm">{s[0]}</h3>
                        <div className="text-[10px] uppercase tracking-wider text-primary mt-0.5">{s[1]}</div>
                      </div>
                      {selected.has(i) && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          className="w-5 h-5 rounded-full bg-primary flex items-center justify-center"
                        >
                          <svg className="w-3 h-3 text-primary-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <path d="M5 12l5 5L20 7" />
                          </svg>
                        </motion.div>
                      )}
                    </div>
                    <div className="text-xs font-bold text-accent mb-2">{s[2]}</div>
                    <p className="text-xs text-muted-foreground mb-3">{s[3]}</p>
                    <div className="pt-3 border-t border-border">
                      <span className="text-[10px] text-muted-foreground uppercase tracking-wider">Rx</span>
                      <p className="text-xs mt-0.5">{s[4]}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Sticky order bar */}
            <AnimatePresence>
              {selected.size > 0 && (
                <motion.div
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  exit={{ y: 100 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed bottom-0 left-0 right-0 bg-background/95 backdrop-blur-xl border-t border-border z-50"
                >
                  <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between gap-4">
                    <div className="min-w-0">
                      <div className="text-xs text-muted-foreground mb-1">Selected ({selected.size})</div>
                      <div className="text-sm font-medium truncate">
                        {[...selected].map(i => strains[i][0]).join(', ')}
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={order}
                      className="shrink-0 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold text-sm flex items-center gap-2 hover:bg-primary/90 transition-colors glow-green"
                    >
                      <Send className="w-4 h-4" />
                      Request dispensing
                    </motion.button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
