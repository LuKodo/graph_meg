import { CreateHeadquarterInput } from './create-headquarter.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateHeadquarterInput extends PartialType(CreateHeadquarterInput) {
  @Field(() => Int)
  id: number;
}
