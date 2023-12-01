interface Transaction {
  id: string;
  transactionTypeId: number;
  date: Date;
  product: string;
  value: number; // Alterado para number para acomodar valores decimais
  seller: string;
  createdAt: string;
}

interface SellersBalance {
  name: string;
  balance: number;
}

export const calculateSellersBalance = (
  transactions: Transaction[]
): SellersBalance[] => {
  const sellersBalance: { [seller: string]: number } = {};

  transactions.forEach((transaction) => {
    const { seller, value } = transaction;

    if (sellersBalance[seller] === undefined) {
      sellersBalance[seller] = 0;
    }

    sellersBalance[seller] += Number(value);
  });

  const result: SellersBalance[] = Object.entries(sellersBalance).map(
    ([name, balance]) => ({ name, balance })
  );

  return result;
};
