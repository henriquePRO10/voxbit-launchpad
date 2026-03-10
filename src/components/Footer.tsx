import logoRound from "@/assets/logo-round-96.webp";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 py-12">
      <div className="container mx-auto px-4">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logoRound.src} alt="VoxBit" loading="lazy" decoding="async" width={40} height={40} className="h-10 w-10 rounded-full" />
              <span className="font-heading font-bold text-xl text-foreground">
                VOX<span className="text-gradient-red">BIT</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">
              Soluções em tecnologia que transformam ideias em resultados. Sites, sistemas e presença digital.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-foreground">Links Rápidos</h4>
            {["Início", "Serviços", "Sobre", "Contato"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="block text-sm text-muted-foreground hover:text-foreground transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-foreground">Contato</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Mail size={14} className="text-primary" /> voxbitinformatica@gmail.com</p>
              <p className="flex items-center gap-2"><Phone size={14} className="text-primary" /> (66) 99606-7576</p>
              <p className="flex items-center gap-2"><MapPin size={14} className="text-primary" /> Brasil</p>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-10 pt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} VoxBit Soluções. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
