import { Controller, Get, Param, Req, UseGuards } from '@nestjs/common';
import { OrdersLibService } from './orders-lib.service';
import { EventPattern, Payload, Ctx, RmqContext } from '@nestjs/microservices';
import { JwtAuthGuard } from 'apps/auth/src/jwt-auth.guard';

@Controller('orders-lib')
export class OrdersLibController {
  constructor(private readonly ordersLibService: OrdersLibService) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  async fetchAllData(@Req() req: any) {
    return this.ordersLibService.fetchAllData(req.cookies?.Authentication);
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async fetchOneOrder(@Param('id') id: number, @Req() req: any) {
    return this.ordersLibService.fetchOneOrder(id);
  }
}
