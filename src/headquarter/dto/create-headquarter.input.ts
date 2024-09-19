import { InputType, Field } from '@nestjs/graphql';
import { CreateCityInput } from 'src/city/dto/create-city.input';
import { City } from 'src/city/entities/city.entity';

@InputType()
export class CreateHeadquarterInput {
  @Field()
  name: string;

  @Field()
  zip: string;

  @Field(() => CreateCityInput)
  city: CreateCityInput;
}
