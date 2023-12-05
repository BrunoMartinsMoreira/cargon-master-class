import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { HashModule } from 'src/utils/hash/hash.module';
import { IHashService } from 'src/utils/hash/IHashService';
import { ArgonHashService } from 'src/utils/hash/hash.service';
import { UsersModule } from '../users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies/local.strategy';
import { JwtAuthGuard } from './guards/jwt-auth.guard';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { APP_GUARD } from '@nestjs/core';
import { JwtStrategy } from './strategies/jwt.strategy';

@Module({
  imports: [
    HashModule,
    UsersModule,
    PassportModule,
    JwtModule.register({
      secret: 'ultra_secret_key',
      signOptions: {
        expiresIn: '8000s',
      },
    }),
  ],
  controllers: [AuthController],
  providers: [
    AuthService,
    LocalStrategy,
    { provide: IHashService, useClass: ArgonHashService },
    JwtStrategy,
    JwtAuthGuard,
    LocalAuthGuard,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
  exports: [
    AuthService,
    LocalStrategy,
    LocalAuthGuard,
    JwtStrategy,
    JwtAuthGuard,
  ],
})
export class AuthModule {}
