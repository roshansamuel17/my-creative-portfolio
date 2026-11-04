import { motion } from 'framer-motion';
import { Briefcase, CheckCircle2, Users, GraduationCap, Award } from 'lucide-react';
import { Section } from '../../ui/Section';

export function About() {
  const stats = [
    { label: 'Degree', value: 'MSc Digital Marketing', Icon: GraduationCap },
    { label: 'Certifications', value: '6+', Icon: Award },
    { label: 'Campaigns Reach', value: '10k+ Users', Icon: Users },
  ];

  const education = [
    {
      degree: 'Masters in Digital Marketing (Grade 2:1)',
      school: 'UCD Michael Smurfit Graduate Business School, Dublin, Ireland',
      year: '2024–2025',
      modules: 'Social Media Marketing, Consumer Insights and Analytics, CX Management, SEO and SEA, Omnichannel Marketing',
    },
    {
      degree: 'Bachelors in Commerce (CGPA: 7.71)',
      school: 'Loyola College, Chennai, India',
      year: '2021–2024',
      modules: 'Consumer Behaviour and Market Research, Service Marketing, Retailing Management',
    },
  ];

  const certifications = [
    'Google Digital Marketing & E-commerce',
    'Google Ads Search',
    'HubSpot Marketing Hub Software',
    'HubSpot Social Media Marketing',
    'Semrush SEO Toolkit',
  ];

  const skills = [
    'Canva',
    'CapCut',
    'Wix Studio',
    'HubSpot',
    'SEMrush',
    'Google Ads',
    'Google Analytics',
    'Meta Ads',
    'Copywriting',
    'SEO/SEM',
    'A/B Testing',
    'Content Creation',
  ];

  const languages = [
    { name: 'English', level: 'Native' },
    { name: 'Tamil', level: 'Native' },
    { name: 'French', level: 'Proficient' },
    { name: 'Arabic', level: 'Beginner' },
  ];

  return (
    <Section id="about" py="24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Me</h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Creative and results-driven digital marketing graduate based in Chennai, with a Masters from UCD Smurfit School, Dublin. I specialise in social media strategy, content creation, paid media, and SEO — turning data into growth.
          </p>
        </motion.div>

        {/* Experience Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-white/10 bg-slate-900/50"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 mb-4">
                <stat.Icon size={20} strokeWidth={2} />
              </div>
              <div className="text-2xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-slate-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Education & Certifications */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">Education</h3>
            {education.map((edu, i) => (
              <div key={i} className="space-y-2">
                <div className="flex justify-between items-start">
                  <span className="font-medium text-indigo-400">{edu.degree}</span>
                  <span className="text-sm text-slate-500">{edu.year}</span>
                </div>
                <span className="text-sm text-slate-400">{edu.school}</span>
                <p className="text-xs text-slate-500 mt-1">{edu.modules}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, i) => (
                <div key={cert} className="flex items-center gap-3 p-3 rounded-xl border border-white/10 bg-slate-900/50">
                  <CheckCircle2 size={16} strokeWidth={2} className="text-indigo-400 shrink-0" />
                  <span className="text-sm text-slate-300">{cert}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills & Languages */}
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">Tools & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, i) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full border border-white/10 bg-slate-900/50 text-xs text-slate-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-bold text-white mb-2">Languages</h3>
            <div className="space-y-4">
              {languages.map((lang, i) => (
                <div key={lang.name} className="flex justify-between items-center">
                  <span className="text-sm text-slate-300">{lang.name}</span>
                  <div className="w-24 h-1 rounded-full bg-white/10 overflow-hidden">
                    <div
                      className="h-full bg-indigo-500"
                      style={{
                        width:
                          lang.level === 'Native'
                            ? '100%'
                            : lang.level === 'Proficient'
                            ? '85%'
                            : '50%',
                      }}
                    />
                  </div>
                  <span className="text-xs text-slate-500">{lang.level}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
