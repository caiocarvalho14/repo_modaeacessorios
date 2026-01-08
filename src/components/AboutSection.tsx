import { Heart, Sparkles, Award, Truck } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Curadoria Especial",
    description: "Peças selecionadas com carinho para você"
  },
  {
    icon: Sparkles,
    title: "Qualidade Premium",
    description: "Materiais de alta qualidade e acabamento impecável"
  },
  {
    icon: Award,
    title: "Estilo Exclusivo",
    description: "Tendências atuais com toque de originalidade"
  },
  {
    icon: Truck,
    title: "Entrega Rápida",
    description: "Receba suas compras com agilidade"
  }
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-accent font-medium">
            Nossa História
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-6">
            Sobre a Loja
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Somos uma loja especializada em roupas e acessórios que combinam 
            elegância, conforto e estilo. Nossa missão é fazer você se sentir 
            única em cada ocasião, oferecendo peças que expressam sua personalidade.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className="text-center p-6 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent/10 text-accent mb-4">
                <feature.icon size={24} />
              </div>
              <h3 className="font-serif text-lg font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
