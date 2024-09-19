import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Department } from 'src/department/entities/department.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'city' })
@ObjectType()
export class City {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field(() => String)
  code: string;

  /*@OneToMany(() => HeadquarterEntity, (headquarter) => headquarter.city)
  headquarters: HeadquarterEntity[];*/

  @Column()
  @Field(() => String)
  name: string;

  @ManyToOne(() => Department, (department) => department.cities)
  @Field(() => Department)
  department: Department;
}
