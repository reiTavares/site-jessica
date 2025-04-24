import React from 'react';
import { ShieldCheck, Lock, Award } from 'lucide-react';

const TrustIndicators: React.FC = () => {
  const banks = [
    "Banco do Brasil",
    "Itaú",
    "Santander",
    "BRB",
    "Safra",
    "Banco Digio",
    "Capital Consig",
    "Paraná Banco",
    "Bradesco",
    "C6 Bank"
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container-custom">
        <div className="flex flex-col items-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <ShieldCheck size={36} className="text-primary mr-2" />
            <h2 className="text-3xl font-bold text-primary">Correspondente Bancário Autorizado pelo Banco Central</h2>
          </div>
          
          <div className="flex items-center justify-center mt-6 space-x-6">
            <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
              <Lock size={24} className="text-primary mr-2" />
              <span className="text-lg">Site 100% Seguro</span>
            </div>
            <div className="flex items-center bg-white px-4 py-2 rounded-lg shadow-sm">
              <Award size={24} className="text-primary mr-2" />
              <span className="text-lg">Certificado de Segurança</span>
            </div>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-2xl font-bold text-center mb-8">Nossos Parceiros Bancários</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {banks.map((bank, index) => (
              <div 
                key={index} 
                className="bg-white rounded-lg shadow-md p-4 flex items-center justify-center h-24 hover:shadow-lg transition-shadow duration-300"
              >
                <span className="text-xl font-semibold text-primary text-center">{bank}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;
