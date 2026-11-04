import { motion } from 'framer-motion';
import { cn } from '@/utils/cn';

export function Button({
  className,
  variant = 'primary',
  size = 'md',
  href,
  children,
  ...props
}) {
  const Tag = href ? motion.a : motion.button;

  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-500/20',
    outline: 'border border-white/20 hover:bg-white/5 text-white',
    ghost: 'hover:bg-white/5 text-white',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <Tag
      href={href}
      className={cn(
        'inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
        variants[variant],
        sizes[size],
        className,
      )}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      {children}
    </Tag>
  );
}
