import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductsDto } from './dtos/products.dto';
import { Products } from './entities/products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  findAll(): Promise<Products[]> {
    return this.productsRepository.find({
      relations: ['category', 'brand', 'variants'],
    });
  }

  findById(id: string): Promise<Products> {
    return this.productsRepository.findOneBy({ id });
  }

  create(productsDto: ProductsDto) {
    return this.productsRepository.save(productsDto);
  }
}
