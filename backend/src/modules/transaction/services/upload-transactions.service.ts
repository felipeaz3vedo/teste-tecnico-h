import { BadRequestException, Injectable } from '@nestjs/common';
import { createReadStream } from 'fs';
import * as fs from 'fs';
import * as readline from 'readline';
import { ZodError } from 'zod';

import { Transaction } from '../entity/transaction.entity';

import { PrismaService } from 'src/libs/prisma/prisma.service';

import { uploadTransactionSchema } from '../schemas/upload-transaction.schema';

import { normalizeTransactionData } from 'src/helpers/normalize-transaction-data';
import { extractTransactionsTxtLineData } from 'src/helpers/extract-transactions-txt-line-data';

@Injectable()
export class UploadTransactionsService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(file: Express.Multer.File): Promise<void> {
    const rl = readline.createInterface({
      input: createReadStream(file.path),
      crlfDelay: Infinity
    });

    const transactionData: Transaction[] = [];
    console.log(__dirname);
    try {
      for await (const line of rl) {
        const isNotEmptyLine = line.trim() !== '';

        if (isNotEmptyLine) {
          const data = extractTransactionsTxtLineData(line);

          const validatedData = uploadTransactionSchema.parse(data);

          const {
            transactionTypeId,
            date,
            product,
            value,
            seller
          }: Transaction = normalizeTransactionData(validatedData);

          transactionData.push({
            transactionTypeId,
            date,
            product,
            value,
            seller
          });
        }
      }

      if (transactionData.length > 0) {
        await this.prisma.$transaction(async (prisma) => {
          for (const data of transactionData) {
            await prisma.transaction.create({
              data
            });
          }
        });
      }
    } catch (error) {
      fs.unlinkSync(file.path);

      if (error instanceof ZodError) {
        throw new BadRequestException(
          JSON.stringify(error.flatten().fieldErrors)
        );
      }

      throw new BadRequestException('Error during transactions creation');
    }

    fs.unlinkSync(file.path);
  }
}
