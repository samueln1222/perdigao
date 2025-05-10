
import React, { useState } from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Phone, Mail, MapPin, MessageCircle, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Mensagem enviada!",
        description: "Entraremos em contato em breve.",
      });
      setFormData({
        nome: '',
        telefone: '',
        email: '',
        mensagem: ''
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Header */}
      <div className="bg-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat">Entre em Contato</h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Estamos à disposição para esclarecer suas dúvidas e atender às suas necessidades jurídicas.
          </p>
          <div className="h-1 bg-primary w-24 mt-4 mx-auto"></div>
        </div>
      </div>
      
      {/* Contact Information */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="text-primary" size={24} />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">Telefone</h3>
              <a href="tel:+5585988880851" className="text-gray-600 hover:text-primary transition-colors">
                +55 85 98888-0851
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="text-primary" size={24} />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">WhatsApp</h3>
              <a 
                href="https://wa.me/message/HLPHK53KXNNEK1"
                target="_blank"
                rel="noopener noreferrer" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                +55 85 98888-0851
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="text-primary" size={24} />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">E-mail</h3>
              <a 
                href="mailto:contato@perdigaodefreitas.adv.br" 
                className="text-gray-600 hover:text-primary transition-colors"
              >
                contato@perdigaodefreitas.adv.br
              </a>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="bg-primary/10 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="text-primary" size={24} />
              </div>
              <h3 className="font-montserrat font-semibold mb-2">Instagram</h3>
              <a 
                href="https://instagram.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary transition-colors"
              >
                @perdigaodefreitas.adv
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <SectionTitle title="Envie uma Mensagem" centered={false} />
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensagem
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-light text-white py-3 rounded-md font-medium transition-colors hover-scale disabled:opacity-70"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </button>
              </form>
            </div>
            
            {/* Map and Address */}
            <div>
              <SectionTitle title="Localização" centered={false} />
              <div className="mb-6">
                <div className="rounded-lg overflow-hidden h-[300px] mb-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.3388698751067!2d-38.52142692475536!3d-3.7342292432282113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74991743f25ad%3A0x1f1d0d524cb9c7c6!2sAv.%20Santos%20Dumont%2C%201111%20-%20Aldeota%2C%20Fortaleza%20-%20CE%2C%2060150-161!5e0!3m2!1spt-BR!2sbr!4v1714496646230!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localização do Escritório"
                  ></iframe>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-start">
                    <MapPin className="text-primary mt-1 mr-3" size={20} />
                    <div>
                      <h3 className="font-montserrat font-semibold mb-1">Endereço</h3>
                      <address className="text-gray-600 not-italic">
                        Av. Santos Dumont, 1111 - Loja 05<br />
                        Aldeota, Fortaleza - CE<br />
                        CEP: 60150-161
                      </address>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-lg font-semibold font-montserrat mb-3">Horário de Atendimento</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Segunda a Sexta:</span>
                    <span>08:00 - 18:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sábado:</span>
                    <span>09:00 - 13:00</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Domingo:</span>
                    <span>Fechado</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contato;
