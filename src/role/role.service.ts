import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoleService {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  findAll() {
    return this.rolesRepository.find({
      relations: ['permission', 'user'],
    });
  }

  findOne(id: number) {
    return this.rolesRepository.findOne({
      where: {
        id: id,
      },
      relations: ['permission', 'user'],
    });
  }
}
