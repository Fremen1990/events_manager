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
import { UseGuards } from '@nestjs/common';
import { CognitoAuthGuard } from '../auth/cognito.guard';
import { CurrentUser } from '../auth/currentUser.decorator';

@Resolver(() => User)
export class UserResolver {
  constructor(private userService: UserService) {}

  @Query(() => User, { name: 'me' })
  @UseGuards(CognitoAuthGuard)
  whoAmI(@CurrentUser() user: User) {
    return user;
  }

  @Query(() => [User], { name: 'getAllUsers' })
  @UseGuards(CognitoAuthGuard)
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
