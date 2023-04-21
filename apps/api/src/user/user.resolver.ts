import { Query, Resolver } from '@nestjs/graphql';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver(() => User)
export class UserResolver {
  constructor(private userRepository: UserService) {}
  @Query(() => [User], { name: 'getAllUsers' })
  findAll() {
    // return this.userRepository.findAll();

    const usr = new User();
    usr.id = '1';
    usr.firstName = 'John';
    usr.lastName = 'XXX';
    usr.email = 'XXXXXXXXXXXXXX';
    usr.password = 'XXXXXXXXXXXXXX';
    return [usr];
  }
}
