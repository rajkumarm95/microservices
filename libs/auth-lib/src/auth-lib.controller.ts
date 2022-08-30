import { CurrentUser } from './../decorator/current-user.decorator';
import { Res, UseGuards } from '@nestjs/common';
import { Controller, Post } from '@nestjs/common';
import { AuthLibService } from './auth-lib.service';
import { User } from '@app/users/entities/user.entity';
import JwtAuthGuard from 'libs/auth-lib/src/guards/jwt-auth.guard';
import { MessagePattern } from '@nestjs/microservices';
import { Response } from 'express';
import { LocalAuthGuard } from 'libs/auth-lib/src/guards/local-auth.guard';
@Controller('auth-lib')
export class AuthLibController {
  constructor(private readonly authLibService: AuthLibService) {}

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(
    @CurrentUser() user: User,
    @Res({ passthrough: true }) response: Response,
  ) {
    await this.authLibService.login(user, response);
    response.send(user);
  }

  @UseGuards(JwtAuthGuard)
  @MessagePattern('validate_user')
  async validateUser(@CurrentUser() user: User) {
    console.log(user);

    return user;
  }
}
