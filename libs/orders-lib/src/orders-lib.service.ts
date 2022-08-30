import { ClientProxy } from '@nestjs/microservices';
import { Inject, Injectable } from '@nestjs/common';
import { OrdersLibRepository } from './orders-lib.repository';

@Injectable()
export class OrdersLibService {
  constructor(
    private ordersLibRepository: OrdersLibRepository,
    @Inject('BILLING') private billingClient: ClientProxy,
  ) {}
  async fetchAllData(authentication: string) {
    await this.billingClient.emit(
      'order_created', // pattern
      { mes: 'emitted value from hello world', Authentication: authentication }, //payload (data)
    );
    console.log('emitted');

    return this.ordersLibRepository.fetchAllData();
  }

  async fetchOneOrder(id: number) {
    return this.ordersLibRepository.fetchOneOrder(id);
  }
}
