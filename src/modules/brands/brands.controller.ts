import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  Post,
} from '@nestjs/common';
import { BrandsService } from './brands.service';
import { BrandsDto } from './dtos/brands.dto';

@Controller('brands')
export class BrandsController {
  constructor(private brandsService: BrandsService) {}

  @Get('list')
  async get() {
    try {
      return await this.brandsService.findAll();
    } catch (error) {
      throw new HttpException('NOT FOUND', HttpStatus.NOT_FOUND);
    }
  }

  @Post('create')
  async create(@Body() brandsDto: BrandsDto) {
    return await this.brandsService.create(brandsDto);
  }

  @Get('detail/:id')
  async detail(@Param('id') id: string) {
    return await this.brandsService.findById(id);
  }

  @Delete('delete/:id')
  delete(@Param('id') id: string) {
    return this.brandsService.delete(id);
  }
}
