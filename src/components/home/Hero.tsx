
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-dark text-white">
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-r from-black to-transparent opacity-90"></div>
      </div>
      <div className="absolute inset-0 z-0 bg-[url('/lovable-uploads/64dfcf07-3cf8-4c75-aeaf-8065ffb6353a.png')] bg-cover bg-center opacity-20"></div>
      
      <div className="container mx-auto px-4 py-24 md:py-32 lg:py-40 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-montserrat mb-6 animate-fade-in">
            Perdigão de Freitas Advocacia
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            Soluções Jurídicas com Excelência
          </p>
          <p className="text-lg mb-10">
            Advocacia Processualista em Fortaleza-CE: <span className="text-primary">Civil, Constitucional, Penal e Previdenciário.</span>
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://wa.me/message/HLPHK53KXNNEK1" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-medium transition-colors w-full sm:w-auto text-center hover-scale"
            >
              Agende sua Consulta
            </a>
            <Link 
              to="/servicos" 
              className="border border-white hover:bg-white/10 text-white px-6 py-3 rounded-md font-medium transition-colors w-full sm:w-auto text-center"
            >
              Nossos Serviços
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
