import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateEventInput } from './dto/create-event.input';
import { UpdateEventInput } from './dto/update-event.input';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './entities/event.entity';
@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event) private eventRepository: Repository<Event>
  ) {}

  async create(createEventInput: CreateEventInput) {
    const event = await this.eventRepository.create(createEventInput);

    return this.eventRepository.save(event);
  }

  findAll(): Promise<Event[]> {
    return this.eventRepository.find({
      relations: ['users'],
    });
  }

  findOne(id: string): Promise<Event> {
    return this.eventRepository.findOneById(id);
  }

  async update(id: string, updateEventInput: UpdateEventInput) {
    const event: Event = await this.eventRepository.create(updateEventInput);
    event.id = id;
    return this.eventRepository.save(event);
  }

  async remove(id: string) {
    const event = this.findOne(id);
    if (event) {
      const ret = await this.eventRepository.delete(id);
      // if (ret.affrcted === 1) {
      //   return event;
      // }
    }
    throw new NotFoundException(`Record cannot find by id ${id}`);

    return this.eventRepository.delete(id);
  }
}
