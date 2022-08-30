import { Controller, Get, UseGuards } from '@nestjs/common';
import { BillingLibService } from './billing-lib.service';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { RabbitMqService } from '@app/common/rabbitMQ';
import { JwtAuthGuard } from 'apps/auth/src/jwt-auth.guard';
@Controller('billing-lib')
export class BillingLibController {
  constructor(
    private readonly billingLibService: BillingLibService,
    private readonly rabbitMqService: RabbitMqService,
  ) {}

  @EventPattern('order_created')
  @UseGuards(JwtAuthGuard)
  async handleEvent(@Payload() data: any, @Ctx() context: RmqContext) {
    console.log('working');

    await this.billingLibService.handleEvent(data, context);
    this.rabbitMqService.ack(context); // manual ack

    return 'OK';
  }
}
