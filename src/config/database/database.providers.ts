import { DataSource } from 'typeorm';

export const DATA_SOURCE = 'DATA_SOURCE';

export const dataBaseProviders = [
  {
    provide: DATA_SOURCE,
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'admin',
        database: 'cargon',
        password: 'admin',
        synchronize: false,
        logging: true,
        entities: ['dist/**/*.entity.js'],
        migrations: ['dist/database/migrations/*.js'],
        extra: {
          charset: 'utf8_general_ci',
          decimalNumbers: true,
        },
      });
      return dataSource.initialize();
    },
  },
];
