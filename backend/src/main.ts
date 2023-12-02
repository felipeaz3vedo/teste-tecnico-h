import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './error/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalFilters(new HttpExceptionFilter());

  app.enableCors({
    origin: [`http://localhost:${process.env.FRONTEND_PORT}`],
    credentials: true
  });

  await app.listen(process.env.BACKEND_PORT || 3000);
}

bootstrap();
