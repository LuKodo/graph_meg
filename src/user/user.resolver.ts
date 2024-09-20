import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput, LoginInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.userService.create(createUserInput);
  }

  @Query(() => [User], { name: 'users' })
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => String, { name: 'hash' })
  hash(@Args('password') password: string) {
    return this.userService.hashPassword(password);
  }

  @Query(() => User, { name: 'userByUsername' })
  findUserByUsername(@Args('username') username: string) {
    return this.userService.findByUsername(username);
  }

  @Query(() => User, { name: 'userById' })
  findUserById(@Args('id') id: number) {
    return this.userService.findById(id);
  }

  @Query(() => User, { name: 'validateLogin' })
  validateLogin(@Args('user') user: LoginInput) {
    return this.userService.signIn(user);
  }

  @Mutation(() => User)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateUserInput) {
    return this.userService.update(updateUserInput);
  }
}
