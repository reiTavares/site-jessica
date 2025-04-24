export const formatPhone = (value: string) => {
  const numericValue = value.replace(/\D/g, '');
  
  if (numericValue.length <= 2) {
    return numericValue;
  } else if (numericValue.length <= 6) {
    return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2)}`;
  } else if (numericValue.length <= 10) {
    return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 6)}-${numericValue.slice(6)}`;
  } else {
    return `(${numericValue.slice(0, 2)}) ${numericValue.slice(2, 7)}-${numericValue.slice(7, 11)}`;
  }
};

export const formatCPF = (value: string) => {
  const numericValue = value.replace(/\D/g, '');
  
  if (numericValue.length <= 3) {
    return numericValue;
  } else if (numericValue.length <= 6) {
    return `${numericValue.slice(0, 3)}.${numericValue.slice(3)}`;
  } else if (numericValue.length <= 9) {
    return `${numericValue.slice(0, 3)}.${numericValue.slice(3, 6)}.${numericValue.slice(6)}`;
  } else {
    return `${numericValue.slice(0, 3)}.${numericValue.slice(3, 6)}.${numericValue.slice(6, 9)}-${numericValue.slice(9, 11)}`;
  }
};

export const formatCurrency = (value: string) => {
  const numericValue = value.replace(/\D/g, '');
  
  const cents = parseInt(numericValue, 10);
  if (isNaN(cents)) {
    return '';
  }
  
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cents / 100);
};
