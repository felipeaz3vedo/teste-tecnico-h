import { BadRequestException, Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';

import { CreateTokenService } from './create-token.service';
import { PrismaService } from 'src/libs/prisma/prisma.service';

import { LoginDTO } from '../DTOs/login.dto';

@Injectable()
export class LoginService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly createTokenService: CreateTokenService
  ) {}

  async execute({ email, password }: LoginDTO) {
    const user = await this.prisma.user.findFirst({
      where: { email }
    });

    if (!user) {
      throw new BadRequestException('Invalid email or/and passoword');
    }

    if (!(await compare(password, user.password))) {
      throw new BadRequestException('Invalid email or/and passoword');
    }

    const { accessToken } = this.createTokenService.execute(user);

    return accessToken;
  }
}
