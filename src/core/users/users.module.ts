import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepo } from './db/repositories/users.repo';
import { UsersTypeormRepository } from './db/repositories/users.typeorm.repository';
import { DataBaseModule } from 'src/config/database/database.module';
import { usersRepositoryProviders } from './db/providers/users.repository.providers';

@Module({
  imports: [DataBaseModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: UsersRepo, useClass: UsersTypeormRepository },
    ...usersRepositoryProviders,
  ],
})
export class UsersModule {}
