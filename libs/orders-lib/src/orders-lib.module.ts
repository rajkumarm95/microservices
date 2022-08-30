import { BillingLibModule } from './../../billing-lib/src/billing-lib.module';
import { ClientsModule } from '@nestjs/microservices';
import { RabbitMqModule } from '@app/common/rabbitMQ';
import { TypeOrmModule } from '@nestjs/typeorm';
import { forwardRef, Module } from '@nestjs/common';
import { OrdersLibService } from './orders-lib.service';
import { OrdersLib } from './entities/orders-lib.entity';
import { OrdersLibRepository } from './orders-lib.repository';
import { OrdersLibController } from './orders-lib.controller';
import { CommonModule } from '@app/common';
import { AuthModule } from 'apps/auth/src/auth.module';

@Module({
  controllers: [OrdersLibController],
  providers: [OrdersLibService, OrdersLibRepository],
  exports: [OrdersLibService, OrdersLibRepository],
  imports: [
    CommonModule,
    TypeOrmModule.forFeature([OrdersLib]),
    RabbitMqModule.register({ name: 'billing' }),
    AuthModule,
  ],
})
export class OrdersLibModule {}
