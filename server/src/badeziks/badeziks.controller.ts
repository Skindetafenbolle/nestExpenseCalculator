import { Controller, Get, UseGuards } from '@nestjs/common';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as badeziksService from './badeziks.service';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';

@Controller('badeziks')
export class BadeziksController {
  constructor(
    private readonly badeziksService: badeziksService.BadeziksService,
  ) {}

  @Get()
  @UseGuards(JwtAuthGuard)
  findAll() {
    return 'Максим Климович';
  }
}
