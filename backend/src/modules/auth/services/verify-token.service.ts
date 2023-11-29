import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class VerifyTokenService {
  constructor(
    private readonly JWTService: JwtService,
    private readonly configService: ConfigService
  ) {}

  execute(token: string) {
    const data = this.JWTService.verify(
      token,
      this.configService.get('JWT_SECRET')
    );

    return data;
  }
}
