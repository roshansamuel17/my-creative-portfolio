import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export function Card({ className, children, ...props }) {
  return (
    <motion.div
      className={cn(
        'group relative rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition-all duration-300 hover:border-white/20 hover:bg-slate-900/80',
        className,
      )}
      whileHover={{ y: -4 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
