import { RmqOptions } from '@nestjs/microservices';
import { RabbitMqService } from '@app/common/rabbitMQ';
import { NestFactory } from '@nestjs/core';
import { AuthModule } from './auth.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AuthModule);
  const rmqService = app.get<RabbitMqService>(RabbitMqService);
  app.connectMicroservice<RmqOptions>(rmqService.getOptions('auth', true));
  app.useGlobalPipes(new ValidationPipe());
  await app.startAllMicroservices();
  await app.listen(3005);
}
bootstrap();
