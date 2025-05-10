
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-dark text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/29a9c787-3976-4790-a7a6-edc8248474c1.png" 
            alt="Perdigão de Freitas Advocacia" 
            className="h-12"
          />
          <div className="hidden md:block">
            <h1 className="text-lg font-bold font-montserrat">Perdigão de Freitas</h1>
            <p className="text-xs text-gray-300">ADVOCACIA</p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary' : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/sobre" 
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/sobre') ? 'text-primary' : ''}`}
          >
            Sobre
          </Link>
          <Link 
            to="/servicos" 
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/servicos') ? 'text-primary' : ''}`}
          >
            Serviços
          </Link>
          <Link 
            to="/contato" 
            className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/contato') ? 'text-primary' : ''}`}
          >
            Contato
          </Link>
          <a 
            href="https://wa.me/message/HLPHK53KXNNEK1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Fale Conosco
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-dark text-white py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <Link 
              to="/" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/') ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/sobre" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/sobre') ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </Link>
            <Link 
              to="/servicos" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/servicos') ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="/contato" 
              className={`text-sm font-medium transition-colors hover:text-primary ${isActive('/contato') ? 'text-primary' : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </Link>
            <a 
              href="https://wa.me/message/HLPHK53KXNNEK1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary-light text-white px-4 py-2 rounded-md text-sm font-medium transition-colors w-full text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
