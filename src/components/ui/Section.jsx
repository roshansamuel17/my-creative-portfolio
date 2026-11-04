import { motion } from 'framer-motion';

export function Section({ children, className, py = '20', id, ...props }) {
  return (
    <motion.section
      id={id}
      className={`py-${py} ${className || ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      {...props}
    >
      {children}
    </motion.section>
  );
}
