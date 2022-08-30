import { ConfigModule } from '@nestjs/config';
import { Global, Module } from '@nestjs/common';
import { CommonService } from './common.service';
import { DatabaseModule } from './database/database.module';
import { RabbitMqModule } from './rabbitMQ';
import * as Joi from 'joi';
@Global()
@Module({
  imports: [
    DatabaseModule,
    RabbitMqModule,
    ConfigModule.forRoot({ isGlobal: true }),
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
