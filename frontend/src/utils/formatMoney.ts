export const formatMoney = (value: number): string => {
  const decimalToNumber = Number(value); // Convertendo para número

  const hasDecimal = decimalToNumber % 1 !== 0;

  if (hasDecimal) {
    return `R$${decimalToNumber.toFixed(2)}`;
  }

  return `R$${decimalToNumber}.00`;
};
