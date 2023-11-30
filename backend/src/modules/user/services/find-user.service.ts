import { PrismaService } from 'src/libs/prisma/prisma.service';
import { User } from '../entity/user.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
export class FindUserService {
  constructor(private readonly prisma: PrismaService) {}

  async execute(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id }
    });

    return user;
  }
}
