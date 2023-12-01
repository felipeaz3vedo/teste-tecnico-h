import { Decimal } from '@prisma/client/runtime/library';

export interface Transaction {
  id?: string;
  transactionTypeId: number;
  product: string;
  date: Date;
  value: number | Decimal;
  seller: string;
  createdAt?: Date;
}
