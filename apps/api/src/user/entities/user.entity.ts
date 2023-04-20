import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
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
