import { Entity, Column, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
import { City } from 'src/city/entities/city.entity';

@Entity({ name: 'department' })
@ObjectType()
export class Department {
  @PrimaryGeneratedColumn()
  @Field(() => Number)
  id: number;

  @Column()
  @Field(() => String)
  code: string;

  @Column()
  @Field(() => String)
  name: string;

  @OneToMany(() => City, (city) => city.department)
  @Field(() => [City])
  cities: [City];
}
