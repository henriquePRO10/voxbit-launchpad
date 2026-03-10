import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="sobre" className="group relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background base - matching CEO photo dark red/maroon */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(0, 0%, 4%) 0%, hsl(0, 50%, 12%) 40%, hsl(4, 77%, 20%) 70%, hsl(0, 40%, 10%) 100%)' }} />

      {/* Photo on the right side */}
      <div className="absolute top-0 right-0 w-1/2 h-full hidden md:block">
        <img
          src="/Henrique-960.webp"
          srcSet="/Henrique-640.webp 640w, /Henrique-960.webp 960w, /Henrique-1280.webp 1280w"
          sizes="(min-width: 1024px) 50vw, 0px"
          alt="Fundador da VoxBit Soluções"
          loading="lazy"
          decoding="async"
          width={1280}
          height={1660}
          className="w-full h-full object-cover object-top grayscale contrast-110 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="md:max-w-[45%] max-w-xl space-y-6"
        >
          <span className="text-sm text-primary font-semibold uppercase tracking-widest">
            Quem Somos
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-tight">
            A mente por trás da{" "}
            <span className="text-gradient-red">VoxBit</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Apaixonado por tecnologia e inovação, fundei a VoxBit Soluções com o propósito de ajudar empresas e empreendedores a alcançarem seu máximo potencial no mundo digital.
          </p>

          <p className="text-muted-foreground leading-relaxed">
            Com experiência em desenvolvimento web, SEO e sistemas personalizados, meu compromisso é transformar ideias em soluções reais que geram resultados.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            {["Desenvolvedor Web", "Especialista SEO", "UI/UX Designer"].map((tag) => (
              <span
                key={tag}
                className="bg-background/50 backdrop-blur-sm text-foreground text-xs px-4 py-2 rounded-full font-medium border border-border"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="inline-block bg-gradient-red text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-red mt-4">
            CEO & Fundador
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
