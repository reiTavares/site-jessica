import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ: React.FC = () => {
  const [openItem, setOpenItem] = useState<number | null>(null);
  
  const faqItems: FAQItem[] = [
    {
      question: "Como funciona o empréstimo consignado?",
      answer: "O empréstimo consignado é uma modalidade de crédito com desconto direto na folha de pagamento, aposentadoria ou benefício. As parcelas são descontadas automaticamente, o que garante taxas mais baixas e prazos mais longos."
    },
    {
      question: "Quem pode contratar um empréstimo consignado?",
      answer: "Podem contratar aposentados e pensionistas do INSS, servidores públicos federais, estaduais e municipais, além de funcionários de empresas privadas que possuem convênio com instituições financeiras."
    },
    {
      question: "Qual o valor máximo que posso solicitar?",
      answer: "O valor máximo depende da sua margem consignável, que é limitada a 35% do benefício para empréstimos consignados e 5% para cartão consignado, totalizando até 40% da sua renda mensal."
    },
    {
      question: "Em quanto tempo o dinheiro é liberado?",
      answer: "Após a aprovação, o prazo para liberação do dinheiro varia conforme o banco parceiro, geralmente entre 1 a 7 dias úteis. A Mais Empréstimos atua como correspondente bancário e não tem controle sobre esse prazo."
    },
    {
      question: "Posso fazer uma portabilidade de empréstimo consignado?",
      answer: "Sim, a portabilidade permite transferir seu empréstimo para outra instituição que ofereça melhores condições. A Mais Empréstimos pode auxiliar nesse processo, analisando se é vantajoso para você."
    },
    {
      question: "Se eu já tenho um empréstimo consignado, posso fazer outro?",
      answer: "É possível ter mais de um empréstimo consignado, desde que sua margem consignável ainda tenha espaço disponível dentro do limite de 40% da sua renda mensal."
    },
    {
      question: "A Mais Empréstimos é um banco?",
      answer: "Não, a Mais Empréstimos é um correspondente bancário autorizado que atua como intermediário entre o cliente e as instituições financeiras parceiras. Não realizamos empréstimos diretamente."
    },
    {
      question: "Tem alguma taxa para fazer a simulação do empréstimo?",
      answer: "Não, a simulação de empréstimo é totalmente gratuita e sem compromisso. Você só terá custos se decidir contratar o empréstimo, e estes serão informados antecipadamente."
    },
    {
      question: "O que acontece se eu não gostar das condições oferecidas?",
      answer: "Você não é obrigado a aceitar nenhuma proposta. Nosso papel é apresentar as melhores opções disponíveis no mercado, mas a decisão final é sempre sua, sem qualquer penalidade."
    },
    {
      question: "Como são protegidos meus dados pessoais?",
      answer: "A Mais Empréstimos segue rigorosamente a Lei Geral de Proteção de Dados (LGPD). Seus dados são compartilhados apenas com os bancos parceiros para análise de crédito e não são armazenados em nossos sistemas."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Perguntas Frequentes
        </h2>
        
        <div className="max-w-4xl mx-auto">
          {faqItems.map((item, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 bg-white"
            >
              <button
                className="w-full text-left p-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleItem(index)}
              >
                <h3 className="text-xl font-semibold text-primary">{item.question}</h3>
                {openItem === index ? (
                  <ChevronUp className="text-primary flex-shrink-0" />
                ) : (
                  <ChevronDown className="text-primary flex-shrink-0" />
                )}
              </button>
              <div 
                className={`px-5 pb-5 ${openItem === index ? 'block' : 'hidden'}`}
              >
                <p className="text-lg text-gray-700">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
