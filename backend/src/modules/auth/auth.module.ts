import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { UserModule } from '../user/user.module';

import { AuthController } from './auth.controller';

import { CreateTokenService } from './services/create-token.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { VerifyTokenService } from './services/verify-token.service';
import { PrismaService } from 'src/libs/prisma/prisma.service';

@Module({
  imports: [
    UserModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET
    })
  ],
  controllers: [AuthController],
  providers: [
    RegisterService,
    LoginService,
    CreateTokenService,
    VerifyTokenService,
    PrismaService
  ],
  exports: [
    RegisterService,
    LoginService,
    CreateTokenService,
    VerifyTokenService
  ]
})
export class AuthModule {}
