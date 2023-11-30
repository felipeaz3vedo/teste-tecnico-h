import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException
} from '@nestjs/common';

import { FindUserService } from 'src/modules/user/services/find-user.service';
import { VerifyTokenService } from 'src/modules/auth/services/verify-token.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(
    private readonly verifyTokenService: VerifyTokenService,
    private readonly findUserService: FindUserService
  ) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const { authorization } = request.headers;

    try {
      const data = this.verifyTokenService.execute(
        (authorization ?? '').split(' ')[1]
      );

      request.tokenPayload = data;

      request.user = await this.findUserService.execute(data.id);

      return true;
    } catch {
      throw new UnauthorizedException('Invalid token');
    }
  }
}
