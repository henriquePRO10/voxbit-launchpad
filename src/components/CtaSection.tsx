import { motion } from "framer-motion";
import { ArrowRight, Clock, CheckCircle } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="contato" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[500px] h-[500px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Urgency badge */}
          <motion.div
            initial={false}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 rounded-full px-5 py-2 mb-8"
          >
            <Clock size={14} className="text-primary" />
            <span className="text-sm text-primary font-semibold">Vagas limitadas para este mês</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold leading-tight">
            Pronto para levar seu negócio ao{" "}
            <span className="text-gradient-red">próximo nível?</span>
          </h2>

          <p className="text-muted-foreground mt-6 text-lg max-w-xl mx-auto">
            Fale com a VoxBit e descubra como a tecnologia certa pode acelerar seus resultados. Orçamento sem compromisso.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="https://wa.me/5566996067576"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-red text-primary-foreground px-10 py-4 rounded-xl font-bold text-lg hover:opacity-90 transition-all shadow-red inline-flex items-center justify-center gap-2 animate-glow-pulse"
            >
              Falar pelo WhatsApp <ArrowRight size={20} />
            </a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-10 text-sm text-muted-foreground">
            {["Resposta imediata", "Orçamento gratuito", "Sem compromisso"].map((text) => (
              <span key={text} className="inline-flex items-center gap-1.5">
                <CheckCircle size={14} className="text-primary" />
                {text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
