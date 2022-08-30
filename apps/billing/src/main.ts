import { RabbitMqService } from '@app/common/rabbitMQ/rabbitmq.service';
import { NestFactory } from '@nestjs/core';
import { BillingModule } from './billing.module';

async function bootstrap() {
  const app = await NestFactory.create(BillingModule);
  const rmqService = app.get<RabbitMqService>(RabbitMqService);
  app.connectMicroservice(rmqService.getOptions('billing')); // for hibrid connecton
  await app.startAllMicroservices();
}
bootstrap();
