import { cn } from '@/utils/cn';

export function Textarea({ className, ...props }) {
  return (
    <textarea
      className={cn(
        'flex w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all',
        className,
      )}
      {...props}
    />
  );
}
