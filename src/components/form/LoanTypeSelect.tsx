import React, { useState } from 'react';

interface LoanTypeSelectProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  error?: string;
}

const LoanTypeSelect: React.FC<LoanTypeSelectProps> = ({ 
  value, 
  onChange,
  error
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative">
      <label 
        htmlFor="loanType" 
        className={`block text-xl mb-2 font-medium ${error ? 'text-red-500' : 'text-gray-700'}`}
      >
        Tipo de Empréstimo
      </label>
      <div className={`relative ${error ? 'animate-shake' : ''}`}>
        <select
          id="loanType"
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 text-xl rounded-md appearance-none bg-white
            transition-all duration-300
            ${isFocused ? 'ring-2 ring-primary/30 ring-offset-2' : ''}
            ${error ? 'border-red-500' : (value ? 'border-primary border-2' : 'border-gray-300')}
          `}
        >
          <option value="">Selecione o tipo de empréstimo</option>
          <option value="consignado">Empréstimo Consignado</option>
          <option value="pessoal">Empréstimo Pessoal</option>
          <option value="cartaoBeneficio">Cartão Benefício</option>
          <option value="cartaoConsignado">Cartão Consignado</option>
          <option value="cartaoCredito">Cartão de Crédito</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={`${value ? 'text-primary' : 'text-gray-400'}`}>
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
      </div>
      {error && (
        <p className="text-red-500 text-base mt-1 animate-fade-in">{error}</p>
      )}
    </div>
  );
};

export default LoanTypeSelect;
