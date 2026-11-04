import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/Button';

const links = [
  { name: 'Work', hash: '#work' },
  { name: 'About', hash: '#about' },
  { name: 'Contact', hash: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-slate-950/80 backdrop-blur-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-12">
        <div className="text-xl font-bold tracking-tight">Roshan Samuel</div>

        <div className="hidden md:flex items-center space-x-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.hash}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
          <Button variant="ghost" size="sm">
            Contact
          </Button>
        </div>

        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      <AnimatePresence mode="wait">
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-white/5 bg-slate-950 px-6 pb-4 space-y-4"
          >
            {links.map((link) => (
              <a
                key={link.name}
                href={link.hash}
                onClick={() => setIsOpen(false)}
                className="block text-lg font-medium text-slate-300 hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <Button className="w-full">Contact Me</Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
