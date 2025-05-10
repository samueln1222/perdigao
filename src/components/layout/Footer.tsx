
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, Instagram } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-dark text-secondary pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/29a9c787-3976-4790-a7a6-edc8248474c1.png" 
                alt="Perdigão de Freitas Advocacia" 
                className="h-16"
              />
            </Link>
            <h3 className="text-xl font-montserrat font-bold text-white mb-2">Perdigão de Freitas</h3>
            <p className="text-sm text-gray-400 mb-4 text-center md:text-left">
              Advocacia processualista especializada em Direito Civil, Constitucional, Penal e Previdenciário.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-montserrat font-semibold mb-4 text-white">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/sobre" className="text-gray-400 hover:text-primary transition-colors">Sobre</Link>
              </li>
              <li>
                <Link to="/servicos" className="text-gray-400 hover:text-primary transition-colors">Serviços</Link>
              </li>
              <li>
                <Link to="/contato" className="text-gray-400 hover:text-primary transition-colors">Contato</Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-montserrat font-semibold mb-4 text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-start">
                <MapPin size={18} className="text-primary mr-2" />
                <address className="text-gray-400 not-italic text-sm">
                  Av. Santos Dumont, 1111 - Loja 05, Aldeota<br />
                  Fortaleza - CE, 60150-161
                </address>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Phone size={18} className="text-primary mr-2" />
                <a href="tel:+5585988880851" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  +55 85 98888-0851
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Mail size={18} className="text-primary mr-2" />
                <a href="mailto:contato@perdigaodefreitas.adv.br" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  contato@perdigaodefreitas.adv.br
                </a>
              </div>
              <div className="flex items-center justify-center md:justify-start">
                <Instagram size={18} className="text-primary mr-2" />
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary transition-colors text-sm">
                  @perdigaodefreitas.adv
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Perdigão de Freitas Advocacia. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
