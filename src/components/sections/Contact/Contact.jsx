import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { Section } from '../../ui/Section';

export function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'roshxsam1972@gmail.com' },
    { icon: Phone, label: '+91 8056101495' },
    { icon: MapPin, label: 'Chennai, India' },
    { icon: Linkedin, label: 'Roshan Samuel LinkedIn', url: 'https://www.linkedin.com/in/roshansamuel1763' },
  ];

  return (
    <Section id="contact" py="24">
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Let's grow together</h2>
              <p className="text-lg text-slate-400 max-w-md">
                Digital marketer based in Chennai, available for freelance and full-time opportunities. Reach out for social media strategy, content creation, PPC, SEO, or brand consulting.
              </p>

              <div className="space-y-4">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, delay: i * 0.1 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400">
                      <item.icon size={20} strokeWidth={2} />
                    </div>
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-400 hover:text-indigo-300 transition-colors"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="text-slate-300">{item.label}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center"
          >
            <div className="w-full max-w-md">
              <ContactForm />
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
