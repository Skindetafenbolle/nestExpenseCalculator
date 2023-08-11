import { Category } from 'src/category/entities/category.entity';
import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categotyRepository: Repository<Category>,
  ) {}
  async create(createCategoryDto: CreateCategoryDto, id: number) {
    const isExist = await this.categotyRepository.findBy({
      user: { id },
      title: createCategoryDto.title,
    });

    if (isExist.length)
      throw new BadRequestException('This category already exist!');

    const newCategory = {
      title: createCategoryDto.title,
      user: {
        id,
      },
    };

    return this.categotyRepository.save(newCategory);
  }

  async findAll(id: number) {
    return await this.categotyRepository.find({
      where: {
        user: { id },
      },
      relations: {
        transactions: true,
      },
    });
  }

  async findOne(id: number) {
    const category = await this.categotyRepository.findOne({
      where: {
        id,
      },
      relations: {
        user: true,
        transactions: true,
      },
    });

    if (!category) throw new NotFoundException('Category not found');
    return category;
  }

  async update(id: number, updateCategoryDto: UpdateCategoryDto) {
    const category = await this.categotyRepository.findOne({
      where: {
        id,
      },
    });

    if (!category) throw new NotFoundException('Category not found!');
    return await this.categotyRepository.update(id, updateCategoryDto);
  }

  async remove(id: number) {
    const category = await this.categotyRepository.findOne({
      where: {
        id,
      },
    });

    if (!category) throw new NotFoundException('Category not found!');

    return await this.categotyRepository.delete(id);
  }
}
