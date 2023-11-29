import { hash } from 'bcrypt';
import { ConflictException, Injectable } from '@nestjs/common';

import { PrismaService } from 'src/libs/prisma/prisma.service';
import { CreateTokenService } from './create-token.service';

import { RegisterDTO } from '../DTOs/register.dto';

@Injectable()
export class RegisterService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly createTokenService: CreateTokenService
  ) {}

  async execute({ name, email, password }: RegisterDTO) {
    const emailAlreadyExists = await this.prisma.user.findFirst({
      where: { email, deletedAt: null }
    });

    if (emailAlreadyExists) {
      throw new ConflictException('Email already in use');
    }

    const hashedPassword = await hash(password, 8);

    const user = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword
      }
    });

    const { accessToken } = this.createTokenService.execute({
      id: user.id,
      name: user.name,
      email: user.email
    });

    return accessToken;
  }
}
