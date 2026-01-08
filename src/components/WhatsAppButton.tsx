import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "5586995633313"; // Replace with actual WhatsApp number
  const message = encodeURIComponent(
    "Olá, Caio. Tenho interesse em seus serviços."
  );

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110 group"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle className="h-7 w-7" />
      
      {/* Tooltip */}
      <span className="absolute right-full mr-3 bg-foreground text-primary-foreground text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
        Fale conosco no WhatsApp
      </span>

      {/* Pulse animation */}
      <span className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-25" />
    </a>
  );
};

export default WhatsAppButton;
