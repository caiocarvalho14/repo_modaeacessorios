import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const products = [
  {
    id: 1,
    name: "Vestido Elegante",
    originalPrice: 299.90,
    salePrice: 199.90,
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=500&fit=crop",
    tag: "Promoção"
  },
  {
    id: 2,
    name: "Bolsa Premium",
    originalPrice: 189.90,
    salePrice: 149.90,
    image: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=400&h=500&fit=crop",
    tag: "Novo"
  },
  {
    id: 3,
    name: "Conjunto Casual",
    originalPrice: 259.90,
    salePrice: 179.90,
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=500&fit=crop",
    tag: "Promoção"
  },
  {
    id: 4,
    name: "Acessórios Dourados",
    originalPrice: 89.90,
    salePrice: 69.90,
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=500&fit=crop",
    tag: null
  },
  {
    id: 5,
    name: "Blusa Sofisticada",
    originalPrice: 159.90,
    salePrice: 119.90,
    image: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=400&h=500&fit=crop",
    tag: "Novo"
  },
  {
    id: 6,
    name: "Saia Midi",
    originalPrice: 179.90,
    salePrice: 139.90,
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0uj1a?w=400&h=500&fit=crop",
    tag: null
  }
];

const ProductsSection = () => {
  const whatsappNumber = "5511999999999";
  
  const handleWhatsAppClick = (productName: string) => {
    const message = encodeURIComponent(`Olá! Tenho interesse no produto: ${productName}`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <section id="produtos" className="section-padding bg-secondary/30">
      <div className="container-narrow">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm tracking-[0.3em] uppercase text-accent font-medium">
            Coleção
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mt-4 mb-6">
            Ofertas em Destaque
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Confira nossas peças selecionadas com preços especiais. 
            Aproveite e renove seu guarda-roupa!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden elegant-shadow hover:shadow-lg transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.tag && (
                  <Badge 
                    className={`absolute top-4 left-4 ${
                      product.tag === "Promoção" 
                        ? "bg-accent text-accent-foreground" 
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {product.tag}
                  </Badge>
                )}
              </div>

              {/* Product Info */}
              <div className="p-5">
                <h3 className="font-serif text-lg font-semibold mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-lg font-semibold text-foreground">
                    R$ {product.salePrice.toFixed(2).replace('.', ',')}
                  </span>
                  <span className="text-sm text-muted-foreground line-through">
                    R$ {product.originalPrice.toFixed(2).replace('.', ',')}
                  </span>
                </div>
                <Button 
                  onClick={() => handleWhatsAppClick(product.name)}
                  className="w-full bg-green-600 hover:bg-green-700 text-white"
                >
                  <MessageCircle size={18} className="mr-2" />
                  Comprar pelo WhatsApp
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
