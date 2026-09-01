import { motion } from 'framer-motion';
import { ExternalLink, Database, Cpu, Layout } from 'lucide-react';

const concepts = [
  {
    icon: <Database className="w-6 h-6" />,
    title: 'AI Knowledge Assistant',
    description: 'Assistente interno corporativo treinado em dados locais, capaz de consultar documentos, políticas e histórico da empresa em segundos.',
    tags: ['Next.js', 'Python', 'OpenAI', 'Pinecone', 'LangChain'],
    color: 'from-neon-cyan/20 to-transparent',
    borderColor: 'group-hover:border-neon-cyan/50',
  },
  {
    icon: <Layout className="w-6 h-6" />,
    title: 'Smart E-commerce Engine',
    description: 'Painel preditivo de automação de pedidos e estoque, utilizando machine learning para prever demandas sazonais e evitar rupturas.',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'TensorFlow'],
    color: 'from-electric-blue/20 to-transparent',
    borderColor: 'group-hover:border-electric-blue/50',
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'Automated Workflow Hub',
    description: 'Plataforma de orquestração de tarefas para equipes ágeis, com gatilhos inteligentes e geração automática de relatórios de desempenho.',
    tags: ['Vue', 'Fastify', 'MongoDB', 'Docker', 'RabbitMQ'],
    color: 'from-purple-500/20 to-transparent',
    borderColor: 'group-hover:border-purple-500/50',
  },
];

export function ConceptLab() {
  return (
    <section id="concept-lab" className="py-24 bg-bg-secondary/30 relative border-y border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Concept <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue">Lab</span>
            </h2>
            <p className="text-lg text-text-secondary">
              Explore nossos protótipos e arquiteturas conceituais. Demonstramos nossa capacidade técnica através de soluções simuladas de alto impacto.
            </p>
          </div>
          <button className="hidden md:inline-flex items-center gap-2 text-neon-cyan hover:text-white transition-colors font-medium">
            Ver repositórios <ExternalLink className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {concepts.map((concept, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass-card group relative overflow-hidden ${concept.borderColor}`}
            >
              <div className={`absolute top-0 left-0 right-0 h-32 bg-gradient-to-b ${concept.color} opacity-50 pointer-events-none`} />
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 border border-white/10 group-hover:scale-110 transition-transform">
                  {concept.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3">
                  {concept.title}
                </h3>
                
                <p className="text-text-secondary mb-8 flex-grow">
                  {concept.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-8">
                  {concept.tags.map((tag, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-text-secondary">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-neon-cyan transition-colors mt-auto pt-4 border-t border-white/10">
                  Ver Arquitetura/Demo <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
