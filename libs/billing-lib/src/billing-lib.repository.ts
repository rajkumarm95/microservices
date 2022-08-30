import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillingLib } from './entities/billing-lib.entity';

@Injectable()
export class BillingLibRepository {
  /**
   * @constructor OrdersLibRepository DI
   * @param ordersLibRepository
   */
  constructor(
    @InjectRepository(BillingLib)
    private ordersLibRepository: Repository<BillingLib>,
  ) {}
}
