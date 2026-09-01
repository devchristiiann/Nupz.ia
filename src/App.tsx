import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { ConceptLab } from './components/ConceptLab';
import { Process } from './components/Process';
import { TechStack } from './components/TechStack';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary font-sans selection:bg-neon-cyan/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <ConceptLab />
        <Process />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
