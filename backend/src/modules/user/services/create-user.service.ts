import { User } from '../entity/user.entity';

import { CreateUserDTO } from '../DTOs/create-user.dto';
import { ConflictException, Injectable } from '@nestjs/common';
import { hash } from 'bcrypt';
import { PrismaService } from 'src/libs/prisma/prisma.service';

@Injectable()
export class CreateUserService {
  constructor(private readonly prisma: PrismaService) {}

  async execute({ name, email, password }: CreateUserDTO): Promise<User> {
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

    return user;
  }
}
