import { Button } from '../../ui/Button';
import { HeroText } from './HeroText';
import { HeroVisual } from './HeroVisual';

export function Hero() {
  return (
    <section className="relative pt-20 pb-24 lg:pt-32 lg:pb-36 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <HeroText />
          </div>

          <div className="hidden lg:block">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
