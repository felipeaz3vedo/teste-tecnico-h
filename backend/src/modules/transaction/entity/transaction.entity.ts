export interface Transaction {
  id?: string;
  transactionTypeId: number;
  product: string;
  date: Date;
  value: number;
  seller: string;
  createdAt?: Date;
}
