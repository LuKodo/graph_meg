import { ObjectType, Field, Int } from '@nestjs/graphql';
import { City } from 'src/city/entities/city.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'headquarter' })
@ObjectType()
export class Headquarter {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  zip: string;

  @ManyToOne(() => City)
  @Field(() => City)
  city: City;
}
