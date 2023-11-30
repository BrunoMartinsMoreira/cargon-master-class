import { User } from '../entities/user.entity';

export abstract class UsersRepo {
  create: (data: Partial<User>) => Promise<User>;
  update: (data: Partial<User>) => Promise<User>;
  delete: (id: number) => Promise<void>;
  findAll: () => Promise<User[]>;
  findOne: (id: number) => Promise<User>;
}
