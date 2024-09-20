import { CreateHeadquarterInput } from 'src/headquarter/dto/create-headquarter.input';
import { UserModel, UserStatus } from '../entities/user.entity';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput {
  @Field(() => Int)
  id: number;

  @Field({ nullable: true })
  username: string;

  @Field({ nullable: true })
  password: string;

  @Field({ nullable: true })
  name: string;

  @Field({ nullable: true })
  model: UserModel;

  @Field({ nullable: true })
  status: UserStatus;

  @Field({ nullable: true })
  mail: string;

  @Field({ nullable: true })
  headquarter: CreateHeadquarterInput;
}
