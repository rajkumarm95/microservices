import { ConfigService } from '@nestjs/config';
import { DynamicModule, Module } from '@nestjs/common';
import { RabbitMqService } from './rabbitmq.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
interface RmqModuleOptions {
  name: string;
}

@Module({
  providers: [RabbitMqService, ConfigService],
  exports: [RabbitMqService],
})
export class RabbitMqModule {
  static register({ name: queueName }: RmqModuleOptions): DynamicModule {
    return {
      module: RabbitMqModule,
      imports: [
        ClientsModule.registerAsync([
          {
            name: queueName.toUpperCase(),
            useFactory: async (configService: ConfigService) => ({
              transport: Transport.RMQ,
              options: {
                urls: [configService.get<string>('RABBIT_MQ_URI')],
                queue: queueName,
              },
            }),
            inject: [ConfigService],
          },
        ]),
      ],
      exports: [ClientsModule],
    };
  }
}
