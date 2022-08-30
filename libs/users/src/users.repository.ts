import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersRepository {
  /**
   * @constructor UsersRepository DI
   * @param usersRepository
   */
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async createUser(request) {
    const user = this.usersRepository.create({
      name: request.name,
      email: request.email,
      password: request.password,
    });
    return this.usersRepository.save(user);
  }

  async getUser(id: string) {
    return this.usersRepository.findOne({ where: { id } });
  }

  async findOne(email: string) {
    return await this.usersRepository.findOne({ where: { email } });
  }
}
