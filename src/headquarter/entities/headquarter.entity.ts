import { ObjectType, Field, Int } from '@nestjs/graphql';
import { AbstractEntity } from 'src/abstract.entity';
import { City } from 'src/city/entities/city.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'headquarter' })
@ObjectType()
export class Headquarter extends AbstractEntity {
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

  @OneToMany(() => User, (user) => user.headquarter)
  users: User[];
}
