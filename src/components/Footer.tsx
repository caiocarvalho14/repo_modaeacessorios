import { Instagram, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container-narrow px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="text-center md:text-left">
            <span className="font-serif text-2xl font-semibold tracking-wide">
              Rosa & Pérola
            </span>
            <p className="text-primary-foreground/70 text-sm mt-2">
              Moda & Acessórios
            </p>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#sobre" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Sobre
            </a>
            <a href="#produtos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Produtos
            </a>
            <a href="#depoimentos" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Depoimentos
            </a>
            <a href="#contato" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              Contato
            </a>
          </nav>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Instagram size={18} />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
            >
              <Facebook size={18} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mt-8 pt-8">
          <p className="text-center text-sm text-primary-foreground/50">
            © {currentYear} Rosa & Pérola. Todos os direitos reservados.
          </p>
          <p className="text-center text-sm ">Desenvolvido por: <a href="https://solutions.caiocarvalho.dev.br">Caio Carvalho</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
