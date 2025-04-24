import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';

const TermsOfUse: React.FC = () => {
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
          <h1 className="text-4xl font-bold text-primary mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold mt-8 mb-4">Atuação como Correspondente Bancário</h2>
            <p className="text-xl mb-4">
              A Mais Empréstimos é um correspondente bancário independente autorizado, atuando como 
              intermediário entre o cliente e as instituições financeiras parceiras.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Análise de Crédito</h2>
            <p className="text-xl mb-4">
              Não há garantia de aprovação de crédito. Toda análise é de responsabilidade exclusiva do banco parceiro, 
              que avaliará o perfil do cliente de acordo com suas políticas internas.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Tratamento de Dados</h2>
            <p className="text-xl mb-4">
              Os dados fornecidos pelos clientes não são armazenados no sistema da Mais Empréstimos. 
              Eles são repassados exclusivamente aos bancos parceiros para análise de crédito.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Liberdade de Escolha</h2>
            <p className="text-xl mb-4">
              O cliente é livre para aceitar ou não as ofertas dos bancos parceiros, sem qualquer 
              obrigatoriedade ou penalidade.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Responsabilidade</h2>
            <p className="text-xl mb-4">
              A Mais Empréstimos atua apenas como intermediária no processo de contratação de empréstimos e crédito. 
              A responsabilidade pela aprovação, concessão e condições do crédito é exclusiva da instituição financeira parceira.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Simulações</h2>
            <p className="text-xl mb-4">
              As simulações realizadas através do site são estimativas e podem sofrer alterações 
              de acordo com a análise de crédito realizada pelo banco parceiro.
            </p>
            
            <h2 className="text-2xl font-bold mt-8 mb-4">Alterações nos Termos</h2>
            <p className="text-xl mb-4">
              A Mais Empréstimos reserva-se o direito de alterar estes Termos de Uso a qualquer momento, 
              sendo responsabilidade do cliente verificar periodicamente as atualizações.
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default TermsOfUse;
