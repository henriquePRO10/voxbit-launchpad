const techItems = [
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS",
  "SEO", "Google Ads", "Figma", "Supabase", "Vercel", "WordPress",
  "React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Tailwind CSS",
  "SEO", "Google Ads", "Figma", "Supabase", "Vercel", "WordPress",
];

const TechMarquee = () => {
  return (
    <section className="py-12 border-y border-border overflow-hidden">
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10" />
        <div className="flex animate-scroll-left whitespace-nowrap">
          {techItems.map((tech, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 mx-6 text-muted-foreground text-lg font-heading font-medium"
            >
              <span className="w-2 h-2 rounded-full bg-primary/60" />
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechMarquee;
