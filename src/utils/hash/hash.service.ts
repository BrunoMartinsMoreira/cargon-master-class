import { Injectable } from '@nestjs/common';
import { ICompare, IHashService } from './IHashService';
import * as argon2 from 'argon2';

@Injectable()
export class ArgonHashService implements IHashService {
  async hash(target: string) {
    return argon2.hash(target);
  }
  async compare({ hashTarget, target }: ICompare): Promise<boolean> {
    return argon2.verify(hashTarget, target);
  }
}
