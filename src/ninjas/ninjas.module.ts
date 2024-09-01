import { Module } from '@nestjs/common';
import { NinjasController } from './ninjas.controller';
import { Ninjas } from './ninjas';
import { NinjasService } from './ninjas.service';

@Module({
  controllers: [NinjasController],
  providers: [Ninjas, NinjasService]
})
export class NinjasModule {}
