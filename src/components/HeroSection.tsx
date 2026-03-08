import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import bgImage from "@/assets/fundo.png";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={bgImage} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Geometric decorations */}
      <div className="absolute top-20 right-10 w-72 h-72 border border-primary/10 rotate-45 rounded-3xl opacity-30" />
      <div className="absolute bottom-32 left-10 w-48 h-48 border border-primary/20 rotate-12 rounded-2xl opacity-20" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
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
              Sites, sistemas web, SEO e presença digital. Desenvolvemos soluções completas com segurança, performance e foco em resultados.
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
                { value: "50+", label: "Projetos entregues" },
                { value: "100%", label: "Foco no cliente" },
                { value: "24/7", label: "Suporte dedicado" },
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
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="hidden lg:flex justify-center items-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl scale-110" />
              <img src={logo} alt="VoxBit Soluções" className="relative w-72 h-72 object-contain drop-shadow-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
