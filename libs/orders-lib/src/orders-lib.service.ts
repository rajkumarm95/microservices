import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { OrdersLibRepository } from './orders-lib.repository';

@Injectable()
export class OrdersLibService {
  constructor(
    private ordersLibRepository: OrdersLibRepository,
    @Inject('BILLING') private billingClient: ClientProxy,
  ) {}
  async fetchAllData() {
    await this.billingClient.emit(
      'order_created', // pattern
      'emitted value from hello world', //payload (data)
    );
    return this.ordersLibRepository.fetchAllData();
  }
}
