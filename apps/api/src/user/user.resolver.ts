import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';
import { UserCreateDTO } from './dto/create-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query(() => [User], { name: 'getAllUsers' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'getUser' })
  findOne(@Args('id') id: string) {
    return this.userService.findOne(id);
  }

  @Mutation(() => User, { name: 'createUser' })
  createUser(@Args('userInput') user: UserCreateDTO) {
    return this.userService.create(user);
  }

  @ResolveField(() => Event)
  event(@Parent() user: User) {
    return this.userService.getEvent(user.eventId);
  }
}
