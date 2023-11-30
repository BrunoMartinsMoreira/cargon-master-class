import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepo } from './db/repositories/users.repo';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepo) {}

  async create(createUserDto: CreateUserDto) {
    return this.usersRepository.create(createUserDto);
  }

  async findAll() {
    return this.usersRepository.findAll();
  }

  async findOne(id: number) {
    return this.usersRepository.findOne(id);
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update({ id, ...updateUserDto });
  }

  async remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
