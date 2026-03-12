import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import bgImage from "@/assets/fundo.webp";
const logo = "/logo-hero.webp";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bgImage.src} alt="" fetchPriority="low" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 border border-primary/10 rotate-45 rounded-3xl opacity-30" />
      <div className="absolute bottom-32 left-10 w-48 h-48 border border-primary/20 rotate-12 rounded-2xl opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={false}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2"
            >
              <Zap size={14} className="text-primary" />
              <span className="text-sm text-primary font-medium">Soluções que transformam negócios</span>
            </motion.div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold leading-tight">
              Tecnologia sob medida para o{" "}
              <span className="text-gradient-red">seu negócio</span> crescer
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Sites, sistemas web, SEO e presença digital para empresas em <strong>Sinop-MT</strong> e região. Desenvolvemos soluções completas com segurança, performance e foco em resultados.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contato"
                className="bg-gradient-red text-primary-foreground px-8 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-red inline-flex items-center justify-center gap-2 animate-glow-pulse"
              >
                Quero meu projeto <ArrowRight size={20} />
              </a>
              <a
                href="#servicos"
                className="border border-border text-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary transition-colors text-center"
              >
                Ver serviços
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-4">
              {[
                { value: "7 dias", label: "Entrega média de MVPs" },
                { value: "90+", label: "Score PageSpeed em projetos otimizados" },
                { value: "100%", label: "Código sob medida, sem template" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-heading font-bold text-gradient-red">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Logo showcase */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden min-h-[560px] lg:flex justify-center items-center"
          >
            <div className="hero-logo-stage pointer-events-none absolute inset-0" />

            <div className="hero-logo-orb absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full" />

            <motion.div
              animate={{ y: [0, -14, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative flex h-[30rem] w-[30rem] items-center justify-center"
            >
              <div className="hero-logo-beam absolute inset-y-10 left-12 w-24 rounded-full blur-3xl" />
              <div className="hero-logo-beam absolute bottom-16 right-8 h-40 w-40 rounded-full blur-3xl" />
              <div className="hero-logo-shell absolute inset-8 rounded-[3rem]" />
              <div className="hero-logo-grid absolute inset-14 rounded-[2.5rem]" />
              <img
                src={logo}
                alt="VoxBit Soluções"
                loading="eager"
                fetchPriority="high"
                width={640}
                height={726}
                className="hero-logo-ghost absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 object-contain"
              />
              <img
                src={logo}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="hero-logo-core absolute left-1/2 top-1/2 h-[25rem] w-[25rem] -translate-x-1/2 -translate-y-1/2 object-contain"
              />
              <div className="hero-logo-vignette absolute inset-0 rounded-[3rem]" />
            </motion.div>

            <div className="hero-logo-accent absolute right-10 top-16 h-28 w-28 rounded-full blur-3xl" />
            <div className="hero-logo-accent absolute bottom-10 left-6 h-36 w-36 rounded-full blur-[100px]" />
            <div className="hero-logo-noise absolute inset-0 rounded-[3rem]" />

            <div className="absolute bottom-10 right-12 rounded-full border border-white/10 bg-black/20 px-4 py-2 backdrop-blur-md">
              <span className="text-xs font-medium uppercase tracking-[0.35em] text-white/55">Identidade digital viva</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
