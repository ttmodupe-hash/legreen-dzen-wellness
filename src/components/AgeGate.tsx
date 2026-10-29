import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, AlertCircle } from 'lucide-react';

export default function AgeGate() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const confirmed = sessionStorage.getItem('age-verified');
    if (!confirmed) setShow(true);
  }, []);

  const confirm = () => {
    sessionStorage.setItem('age-verified', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] bg-background/95 backdrop-blur-xl flex items-center justify-center p-6"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md w-full"
          >
            <div className="glass rounded-3xl p-8 md:p-10 border border-border text-center">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-3">18+ · Patients only</h2>
              <p className="text-muted-foreground text-sm mb-2 leading-relaxed">
                This is a medical cannabis patient access platform. Products are dispensed 
                only to patients with a valid Section 21 authorization from a registered 
                medical practitioner.
              </p>
              <div className="flex items-center gap-2 justify-center mb-8 p-3 rounded-xl bg-accent/10 border border-accent/20">
                <AlertCircle className="w-4 h-4 text-accent shrink-0" />
                <span className="text-xs text-accent/90">No products are sold to the general public.</span>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={confirm}
                className="w-full bg-primary text-primary-foreground py-4 rounded-xl font-semibold text-sm hover:bg-primary/90 transition-colors glow-green"
              >
                I am 18 or older
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
