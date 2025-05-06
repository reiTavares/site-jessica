import React, { useState, useEffect } from 'react';
import { toast } from "@/components/ui/use-toast";
import { useNavigate } from 'react-router-dom';
import { supabase } from "@/integrations/supabase/client";
import FormInput from './form/FormInput';
import LoanTypeSelect from './form/LoanTypeSelect';
import SubmitButton from './form/SubmitButton';
import { formatPhone, formatCPF, formatCurrency } from '@/utils/formatters';
import { validateCPF, validatePhone } from '@/utils/validators';
import { sendMetaConversion } from '@/utils/metaConversions';

const SimulationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [loanType, setLoanType] = useState('');
  const [amount, setAmount] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    cpf: '',
    loanType: '',
    amount: '',
  });
  
  const [validFields, setValidFields] = useState({
    name: false,
    phone: false,
    cpf: false,
    loanType: false,
    amount: false,
  });
  
  const navigate = useNavigate();
  
  const idosoImageUrl = supabase.storage.from('images').getPublicUrl('idoso-.png').data.publicUrl;

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedPhone = formatPhone(e.target.value);
    setPhone(formattedPhone);
    
    if (formattedPhone.length > 0) {
      const isValid = validatePhone(formattedPhone);
      setErrors(prev => ({...prev, phone: isValid ? '' : 'Telefone inválido'}));
      setValidFields(prev => ({...prev, phone: isValid}));
    } else {
      setErrors(prev => ({...prev, phone: ''}));
      setValidFields(prev => ({...prev, phone: false}));
    }
  };

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCPF = formatCPF(e.target.value);
    setCpf(formattedCPF);
    
    if (formattedCPF.length > 0) {
      const isValid = validateCPF(formattedCPF);
      setErrors(prev => ({...prev, cpf: isValid ? '' : 'CPF inválido'}));
      setValidFields(prev => ({...prev, cpf: isValid}));
    } else {
      setErrors(prev => ({...prev, cpf: ''}));
      setValidFields(prev => ({...prev, cpf: false}));
    }
  };

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formattedAmount = formatCurrency(e.target.value);
    setAmount(formattedAmount);
    
    if (formattedAmount.length > 0) {
      setValidFields(prev => ({...prev, amount: true}));
      setErrors(prev => ({...prev, amount: ''}));
    } else {
      setValidFields(prev => ({...prev, amount: false}));
    }
  };
  
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    
    if (value.length > 0) {
      const nameParts = value.trim().split(' ').filter(part => part.length > 0);
      const isValid = nameParts.length >= 2;
      setErrors(prev => ({...prev, name: isValid ? '' : 'Digite nome e sobrenome'}));
      setValidFields(prev => ({...prev, name: isValid}));
    } else {
      setErrors(prev => ({...prev, name: ''}));
      setValidFields(prev => ({...prev, name: false}));
    }
  };
  
  const handleLoanTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setLoanType(value);
    
    if (value) {
      setValidFields(prev => ({...prev, loanType: true}));
      setErrors(prev => ({...prev, loanType: ''}));
    } else {
      setValidFields(prev => ({...prev, loanType: false}));
    }
  };

  const validateForm = (): boolean => {
    const newErrors = {
      name: !name ? 'Nome é obrigatório' : (!validFields.name ? 'Digite nome e sobrenome' : ''),
      phone: !phone ? 'Telefone é obrigatório' : (!validFields.phone ? 'Telefone inválido' : ''),
      cpf: !cpf ? 'CPF é obrigatório' : (!validFields.cpf ? 'CPF inválido' : ''),
      loanType: !loanType ? 'Selecione o tipo de empréstimo' : '',
      amount: !amount ? 'Valor é obrigatório' : '',
    };
    
    setErrors(newErrors);
    
    return !Object.values(newErrors).some(error => error);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Campos inválidos",
        description: "Por favor, corrija os campos destacados.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://hook.profusaodigital.com/webhook/leads-página-jéssica', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          phone,
          cpf,
          loanType,
          amount,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.slice(1).join(' ');

      await sendMetaConversion({
        phone,
        firstName,
        lastName,
      });

      navigate('/obrigado', { state: { firstName, cpf } });
    } catch (error) {
      toast({
        title: "Erro ao enviar formulário",
        description: "Por favor, tente novamente em alguns instantes.",
        variant: "destructive",
      });
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        50% { transform: translateX(5px); }
        75% { transform: translateX(-5px); }
      }
      .animate-shake { animation: shake 0.4s ease-in-out; }
      
      @keyframes fade-in {
        from { opacity: 0; transform: translateY(-10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .animate-fade-in { animation: fade-in 0.3s ease-out; }
    `;
    document.head.appendChild(style);
    
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section id="simule-agora" className="section-padding bg-primary">
      <div className="container-custom">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 max-w-3xl mx-auto transform transition-all duration-500 hover:shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-3">
              Simule seu empréstimo agora
            </h2>
            <p className="text-gray-600 text-xl">Preencha o formulário abaixo e receba propostas personalizadas</p>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <FormInput
              id="name"
              label="Nome Completo"
              value={name}
              onChange={handleNameChange}
              placeholder="Digite seu nome completo"
              error={errors.name}
              valid={validFields.name}
            />
            
            <FormInput
              id="phone"
              label="Telefone"
              value={phone}
              onChange={handlePhoneChange}
              placeholder="(XX) XXXXX-XXXX"
              maxLength={16}
              error={errors.phone}
              valid={validFields.phone}
            />
            
            <FormInput
              id="cpf"
              label="CPF"
              value={cpf}
              onChange={handleCPFChange}
              placeholder="XXX.XXX.XXX-XX"
              maxLength={14}
              error={errors.cpf}
              valid={validFields.cpf}
            />
            
            <LoanTypeSelect
              value={loanType}
              onChange={handleLoanTypeChange}
              error={errors.loanType}
            />
            
            <FormInput
              id="amount"
              label="Valor Desejado"
              value={amount}
              onChange={handleAmountChange}
              placeholder="R$ 0,00"
              error={errors.amount}
              valid={validFields.amount}
            />
            
            <SubmitButton isSubmitting={isSubmitting} />
          </form>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-secondary mr-2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              Seus dados estão protegidos e seguros
            </p>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <img 
            src={idosoImageUrl} 
            alt="Idoso sorridente" 
            className="max-w-full h-auto rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default SimulationForm;
