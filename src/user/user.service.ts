import {
  ConflictException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial, Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { encryptData } from 'src/utils/encrypt';
import { CreateUserInput, LoginInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async create(user: CreateUserInput) {
    const userFound = await this.userRepository.findOne({
      where: {
        username: user.username,
      },
    });

    if (userFound) {
      throw new ConflictException(
        `EL usuario ${user.username} ya existe en bd`,
      );
    }

    const emailFound = await this.userRepository.findOne({
      where: {
        mail: user.mail,
      },
    });

    if (emailFound) {
      throw new ConflictException('EL correo ya existe en bd');
    }

    const password = this.hashPassword(user.password);
    const newUser = this.userRepository.create({ ...user, password: password });

    return this.userRepository.save(newUser);
  }

  async update(user: UpdateUserInput) {
    const userFound = await this.userRepository.findOne({
      where: {
        id: user.id,
      },
    });

    if (!userFound) {
      throw new NotFoundException(`El usuario no existe`);
    }

    const password = this.hashPassword(user.password);

    const updated = this.userRepository.merge(userFound, {
      ...user,
      password: password,
    });
    this.userRepository.save(updated);
    return 'Correcto';
  }

  hashPassword(password: string): string {
    return encryptData(password).toString();
  }

  comparePassword(plainTextPassword: string, hashedPassword: string): boolean {
    return plainTextPassword === hashedPassword;
  }

  async find(): Promise<User[]> {
    return await this.userRepository.find({
      relations: ['headquarter', 'role.permission'],
    });
  }

  async findAll(role?: number): Promise<Array<User>> {
    let where = {};
    if (role) {
      where = {
        role: {
          id: role,
        },
      };
    }
    return await this.userRepository.find({
      relations: ['headquarter'],
      where: where,
    });
  }

  async findByUsername(userName: string) {
    const userFound = await this.userRepository.findOne({
      where: {
        username: userName,
      },
      relations: ['headquarter'],
    });

    if (!userFound) {
      throw new NotFoundException(`El usuario '${userName}' no existe`);
    }

    return userFound;
  }

  async findById(id: number) {
    const userFound = await this.userRepository.findOne({
      where: { id: id },
    });

    if (!userFound) {
      throw new NotFoundException(`El user con el '${id}' no existe`);
    }

    return userFound;
  }

  async signIn(user: LoginInput) {
    const userFound = await this.userRepository.findOne({
      where: { username: user.username },
      relations: ['headquarter'],
    });

    if (!userFound) {
      throw new NotFoundException(`El usuario '${user.username}' no existe`);
    }

    const isMatch =
      encryptData(user.password).toString() === userFound.password;

    if (!isMatch) {
      throw new UnauthorizedException('Contraseña incorrecta');
    }

    return userFound;
  }
}
