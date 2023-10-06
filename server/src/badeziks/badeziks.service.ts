import { Injectable } from '@nestjs/common';
import { CreateBadezikDto } from './dto/create-badezik.dto';
import { UpdateBadezikDto } from './dto/update-badezik.dto';

@Injectable()
export class BadeziksService {
  // create(createBadezikDto: CreateBadezikDto) {
  //   return 'This action adds a new badezik';
  // }

  findAll() {
    return `This action returns all badeziks`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} badezik`;
  // }

  // update(id: number, updateBadezikDto: UpdateBadezikDto) {
  //   return `This action updates a #${id} badezik`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} badezik`;
  // }
}
