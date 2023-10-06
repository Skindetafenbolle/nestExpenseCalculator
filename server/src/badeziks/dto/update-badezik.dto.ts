import { PartialType } from '@nestjs/mapped-types';
import { CreateBadezikDto } from './create-badezik.dto';

export class UpdateBadezikDto extends PartialType(CreateBadezikDto) {}
