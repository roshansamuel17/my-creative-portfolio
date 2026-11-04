import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';
import { Input } from '../../ui/Input';
import { Textarea } from '../../ui/Textarea';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  budget: z.string().optional(),
  message: z.string().min(10, 'Please tell us more about your project'),
});

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) });

  const onSubmit = (data) => {
    alert('Thank you! Your message has been sent (demo).');
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="grid md:grid-cols-2 gap-5"
      >
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Full Name</label>
          <input {...register('name')} placeholder="Jane Doe" className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
          {errors.name && <p className="text-xs text-rose-400">{errors.name.message}</p>}
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-300">Email</label>
          <input {...register('email')} type="email" placeholder="jane@company.com" className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
          {errors.email && <p className="text-xs text-rose-400">{errors.email.message}</p>}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="space-y-2"
      >
        <label className="text-sm font-medium text-slate-300">Company</label>
        <input {...register('company')} placeholder="Acme Corp" className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="space-y-2"
      >
        <label className="text-sm font-medium text-slate-300">Service Interest</label>
        <select
          {...register('service')}
          className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-slate-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
        >
          <option value="">Select a service</option>
          <option value="Paid Media">Paid Media (Meta, Google, TikTok)</option>
          <option value="SEO">SEO & Content Strategy</option>
          <option value="CRO">Conversion Rate Optimization</option>
          <option value="Email">Email & Lifecycle Marketing</option>
          <option value="Other">Other</option>
        </select>
        {errors.service && <p className="text-xs text-rose-400">{errors.service.message}</p>}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="space-y-2"
      >
        <label className="text-sm font-medium text-slate-300">Message</label>
        <textarea {...register('message')} rows={4} placeholder="Tell me about your goals, timeline, and budget..." className="w-full rounded-xl border border-white/10 bg-slate-900/50 px-4 py-3 text-slate-100 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" />
        {errors.message && <p className="text-xs text-rose-400">{errors.message.message}</p>}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Button type="submit" disabled={isSubmitting} className="w-full">
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </Button>
      </motion.div>
    </form>
  );
}
