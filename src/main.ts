import { AppModule } from '@app/app.module';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Config } from '@app/services/config';

async function bootstrap() {
  const app: INestApplication = await NestFactory.create(AppModule);
  const config: Config = app.get(Config);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  await app.listen(config.get('port'));
}
bootstrap();