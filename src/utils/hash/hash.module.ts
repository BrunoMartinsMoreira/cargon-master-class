import { Module } from '@nestjs/common';
import { ArgonHashService } from './hash.service';

@Module({
  providers: [ArgonHashService],
  exports: [ArgonHashService],
})
export class HashModule {}
