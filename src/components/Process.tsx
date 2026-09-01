import { motion } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'Descoberta & Arquitetura',
    description: 'Mapeamento de requisitos, viabilidade técnica e definição da arquitetura ideal para escalabilidade.',
  },
  {
    num: '02',
    title: 'Prototipagem Rápida',
    description: 'Criação de wireframes e protótipos de alta fidelidade para alinhar a experiência do usuário antes do código.',
  },
  {
    num: '03',
    title: 'Desenvolvimento & IA',
    description: 'Codificação ágil com sprints semanais, integrando modelos de IA e construindo o núcleo do software.',
  },
  {
    num: '04',
    title: 'Testes & Lançamento',
    description: 'QA rigoroso, otimização de performance, deploy seguro em nuvem e acompanhamento pós-lançamento.',
  },
];

export function Process() {
  return (
    <section id="process" className="py-24 relative">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Como <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue">Trabalhamos</span>
          </h2>
          <p className="text-lg text-text-secondary">
            Um processo previsível e transparente, desenhado para transformar complexidade em soluções elegantes.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-neon-cyan/20 via-electric-blue/50 to-neon-cyan/20" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative pt-8 md:pt-0"
              >
                {/* Number Indicator */}
                <div className="absolute top-0 md:-top-4 left-1/2 md:left-4 -translate-x-1/2 md:translate-x-0 w-8 h-8 rounded-full bg-bg-primary border border-neon-cyan flex items-center justify-center text-xs font-bold text-neon-cyan shadow-[0_0_10px_rgba(0,240,255,0.3)] z-10">
                  {step.num}
                </div>
                
                <div className="mt-6 md:mt-10 glass-card text-center md:text-left h-full group hover:-translate-y-2 transition-transform duration-300">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-text-secondary">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
