
import React from 'react';
import SectionTitle from '../components/ui/SectionTitle';
import { Link } from 'react-router-dom';
import { Briefcase, Gavel } from 'lucide-react';

const Sobre: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Page Header */}
      <div className="bg-dark text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold font-montserrat">Sobre o Advogado</h1>
          <div className="h-1 bg-primary w-24 mt-4 mx-auto"></div>
        </div>
      </div>
      
      {/* Main Content */}
      <section className="section-padding bg-white flex-grow">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl font-bold font-montserrat mb-6">
                Lucas Perdigão de Freitas
              </h2>
              <p className="text-gray-700 mb-4">
                Lucas Perdigão de Freitas é um advogado processualista registrado na OAB-CE, com atuação 
                especializada nas áreas de Direito Civil, Constitucional, Penal e Previdenciário.
              </p>
              <p className="text-gray-700 mb-4">
                Com sede em Fortaleza-CE, nosso escritório oferece atendimento personalizado, buscando 
                soluções jurídicas eficazes para nossos clientes. Cada caso é tratado com dedicação e 
                profissionalismo, garantindo a defesa efetiva dos direitos de quem nos procura.
              </p>
              <p className="text-gray-700 mb-6">
                Nossa missão é proporcionar um serviço jurídico de excelência, com ética, transparência 
                e comprometimento com os resultados. Entendemos que cada cliente tem necessidades únicas, 
                por isso oferecemos um atendimento humanizado e acessível.
              </p>
              
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
                <div className="flex items-center">
                  <Briefcase className="text-primary mr-2" size={20} />
                  <span className="font-medium">OAB-CE</span>
                </div>
                <div className="flex items-center">
                  <Gavel className="text-primary mr-2" size={20} />
                  <span className="font-medium">Especialista em Direito Processual</span>
                </div>
              </div>
              
              <blockquote className="border-l-4 border-primary pl-4 italic text-gray-600 mb-8">
                "Compromisso com a defesa dos seus direitos, com ética e competência."
              </blockquote>
              
              <Link 
                to="/servicos" 
                className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-md font-medium transition-colors inline-block hover-scale"
              >
                Conheça Nossos Serviços
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="/lovable-uploads/64dfcf07-3cf8-4c75-aeaf-8065ffb6353a.png" 
                  alt="Lucas Perdigão de Freitas" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission and Values */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <SectionTitle title="Missão e Valores" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold font-montserrat mb-3 text-primary">Missão</h3>
              <p className="text-gray-700">
                Oferecer serviços jurídicos de excelência, buscando sempre a melhor solução para cada 
                caso, com ética, transparência e dedicação.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold font-montserrat mb-3 text-primary">Visão</h3>
              <p className="text-gray-700">
                Ser reconhecido pela qualidade e excelência na prestação de serviços jurídicos, 
                consolidando-se como referência em advocacia processualista em Fortaleza.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold font-montserrat mb-3 text-primary">Valores</h3>
              <ul className="text-gray-700 list-disc pl-5 space-y-1">
                <li>Ética profissional</li>
                <li>Comprometimento com o cliente</li>
                <li>Excelência técnica</li>
                <li>Transparência</li>
                <li>Responsabilidade social</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sobre;
