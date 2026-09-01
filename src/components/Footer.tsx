import { Cpu } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-bg-primary pt-16 pb-8 border-t border-white/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <Cpu className="w-6 h-6 text-neon-cyan" />
              <span className="text-xl font-bold tracking-tight text-white">Nupz.ia</span>
            </a>
            <p className="text-text-secondary max-w-sm mb-6">
              Estúdio boutique de desenvolvimento focado em criar o futuro através de softwares modernos e inteligência artificial.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-neon-cyan/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-neon-cyan/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" aria-label="GitHub" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-secondary hover:text-white hover:border-neon-cyan/50 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Navegação</h4>
            <ul className="space-y-3">
              <li><a href="#services" className="text-sm text-text-secondary hover:text-neon-cyan transition-colors">Serviços</a></li>
              <li><a href="#concept-lab" className="text-sm text-text-secondary hover:text-neon-cyan transition-colors">Concept Lab</a></li>
              <li><a href="#process" className="text-sm text-text-secondary hover:text-neon-cyan transition-colors">Processo</a></li>
              <li><a href="#contact" className="text-sm text-text-secondary hover:text-neon-cyan transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-sm text-text-secondary hover:text-white transition-colors">Política de Privacidade</a></li>
            </ul>
          </div>
          
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">
            &copy; {currentYear} Nupz.ia Studio. Todos os direitos reservados.
          </p>
          <p className="text-sm text-text-secondary flex items-center gap-1">
            Feito com <span className="text-neon-cyan">♥</span> no Brasil
          </p>
        </div>
      </div>
    </footer>
  );
}
