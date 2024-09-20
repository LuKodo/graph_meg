import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { HeadquarterService } from './headquarter.service';
import { Headquarter } from './entities/headquarter.entity';
import { CreateHeadquarterInput } from './dto/create-headquarter.input';
import { UpdateHeadquarterInput } from './dto/update-headquarter.input';

@Resolver(() => Headquarter)
export class HeadquarterResolver {
  constructor(private readonly headquarterService: HeadquarterService) {}

  @Mutation(() => Headquarter)
  createHeadquarter(@Args('createHeadquarterInput') createHeadquarterInput: CreateHeadquarterInput) {
    return this.headquarterService.create(createHeadquarterInput);
  }

  @Query(() => [Headquarter], { name: 'headquarters' })
  findAll() {
    return this.headquarterService.findAll();
  }

  @Query(() => Headquarter, { name: 'headquarter' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.headquarterService.find(id);
  }

  @Mutation(() => Headquarter)
  updateHeadquarter(@Args('updateHeadquarterInput') updateHeadquarterInput: UpdateHeadquarterInput) {
    return this.headquarterService.update(updateHeadquarterInput);
  }

  @Mutation(() => Headquarter)
  removeHeadquarter(@Args('id', { type: () => Int }) id: number) {
    return this.headquarterService.delete(id);
  }
}
