import { ConfigService } from '@nestjs/config';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { AuthLibController } from './auth-lib.controller';
import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AuthLibService } from './auth-lib.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { LocalStrategy } from './strategies/local.strategy';
import { UsersModule } from '@app/users';
import { NestModule } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';

@Module({
  controllers: [AuthLibController],
  providers: [AuthLibService, JwtService, LocalStrategy, JwtStrategy],
  exports: [AuthLibService],
  imports: [
    UsersModule,
    JwtModule.registerAsync({
      useFactory: (configService: ConfigService) => ({
        secret: 'xlOj2c2U?x(`pcT:I]}$gt3F;A()ZZ&3kiL,o~t',
        signOptions: {
          expiresIn: '3600',
        },
      }),
    }),
  ],
})
export class AuthLibModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    try {
      consumer.apply(cookieParser()).forRoutes('*');
    } catch (error) {}
  }
}
