import { Body, Controller, HttpCode, Post, UsePipes } from '@nestjs/common';
import { ZodValidationPipe } from 'src/pipes/zod-validation.pipe';

import { RegisterService } from './services/register.service';
import { LoginService } from './services/login.service';

import { registerSchema, RegisterSchema } from './schemas/register.schema';
import { LoginSchema, loginSchema } from './schemas/login.schema';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly registerService: RegisterService,
    private readonly loginService: LoginService
  ) {}

  @Post('/register')
  @HttpCode(201)
  @UsePipes(new ZodValidationPipe(registerSchema))
  async register(@Body() body: RegisterSchema) {
    const accessToken = await this.registerService.execute(body);

    return { accessToken };
  }

  @Post('/login')
  @UsePipes(new ZodValidationPipe(loginSchema))
  async login(@Body() body: LoginSchema) {
    const accessToken = await this.loginService.execute(body);

    return { accessToken };
  }
}
