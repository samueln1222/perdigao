
import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Handshake, Construction, Scale, Gavel } from 'lucide-react';

interface ServiceDetailProps {
  id: string;
  title: string;
  description: string;
  items: string[];
  icon: React.ReactNode;
  bgColor?: string;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ 
  id, 
  title, 
  description, 
  items, 
  icon, 
  bgColor = 'bg-white' 
}) => {
  return (
    <section id={id} className={`py-16 ${bgColor}`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start gap-8">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <div className="p-6 bg-primary/10 rounded-lg inline-block">
              {icon}
            </div>
          </div>
          <div className="md:w-3/4">
            <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">{title}</h2>
            <p className="text-gray-700 mb-6">{description}</p>
            
            <h3 className="text-lg font-medium mb-3">Serviços Oferecidos:</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {items.map((item, index) => (
                <li key={index} className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center text-white text-sm mr-3 mt-0.5">
                    ✓
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

const Servicos: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Header */}
      <div className="bg-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat">Áreas de Atuação</h1>
          <p className="mt-4 max-w-2xl mx-auto text-gray-300">
            Oferecemos serviços jurídicos especializados em diversas áreas do direito para melhor atender às suas necessidades.
          </p>
          <div className="h-1 bg-primary w-24 mt-4 mx-auto"></div>
        </div>
      </div>

      {/* Services Content */}
      <ServiceDetail 
        id="civil"
        title="Direito Civil"
        description="O Direito Civil é o ramo do direito que regula as relações entre particulares, sejam elas pessoas físicas ou jurídicas. Nossa atuação nessa área abrange desde questões contratuais e patrimoniais até direito de família e sucessões."
        items={[
          "Contratos e obrigações",
          "Responsabilidade civil",
          "Direito de família (divórcio, pensão, guarda)",
          "Direito sucessório (inventários e testamentos)",
          "Direito imobiliário",
          "Direito do consumidor"
        ]}
        icon={<Handshake size={48} className="text-primary" />}
      />
      
      <ServiceDetail 
        id="constitucional"
        title="Direito Constitucional"
        description="O Direito Constitucional é a área do direito que estuda, interpreta e aplica as normas da Constituição Federal, protegendo os direitos fundamentais dos cidadãos. Atuamos na defesa dos seus direitos constitucionais através de ações específicas."
        items={[
          "Mandado de segurança",
          "Habeas corpus",
          "Ações de inconstitucionalidade",
          "Defesa de direitos fundamentais",
          "Ações populares",
          "Direito à saúde e educação"
        ]}
        icon={<Construction size={48} className="text-primary" />}
        bgColor="bg-gray-50"
      />
      
      <ServiceDetail 
        id="penal"
        title="Direito Penal"
        description="O Direito Penal é o ramo do direito que define as infrações penais e estabelece as respectivas sanções. Oferecemos defesa criminal especializada, buscando sempre garantir o devido processo legal e o respeito aos direitos do acusado."
        items={[
          "Defesa em processos criminais",
          "Crimes contra o patrimônio",
          "Crimes contra a pessoa",
          "Crimes digitais",
          "Crimes de trânsito",
          "Execução penal"
        ]}
        icon={<Scale size={48} className="text-primary" />}
      />
      
      <ServiceDetail 
        id="previdenciario"
        title="Direito Previdenciário"
        description="O Direito Previdenciário regula as relações entre os segurados e a Previdência Social. Auxiliamos na obtenção de benefícios previdenciários, orientando e representando nossos clientes perante o INSS."
        items={[
          "Aposentadorias (por idade, tempo de contribuição, especial)",
          "Auxílio-doença",
          "Pensão por morte",
          "Benefício de Prestação Continuada (BPC/LOAS)",
          "Revisão de benefícios",
          "Recursos administrativos e judiciais"
        ]}
        icon={<Gavel size={48} className="text-primary" />}
        bgColor="bg-gray-50"
      />
      
      {/* CTA Section */}
      <section className="bg-primary text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-4">
            Precisa de Assessoria Jurídica?
          </h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Entre em contato conosco para uma consulta e saiba como podemos ajudar no seu caso específico.
          </p>
          <a 
            href="https://wa.me/message/HLPHK53KXNNEK1" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-white text-primary hover:bg-gray-100 px-8 py-3 rounded-md font-medium transition-colors inline-block hover-scale"
          >
            Fale Conosco
          </a>
        </div>
      </section>
    </div>
  );
};

export default Servicos;
