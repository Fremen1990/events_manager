import { Field, InputType } from '@nestjs/graphql';
import { PrimaryGeneratedColumn } from 'typeorm';

@InputType()
export class UserCreateDTO {
  @Field()
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Field()
  firstName: string;
  @Field()
  lastName: string;
  @Field()
  email: string;
  @Field()
  password: string;
  @Field({ nullable: true })
  position: string;
  @Field({ nullable: true })
  city: string;
  @Field({ nullable: true })
  country: string;
}
