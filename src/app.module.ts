import { Module } from '@nestjs/common';
import { UsersModule } from './modules/users.module';
import { dataBaseProviders } from './config/database/database.providers';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [...dataBaseProviders],
  exports: [...dataBaseProviders],
})
export class AppModule {}
