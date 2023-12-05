import { Global, Module } from '@nestjs/common';
import { dataBaseProviders } from './database.providers';

@Global()
@Module({
  providers: [...dataBaseProviders],
  exports: [...dataBaseProviders],
})
export class DataBaseModule {}
