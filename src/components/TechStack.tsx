import { motion } from 'framer-motion';

const technologies = [
  'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 
  'Tailwind CSS', 'PostgreSQL', 'Fastify', 'Docker', 
  'OpenAI APIs', 'AWS', 'Redis', 'GraphQL', 'Framer Motion'
];

export function TechStack() {
  return (
    <section className="py-20 border-y border-white/5 bg-white/[0.02] overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 mb-10 text-center">
        <h3 className="text-sm font-medium text-text-secondary uppercase tracking-widest">
          Stack Tecnológico Moderno
        </h3>
      </div>
      
      {/* Infinite scrolling banner effect */}
      <div className="relative flex overflow-x-hidden group">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-bg-primary to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-bg-primary to-transparent z-10" />
        
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap gap-4 md:gap-8 px-4"
        >
          {/* Double array for seamless looping */}
          {[...technologies, ...technologies].map((tech, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-white/5 border border-white/10 text-white font-medium hover:bg-white/10 hover:border-white/20 transition-colors cursor-default"
            >
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
