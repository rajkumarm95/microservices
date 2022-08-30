import { CommonModule } from '@app/common';
import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { RabbitMqModule } from '@app/common/rabbitMQ';
import { OrdersLibModule } from '@app/orders-lib';

@Module({
  imports: [
    CommonModule,
    OrdersLibModule,
    RabbitMqModule.register({
      name: 'billing',
    }),
  ],
  controllers: [],
  providers: [AppService],
})
export class AppModule {}
