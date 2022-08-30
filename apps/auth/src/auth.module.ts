import { ConfigModule } from '@nestjs/config';
import { RabbitMqModule } from '@app/common/rabbitMQ';
import { CommonModule } from '@app/common';
import { UsersModule } from '@app/users';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtModule, JwtModuleOptions } from '@nestjs/jwt';
import { AuthLibModule } from 'libs/auth-lib/src';

@Module({
  imports: [
    CommonModule,
    RabbitMqModule.register({ name: 'auth' }),
    ConfigModule,
    AuthLibModule,
    JwtModule,
  ],
  controllers: [],
  providers: [AuthService],
  exports: [RabbitMqModule],
})
export class AuthModule {}
