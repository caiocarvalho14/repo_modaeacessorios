import { Star, Quote } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    id: 1,
    name: "Maria Silva",
    text: "Amei as peças! A qualidade é incrível e o atendimento foi impecável. Com certeza voltarei a comprar!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "Ana Souza",
    text: "Encontrei o vestido perfeito para meu evento. A loja tem peças únicas e o preço é justo. Super recomendo!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "Carla Mendes",
    text: "Atendimento nota 10! Me ajudaram a escolher acessórios que combinaram perfeitamente com meu look.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "Juliana Costa",
    text: "Virei cliente fiel! Sempre encontro novidades lindas e a entrega é super rápida.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="section-padding bg-background">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-accent font-medium">
            Depoimentos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-6">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A satisfação de nossos clientes é nossa maior recompensa. 
            Veja o que eles têm a dizer sobre nós!
          </p>
        </div>

        {/* Testimonials Carousel */}
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonials.map((testimonial) => (
              <CarouselItem key={testimonial.id} className="pl-4 md:basis-1/2">
                <div className="bg-secondary/50 rounded-lg p-6 md:p-8 h-full flex flex-col">
                  {/* Quote Icon */}
                  <Quote size={32} className="text-accent/30 mb-4" />
                  
                  {/* Text */}
                  <p className="text-foreground mb-6 flex-grow leading-relaxed">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} size={16} className="fill-accent text-accent" />
                    ))}
                  </div>
                  
                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <span className="font-medium">{testimonial.name}</span>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-12" />
          <CarouselNext className="hidden md:flex -right-12" />
        </Carousel>
      </div>
    </section>
  );
};

export default TestimonialsSection;
