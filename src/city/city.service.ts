import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { City } from './entities/city.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>,
  ) {}

  findAll() {
    return this.cityRepository.find({
      relations: ['department'],
    });
  }

  findOne(id: number) {
    return this.cityRepository.findOne({
      where: {
        id: id,
      },
      relations: ['department'],
    });
  }
}
