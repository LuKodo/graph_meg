import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { DeepPartial, Repository } from 'typeorm';
import { Headquarter } from './entities/headquarter.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class HeadquarterService {
  constructor(
    @InjectRepository(Headquarter)
    private sedeRepository: Repository<Headquarter>,
  ) {}

  async create(headquarter: DeepPartial<Headquarter>) {
    const sedeFound = await this.sedeRepository.findOne({
      where: {
        name: headquarter.name,
      },
    });

    if (sedeFound) {
      throw new ConflictException('La headquarter ya existe en bd');
    }

    const newHeadquarter = this.sedeRepository.create(headquarter);
    return this.sedeRepository.save(newHeadquarter);
  }

  async update(headquarter: DeepPartial<Headquarter>) {
    const sedeFound = await this.sedeRepository.findOne({
      where: {
        id: headquarter.id,
      },
    });

    if (!sedeFound) {
      throw new NotFoundException(
        `El headquarter '${headquarter.name}' no existe`,
      );
    }

    const nameFound = await this.sedeRepository.findOne({
      where: {
        name: headquarter.name,
      },
    });

    if (nameFound) {
      throw new ConflictException('La headquarter ya existe en bd');
    }
    headquarter.id = undefined;
    const updated = this.sedeRepository.merge(sedeFound, headquarter);
    return this.sedeRepository.save(updated);
  }

  async find(sedeId: number) {
    return await this.sedeRepository.findOne({
      where: {
        id: sedeId,
      },
      relations: ['city.department'],
    });
  }

  async findAllCount(
    page: number,
    pageSize: number,
  ) {
    return await this.sedeRepository.findAndCount({
      relations: ['city.department'],
      skip: (page - 1) * pageSize,
      take: pageSize,
    });
  }

  async findAll(): Promise<Array<Headquarter>> {
    return await this.sedeRepository.find({
      relations: ['city.department'],
    })
  }

  delete(id: number) {
    return this.sedeRepository.delete(id);
  }
}
