import { OrdersLib } from '@app/orders-lib/entities/orders-lib.entity';
import { User } from '@app/users/entities/user.entity';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      applicationName: 'EquipMe',
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '@Postgres123',
      database: 'microservice',
      entities: [OrdersLib, User],
      synchronize: true,
    }),
  ],
  providers: [],
  exports: [],
})
export class DatabaseModule {}
