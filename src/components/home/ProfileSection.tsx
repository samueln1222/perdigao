
import React from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

const ProfileSection: React.FC = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <SectionTitle title="Lucas Perdigão de Freitas" centered={false} />
            <p className="text-gray-700 mb-4">
              Advogado processualista com atuação em Fortaleza-CE, especializado nas áreas de Direito Civil, Constitucional, Penal e Previdenciário.
            </p>
            <p className="text-gray-700 mb-6">
              Com um compromisso inabalável com a defesa dos seus direitos, nossa advocacia se destaca pela ética e competência, buscando sempre as melhores soluções jurídicas para cada caso.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/sobre" 
                className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-medium transition-colors inline-block hover-scale"
              >
                Conheça Nossa História
              </Link>
              <Link 
                to="/servicos" 
                className="border border-gray-300 hover:border-primary hover:text-primary text-gray-700 px-6 py-3 rounded-md font-medium transition-colors inline-block"
              >
                Nossos Serviços
              </Link>
            </div>
          </div>
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary">
                <img 
                  src="/lovable-uploads/64dfcf07-3cf8-4c75-aeaf-8065ffb6353a.png" 
                  alt="Lucas Perdigão de Freitas" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-6 py-2 rounded-full shadow-lg">
                <span className="text-primary font-medium">OAB-CE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
