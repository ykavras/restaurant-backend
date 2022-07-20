import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CategoriesDto } from './dtos/categories.dto';
import { Categories } from './entities/categories.entity';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  findAll(): Promise<Categories[]> {
    return this.categoriesRepository.find({ relations: ['menu'] });
  }

  findById(id: string): Promise<Categories> {
    return this.categoriesRepository.findOneBy({ id });
  }

  async create(categoriesDto: CategoriesDto) {
    return this.categoriesRepository.save(categoriesDto);
  }

  async update(id: string, categoriesDto: CategoriesDto) {
    return this.categoriesRepository.update(id, categoriesDto);
  }

  async delete(id: string) {
    return this.categoriesRepository.delete(id);
  }
}
