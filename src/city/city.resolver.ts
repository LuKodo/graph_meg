import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { CityService } from './city.service';
import { City } from './entities/city.entity';

@Resolver(() => City)
export class CityResolver {
  constructor(private readonly cityService: CityService) {}

  @Query(() => [City], { name: 'cities' })
  findAll() {
    return this.cityService.findAll();
  }

  @Query(() => City, { name: 'city' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.cityService.findOne(id);
  }
}
