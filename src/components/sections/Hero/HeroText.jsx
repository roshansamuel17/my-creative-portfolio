import { motion } from 'framer-motion';
import { Button } from '../../ui/Button';

export function HeroText() {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-6"
      >
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 text-xs font-medium tracking-wide">
          Digital Marketing Graduate • Chennai
        </span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6 text-balance"
      >
        Growth-driven{' '}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-orange-400">
          digital marketing.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-lg text-slate-400 max-w-lg leading-relaxed mb-8"
      >
        Creative and results-driven digital marketer proficient in Canva, CapCut, Wix Studio, and organic reach and conversion strategies. Skilled in social media strategy, content creation, Google Ads, PPC, SEO, SEM, copywriting, and web performance analysis.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <Button size="lg" href="#work">
          View My Work
        </Button>
        <Button variant="outline" size="lg" href="#contact">
          Let's Talk
        </Button>
      </motion.div>
    </div>
  );
}
