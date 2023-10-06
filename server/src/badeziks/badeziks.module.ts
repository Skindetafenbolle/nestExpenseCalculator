import { Module } from '@nestjs/common';
import { BadeziksService } from './badeziks.service';
import { BadeziksController } from './badeziks.controller';

@Module({
  controllers: [BadeziksController],
  providers: [BadeziksService],
})
export class BadeziksModule {}
