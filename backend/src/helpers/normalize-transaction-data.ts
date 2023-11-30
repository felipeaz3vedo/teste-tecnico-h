interface TransactionData {
  transactionTypeId: string;
  date: string;
  product: string;
  value: string;
  seller: string;
}

export const normalizeTransactionData = ({
  transactionTypeId,
  date,
  product,
  value,
  seller
}: TransactionData) => {
  const transactionTypeIdToNumber = Number(transactionTypeId);
  const dateToDateTimeObj = new Date(date);
  const normalizedValue = Number((parseFloat(value) / 100).toFixed(2));

  const normalizedTransactionData = {
    transactionTypeId: transactionTypeIdToNumber,
    date: dateToDateTimeObj,
    product,
    value: normalizedValue,
    seller
  };

  return normalizedTransactionData;
};
