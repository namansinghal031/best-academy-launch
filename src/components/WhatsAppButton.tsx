import { MessageCircle } from 'lucide-react';

export const WhatsAppButton = () => {
  const phoneNumber = '919876543210';
  const message = 'Hello! I would like to know more about BEST ACADEMY admissions.';
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact us on WhatsApp"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-bounce-subtle"
    >
      <MessageCircle className="w-7 h-7 text-white" />
      <span className="absolute -top-2 -right-2 w-5 h-5 bg-gold rounded-full flex items-center justify-center text-xs font-bold text-primary">
        1
      </span>
    </a>
  );
};
