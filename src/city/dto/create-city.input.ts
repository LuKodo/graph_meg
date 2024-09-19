import { InputType, Int, Field } from '@nestjs/graphql';
import { CreateDepartmentInput } from 'src/department/dto/create-department.input';

@InputType()
export class CreateCityInput {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  code: string;

  @Field(() => String)
  name: string;

  @Field(() => CreateDepartmentInput)
  department: CreateDepartmentInput;
}
