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
          <div className="relative bg-gradient-card border border-border rounded-3xl overflow-hidden shadow-card">
            {/* Top gradient accent */}
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-red opacity-20" />
            <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-transparent to-card" style={{ top: '6rem' }} />

            <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 pt-20 md:pt-8">
              {/* Photo */}
              <div className="relative flex-shrink-0">
                <div className="absolute -inset-2 bg-gradient-red rounded-2xl opacity-40 blur-lg" />
                <div className="relative w-52 h-64 rounded-2xl overflow-hidden border-2 border-primary/30">
                  <img
                    src={founderImg}
                    alt="Fundador da VoxBit Soluções"
                    className="w-full h-full object-cover object-top"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-card to-transparent" />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-red text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold whitespace-nowrap shadow-lg">
                  CEO & Fundador
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 text-center md:text-left space-y-4">
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
