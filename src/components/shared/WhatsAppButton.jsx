import React from 'react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  const phone = '27848469591';
  const message = encodeURIComponent("Hi, I'm interested in Hedged services");
  const url = `https://wa.me/${phone}?text=${message}`;

  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg flex items-center justify-center hover:shadow-xl transition-shadow"
      aria-label="Chat on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-8 h-8 fill-white">
        <path d="M16 0C7.164 0 0 7.163 0 16c0 2.822.737 5.468 2.028 7.768L0 32l8.467-2.001A15.94 15.94 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.29 13.29 0 01-6.771-1.846l-.486-.29-5.027 1.188 1.21-4.898-.317-.502A13.267 13.267 0 012.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.306-9.987c-.4-.2-2.365-1.167-2.731-1.3-.366-.133-.633-.2-.9.2-.267.4-1.032 1.3-1.265 1.567-.233.267-.466.3-.866.1-.4-.2-1.688-.622-3.215-1.984-1.188-1.06-1.99-2.37-2.223-2.77-.233-.4-.025-.616.175-.815.18-.18.4-.466.6-.7.2-.233.267-.4.4-.666.133-.267.067-.5-.033-.7-.1-.2-.9-2.166-1.233-2.966-.325-.78-.655-.674-.9-.686l-.766-.013c-.267 0-.7.1-1.066.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.3 6.833 6.033.955.413 1.7.66 2.282.844.958.305 1.831.262 2.52.159.769-.115 2.365-.967 2.698-1.9.333-.934.333-1.734.233-1.9-.1-.167-.367-.267-.767-.467z"/>
      </svg>
    </motion.a>
  );
}