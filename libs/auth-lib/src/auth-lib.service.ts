import { User } from './../../users/src/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { Response } from 'express';

export interface TokenPayload {
  userId: string;
}

@Injectable()
export class AuthLibService {
  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
  ) {}
  async login(user: User, response: Response) {
    const tokenPayload: TokenPayload = {
      userId: user.id,
    };
    console.log(tokenPayload);

    const expires = new Date();
    expires.setSeconds(expires.getSeconds() + 3600);

    const token = this.jwtService.sign(tokenPayload, {
      secret: 'xlOj2c2U?x(`pcT:I]}$gt3F;A()ZZ&3kiL,o~t',
    });

    response.cookie('Authentication', token, {
      httpOnly: true,
      expires,
    });
  }
}
