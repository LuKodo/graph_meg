import { InputType, Field } from '@nestjs/graphql';
import { HeadquarterInput } from 'src/headquarter/dto/create-headquarter.input';
import { UserModel, UserStatus } from '../entities/user.entity';

@InputType()
export class CreateUserInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;

  @Field(() => String)
  name: string;

  @Field()
  model: UserModel;

  @Field()
  status: UserStatus;

  @Field(() => String)
  mail: string;

  @Field()
  headquarter: HeadquarterInput;
}

@InputType()
export class LoginInput {
  @Field(() => String)
  username: string;

  @Field(() => String)
  password: string;
}
