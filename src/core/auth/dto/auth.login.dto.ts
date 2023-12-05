import { IsNotEmpty, IsEmail, IsString } from 'class-validator';

export abstract class AuthLoginDto {
  @IsNotEmpty({ message: 'Email é um campo obrigatorio' })
  @IsEmail({}, { message: 'Envie um email válido' })
  email: string;

  @IsNotEmpty({ message: 'Senha é um campo obrigatorio' })
  @IsString({ message: 'Senha deve ser uma string' })
  password: string;
}
