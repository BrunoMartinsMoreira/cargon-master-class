import { IsEmail, IsIn, IsNotEmpty, IsString } from 'class-validator';
import { UserRoleEnum } from '../db/entities/user.entity';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Nome é um campo obrigatorio' })
  @IsString({ message: 'Nome deve ser uma string' })
  name: string;

  @IsNotEmpty({ message: 'Email é um campo obrigatorio' })
  @IsEmail({}, { message: 'Envie um email válido' })
  email: string;

  @IsNotEmpty({ message: 'Senha é um campo obrigatorio' })
  @IsString({ message: 'Senha deve ser uma string' })
  password: string;

  @IsNotEmpty({ message: 'Nome é um campo obrigatorio' })
  @IsIn([UserRoleEnum.ADMIN, UserRoleEnum.CLIENT, UserRoleEnum.USER])
  role: UserRoleEnum;
}
