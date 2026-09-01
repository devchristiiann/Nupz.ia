import { motion } from 'framer-motion';
import { Monitor, Bot, Zap, Link } from 'lucide-react';

const services = [
  {
    icon: <Monitor className="w-8 h-8 text-neon-cyan" />,
    title: 'Aplicações Web & SaaS Sob Medida',
    description: 'Desenvolvimento Full-stack (Front-end e Back-end) moderno, rápido e escalável, focado na melhor experiência para o usuário.',
  },
  {
    icon: <Bot className="w-8 h-8 text-electric-blue" />,
    title: 'Automação & Agentes de IA',
    description: 'Redução de trabalho manual através de fluxos inteligentes e integração com LLMs de ponta para otimizar processos.',
  },
  {
    icon: <Zap className="w-8 h-8 text-neon-cyan" />,
    title: 'Desenvolvimento de MVPs',
    description: 'Validação rápida da sua ideia de produto com lançamento em semanas, construído para evoluir sem refação.',
  },
  {
    icon: <Link className="w-8 h-8 text-electric-blue" />,
    title: 'Integrações & APIs',
    description: 'Conexão fluida entre ferramentas, sistemas legados e ecossistemas digitais para uma operação sincronizada.',
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Nossas <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue">Soluções</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Construímos o alicerce tecnológico para empresas que desejam liderar na era da inteligência artificial.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={item} className="glass-card group cursor-pointer">
              <div className="mb-6 p-4 rounded-2xl bg-white/5 inline-block border border-white/10 group-hover:border-neon-cyan/30 transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                {service.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
