import { motion } from "framer-motion";
import { Accessibility, Gauge, Search, ShieldCheck } from "lucide-react";

const metrics = [
  {
    title: "Performance",
    score: "95+",
    description: "Carregamento rápido, animações leves e foco real em experiência.",
    icon: Gauge,
  },
  {
    title: "SEO",
    score: "95+",
    description: "Estrutura preparada para indexação, relevância e presença orgânica.",
    icon: Search,
  },
  {
    title: "Boas Práticas",
    score: "95+",
    description: "Código consistente, seguro e com padrão técnico de produção.",
    icon: ShieldCheck,
  },
  {
    title: "Acessibilidade",
    score: "95+",
    description: "Interfaces mais inclusivas, legíveis e utilizáveis em mais cenários.",
    icon: Accessibility,
  },
];

const LighthouseSection = () => {
  return (
    <section className="relative overflow-hidden py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
      <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-start gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-xl space-y-6"
          >
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-primary">
              Auditoria Lighthouse
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-heading font-extrabold leading-tight text-foreground sm:text-4xl lg:text-5xl">
                Qualidade visível no layout e <span className="text-gradient-red">validada tecnicamente</span>
              </h2>

              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
                Cada entrega da VoxBit é pensada para performar bem onde realmente importa: velocidade, SEO, boas práticas e acessibilidade.
                Não é só estética. É código auditado para sustentar resultado.
              </p>
            </div>

            <div className="rounded-2xl border border-border bg-secondary/35 p-5 shadow-card backdrop-blur-sm">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary">Padrão de entrega</p>
                  <p className="mt-2 text-sm text-muted-foreground">Projetos entregues com 95+ nos quatro pilares mais relevantes da auditoria.</p>
                </div>
                <div className="rounded-2xl border border-primary/20 bg-primary/10 px-4 py-3 text-right">
                  <div className="text-3xl font-heading font-extrabold text-primary">95+</div>
                  <div className="text-[11px] uppercase tracking-[0.18em] text-primary/80">em todos os critérios</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(160deg,hsl(220_22%_10%/.92),hsl(220_24%_7%/.78))] p-6 shadow-card"
          >
            <div className="absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
            <div className="mb-6 flex items-center justify-between gap-4 border-b border-white/8 pb-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-white/55">Painel Técnico</p>
                <h3 className="mt-2 font-heading text-2xl font-bold text-foreground">Métricas que reforçam credibilidade</h3>
              </div>
              <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-300">
                Auditável
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.title}
                  initial={false}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 * index }}
                  className="group rounded-2xl border border-white/8 bg-black/20 p-5 transition-colors duration-300 hover:border-primary/25"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/45">{metric.title}</p>
                      <div className="mt-3 text-4xl font-heading font-extrabold text-gradient-red">{metric.score}</div>
                    </div>
                    <div className="rounded-xl border border-primary/15 bg-primary/10 p-3 text-primary transition-colors duration-300 group-hover:bg-primary/15">
                      <metric.icon size={20} />
                    </div>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{metric.description}</p>

                  <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/6">
                    <div className="h-full w-[95%] rounded-full bg-gradient-red" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LighthouseSection;