import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { OrdersLib } from './entities/orders-lib.entity';

@Injectable()
export class OrdersLibRepository {
  /**
   * @constructor OrdersLibRepository DI
   * @param ordersLibRepository
   */
  constructor(
    @InjectRepository(OrdersLib)
    private ordersLibRepository: Repository<OrdersLib>,
  ) {}

  async fetchAllData() {
    return this.ordersLibRepository.find();
  }

  async fetchOneOrder(id: number) {
    return this.ordersLibRepository.findOne({ where: { id } });
  }
}
