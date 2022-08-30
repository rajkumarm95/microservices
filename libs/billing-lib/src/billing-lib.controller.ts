import { Controller, Get } from '@nestjs/common';
import { BillingLibService } from './billing-lib.service';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { RabbitMqService } from '@app/common/rabbitMQ';
@Controller('billing-lib')
export class BillingLibController {
  constructor(
    private readonly billingLibService: BillingLibService,
    private readonly rabbitMqService: RabbitMqService,
  ) {}

  @EventPattern('order_created')
  async handleEvent(@Payload() data: any, @Ctx() context: RmqContext) {
    await this.billingLibService.handleEvent(data, context);
    this.rabbitMqService.ack(context); // manual ack
    return 'OK';
  }
}
