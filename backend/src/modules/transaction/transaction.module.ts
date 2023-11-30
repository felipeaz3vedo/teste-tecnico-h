import { Module } from '@nestjs/common';
import { TransactionController } from './transaction.controller';
import { AuthModule } from '../auth/auth.module';
import { UserModule } from '../user/user.module';
import { MulterModule } from '@nestjs/platform-express';
import { UploadTransactionsService } from './services/upload-transactions.service';
import { PrismaService } from 'src/libs/prisma/prisma.service';

@Module({
  imports: [
    AuthModule,
    UserModule,
    MulterModule.register({
      dest: './temp'
    })
  ],
  controllers: [TransactionController],
  providers: [UploadTransactionsService, PrismaService]
})
export class TransactionModule {}
