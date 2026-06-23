import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  return (
    <a className="whatsapp-float" href="https://wa.me/5548991087702" target="_blank" rel="noreferrer" aria-label="Chamar no WhatsApp">
      <MessageCircle size={24} />
    </a>
  );
}
