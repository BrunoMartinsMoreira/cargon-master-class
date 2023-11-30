import { DATA_SOURCE } from 'src/config/database/database.providers';
import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';

export const USERS_REPOSITORY = 'USERS_REPOSITORY';

export const usersRepositoryProviders = [
  {
    provide: USERS_REPOSITORY,
    useFactory: async (dataSource: DataSource) =>
      dataSource.getRepository(User),
    inject: [DATA_SOURCE],
  },
];
