import { motion } from 'framer-motion';
import { TrendingUp, BarChart3, Target } from 'lucide-react';

const stats = [
  { label: 'Website Growth', value: '867%' },
  { label: 'Follower Engagement', value: '+30%' },
  { label: 'Organic Engagement', value: '+85%' },
];

const insights = [
  { label: 'A/B Tested CTAs', icon: TrendingUp },
  { label: 'Social Content Strategy', icon: BarChart3 },
  { label: 'Cross-Platform Analysis', icon: Target },
];

export function HeroVisual() {
  return (
    <div className="flex flex-col gap-4">
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4 }}
        className="relative group"
      >
        <div className="absolute inset-0 bg-indigo-600/20 blur-xl rounded-2xl" />
        <div className="relative p-8 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-sm">
          <div className="flex items-center gap-3 text-indigo-400 mb-4">
            <TrendingUp size={24} strokeWidth={2} />
            <span className="font-mono text-xl">Key Metrics</span>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-xs text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-2 gap-4">
        {insights.map((insight, i) => (
          <motion.div
            key={insight.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 + i * 0.1 }}
            className="p-4 rounded-xl border border-white/10 bg-slate-900/50 hover:border-indigo-500/50 transition-colors"
          >
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-2">
              <insight.icon size={20} strokeWidth={2} />
            </div>
            <div className="text-sm font-medium text-slate-300">{insight.label}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
