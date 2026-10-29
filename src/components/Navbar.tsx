import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Leaf } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navLinks = [
  { label: 'How it works', href: '#how' },
  { label: 'Licences', href: '#licences' },
  { label: 'Patients', href: '#patients' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    if (!isHome) return;
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-xl border-b border-border' : 'bg-transparent'}`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
            <Leaf className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="font-bold text-lg text-gradient">LEGREEN DZEN</div>
            <div className="text-[10px] tracking-[3px] text-muted-foreground uppercase">Wellness</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </button>
          ))}
          <Link
            to="/patients"
            className="ml-3 px-5 py-2.5 bg-primary text-primary-foreground rounded-xl text-sm font-semibold hover:bg-primary/90 transition-colors glow-green"
          >
            Patient menu
          </Link>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 text-foreground"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <div className="px-6 py-4 space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollTo(link.href)}
                  className="block w-full text-left px-4 py-3 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-white/5"
                >
                  {link.label}
                </button>
              ))}
              <Link
                to="/patients"
                onClick={() => setMobileOpen(false)}
                className="block mt-2 px-4 py-3 bg-primary text-primary-foreground rounded-xl text-sm font-semibold text-center"
              >
                Patient menu
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
