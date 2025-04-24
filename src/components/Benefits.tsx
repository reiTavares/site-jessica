import React from 'react';
import { CircleCheck, Users, Clock, DollarSign, Shield } from 'lucide-react';

const Benefits: React.FC = () => {
  const benefits = [
    {
      icon: <Users size={48} />,
      title: "Atendimento Humano e Personalizado",
      description: "Nossos atendentes estão preparados para ajudar você em cada etapa."
    },
    {
      icon: <Clock size={48} />,
      title: "Aprovação Rápida e Fácil",
      description: "Processo ágil e simplificado para você receber seu dinheiro rapidamente."
    },
    {
      icon: <DollarSign size={48} />,
      title: "Parcelas que cabem no seu bolso",
      description: "Condições especiais e taxas competitivas para o seu perfil."
    },
    {
      icon: <Shield size={48} />,
      title: "Segurança e Confiança Garantidas",
      description: "Empresa autorizada pelo Banco Central com anos de experiência no mercado."
    }
  ];

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Por que escolher a Mais Empréstimos?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-secondary mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 flex items-start">
                <CircleCheck className="text-secondary mr-2 flex-shrink-0 mt-1" size={20} />
                <span>{benefit.title}</span>
              </h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
