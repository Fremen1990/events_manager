import { Field, ObjectType } from '@nestjs/graphql';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Event } from '../../event/entities/event.entity';

@ObjectType()
@Entity()
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  @Column()
  firstName: string;
  @Field()
  @Column()
  lastName: string;
  @Field()
  @Column({ unique: true })
  email: string;
  @Field()
  @Column()
  password: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  position: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  city: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  country: string;

  @ManyToOne(() => Event, (event) => event.users)
  @Field(() => Event)
  event: Event;

  @Column()
  @Field()
  eventId: string;
}
