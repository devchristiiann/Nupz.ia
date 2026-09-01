import { motion } from 'framer-motion';
import { Menu, X, Cpu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '../lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Concept Lab', href: '#concept-lab' },
    { name: 'Processo', href: '#process' },
    { name: 'Contato', href: '#contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b',
        isScrolled
          ? 'bg-bg-primary/80 backdrop-blur-md border-white/10 py-3 shadow-lg'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="bg-neon-cyan/10 p-2 rounded-lg group-hover:bg-neon-cyan/20 transition-colors">
            <Cpu className="w-6 h-6 text-neon-cyan group-hover:neon-glow transition-all" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">Nupz.ia</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary hover:text-white transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-full hover:bg-neon-cyan/20 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all hover:neon-glow"
          >
            Iniciar Projeto
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-text-secondary hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-full left-0 right-0 bg-bg-primary/95 backdrop-blur-xl border-b border-white/10 py-4 px-4 flex flex-col gap-4 shadow-2xl"
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-text-secondary hover:text-white py-2"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-white bg-white/10 border border-white/20 rounded-lg hover:bg-neon-cyan/20 hover:border-neon-cyan/50 hover:text-neon-cyan transition-all"
          >
            Iniciar Projeto
          </a>
        </motion.div>
      )}
    </header>
  );
}
