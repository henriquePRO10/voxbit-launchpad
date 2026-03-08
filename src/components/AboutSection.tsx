import { motion } from "framer-motion";
import founderImg from "@/assets/founder.png";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-24 relative overflow-hidden">
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
          className="max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-card border border-border rounded-3xl overflow-hidden shadow-card min-h-[320px] md:min-h-[360px]">
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-red opacity-10" />

            {/* Photo - integrated, bleeding out of card */}
            <div className="absolute bottom-0 left-0 md:left-8 z-10 w-48 md:w-64 pointer-events-none">
              <img
                src={founderImg}
                alt="Fundador da VoxBit Soluções"
                className="w-full h-auto object-contain drop-shadow-2xl"
                style={{ 
                  maskImage: 'linear-gradient(to top, transparent 0%, black 15%)',
                  WebkitMaskImage: 'linear-gradient(to top, transparent 0%, black 15%)',
                }}
              />
            </div>

            {/* Glow behind photo */}
            <div className="absolute bottom-0 left-4 md:left-16 w-40 md:w-52 h-40 bg-primary/20 blur-3xl rounded-full z-0" />

            {/* Content - pushed to the right */}
            <div className="relative z-10 ml-auto w-full md:w-3/5 p-8 md:p-10 space-y-4 text-center md:text-left">
              <div className="inline-block bg-gradient-red text-primary-foreground px-4 py-1.5 rounded-full text-xs font-bold shadow-lg mb-2">
                CEO & Fundador
              </div>
              <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
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
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
