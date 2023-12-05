import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRoleEnum {
  ADMIN = 'ADMIN',
  USER = 'USER',
  CLIENT = 'CLIENT',
}

@Entity('user')
export class User {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column({ type: 'enum', enum: ['ADMIN', 'USER', 'CLIENT'] })
  role: UserRoleEnum;
}
