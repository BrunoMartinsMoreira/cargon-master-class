import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepo } from './db/repositories/users.repo';
import { UsersRepository } from './db/repositories/users.repository';

@Module({
  controllers: [UsersController],
  providers: [UsersService, { provide: UsersRepo, useClass: UsersRepository }],
})
export class UsersModule {}
