import { ReactNode, createContext, useState } from 'react';

interface Transaction {
  id: string;
  transactionTypeId: number;
  date: Date;
  product: string;
  value: number;
  seller: string;
  createdAt: string;
}

interface TransactionContextData {
  transactions: Transaction[];
  setTransactions: (products: Transaction[]) => void;
}

type TransactionContextProviderProps = {
  children: ReactNode;
};

export const TransactionContext = createContext({} as TransactionContextData);

export const AuthContextProvider = ({
  children
}: TransactionContextProviderProps) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  return (
    <TransactionContext.Provider
      value={{
        transactions,
        setTransactions
      }}
    >
      {children}
    </TransactionContext.Provider>
  );
};
