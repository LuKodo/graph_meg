import { ObjectType, Field, Int } from '@nestjs/graphql';
import { AbstractEntity } from 'src/abstract.entity';
import { Permission } from 'src/permission/entities/permission.entity';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'roles' })
@ObjectType()
export class Role extends AbstractEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field(() => User)
  @OneToMany(() => User, (user) => user.role)
  user: User[];

  @Field(() => Permission)
  @OneToMany(() => Permission, (permission) => permission.role)
  permission: Permission[];
}
