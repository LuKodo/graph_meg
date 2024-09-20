import { ObjectType, Field, Int } from '@nestjs/graphql';
import { AbstractEntity } from 'src/abstract.entity';
import { Headquarter } from 'src/headquarter/entities/headquarter.entity';
import { Role } from 'src/role/entities/role.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export enum UserStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  BANNED = 'BANNED',
}

export enum UserModel {
  MEG = 'MEG',
  PQRSC = 'PQRSC',
}

@Entity({ name: 'user' })
@ObjectType()
export class User extends AbstractEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column({ unique: true })
  username: string;

  @Field(() => String)
  @Column()
  password: string;

  @Field(() => String)
  @Column()
  name: string;

  @Field()
  @Column({
    type: 'enum',
    enum: UserModel,
    default: UserModel.MEG,
  })
  model: UserModel;

  @Field()
  @Column({
    type: 'enum',
    enum: UserStatus,
    default: UserStatus.ACTIVE,
  })
  status: UserStatus;

  @Field(() => String)
  @Column({ unique: true })
  mail: string;

  @Field(() => Headquarter)
  @ManyToOne(() => Headquarter)
  headquarter: Headquarter;

  @Field(() => Role)
  @ManyToOne(() => Role)
  role: Role;
}

export class UserEntity {
  //@OneToMany(() => RequestEntity, (solicitud) => solicitud.digitizer)
  //requests: RequestEntity[];
  //@OneToMany(() => RequestEntity, (solicitud) => solicitud.user)
  //digitizer: RequestEntity[];
  //@OneToMany(() => LogRequestEntity, (log) => log.user)
  //log: LogRequestEntity[];
  //@OneToMany(() => UserHeadquarterEntity, (type) => type.user)
  //user_headquarter: UserHeadquarterEntity[];
}
