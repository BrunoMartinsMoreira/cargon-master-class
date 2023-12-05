import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersRepo } from './db/repositories/users.repo';
import { IHashService } from 'src/utils/hash/IHashService';

@Injectable()
export class UsersService {
  constructor(
    private readonly usersRepository: UsersRepo,
    private readonly hashService: IHashService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.password = await this.hashService.hash(
      createUserDto.password,
    );
    return this.usersRepository.create(createUserDto);
  }

  async findAll() {
    return this.usersRepository.findAll();
  }

  async findOne(id: number) {
    return this.usersRepository.findOne({ where: { id } });
  }

  async findByEmail(email: string) {
    return this.usersRepository.findOne({ where: { email } });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return this.usersRepository.update(id, updateUserDto);
  }

  async remove(id: number) {
    return this.usersRepository.delete(id);
  }
}
