import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

const PrivacyPolicy: React.FC = () => {
  return (
    <MainLayout>
      <div className="container-custom section-padding">
        <Link 
          to="/" 
          className="inline-flex items-center text-primary hover:text-secondary mb-6 transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
            <path d="m15 18-6-6 6-6"/>
          </svg>
          Voltar para a Home
        </Link>
        
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-primary mb-8">Políticas de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">Tratamento de Dados</h2>
            <p className="text-xl mb-4">
              A Mais Empréstimos informa que os dados fornecidos pelos clientes não são armazenados em nosso sistema. 
              Todos os dados coletados são repassados diretamente aos bancos parceiros para a análise de crédito.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Finalidade</h2>
            <p className="text-xl mb-4">
              Os dados coletados têm como única finalidade a análise de crédito pelos bancos parceiros para oferecer 
              as melhores condições de empréstimo ou crédito ao cliente.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Conformidade com LGPD</h2>
            <p className="text-xl mb-4">
              A Mais Empréstimos atua em conformidade com a Lei Geral de Proteção de Dados (LGPD), garantindo o tratamento 
              adequado e seguro dos dados pessoais dos clientes.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Compartilhamento de Dados</h2>
            <p className="text-xl mb-4">
              Os dados fornecidos pelos clientes são compartilhados apenas com os bancos parceiros, com o objetivo exclusivo 
              de realizar a análise de crédito e apresentar propostas adequadas ao perfil do cliente.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Consentimento</h2>
            <p className="text-xl mb-4">
              Ao fornecer seus dados através do formulário de simulação, o cliente consente com o compartilhamento 
              dessas informações com os bancos parceiros para fins de análise de crédito.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Direitos do Titular</h2>
            <p className="text-xl mb-4">
              O cliente tem direito a solicitar informações sobre o tratamento de seus dados, bem como 
              solicitar a exclusão dos mesmos a qualquer momento, através dos canais de contato da Mais Empréstimos.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default PrivacyPolicy;
