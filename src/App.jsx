import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { ProjectGallery } from './components/sections/ProjectGallery/ProjectGallery';
import { Contact } from './components/sections/Contact/Contact';

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <ProjectGallery />
      <Contact />
      <Footer />
    </>
  );
}
