import { ApolloServerPluginLandingPageLocalDefault } from '@apollo/server/plugin/landingPage/default';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigModule } from '@nestjs/config';

import { CityModule } from './city/city.module';
import { DepartmentModule } from './department/department.module';
import { HeadquarterModule } from './headquarter/headquarter.module';
import { RoleModule } from './role/role.module';
import { UserModule } from './user/user.module';
import { PermissionModule } from './permission/permission.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      include: [CityModule, DepartmentModule, HeadquarterModule, RoleModule, UserModule, PermissionModule],
      autoSchemaFile: 'schema.gql',
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
    }),
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: Number.parseInt(process.env.DB_PORT, 10),
      database: process.env.DB_NAME,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      entities: [`${__dirname}/**/*.entity{.ts,.js}`],
      synchronize: true,
    }),
    CityModule,
    DepartmentModule,
    HeadquarterModule,
    UserModule,
    RoleModule,
    PermissionModule,
  ],
})
export class AppModule {}
