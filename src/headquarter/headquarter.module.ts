import { Module } from '@nestjs/common';
import { HeadquarterService } from './headquarter.service';
import { HeadquarterResolver } from './headquarter.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Headquarter } from './entities/headquarter.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Headquarter])],
  providers: [HeadquarterResolver, HeadquarterService],
})
export class HeadquarterModule {}
