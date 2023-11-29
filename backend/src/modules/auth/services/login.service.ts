import {
  BadRequestException,
  Injectable,
  NotFoundException
} from '@nestjs/common';
import { PrismaService } from 'src/libs/prisma/prisma.service';
import { compare } from 'bcrypt';
import { CreateTokenService } from './create-token.service';
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
      throw new NotFoundException('Resource not found');
    }

    if (!(await compare(password, user.password))) {
      throw new BadRequestException('Incorrect credentials');
    }

    const { accessToken } = this.createTokenService.execute(user);

    return accessToken;
  }
}
