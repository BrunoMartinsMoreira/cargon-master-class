import { User } from '../entities/user.entity';
import { UsersRepo } from './users.repo';
import { Repository } from 'typeorm';
import { Inject } from '@nestjs/common';
import { USERS_REPOSITORY } from '../providers/users.repository.providers';
import { CreateUserDto } from '../../dto/create-user.dto';

export class UsersTypeormRepository implements UsersRepo {
  constructor(
    @Inject(USERS_REPOSITORY) private readonly repository: Repository<User>,
  ) {}

  async create(data: CreateUserDto): Promise<User> {
    const userExists = await this.repository.findOne({
      where: { email: data.email },
    });

    if (userExists) return userExists;

    const user = this.repository.create(data);
    await this.repository.save(user);
    return user;
  }

  async update(id: number, data: Partial<User>): Promise<User> {
    const userExists = await this.repository.findOne({
      where: { email: data.email },
    });

    if (userExists) await this.repository.update(id, data);

    const updatedUser = await this.repository.findOne({ where: { id } });
    return updatedUser;
  }

  async delete(id: number): Promise<void> {
    await this.repository.delete(id);
  }

  async findAll(): Promise<User[]> {
    return this.repository.find();
  }

  findOne: (id: number) => Promise<User>;
}
