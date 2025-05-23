import React from 'react';
import MainLayout from '@/layouts/MainLayout';
import { useLocation, Navigate } from 'react-router-dom';

const ThankYou: React.FC = () => {
  const location = useLocation();
  const { firstName, cpf } = location.state || {};

  if (!firstName) {
    return <Navigate to="/" replace />;
  }

  const whatsappLink = `https://wa.me/5561996068727?text=Olá acabei de cadastrar no site e quero agilizar meu empréstimo. Meu nome é ${firstName} e CPF ${cpf}`;

  return (
    <MainLayout>
      <div className="min-h-screen bg-gray-50 py-16">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-primary mb-6">
              Obrigado, {firstName}!
            </h1>
            <p className="text-xl mb-8">
              Sua solicitação foi enviada com sucesso. Em breve nossa equipe entrará em contato com você.
            </p>
            <p className="text-lg mb-8">
              Quer acelerar o processo? Entre em contato pelo WhatsApp agora mesmo!
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center btn-primary text-xl px-8 py-4"
            >
              Continuar pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ThankYou;
