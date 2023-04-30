import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { UserCreateDTO } from './dto/create-user.input';
import { EventService } from '../event/event.service';
import { Event } from '../event/entities/event.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private eventService: EventService
  ) {}

  async findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userRepository.findOneById(id);
  }

  async create(user: UserCreateDTO): Promise<User> {
    // return this.userRepository.save(user);

    const usr = this.userRepository.create(user);
    return this.userRepository.save(usr);
  }

  async getEvent(id: string): Promise<Event> {
    return this.eventService.findOne(id);
  }
}
