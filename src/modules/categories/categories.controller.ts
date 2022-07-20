import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Patch,
  Post,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { MenusService } from '../menus/menus.service';
import { CategoryService } from './categories.service';
import { CategoriesDto } from './dtos/categories.dto';
import { RESPONSE1 } from './entities/categories.entity';

@Controller('categories')
@UseInterceptors(ClassSerializerInterceptor)
export class CategoriesController {
  constructor(
    private categoryService: CategoryService,
    private menusService: MenusService,
  ) {}

  @Get('list')
  @SerializeOptions({ groups: [RESPONSE1] })
  async get() {
    try {
      return await this.categoryService.findAll();
    } catch (error) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
  }

  @Post('create')
  async create(@Body() categoriesDto: CategoriesDto) {
    if (categoriesDto.menuId) {
      const menu = await this.menusService.findById(categoriesDto.menuId);

      categoriesDto.menu = menu;
    }

    return await this.categoryService.create(categoriesDto);
  }

  @Patch('update/:id')
  async update(@Param('id') id: string, @Body() categoriesDto: CategoriesDto) {
    if (categoriesDto.menuId) {
      const menu = await this.menusService.findById(categoriesDto.menuId);

      categoriesDto.menu = menu;
    }

    return this.categoryService.update(id, categoriesDto);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.categoryService.delete(id);
  }
}
