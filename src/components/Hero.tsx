import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-cyan/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-electric-blue/20 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm"
          >
            <span className="flex h-2 w-2 rounded-full bg-neon-cyan animate-pulse" />
            <span className="text-sm font-medium text-text-secondary">Estúdio de Inovação & IA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Transformamos ideias complexas em <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-cyan to-electric-blue">softwares inteligentes</span> e escaláveis.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto"
          >
            Desenvolvimento ágil de aplicações web, automações e soluções impulsionadas por IA sob medida para o seu negócio.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-bg-primary bg-neon-cyan rounded-full hover:bg-white transition-all neon-glow"
            >
              <MessageCircle className="w-5 h-5" />
              Agendar Reunião
            </a>
            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-medium text-white bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-all"
            >
              Explorar Soluções
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative floating elements */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="hidden lg:block absolute top-1/3 left-12 p-6 glass-card border-neon-cyan/20 rounded-2xl rotate-[-10deg]"
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-neon-cyan/20 flex items-center justify-center">
            <span className="text-neon-cyan font-mono text-xs">AI</span>
          </div>
          <div>
            <div className="h-2 w-20 bg-white/20 rounded mb-2"></div>
            <div className="h-2 w-12 bg-white/10 rounded"></div>
          </div>
        </div>
      </motion.div>

      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden lg:block absolute bottom-1/3 right-12 p-6 glass-card border-electric-blue/20 rounded-2xl rotate-[10deg]"
      >
        <div className="flex items-center gap-3">
          <div>
            <div className="h-2 w-24 bg-white/20 rounded mb-2"></div>
            <div className="h-2 w-16 bg-white/10 rounded"></div>
          </div>
          <div className="w-10 h-10 rounded-full bg-electric-blue/20 flex items-center justify-center">
            <span className="text-electric-blue font-mono text-xs">API</span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
