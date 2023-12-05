import { Module } from '@nestjs/common';
import { UsersModule } from './core/users/users.module';
import { dataBaseProviders } from './config/database/database.providers';
import { AuthModule } from './core/auth/auth.module';
import { JwtService } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './core/auth/guards/jwt-auth.guard';
import { RolesGuard } from './core/auth/guards/roles.guard';
import { DataBaseModule } from './config/database/database.module';

@Module({
  imports: [UsersModule, AuthModule, DataBaseModule],
  controllers: [],
  providers: [
    ...dataBaseProviders,
    JwtService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
    {
      provide: APP_GUARD,
      useClass: RolesGuard,
    },
  ],
  exports: [...dataBaseProviders],
})
export class AppModule {}
