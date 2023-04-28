import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDTO } from './dto/create-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async create(user: UserCreateDTO): Promise<User> {
    // return this.userRepository.save(user);

    const usr = this.userRepository.create(user);
    return this.userRepository.save(usr);
  }
}
