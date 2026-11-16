import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { ArrowRight, Instagram, Globe } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Only register plugin in browser environment
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProjectCard({ project, index }) {
  const cardRef = useRef(null);

  useEffect(() => {
    gsap.from(cardRef.current, {
      scrollTrigger: {
        trigger: cardRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 60,
      duration: 0.8,
      delay: index * 0.15,
      ease: 'power3.out',
    });
  }, [index]);

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      className="group"
    >
      <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-slate-800 relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-90" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-white/10 bg-slate-900/80 text-xs font-medium text-indigo-300 backdrop-blur-sm">
            {project.category}
          </span>
        </div>
      </div>

      <div className="mt-5">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm mb-4">{project.description}</p>
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">{project.results}</span>
          {project.id === '1' && (
            <a
              href={project.link}
              className="ml-auto flex items-center gap-1.5 text-indigo-400 text-sm font-medium hover:text-indigo-300 transition-colors"
            >
              Case Study <ArrowRight size={16} strokeWidth={2} />
            </a>
          )}
        </div>

        {(project.instagram || project.website) && (
          <div className="mt-4 flex items-center gap-3">
            {project.instagram && (
              <a
                href={project.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
              >
                <Instagram size={16} strokeWidth={2} />
                <span>Instagram</span>
              </a>
            )}
            {project.website && (
              <a
                href={project.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-slate-400 hover:text-indigo-400 transition-colors text-sm"
              >
                <Globe size={16} strokeWidth={2} />
                <span>Website</span>
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
