import { CreateUserDto } from './dto/create-user.dto';
import {
  Injectable,
  UnauthorizedException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { UsersRepository } from './users.repository';
import * as bcrypt from 'bcrypt';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(private usersRepository: UsersRepository) {}
  async createUser(request: CreateUserDto) {
    await this.validateCreateUserRequest(request);
    return this.usersRepository.createUser({
      name: request.name,
      email: request.email,
      password: request.password,
    });
  }
  getUser(id: string) {
    return this.usersRepository.getUser(id);
  }

  private async validateCreateUserRequest(request: CreateUserDto) {
    let user: User;
    try {
      user = await this.usersRepository.findOne(request.email);
    } catch (err) {}

    if (user) {
      throw new UnprocessableEntityException('Email already exists.');
    }
  }

  async validateUser(email: string, password: string) {
    const user = await this.usersRepository.findOne(email);
    if (password !== user.password) {
      throw new UnauthorizedException('Credentials are not valid.');
    }
    return user;
  }
}
