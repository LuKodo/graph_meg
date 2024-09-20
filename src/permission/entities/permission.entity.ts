import { ObjectType, Field, Int } from '@nestjs/graphql';
import { AbstractEntity } from 'src/abstract.entity';
import { Role } from 'src/role/entities/role.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'permission' })
@ObjectType()
export class Permission extends AbstractEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column({ default: false })
  create: boolean;

  @Field()
  @Column({ default: false })
  read: boolean;

  @Field()
  @Column({ default: false })
  update: boolean;

  @Field()
  @Column({ default: false })
  delete: boolean;

  @Field(() => Role)
  @ManyToOne(() => Role)
  role: Role;
}
