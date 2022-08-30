import { UsersService } from '@app/users';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { TokenPayload } from 'libs/auth-lib/src';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    configService: ConfigService,
    private readonly usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromExtractors([
        (request: any) => {
          return request?.Authentication;
        },
      ]),
      secretOrKey: 'xlOj2c2U?x(`pcT:I]}$gt3F;A()ZZ&3kiL,o~t',
    });
  }

  async validate({ userId }: TokenPayload) {
    try {
      return await this.usersService.getUser(userId);
    } catch (err) {
      throw new UnauthorizedException();
    }
  }
}
