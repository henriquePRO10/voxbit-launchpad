import { motion } from "framer-motion";
import { Globe, Search, Database, Code, Smartphone, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Sites & Landing Pages",
    description: "Criação de sites institucionais, landing pages de vendas e páginas pessoais com design moderno e conversão otimizada.",
    tag: "Mais procurado",
  },
  {
    icon: Search,
    title: "SEO & Google Meu Negócio",
    description: "Reposicionamento da sua empresa no Google Maps e buscas orgânicas com estratégias avançadas de SEO.",
    tag: null,
  },
  {
    icon: Database,
    title: "Sistemas Web Completos",
    description: "Desenvolvimento de sistemas com banco de dados integrado, criptografia e foco em segurança e produtividade.",
    tag: null,
  },
  {
    icon: Code,
    title: "Desenvolvimento Personalizado",
    description: "Soluções sob demanda desenvolvidas com as tecnologias mais modernas do mercado, adaptadas ao seu negócio.",
    tag: null,
  },
  {
    icon: Smartphone,
    title: "Design Responsivo",
    description: "Interfaces que funcionam perfeitamente em qualquer dispositivo — desktop, tablet ou smartphone.",
    tag: null,
  },
  {
    icon: ShieldCheck,
    title: "Segurança & Performance",
    description: "Aplicações robustas com criptografia de dados, proteção contra ameaças e performance otimizada.",
    tag: null,
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm text-primary font-semibold uppercase tracking-widest">Nossos Serviços</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold mt-3">
            Soluções completas em <span className="text-gradient-red">tecnologia</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Do conceito à entrega, criamos produtos digitais que impulsionam resultados reais para o seu negócio.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-gradient-card border border-border rounded-2xl p-6 relative overflow-hidden shadow-card hover:border-primary/30 transition-all duration-300"
            >
              {service.tag && (
                <span className="absolute top-4 right-4 bg-gradient-red text-primary-foreground text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full">
                  {service.tag}
                </span>
              )}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-heading font-bold text-lg text-foreground mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-red scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
