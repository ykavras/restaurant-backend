import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Menus } from './entities/menus.entity';

@Injectable()
export class MenusService {
  constructor(
    @InjectRepository(Menus)
    private menusRepository: Repository<Menus>,
  ) {}

  findAll(): Promise<Menus[]> {
    return this.menusRepository.find();
  }

  findById(id: string): Promise<Menus> {
    return this.menusRepository.findOneBy({ id });
  }

  async create(menusRepository: Menus) {
    return this.menusRepository.save(menusRepository);
  }

  async update(id: string, menusRepository: Menus) {
    return this.menusRepository.update(id, menusRepository);
  }

  async delete(id: string) {
    return this.menusRepository.delete(id);
  }
}
