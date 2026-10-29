import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/27660491730?text=Hi%20LeGreen%20Dzen%20Wellness%2C%20I%20have%20a%20question."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25d366] rounded-full flex items-center justify-center shadow-lg shadow-[#25d366]/30 hover:shadow-xl hover:shadow-[#25d366]/40 transition-shadow"
      aria-label="WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white">
        <path d="M16 3C9.4 3 4 8.4 4 15c0 2.4.7 4.6 2 6.5L4 29l7.7-2c1.8 1 3.8 1.5 5.8 1.5h.5c6.6 0 12-5.4 12-12S22.6 3 16 3zm6.9 17c-.3.8-1.7 1.6-2.4 1.7-.6.1-1.4.2-4.4-.9-3.7-1.5-6.1-5.2-6.3-5.5-.2-.2-1.5-2-1.5-3.9s1-2.7 1.3-3.1c.3-.3.7-.4 1-.4h.7c.2 0 .5-.1.8.6.3.8 1 2.7 1.1 2.9.1.2.2.4 0 .7-.1.3-.2.4-.4.7l-.6.7c-.2.2-.4.4-.2.8.2.4 1 1.6 2.1 2.6 1.4 1.3 2.6 1.7 3 1.8.4.2.6.2.9-.1.2-.3 1-1.2 1.3-1.6.3-.4.5-.3.9-.2.4.1 2.3 1.1 2.7 1.3.4.2.7.3.8.5.1.2.1 1-.2 1.9z"/>
      </svg>
    </motion.a>
  );
}
