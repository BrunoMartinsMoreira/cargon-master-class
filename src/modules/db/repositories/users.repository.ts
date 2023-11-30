import { User } from '../entities/user.entity';
import { UsersRepo } from './users.repo';

export class UsersRepository implements UsersRepo {
  create: (data: Partial<User>) => Promise<User>;
  update: (data: Partial<User>) => Promise<User>;
  delete: (id: number) => Promise<void>;
  findAll: () => Promise<User[]>;
  findOne: (id: number) => Promise<User>;
}
