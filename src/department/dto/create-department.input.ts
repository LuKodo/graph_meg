import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateDepartmentInput {
  @Field(() => Number)
  id: number;

  @Field(() => String)
  code: string;

  @Field(() => String)
  name: string;
}
