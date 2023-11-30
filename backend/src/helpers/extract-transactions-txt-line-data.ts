export const extractTransactionsTxtLineData = (line: string) => {
  const transactionTypeId = line[0];

  const date = line.slice(1, 26);
  // const normalizedDate = new Date(date);

  const productEndIndex = line.lastIndexOf('  '); // course ends when the line have more than one empty space
  const product = line.slice(26, productEndIndex).trim();

  const valueStartIndex = productEndIndex + 1;
  const value = line.slice(valueStartIndex, valueStartIndex + 11).trim();

  const seller = line.slice(valueStartIndex + 11).trim();

  const lineData = {
    transactionTypeId,
    date,
    product,
    value,
    seller
  };

  return lineData;
};
