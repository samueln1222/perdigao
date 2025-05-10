
import React from 'react';
import { Gavel, Construction, Scale, Handshake } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTitle from '../ui/SectionTitle';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md service-card">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-xl font-bold font-montserrat mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 text-sm">{description}</p>
      <Link 
        to={link}
        className="text-primary hover:text-primary-dark font-medium text-sm inline-flex items-center story-link"
      >
        Saiba mais
      </Link>
    </div>
  );
};

const ServiceOverview: React.FC = () => {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container mx-auto">
        <SectionTitle 
          title="Áreas de Atuação" 
          subtitle="Oferecemos serviços jurídicos especializados em diversas áreas do direito para melhor atender às suas necessidades." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <ServiceCard 
            title="Direito Civil" 
            description="Contratos, responsabilidade civil, direito de família e sucessões." 
            icon={<Handshake size={36} />}
            link="/servicos#civil"
          />
          <ServiceCard 
            title="Direito Constitucional" 
            description="Direitos fundamentais, mandado de segurança e ações constitucionais." 
            icon={<Construction size={36} />}
            link="/servicos#constitucional"
          />
          <ServiceCard 
            title="Direito Penal" 
            description="Defesas criminais, crimes contra o patrimônio e crimes digitais." 
            icon={<Scale size={36} />}
            link="/servicos#penal"
          />
          <ServiceCard 
            title="Direito Previdenciário" 
            description="Aposentadorias, benefícios INSS e BPC/LOAS." 
            icon={<Gavel size={36} />}
            link="/servicos#previdenciario"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceOverview;
