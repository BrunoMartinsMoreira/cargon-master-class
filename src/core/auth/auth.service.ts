import { Inject, Injectable, forwardRef } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { AuthLoginDto } from './dto/auth.login.dto';
import { User } from '../users/db/entities/user.entity';
import { JwtTokenInterface } from './types/jwt.token';
import { JwtPayloadInterface } from './types/jwt.payload';
import { IHashService } from 'src/utils/hash/IHashService';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,

    private jwtService: JwtService,
    private readonly hashService: IHashService,
  ) {}

  async validateUser(params: AuthLoginDto): Promise<Partial<User>> {
    const user = await this.usersService.findByEmail(params.email);
    if (
      user &&
      (await this.hashService.compare({
        hashTarget: user.password,
        target: params.password,
      }))
    ) {
      delete user.password;
      return user;
    }
    return null;
  }

  async login(user: User): Promise<JwtTokenInterface> {
    const payload: JwtPayloadInterface = {
      id: user.id,
      email: user.email,
      name: user.name,
      role: user.role,
    };

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role,
      token: this.jwtService.sign(payload),
    };
  }
}
