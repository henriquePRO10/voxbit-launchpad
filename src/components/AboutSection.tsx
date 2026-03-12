import { motion } from "framer-motion";

const getFullYearsSince = (startDate: Date, now: Date) => {
  let years = now.getFullYear() - startDate.getFullYear();
  const monthDelta = now.getMonth() - startDate.getMonth();

  if (monthDelta < 0 || (monthDelta === 0 && now.getDate() < startDate.getDate())) {
    years -= 1;
  }

  return Math.max(0, years);
};

const AboutSection = () => {
  const today = new Date();
  const age = getFullYearsSince(new Date(2000, 11, 8), today);
  const yearsOfExperience = getFullYearsSince(new Date(2021, 0, 1), today);

  return (
    <section id="sobre" className="group relative min-h-[80vh] flex items-center overflow-hidden scroll-mt-24 md:scroll-mt-28">
      {/* Background base - matching CEO photo dark red/maroon */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, hsl(0, 0%, 4%) 0%, hsl(0, 50%, 12%) 40%, hsl(4, 77%, 20%) 70%, hsl(0, 40%, 10%) 100%)' }} />

      {/* Photo on the right side */}
      <div className="absolute top-0 right-[10%] w-[28%] h-full hidden md:block lg:right-[9%] lg:w-[30%] xl:right-[8%] xl:w-[31%] rounded-lg overflow-hidden">
        <img
          src="/Henrique-960.webp"
          srcSet="/Henrique-640.webp 640w, /Henrique-960.webp 960w, /Henrique-1280.webp 1280w"
          sizes="(min-width: 1280px) 31vw, (min-width: 1024px) 30vw, 28vw"
          alt="Fundador da VoxBit Soluções"
          loading="lazy"
          decoding="async"
          width={1280}
          height={1660}
          className="w-full h-full object-contain object-right-top grayscale contrast-110 transition-all duration-500 group-hover:grayscale-0 group-hover:contrast-100"
        />
        <div className="pointer-events-none absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:opacity-0" />
        <p className="absolute bottom-4 left-4 right-4 z-10 rounded-md bg-black/55 px-3 py-2 text-xs text-white/95 backdrop-blur-sm">
          Meu nome é Henrique Mello, {age} anos e tenho {yearsOfExperience} anos de experiência em desenvolvimento.
        </p>
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
            Quem Sou
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-foreground leading-tight">
            Estrategista de Tecnologia e{" "}
            <span className="text-gradient-red">Full-Stack Solutions Engineer</span>
          </h2>

          <p className="text-muted-foreground text-lg leading-relaxed">
            Minha trajetória une a gestão administrativa à paixão pelo desenvolvimento de software. Essa dualidade me permite entender os desafios reais de um negócio e transformá-los em código eficiente.
          </p>

          <h3 className="text-xl font-heading font-semibold text-foreground">
            O que Entrego
          </h3>

          <p className="text-muted-foreground leading-relaxed">
            Pela <span className="text-gradient-red font-semibold">VoxBit Soluções</span>, transformo complexidade em eficiência. Entrego soluções de engenharia que incluem aplicações web personalizadas, integração de sistemas e estratégias avançadas de SEO, garantindo que sua presença digital não apenas apareça, mas converta e impulsione o seu negócio.
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

        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
