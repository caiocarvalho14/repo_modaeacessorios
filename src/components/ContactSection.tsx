import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const whatsappNumber = "5511999999999";

  return (
    <section id="contato" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-accent font-medium">
            Visite-nos
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-6">
            Localização e Contato
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Venha nos conhecer! Estamos prontos para ajudar você a encontrar 
            as peças perfeitas para seu estilo.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {/* Map */}
          <div className="rounded-lg overflow-hidden elegant-shadow h-[300px] md:h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1992.3524127179337!2d-41.78038751290437!3d-2.9011245814851914!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1767891620962!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Loja"
            />
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Av. São Sebastião, 1234 - Centro<br />
                  Parnaíba - PI, CEP 64200-000
                </p>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Clock size={20} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-1">Horário de Funcionamento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 9h às 19h<br />
                  Sábado: 9h às 17h<br />
                  Domingo: Fechado
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-serif text-lg font-semibold mb-1">Telefone / WhatsApp</h3>
                <p className="text-muted-foreground">
                  (86) 99999-9999
                </p>
              </div>
            </div>

            {/* Social & CTA */}
            <div className="pt-4 space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">Siga-nos:</span>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <Facebook size={18} />
                </a>
              </div>

              <Button 
                asChild
                size="lg" 
                className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white"
              >
                <a 
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Olá! Gostaria de mais informações.")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone size={18} className="mr-2" />
                  Falar no WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
