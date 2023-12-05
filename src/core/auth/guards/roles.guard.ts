import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { JwtService } from '@nestjs/jwt';
import { UserRoleEnum } from 'src/core/users/db/entities/user.entity';
import { JwtPayloadInterface } from '../types/jwt.payload';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private jwtService: JwtService,
  ) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles: string[] = this.reflector.getAllAndOverride<
      UserRoleEnum[]
    >('roles', [context.getHandler(), context.getClass()]);

    if (!requiredRoles) return true;

    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization?.replace('Bearer ', '');

    if (!token) return false;

    const payload: JwtPayloadInterface = this.jwtService.decode(token);

    const role: string = payload.role;

    if (requiredRoles.includes(role)) {
      return true;
    }
    throw new HttpException(
      {
        message: 'Usuario sem acesso ao recurso',
        data: null,
      },
      HttpStatus.UNAUTHORIZED,
    );
  }
}
