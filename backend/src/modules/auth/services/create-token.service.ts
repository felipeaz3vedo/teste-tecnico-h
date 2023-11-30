import { Injectable } from '@nestjs/common';

import { JwtService } from '@nestjs/jwt';
import { CreateTokenDTO } from '../DTOs/create-token.dto';

@Injectable()
export class CreateTokenService {
  constructor(private readonly JWTService: JwtService) {}

  execute({ id, name, email }: CreateTokenDTO) {
    return {
      accessToken: this.JWTService.sign(
        {
          id,
          name,
          email
        },
        {
          expiresIn: '2 days',
          subject: String(id),
          issuer: 'login',
          audience: 'user'
        }
      )
    };
  }
}
