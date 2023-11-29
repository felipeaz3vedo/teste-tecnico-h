import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from './auth.controller';

import { CreateTokenService } from './services/create-token.service';
import { LoginService } from './services/login.service';
import { PrismaService } from 'src/libs/prisma/prisma.service';
import { RegisterService } from './services/register.service';
import { VerifyTokenService } from './services/verify-token.service';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET
    })
  ],
  controllers: [AuthController],
  providers: [
    PrismaService,
    RegisterService,
    LoginService,
    CreateTokenService,
    VerifyTokenService
  ]
})
export class AuthModule {}
