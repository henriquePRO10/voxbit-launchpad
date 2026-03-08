import { motion } from "framer-motion";
import founderImg from "@/assets/founder.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-semibold uppercase tracking-widest">Quem Somos</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold mt-3">
            A mente por trás da <span className="text-gradient-red">VoxBit</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative pt-32 md:pt-0 md:pl-32">
            {/* Floating photo - overlapping the card */}
            <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 -top-4 md:top-1/2 md:-translate-y-1/2 md:-left-12 z-20">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
                className="relative"
              >
                <div className="absolute -inset-3 bg-gradient-red rounded-2xl opacity-40 blur-xl animate-glow-pulse" />
                <div className="relative w-44 h-56 md:w-52 md:h-64 rounded-2xl overflow-hidden border-2 border-primary/40 shadow-red">
                  <img
                    src={founderImg}
                    alt="Fundador da VoxBit Soluções"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: '50% 15%', transform: 'scale(1.3)' }}
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-red text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
                  CEO & Fundador
                </div>
              </motion.div>
            </div>

            {/* Card */}
            <div className="relative bg-gradient-card border border-border rounded-3xl overflow-hidden shadow-card">
              <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-red opacity-10" />

              <div className="relative z-10 p-8 pt-8 md:pl-32 space-y-4 text-center md:text-left">
                <h3 className="text-2xl font-heading font-bold text-foreground">
                  Sua história começa aqui
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  Apaixonado por tecnologia e inovação, fundei a VoxBit Soluções com o propósito de ajudar empresas e empreendedores a alcançarem seu máximo potencial no mundo digital. Cada projeto é tratado como único, porque acredito que escutar o cliente é o primeiro passo para entregar o melhor produto.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Com experiência em desenvolvimento web, SEO e sistemas personalizados, meu compromisso é transformar ideias em soluções reais que geram resultados.
                </p>

                <div className="flex flex-wrap gap-3 justify-center md:justify-start pt-2">
                  {["Desenvolvedor Web", "Especialista SEO", "UI/UX Designer"].map((tag) => (
                    <span key={tag} className="bg-muted text-muted-foreground text-xs px-3 py-1.5 rounded-full font-medium border border-border">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
