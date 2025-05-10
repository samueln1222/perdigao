
import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <a
      href="https://wa.me/message/HLPHK53KXNNEK1"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Contato via WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppButton;
