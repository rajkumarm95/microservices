import { Injectable } from '@nestjs/common';
import { Transport, RmqOptions, RmqContext } from '@nestjs/microservices';
import { ConfigService } from '@nestjs/config';
@Injectable()
export class RabbitMqService {
  constructor(private configService: ConfigService) {}
  getOptions(queueName: string, noAck = false): RmqOptions {
    return {
      transport: Transport.RMQ,
      options: {
        urls: [this.configService.get<string>('RABBIT_MQ_URI')],
        queue: queueName,
        noAck,
        persistent: true,
      },
    };
  }

  ack(context: RmqContext) {
    const channel = context.getChannelRef();
    const originalMessage = context.getMessage();
    channel.ack(originalMessage);
  }
}
