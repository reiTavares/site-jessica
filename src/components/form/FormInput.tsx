import React, { useState } from 'react';

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  placeholder?: string;
  maxLength?: number;
  error?: string;
  valid?: boolean;
}

const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  maxLength,
  error,
  valid,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  
  return (
    <div className="relative">
      <label 
        htmlFor={id} 
        className={`block text-xl mb-2 font-medium transition-colors duration-300 ${error ? 'text-red-500' : (valid ? 'text-green-600' : 'text-gray-700')}`}
      >
        {label}
      </label>
      <div className={`relative ${error ? 'animate-shake' : ''}`}>
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            w-full px-4 py-3 text-xl rounded-md 
            transition-all duration-300 
            ${isFocused ? 'ring-2 ring-offset-2' : ''} 
            ${error ? 'border-red-500 ring-red-200' : (valid ? 'border-green-500 ring-green-200' : 'border-gray-300 ring-primary/20')}
            ${value ? 'border-2' : 'border'}
          `}
          placeholder={placeholder}
          maxLength={maxLength}
        />
        {valid && (
          <div className="absolute right-4 top-1/2 -translate-y-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-500 text-base mt-1 animate-fade-in">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
