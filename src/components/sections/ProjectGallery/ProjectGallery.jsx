import { useState } from 'react';
import { motion } from 'framer-motion';
import { FilterPills } from './FilterPills';
import { ProjectCard } from './ProjectCard';
import { Section } from '../../ui/Section';
import { projects } from '@/data/projects';

export function ProjectGallery() {
  const categories = ['All', ...new Set(projects.map((p) => p.category))];
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? projects : projects.filter((p) => p.category === filter);

  return (
    <Section id="work" py="24" className="bg-slate-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Selected Work</h2>
          <p className="text-lg text-slate-400">
            Case studies built on strategy, creative, and measurable results.
          </p>
        </div>

        <FilterPills categories={categories.slice(1)} onFilterChange={setFilter} />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
