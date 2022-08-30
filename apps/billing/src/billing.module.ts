import { BillingLibModule } from './../../../libs/billing-lib/src/billing-lib.module';
import { RabbitMqModule } from '@app/common/rabbitMQ';
import { Module } from '@nestjs/common';
import { BillingService } from './billing.service';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { CommonModule } from '@app/common';
@Module({
  imports: [RabbitMqModule, ConfigModule, CommonModule, BillingLibModule],
  controllers: [],
  providers: [BillingService],
})
export class BillingModule {}
