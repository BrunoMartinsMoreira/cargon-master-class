import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UsersRepo } from './db/repositories/users.repo';
import { UsersTypeormRepository } from './db/repositories/users.typeorm.repository';
import { userRepositoryProvider } from './db/providers/users.repository.providers';
import { HashModule } from 'src/utils/hash/hash.module';
import { IHashService } from 'src/utils/hash/IHashService';
import { ArgonHashService } from 'src/utils/hash/hash.service';

@Module({
  imports: [HashModule],
  controllers: [UsersController],
  providers: [
    UsersService,
    { provide: UsersRepo, useClass: UsersTypeormRepository },
    { provide: IHashService, useClass: ArgonHashService },
    userRepositoryProvider,
  ],

  exports: [UsersService],
})
export class UsersModule {}
