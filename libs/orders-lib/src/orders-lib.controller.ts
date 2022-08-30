import { Controller, Get } from '@nestjs/common';
import { OrdersLibService } from './orders-lib.service';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';

@Controller('orders-lib')
export class OrdersLibController {
  constructor(private readonly ordersLibService: OrdersLibService) {}

  @Get()
  async fetchAllData() {
    return this.ordersLibService.fetchAllData();
  }
}
