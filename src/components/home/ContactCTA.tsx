
import React from 'react';
import { MessageCircle, Phone, MapPin } from 'lucide-react';

const ContactCTA: React.FC = () => {
  return (
    <section className="bg-primary text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <div className="text-center">
            <MessageCircle size={36} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold font-montserrat mb-2">WhatsApp</h3>
            <a 
              href="https://wa.me/message/HLPHK53KXNNEK1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white hover:underline"
            >
              +55 85 98888-0851
            </a>
          </div>
          <div className="text-center">
            <Phone size={36} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold font-montserrat mb-2">Telefone</h3>
            <a 
              href="tel:+5585988880851" 
              className="text-white hover:underline"
            >
              +55 85 98888-0851
            </a>
          </div>
          <div className="text-center">
            <MapPin size={36} className="mx-auto mb-4" />
            <h3 className="text-xl font-bold font-montserrat mb-2">Endereço</h3>
            <address className="not-italic">
              Av. Santos Dumont, 1111 - Loja 05<br />
              Aldeota, Fortaleza - CE
            </address>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
