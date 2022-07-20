import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BrandsDto } from './dtos/brands.dto';
import { Brands } from './entities/brands.entity';

@Injectable()
export class BrandsService {
  constructor(
    @InjectRepository(Brands)
    private brandsRepository: Repository<Brands>,
  ) {}

  findAll(): Promise<Brands[]> {
    return this.brandsRepository.find({
      relations: ['products'],
    });
  }

  findById(id: string): Promise<Brands> {
    return this.brandsRepository.findOneBy({ id });
  }

  async create(brandsDto: BrandsDto) {
    return this.brandsRepository.save(brandsDto);
  }

  async delete(id: string) {
    return this.brandsRepository.delete(id);
  }
}
