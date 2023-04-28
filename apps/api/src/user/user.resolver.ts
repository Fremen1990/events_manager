import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserCreateDTO } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => [User], { name: 'getAllUsers' })
  findAll() {
    return this.userService.findAll();

    // const usr = new User();
    // usr.id = '1';
    // usr.firstName = 'John';
    // usr.lastName = 'XXX';
    // usr.email = 'XXXXXXXXXXXXXX';
    // usr.password = 'XXXXXXXXXXXXXX';
    // return [usr];
  }

  @Mutation(() => User, { name: 'createUser' })
  createUser(@Args('userInput') user: UserCreateDTO) {
    return this.userService.create(user);
  }
}
