import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../entities/user.entity';
import { FindOneOptions } from 'typeorm';

export abstract class UsersRepo {
  create: (data: CreateUserDto) => Promise<User>;
  update: (id: number, data: UpdateUserDto) => Promise<User>;
  delete: (id: number) => Promise<void>;
  findAll: () => Promise<User[]>;
  findOne: (condition: FindOneOptions) => Promise<User>;
}
