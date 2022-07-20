import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { VariantsDto } from './dtos/variants.dto';
import { Variants } from './entities/variants.entity';

@Injectable()
export class VariantsService {
  constructor(
    @InjectRepository(Variants)
    private variantsRepository: Repository<Variants>,
  ) {}

  findAll(): Promise<Variants[]> {
    return this.variantsRepository.find({
      relations: ['product'],
    });
  }

  async create(variantsDto: VariantsDto) {
    return this.variantsRepository.save(variantsDto);
  }

  async delete(id: string) {
    return this.variantsRepository.delete(id);
  }
}
