import { Module } from '@nestjs/common';
import { CreateUserService } from './services/create-user.service';
import { FindUserService } from './services/find-user.service';
import { PrismaService } from 'src/libs/prisma/prisma.service';

@Module({
  controllers: [],
  providers: [CreateUserService, FindUserService, PrismaService],
  exports: [CreateUserService, FindUserService]
})
export class UserModule {}
