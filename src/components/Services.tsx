import React from 'react';
import { FileText, CreditCard } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FileText size={48} />,
      title: "Empréstimo Consignado",
      description: "Taxas exclusivas para aposentados, pensionistas e servidores públicos."
    },
    {
      icon: <FileText size={48} />,
      title: "Empréstimo Pessoal",
      description: "Opções flexíveis para diversas necessidades financeiras."
    },
    {
      icon: <CreditCard size={48} />,
      title: "Cartão Benefício",
      description: "Benefícios exclusivos para aposentados e pensionistas do INSS."
    },
    {
      icon: <CreditCard size={48} />,
      title: "Cartão Consignado",
      description: "Limites especiais com desconto em folha de pagamento."
    },
    {
      icon: <CreditCard size={48} />,
      title: "Cartão de Crédito",
      description: "Opções com benefícios especiais para o seu perfil."
    }
  ];

  return (
    <section id="servicos" className="section-padding bg-gray-100">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Nossos Serviços
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              <div className="text-secondary mb-4 flex justify-center">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-gray-700 text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
