import { Injectable } from '@nestjs/common';

import { CreateTokenService } from './create-token.service';
import { CreateUserService } from 'src/modules/user/services/create-user.service';
import { PrismaService } from 'src/libs/prisma/prisma.service';

import { RegisterDTO } from '../DTOs/register.dto';

@Injectable()
export class RegisterService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly createUserService: CreateUserService,
    private readonly createTokenService: CreateTokenService
  ) {}

  async execute({ name, email, password }: RegisterDTO) {
    const user = await this.createUserService.execute({
      name,
      email,
      password
    });

    const { accessToken } = this.createTokenService.execute({
      id: user.id!,
      name: user.name,
      email: user.email
    });

    return accessToken;
  }
}
