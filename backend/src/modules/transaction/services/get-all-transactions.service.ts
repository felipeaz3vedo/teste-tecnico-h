import { Injectable } from '@nestjs/common';

import { Transaction } from '../entity/transaction.entity';

import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class GetAllTransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(seller?: string): Promise<Transaction[] | []> {
    const transactions = this.prisma.transaction.findMany({
      where: {
        seller: {
          mode: 'insensitive',
          contains: seller
        }
      }
    });

    return transactions;
  }
}
