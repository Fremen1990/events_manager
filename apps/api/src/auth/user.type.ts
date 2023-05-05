import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field()
  username: string;
  @Field(() => [String])
  role: string[];

  constructor(username: string, role: string[]) {
    this.username = username;
    this.role = role;
  }
}
