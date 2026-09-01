import { Send, MessageSquare } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-16">
          
          <div className="flex-1 lg:pr-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Vamos construir algo <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue">incrível juntos?</span>
            </h2>
            <p className="text-lg text-text-secondary mb-10">
              Conte-nos sobre o seu desafio. Nossa equipe de especialistas está pronta para analisar seu cenário e propor a melhor solução tecnológica.
            </p>
            
            <div className="space-y-6">
              <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-green-500/50 hover:bg-green-500/10 transition-all group">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Falar no WhatsApp</h4>
                  <p className="text-sm text-text-secondary">Resposta em até 2 horas</p>
                </div>
              </a>
              
              <a href="mailto:hello@nupz.ia" className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all group">
                <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center text-neon-cyan group-hover:scale-110 transition-transform">
                  <Send className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-white font-medium">Enviar E-mail</h4>
                  <p className="text-sm text-text-secondary">hello@nupz.ia</p>
                </div>
              </a>
            </div>
          </div>
          
          <div className="flex-1">
            <form className="glass-card flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-white mb-2">Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full bg-bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                  placeholder="Seu nome"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">E-mail Corporativo</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full bg-bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all"
                  placeholder="seu@email.com"
                />
              </div>
              
              <div>
                <label htmlFor="project" className="block text-sm font-medium text-white mb-2">Tipo de Projeto</label>
                <select 
                  id="project" 
                  className="w-full bg-bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all appearance-none"
                >
                  <option value="" disabled selected>Selecione uma opção</option>
                  <option value="web">Aplicação Web / SaaS</option>
                  <option value="ai">Agente de IA / Automação</option>
                  <option value="mvp">Desenvolvimento de MVP</option>
                  <option value="other">Outro</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-white mb-2">Mensagem</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full bg-bg-secondary/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-neon-cyan/50 focus:ring-1 focus:ring-neon-cyan/50 transition-all resize-none"
                  placeholder="Conte-nos um pouco sobre a sua ideia..."
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full mt-2 inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-bg-primary bg-neon-cyan rounded-lg hover:bg-white transition-all neon-glow"
              >
                Enviar Mensagem
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </section>
  );
}
