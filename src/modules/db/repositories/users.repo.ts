import { CreateUserDto } from 'src/modules/dto/create-user.dto';
import { User } from '../entities/user.entity';
import { UpdateUserDto } from 'src/modules/dto/update-user.dto';

export abstract class UsersRepo {
  create: (data: CreateUserDto) => Promise<User>;
  update: (id: number, data: UpdateUserDto) => Promise<User>;
  delete: (id: number) => Promise<void>;
  findAll: () => Promise<User[]>;
  findOne: (id: number) => Promise<User>;
}
