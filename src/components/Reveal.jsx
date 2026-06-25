import { motion } from 'framer-motion';

export default function Reveal({ children, delay = 0, className = '' }) {
  const safeDelay = Math.min(delay, 0.08);

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{
        duration: 0.32,
        delay: safeDelay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {children}
    </motion.div>
  );
}