import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-secondary">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container-narrow px-4 text-center relative z-10">
        <span className="inline-block text-sm tracking-[0.3em] uppercase text-accent font-medium mb-6 animate-fade-in">
          Moda & Acessórios
        </span>

        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-semibold mb-6 tracking-tight animate-fade-in" style={{ animationDelay: '0.1s' }}>
          Rosa & Pérola
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Elegância e estilo para todas as ocasiões. Descubra peças exclusivas
          que realçam sua personalidade única.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
            <a href="#produtos">Ver Ofertas</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="px-8">
            <a href="#contato">Fale Conosco</a>
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#sobre"
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors animate-bounce">
          <span className="text-xs tracking-widest uppercase">Explorar</span>
          <ArrowDown size={20} />
        </div>
      </a>
    </section>
  );
};

export default HeroSection;
