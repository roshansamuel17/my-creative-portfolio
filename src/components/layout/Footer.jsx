import { Linkedin, Twitter, Instagram, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-center md:justify-between px-6 py-6 border border-white/5 rounded-2xl bg-slate-900/30">
          <div className="text-xl font-bold tracking-tight">Roshan Samuel</div>

          <div className="flex items-center gap-4">
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <Linkedin size={20} strokeWidth={2} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Twitter">
              <Twitter size={20} strokeWidth={2} />
            </a>
            <a href="#" className="text-slate-400 hover:text-white transition-colors" aria-label="Instagram">
              <Instagram size={20} strokeWidth={2} />
            </a>
            <a href="mailto:hello@example.com" className="text-slate-400 hover:text-white transition-colors" aria-label="Email">
              <Mail size={20} strokeWidth={2} />
            </a>
          </div>
        </div>

        <p className="mt-8 text-center text-sm text-slate-500">
          &copy; {new Date().getFullYear()} Roshan Samuel Belaarmine — Digital Marketing Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
