import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { User } from '../../user/entities/user.entity';

@ObjectType()
@Entity()
export class Event {
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
  title: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  description: string;
  @Field({ nullable: true })
  @Column({ nullable: true })
  date: string;

  @OneToMany(() => User, (user) => user.event)
  @Field(() => [User], { nullable: true })
  users: User[];
}
